"use server";

import { z } from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

const RegisterSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function registerAction(prevState: any, formData: FormData) {
  try {
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const validatedData = RegisterSchema.parse(data);

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email },
    });

    if (existingUser) {
      return { error: "User with this email already exists" };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 10);

    // Create user
    await prisma.user.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        password: hashedPassword,
      },
    });

    return { success: "Account created successfully! You can now log in." };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { error: error.issues[0].message };
    }
    return { error: "Something went wrong" };
  }
}

export async function loginAction(prevState: any, formData: FormData) {
  try {
    await signIn("credentials", formData);
    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }
}

// Ensure the schema string matches the Prisma enum exactly
const SubmitSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  url: z.string().url("Must be a valid URL"),
  githubUrl: z.string().url("Must be a valid GitHub URL").optional().or(z.literal("")),
  categoryId: z.string().min(1, "Category is required"),
  pricing: z.enum(["FREE", "FREEMIUM", "PAID", "OPEN_SOURCE"]),
  description: z.string().min(10, "Description must be at least 10 characters"),
  submitterId: z.string().min(1, "Not authenticated"),
});

function generateSlug(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function submitResourceAction(prevState: any, formData: FormData) {
  try {
    const rawData = {
      title: formData.get("title") as string,
      url: formData.get("url") as string,
      githubUrl: formData.get("githubUrl") as string,
      categoryId: formData.get("categoryId") as string,
      pricing: formData.get("pricing") as "FREE" | "FREEMIUM" | "PAID" | "OPEN_SOURCE",
      description: formData.get("description") as string,
      submitterId: formData.get("submitterId") as string,
    };

    const validatedData = SubmitSchema.parse(rawData);

    // Create unique slug
    let baseSlug = generateSlug(validatedData.title);
    let uniqueSlug = baseSlug;
    let counter = 1;

    // Check availability
    while (await prisma.resource.findUnique({ where: { slug: uniqueSlug } })) {
      uniqueSlug = `${baseSlug}-${counter}`;
      counter++;
    }

    await prisma.resource.create({
      data: {
        title: validatedData.title,
        slug: uniqueSlug,
        url: validatedData.url,
        githubUrl: validatedData.githubUrl || null,
        categoryId: validatedData.categoryId,
        pricing: validatedData.pricing,
        description: validatedData.description,
        submitterId: validatedData.submitterId,
        status: "PENDING", // Require review
      },
    });

    return { success: "Resource submitted successfully! It will be reviewed shortly." };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { error: error.issues[0].message };
    }
    console.error("Submit Error:", error);
    return { error: "Failed to submit resource. Please try again." };
  }
}
