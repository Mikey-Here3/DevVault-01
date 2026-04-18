"use client";

import Link from "next/link";
import { useActionState } from "react";
import { Button } from "@/components/ui/Button";
import { registerAction } from "@/lib/actions";

export default function RegisterPage() {
  const [state, action, isPending] = useActionState(registerAction, null);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-surface-low p-8 rounded-3xl ghost-border">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-on-surface">Create an account</h2>
          <p className="mt-2 text-sm text-on-surface-variant">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:text-primary-light transition-colors">
              Log in
            </Link>
          </p>
        </div>
        
        <form className="mt-8 space-y-6" action={action}>
          {state?.error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-sm text-center">
              {state.error}
            </div>
          )}
          {state?.success && (
            <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-500 rounded-xl text-sm text-center">
              {state.success}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-2">Name</label>
              <input 
                id="name" 
                name="name" 
                type="text" 
                required 
                className="w-full px-4 py-3 bg-surface-container border border-outline-variant/15 rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all" 
                placeholder="Alex Chen" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-2">Email address</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                autoComplete="email" 
                required 
                className="w-full px-4 py-3 bg-surface-container border border-outline-variant/15 rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all" 
                placeholder="you@example.com" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-2">Password</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                required 
                className="w-full px-4 py-3 bg-surface-container border border-outline-variant/15 rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all" 
                placeholder="••••••••" 
              />
            </div>
          </div>

          <Button type="submit" fullWidth size="lg" disabled={isPending}>
            {isPending ? "Creating Account..." : "Create Account"}
          </Button>
        </form>
      </div>
    </div>
  );
}
