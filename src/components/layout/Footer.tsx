import Link from "next/link";
import { Globe, AtSign, Link2, Mail } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Explore", href: "/explore" },
    { label: "Collections", href: "/collections" },
    { label: "AI Search", href: "/ai-search" },
    { label: "Pricing", href: "/pricing" },
    { label: "Changelog", href: "/changelog" },
  ],
  Resources: [
    { label: "Icons", href: "/ai-tools" },
    { label: "Snippets", href: "/tag/snippets" },
    { label: "AI Tools", href: "/ai-tools" },
    { label: "ChatGPT Prompts", href: "/tag/chatgpt" },
    { label: "Blog", href: "/blog" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Newsletter", href: "/newsletter" },
    { label: "API Docs", href: "/docs/api" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/privacy-policy" },
    { label: "Cookie Policy", href: "/privacy-policy" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "https://github.com", label: "GitHub" },
  { icon: AtSign, href: "https://twitter.com", label: "Twitter" },
  { icon: Link2, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@devvault.dev", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-outline-variant/10 bg-surface-container-lowest mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 mb-12 border-b border-outline-variant/10">
          <div>
            <h3 className="text-lg font-semibold text-on-surface mb-1">
              Stay in the loop
            </h3>
            <p className="text-sm text-on-surface-variant">
              Get the best developer resources delivered weekly.
            </p>
          </div>
          <form className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 md:w-64 px-4 py-2.5 bg-surface-container-low border border-outline-variant/15 rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-on-primary text-sm font-medium rounded-xl hover:from-[#6d28d9] hover:to-[#0455b8] transition-all shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-semibold text-on-surface mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-outline-variant/10">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-xs">D</span>
            </div>
            <span className="text-sm text-on-surface-variant">
              © {new Date().getFullYear()} DevVault. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-high transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
