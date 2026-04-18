import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, Sparkles, Zap, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Choose the plan that fits your needs. Free, Pro, and Team plans available.",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For individual developers getting started.",
    icon: Sparkles,
    cta: "Get Started",
    ctaVariant: "secondary" as const,
    features: [
      { label: "Browse all resources", included: true },
      { label: "Save up to 50 bookmarks", included: true },
      { label: "Basic search", included: true },
      { label: "Community access", included: true },
      { label: "3 collections", included: true },
      { label: "AI search", included: false },
      { label: "API access", included: false },
      { label: "Priority support", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "For power users who need more tools.",
    icon: Zap,
    cta: "Start Pro Trial",
    ctaVariant: "primary" as const,
    popular: true,
    features: [
      { label: "Everything in Free", included: true },
      { label: "Unlimited bookmarks", included: true },
      { label: "AI-powered search", included: true },
      { label: "Unlimited collections", included: true },
      { label: "API access (10K req/mo)", included: true },
      { label: "Advanced filters", included: true },
      { label: "Export bookmarks", included: true },
      { label: "Priority support", included: false },
    ],
  },
  {
    name: "Team",
    price: "$29",
    period: "/month",
    description: "For teams building together.",
    icon: Building2,
    cta: "Contact Sales",
    ctaVariant: "secondary" as const,
    features: [
      { label: "Everything in Pro", included: true },
      { label: "5 team members", included: true },
      { label: "Shared collections", included: true },
      { label: "Team analytics", included: true },
      { label: "API access (100K req/mo)", included: true },
      { label: "Custom integrations", included: true },
      { label: "Priority support", included: true },
      { label: "Dedicated account manager", included: true },
    ],
  },
];

const faqs = [
  { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle." },
  { q: "Is there a free trial for Pro?", a: "Yes! Pro comes with a 14-day free trial. No credit card required." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and bank transfers for Team plans." },
  { q: "Can I cancel anytime?", a: "Absolutely. No contracts, no hidden fees. Cancel anytime from your settings." },
];

export default function PricingPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-on-surface mb-4">
          Simple, transparent{" "}
          <span className="gradient-text">pricing</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-xl mx-auto">
          Start free, upgrade when you need more. No hidden fees, cancel
          anytime.
        </p>
      </section>

      {/* Plans */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-surface-low rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "ring-2 ring-primary shadow-lg shadow-primary/10 scale-[1.02]"
                  : "ghost-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary text-on-primary text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <plan.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-on-surface mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-on-surface-variant">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-on-surface">
                  {plan.price}
                </span>
                <span className="text-on-surface-variant ml-1">
                  {plan.period}
                </span>
              </div>

              <Button
                variant={plan.ctaVariant}
                fullWidth
                size="lg"
                className="mb-8"
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-4 h-4 text-outline shrink-0 mt-0.5" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? "text-on-surface"
                          : "text-outline"
                      }`}
                    >
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-2xl font-bold text-on-surface text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group bg-surface-low rounded-2xl ghost-border"
            >
              <summary className="flex items-center justify-between cursor-pointer p-5 text-on-surface font-medium list-none">
                {faq.q}
                <span className="text-on-surface-variant group-open:rotate-45 transition-transform text-xl">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 text-sm text-on-surface-variant leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
