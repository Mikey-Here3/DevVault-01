import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms",
  description: "Read DevVault's privacy policy and terms of service.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pb-20 md:pb-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-on-surface mb-3">
          Privacy Policy & Terms
        </h1>
        <p className="text-on-surface-variant mb-10">
          Last updated: April 18, 2026
        </p>

        {/* Table of Contents */}
        <nav className="bg-surface-low rounded-2xl p-6 ghost-border mb-12">
          <h2 className="text-sm font-semibold text-on-surface mb-3">
            On this page
          </h2>
          <ul className="space-y-2">
            {[
              "Privacy Policy",
              "Information We Collect",
              "How We Use Your Data",
              "Data Sharing",
              "Your Rights",
              "Terms of Service",
              "User Accounts",
              "Acceptable Use",
              "Intellectual Property",
              "Contact",
            ].map((item, i) => (
              <li key={item}>
                <a
                  href={`#section-${i}`}
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-12">
          {/* Privacy Policy */}
          <section id="section-0">
            <h2 className="text-2xl font-bold text-on-surface mb-4 pb-3 border-b border-outline-variant/10">
              Privacy Policy
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              At DevVault, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information when you use our platform.
            </p>
          </section>

          <section id="section-1">
            <h3 className="text-xl font-semibold text-on-surface mb-3">
              Information We Collect
            </h3>
            <ul className="space-y-2 text-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-on-surface">Account Information:</strong> Name, email address, and profile data you provide during registration.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-on-surface">Usage Data:</strong> Information about how you interact with DevVault, including pages visited and resources saved.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-on-surface">Device Information:</strong> Browser type, operating system, and device identifiers.</span>
              </li>
            </ul>
          </section>

          <section id="section-2">
            <h3 className="text-xl font-semibold text-on-surface mb-3">
              How We Use Your Data
            </h3>
            <p className="text-on-surface-variant leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 text-on-surface-variant">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Provide and improve our services</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Personalize your experience and recommendations</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Send you updates and marketing communications (with your consent)</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Analyze usage patterns to improve the platform</span></li>
            </ul>
          </section>

          <section id="section-3">
            <h3 className="text-xl font-semibold text-on-surface mb-3">Data Sharing</h3>
            <p className="text-on-surface-variant leading-relaxed">
              We do not sell your personal data. We may share anonymized, aggregated data with our partners for analytics purposes. We use industry-standard encryption and security measures to protect your data.
            </p>
          </section>

          <section id="section-4">
            <h3 className="text-xl font-semibold text-on-surface mb-3">Your Rights</h3>
            <p className="text-on-surface-variant leading-relaxed">
              You have the right to access, modify, or delete your personal data at any time. Contact us at privacy@devvault.dev to exercise these rights.
            </p>
          </section>

          {/* Terms */}
          <section id="section-5">
            <h2 className="text-2xl font-bold text-on-surface mb-4 pb-3 border-b border-outline-variant/10">
              Terms of Service
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              By using DevVault, you agree to these terms. Please read them carefully.
            </p>
          </section>

          <section id="section-6">
            <h3 className="text-xl font-semibold text-on-surface mb-3">User Accounts</h3>
            <p className="text-on-surface-variant leading-relaxed">
              You are responsible for maintaining the security of your account. You must not share your credentials or allow unauthorized access. DevVault reserves the right to suspend accounts that violate these terms.
            </p>
          </section>

          <section id="section-7">
            <h3 className="text-xl font-semibold text-on-surface mb-3">Acceptable Use</h3>
            <p className="text-on-surface-variant leading-relaxed mb-3">
              You agree not to:
            </p>
            <ul className="space-y-2 text-on-surface-variant">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Submit spam, malicious content, or misleading resources</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Attempt to gain unauthorized access to the platform</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Scrape or crawl the platform without permission</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Violate any applicable laws or regulations</span></li>
            </ul>
          </section>

          <section id="section-8">
            <h3 className="text-xl font-semibold text-on-surface mb-3">Intellectual Property</h3>
            <p className="text-on-surface-variant leading-relaxed">
              All content on DevVault, including but not limited to text, graphics, logos, and software, is the property of DevVault or its content suppliers. User-submitted resources remain the intellectual property of their respective owners.
            </p>
          </section>

          <section id="section-9">
            <h3 className="text-xl font-semibold text-on-surface mb-3">Contact</h3>
            <p className="text-on-surface-variant leading-relaxed">
              For any questions about these policies, contact us at{" "}
              <a href="mailto:legal@devvault.dev" className="text-primary hover:text-primary-light transition-colors">
                legal@devvault.dev
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
