import type { Metadata } from "next";
import { Mail, MessageSquare, MapPin, Clock, Globe, AtSign } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the DevVault team. We'd love to hear from you.",
};

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@devvault.dev", href: "mailto:hello@devvault.dev" },
  { icon: MessageSquare, label: "Discord", value: "discord.gg/devvault", href: "#" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours", href: "#" },
];

export default function ContactPage() {
  return (
    <div className="pb-20 md:pb-0">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-on-surface mb-4">
            Get in <span className="gradient-text">touch</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl mx-auto">
            Have a question, feedback, or partnership inquiry? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Form */}
          <div className="md:col-span-3 bg-surface-low rounded-2xl p-8 ghost-border">
            <h2 className="text-lg font-semibold text-on-surface mb-6">Send a message</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-2">First Name</label>
                  <input type="text" placeholder="John" className="w-full px-4 py-3 bg-surface-container border border-outline-variant/15 rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-2">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full px-4 py-3 bg-surface-container border border-outline-variant/15 rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 bg-surface-container border border-outline-variant/15 rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-surface-container border border-outline-variant/15 rounded-xl text-sm text-on-surface focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all">
                  <option>General Inquiry</option>
                  <option>Bug Report</option>
                  <option>Feature Request</option>
                  <option>Partnership</option>
                  <option>Billing</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">Message</label>
                <textarea rows={5} placeholder="Tell us how we can help..." className="w-full px-4 py-3 bg-surface-container border border-outline-variant/15 rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all resize-none" />
              </div>
              <Button size="lg" fullWidth>
                Send Message
              </Button>
            </form>
          </div>

          {/* Info Cards */}
          <div className="md:col-span-2 space-y-4">
            {contactInfo.map((info) => (
              <a key={info.label} href={info.href} className="block bg-surface-low rounded-2xl p-5 ghost-border transition-all card-glow">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-primary/10">
                    <info.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-on-surface">{info.label}</h3>
                    <p className="text-sm text-on-surface-variant">{info.value}</p>
                  </div>
                </div>
              </a>
            ))}

            <div className="bg-surface-low rounded-2xl p-5 ghost-border">
              <h3 className="text-sm font-semibold text-on-surface mb-3">Follow Us</h3>
              <div className="flex gap-2">
                <a href="#" className="p-2.5 rounded-xl bg-surface-high hover:bg-surface-highest text-on-surface-variant hover:text-on-surface transition-all">
                  <Globe className="w-4 h-4" />
                </a>
                <a href="#" className="p-2.5 rounded-xl bg-surface-high hover:bg-surface-highest text-on-surface-variant hover:text-on-surface transition-all">
                  <AtSign className="w-4 h-4" />
                </a>
                <a href="#" className="p-2.5 rounded-xl bg-surface-high hover:bg-surface-highest text-on-surface-variant hover:text-on-surface transition-all">
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
