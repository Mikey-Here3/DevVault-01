import type { Metadata } from "next";
import { Heart, Target, Shield, Zap, Users, Globe, Code2, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "DevVault is a curated hub helping developers discover, save, and share the best resources.",
};

const values = [
  { icon: Target, title: "Curated Quality", description: "Every resource is manually reviewed before being listed. No spam, no noise." },
  { icon: Shield, title: "Community First", description: "Built by developers, for developers. Open, transparent, and community-driven." },
  { icon: Zap, title: "Speed Matters", description: "Find what you need in seconds, not hours. Our search is fast and relevant." },
  { icon: Heart, title: "Free to Start", description: "Core features are always free. Pro is there when you need more power." },
];

const team = [
  { name: "Alex Chen", role: "Founder & CEO", avatar: "AC" },
  { name: "Sarah Kim", role: "Head of Product", avatar: "SK" },
  { name: "Marcus Johnson", role: "Lead Engineer", avatar: "MJ" },
  { name: "Elena Rodriguez", role: "Community Lead", avatar: "ER" },
];

const milestones = [
  { year: "2024", title: "Idea Born", description: "Frustrated by scattered dev resources, we started curating." },
  { year: "2025", title: "Beta Launch", description: "Launched with 500 resources to 1,000 early adopters." },
  { year: "2026", title: "Full Launch", description: "8,000+ resources, AI search, and 12,000+ developers." },
];

export default function AboutPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-on-surface mb-6">
            Building the{" "}
            <span className="gradient-text">developer resource hub</span>{" "}
            we always wanted
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            DevVault was born from a simple frustration: finding the right tool
            or snippet shouldn&apos;t take hours of Googling. We&apos;re building the
            definitive discovery platform for developers.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "8K+", label: "Resources" },
            { value: "12K+", label: "Developers" },
            { value: "4.8", label: "Avg Rating" },
            { value: "150+", label: "Countries" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-surface-low rounded-2xl ghost-border">
              <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-on-surface-variant">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-on-surface text-center mb-10">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-surface-low rounded-2xl p-6 ghost-border flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-primary/10 shrink-0">
                <v.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-on-surface mb-1">{v.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-on-surface text-center mb-10">Our Journey</h2>
        <div className="relative border-l-2 border-primary/20 pl-8 space-y-10">
          {milestones.map((m) => (
            <div key={m.year} className="relative">
              <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-primary border-4 border-surface-dim" />
              <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{m.year}</span>
              <h3 className="text-lg font-semibold text-on-surface mt-2 mb-1">{m.title}</h3>
              <p className="text-sm text-on-surface-variant">{m.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-on-surface text-center mb-10">Meet the Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="text-center bg-surface-low rounded-2xl p-6 ghost-border">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">{member.avatar}</span>
              </div>
              <h3 className="font-semibold text-on-surface text-sm">{member.name}</h3>
              <p className="text-xs text-on-surface-variant mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
