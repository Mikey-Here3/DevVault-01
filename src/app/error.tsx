"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error("Global boundary caught error:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 text-center">
      <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
        <AlertTriangle className="w-10 h-10 text-red-500" />
      </div>
      
      <h1 className="text-3xl sm:text-4xl font-bold text-on-surface mb-4">
        Something went wrong!
      </h1>
      <p className="text-on-surface-variant max-w-md mx-auto mb-10">
        We encountered an unexpected issue while loading this page. 
        Please try refreshing, or return to the explore page to continue browsing.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={reset} size="lg" className="w-full sm:w-auto">
          <RefreshCcw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
        <Link href="/">
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
