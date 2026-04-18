"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, ChevronDown, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useSession, signOut } from "next-auth/react";

const navLinks = [
  { label: "Explore", href: "/explore" },
  { label: "Blog", href: "/blog" },
  { label: "Collections", href: "/collections" },
  { label: "Pricing", href: "/pricing" },
];

export function TopNavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data: session, status } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant/10 bg-surface-dim/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="text-lg font-bold text-on-surface">
              Dev<span className="gradient-text">Vault</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm text-on-surface-variant hover:text-on-surface rounded-xl hover:bg-surface-high transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className="p-2 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-high transition-all"
              aria-label="Search"
            >
              <Search className="w-4.5 h-4.5" />
            </button>
            
            {status === "loading" ? (
              <div className="w-20 h-8 rounded-lg bg-surface-high animate-pulse" />
            ) : session?.user ? (
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl text-sm font-medium hover:bg-surface-high border border-transparent hover:border-outline-variant/20 transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-xs">
                    {session.user.name?.[0]?.toUpperCase() || "U"}
                  </div>
                  <span className="text-on-surface">{session.user.name?.split(' ')[0]}</span>
                  <ChevronDown className="w-4 h-4 text-on-surface-variant" />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 py-1 bg-surface-low border border-outline-variant/15 shadow-xl rounded-xl shadow-black/40 overflow-hidden">
                    <Link 
                      href={`/user/${session.user.name?.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-4 py-2 flex items-center gap-2 text-sm text-on-surface hover:bg-surface-high hover:text-primary transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <User className="w-4 h-4" /> Profile
                    </Link>
                    <button 
                      onClick={() => signOut()}
                      className="w-full text-left px-4 py-2 flex items-center gap-2 text-sm text-red-400 hover:bg-red-400/10 transition-colors"
                    >
                      <LogOut className="w-4 h-4" /> Log out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    Log in
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm">Get Started</Button>
                </Link>
              </>
            )}
            
            {/* Submit Button */}
            {session?.user && (
              <Link href="/submit">
                <Button size="sm" className="ml-2">Submit</Button>
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-xl text-on-surface-variant hover:bg-surface-high transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-surface-dim/95 backdrop-blur-xl animate-fade-in">
          <nav className="flex flex-col p-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-base text-on-surface-variant hover:text-on-surface rounded-xl hover:bg-surface-high transition-all"
              >
                {link.label}
              </Link>
            ))}
            
            <div className="border-t border-outline-variant/10 mt-4 pt-4 flex flex-col gap-3">
              {session?.user ? (
                <>
                  <div className="flex items-center gap-3 px-4 py-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold">
                      {session.user.name?.[0]?.toUpperCase() || "U"}
                    </div>
                    <div>
                      <div className="text-on-surface font-medium">{session.user.name}</div>
                      <div className="text-on-surface-variant text-xs">{session.user.email}</div>
                    </div>
                  </div>
                  <Link href="/submit" onClick={() => setMobileOpen(false)}>
                    <Button variant="secondary" fullWidth className="border-primary/30 text-primary hover:bg-primary/10">
                      Submit Resource
                    </Button>
                  </Link>
                  <button 
                    onClick={() => { signOut(); setMobileOpen(false); }}
                    className="w-full"
                  >
                    <Button variant="ghost" fullWidth className="text-red-400 hover:text-red-300 hover:bg-red-400/10">
                      Log out
                    </Button>
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={() => setMobileOpen(false)}>
                    <Button variant="secondary" fullWidth>
                      Log in
                    </Button>
                  </Link>
                  <Link href="/register" onClick={() => setMobileOpen(false)}>
                    <Button fullWidth>Get Started</Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
