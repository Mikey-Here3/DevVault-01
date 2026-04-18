import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { SubmitForm } from "./SubmitForm";
import { prisma } from "@/lib/db";

export const metadata = {
  title: "Submit Resource",
  description: "Share a developer resource with the DevVault community.",
};

export default async function SubmitPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  // Fetch categories for the form dropdown
  const categories = await prisma.category.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <div className="min-h-screen bg-surface-dim pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-on-surface">Submit a Resource</h1>
          <p className="mt-2 text-on-surface-variant">
            Share an awesome tool, icon set, or code snippet with other developers.
          </p>
        </div>

        <div className="bg-surface-low border border-outline-variant/10 rounded-3xl p-6 sm:p-10 shadow-xl">
          <SubmitForm categories={categories} userId={session.user.id} />
        </div>
      </div>
    </div>
  );
}
