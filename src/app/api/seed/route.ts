import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    console.log('Clearing old data...')
    await prisma.resource.deleteMany()
    await prisma.category.deleteMany()
    await prisma.user.deleteMany()
  
    console.log('Seeding categories...')
    const categories = await Promise.all([
      prisma.category.create({
        data: { name: 'Icons', slug: 'icons', description: 'Curated icon sets for modern UIs', icon: '🎨' }
      }),
      prisma.category.create({
        data: { name: 'Snippets', slug: 'snippets', description: 'Copy-paste code blocks', icon: '💻' }
      }),
      prisma.category.create({
        data: { name: 'AI Tools', slug: 'ai-tools', description: 'Next-gen tools for developers', icon: '🤖' }
      }),
      prisma.category.create({
        data: { name: 'Prompts', slug: 'prompts', description: 'ChatGPT and Claude prompts', icon: '💬' }
      }),
    ])
  
    console.log('Seeding user...')
    const admin = await prisma.user.create({
      data: {
        name: 'System Admin',
        email: 'admin@devvault.dev',
        role: 'ADMIN',
      }
    })
  
    console.log('Seeding resources...')
    const resources = [
      {
        title: 'Lucide Icons',
        slug: 'lucide-icons',
        description: 'Beautiful & consistent icons. A community-maintained fork of Feather Icons.',
        url: 'https://lucide.dev',
        categoryId: categories[0].id,
        submitterId: admin.id,
        rating: 4.9,
        views: 1200,
      },
      {
        title: 'Vercel AI SDK',
        slug: 'vercel-ai-sdk',
        description: 'The Vercel AI SDK is a library for building AI-powered streaming text and chat UIs.',
        url: 'https://sdk.vercel.ai',
        categoryId: categories[2].id,
        submitterId: admin.id,
        rating: 4.8,
        views: 3100,
      },
      {
        title: 'CSS Glassmorphism Generator',
        slug: 'css-glassmorphism',
        description: 'Generate CSS for the popular glassmorphism design trend with this simple UI.',
        url: 'https://glassmorphism.com',
        categoryId: categories[1].id,
        submitterId: admin.id,
        rating: 4.5,
        views: 850,
      }
    ]
  
    for (const resource of resources) {
      await prisma.resource.create({ data: resource })
    }

    return NextResponse.json({ success: true, message: 'Database seeded successfully' });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
