"use client";

import Link from "next/link";
import { useActionState } from "react";
import { Button } from "@/components/ui/Button";
import { loginAction } from "@/lib/actions";

export default function LoginPage() {
  const [state, action, isPending] = useActionState(loginAction, null);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-surface-low p-8 rounded-3xl ghost-border">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-on-surface">Welcome back</h2>
          <p className="mt-2 text-sm text-on-surface-variant">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-primary hover:text-primary-light transition-colors">
              Sign up
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
              Successfully logged in! Redirecting...
            </div>
          )}

          <div className="space-y-4">
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
                autoComplete="current-password" 
                required 
                className="w-full px-4 py-3 bg-surface-container border border-outline-variant/15 rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all" 
                placeholder="••••••••" 
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-outline-variant/30 text-primary focus:ring-primary/50 bg-surface-container" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-on-surface-variant">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-primary hover:text-primary-light transition-colors">
                Forgot password?
              </a>
            </div>
          </div>

          <Button type="submit" fullWidth size="lg" disabled={isPending}>
            {isPending ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}
