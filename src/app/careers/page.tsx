"use client";

import { Button } from "../../components/ui/button";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Check } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CareersPage() {
  const [isRoleViewed, setIsRoleViewed] = useState(false);
  const router = useRouter();

  // Navigation handlers
  const onJoinWaitlist = () => {
    // Scroll to footer or something? For now just home
    router.push("/");
  };
  const onHome = () => router.push("/");
  const onPricing = () => router.push("/pricing");
  const onPodcast = () => {}; // Placeholder
  const onReferral = () => {}; // Placeholder
  const onCareers = () => router.push("/careers");

  return (
    <div className="min-h-screen bg-white">
      {/* <Header
        onLogoClick={onHome}
        // The current Header component doesn't take these props yet,
        // but we'll include them if the Header is updated to support them.
        onJoinWaitlist={onJoinWaitlist}
        onHome={onHome}
        onPricing={onPricing}
        onPodcast={onPodcast}
        onReferral={onReferral}
        onCareers={onCareers}
        currentPage="careers"
      /> */}

      {/* Hero Section */}
      <section className="px-6 pt-48 pb-32 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl text-gray-900 tracking-tight">
              Help us rewrite how the world{" "}
              <span className="italic font-serif">experiences</span> software.
            </h1>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                className="bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full px-6 py-3 border border-gray-300"
                onClick={() => setIsRoleViewed(true)}
              >
                View open roles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left Column - Headline */}
          <div>
            <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight">
              We're building the intelligence layer of creation
            </h2>
          </div>

          {/* Right Column - Body Copy */}
          <div className="space-y-6 text-gray-600">
            <p>
              Overbase is where product, design, and infrastructure converge.
              We're creating the layer that helps the greatest teams understand
              how their product really works and how to make it better.
            </p>

            <p>
              Software runs the world. When it breaks, civilization stutters.
              We're building the immune system for the computer age – and we
              need architects of the impossible to help us build it.
            </p>

            <p>It's demanding work.</p>

            <p>
              You'll think deeply, ship fast, and sweat the details that most
              people miss. But you'll have freedom, ownership, and the chance to
              shape something that could redefine how software is built.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-24 max-w-7xl mx-auto bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pro Plan */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl text-gray-900 mb-2">Pro</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl text-gray-900">$25</span>
                    <span className="text-sm text-gray-500">per month</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative inline-flex items-center">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-900 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </div>
                  <span className="text-sm text-gray-900">Billed yearly</span>
                  <span className="text-xs text-gray-500">Save 17%</span>
                </div>

                <p className="text-sm text-gray-600">
                  For small teams or creators needing advanced link features
                </p>

                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-md py-2">
                  Get started
                </Button>

                <ul className="space-y-3 pt-4">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>50K tracked clicks/mo</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>1K new links/mo</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>1-year analytics retention</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Advanced link features</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Free .link domain</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Link folders</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Deep links</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Business Plan - Popular */}
            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-orange-900 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide">
                  Popular
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl text-gray-900 mb-2">Business</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl text-gray-900">$75</span>
                    <span className="text-sm text-gray-500">per month</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative inline-flex items-center">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-900 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </div>
                  <span className="text-sm text-gray-900">Billed yearly</span>
                  <span className="text-xs text-gray-500">Save 17%</span>
                </div>

                <p className="text-sm text-gray-600">
                  For fast-growing startups and businesses looking to scale
                </p>

                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-md py-2">
                  Get started
                </Button>

                <ul className="space-y-3 pt-4">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>250K tracked clicks/mo</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>10K new links/mo</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>3-year analytics retention</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Conversion tracking</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>A/B testing</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Customer insights</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Event webhooks</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-orange-200">
                  <p className="text-xs text-purple-600 flex items-center gap-1">
                    <span className="text-purple-600">✦</span> Includes Dub
                    Partners
                  </p>
                </div>
              </div>
            </div>

            {/* Advanced Plan */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl text-gray-900 mb-2">Advanced</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl text-gray-900">$250</span>
                    <span className="text-sm text-gray-500">per month</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative inline-flex items-center">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-900 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </div>
                  <span className="text-sm text-gray-900">Billed yearly</span>
                  <span className="text-xs text-gray-500">Save 17%</span>
                </div>

                <p className="text-sm text-gray-600">
                  For hyperscalers needing higher usage quotas
                </p>

                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-md py-2">
                  Get started
                </Button>

                <ul className="space-y-3 pt-4">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>1M tracked clicks/mo</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>50K new links/mo</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>5-year analytics retention</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Priority Slack support</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-purple-600 flex items-center gap-1">
                    <span className="text-purple-600">✦</span> Includes Dub
                    Partners
                  </p>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl text-gray-900 mb-2">Enterprise</h3>
                  <div className="text-gray-600">Custom</div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>Tailored pricing terms</span>
                </div>

                <p className="text-sm text-gray-600">
                  For large organizations and governments with custom needs
                </p>

                <Button className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 rounded-md py-2">
                  Get a demo
                </Button>

                <ul className="space-y-3 pt-4">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Unlimited tracked clicks</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Unlimited new links</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Unlimited analytics retention</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>SSO/SAML</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Audit logs</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Custom SLA</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-purple-600 flex items-center gap-1">
                    <span className="text-purple-600">✦</span> Includes Dub
                    Partners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
