"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/Button";
import { submitResourceAction } from "@/lib/actions";

interface Category {
  id: string;
  name: string;
}

export function SubmitForm({ categories, userId }: { categories: Category[], userId: string }) {
  const [state, action, isPending] = useActionState(submitResourceAction, null);

  return (
    <form action={action} className="space-y-6">
      <input type="hidden" name="submitterId" value={userId} />

      {state?.error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-sm">
          {state.error}
        </div>
      )}

      {state?.success && (
        <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-xl text-sm">
          {state.success}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-on-surface-variant mb-2">Resource Title *</label>
          <input 
            name="title" 
            type="text" 
            required 
            className="w-full px-4 py-3 bg-surface-container border border-outline-variant/15 rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all" 
            placeholder="e.g. Supabase, Shadcn UI, Next.js" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-on-surface-variant mb-2">Primary URL *</label>
          <input 
            name="url" 
            type="url" 
            required 
            className="w-full px-4 py-3 bg-surface-container border border-outline-variant/15 rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all" 
            placeholder="https://..." 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-on-surface-variant mb-2">GitHub URL (Optional)</label>
          <input 
            name="githubUrl" 
            type="url" 
            className="w-full px-4 py-3 bg-surface-container border border-outline-variant/15 rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all" 
            placeholder="https://github.com/..." 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-on-surface-variant mb-2">Category *</label>
          <div className="relative">
            <select 
              name="categoryId" 
              required
              className="appearance-none w-full px-4 py-3 bg-surface-container border border-outline-variant/15 rounded-xl text-sm text-on-surface focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all"
            >
              <option value="" disabled selected>Select a category</option>
              {categories.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
              <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-on-surface-variant mb-2">Pricing Model</label>
          <div className="relative">
            <select 
              name="pricing" 
              className="appearance-none w-full px-4 py-3 bg-surface-container border border-outline-variant/15 rounded-xl text-sm text-on-surface focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all"
              defaultValue="FREE"
            >
              <option value="FREE">Free</option>
              <option value="FREEMIUM">Freemium</option>
              <option value="PAID">Paid</option>
              <option value="OPEN_SOURCE">Open Source</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
              <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-on-surface-variant mb-2">Description *</label>
          <textarea 
            name="description" 
            required 
            rows={4}
            className="w-full px-4 py-3 bg-surface-container border border-outline-variant/15 rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all resize-y" 
            placeholder="What makes this resource great? How does it help developers?" 
          />
        </div>
      </div>

      <div className="pt-4">
        <Button type="submit" size="lg" disabled={isPending}>
          {isPending ? "Submitting..." : "Submit Resource"}
        </Button>
      </div>
    </form>
  );
}
