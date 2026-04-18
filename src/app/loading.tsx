import { Loader2 } from "lucide-react";

export default function GlobalLoading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <div className="relative">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
        <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full animate-pulse" />
      </div>
      <p className="mt-4 text-sm text-on-surface-variant font-medium animate-pulse">
        Loading DevVault...
      </p>
    </div>
  );
}
