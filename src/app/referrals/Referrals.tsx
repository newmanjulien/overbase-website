"use client";

import { Gift, Users, Smartphone, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function Referrals() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 pt-32 pb-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <Gift className="w-4 h-4 text-gray-700" />
              <span className="text-sm text-gray-700">Referral Program</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 font-semibold tracking-tight">
              Give an iPhone,
              <br />
              Get an iPhone
            </h1>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              Help us build the future of enterprise data. When your referral
              joins, you both receive an iPhone 17 as a thank you
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <Image
                src="https://images.macrumors.com/t/B-OH6huBi4ps9IbiRKadZxSPmP4=/800x0/smart/article-new/2025/09/iphone-17-models.jpg?lossy"
                alt="iPhone Pro"
                className="rounded-2xl shadow-2xl"
                width={800}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <h2 className="text-4xl text-gray-900 font-medium">How it works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center md:text-left space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 text-white">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl text-gray-900 font-medium">
                1. Make an intro
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Connect your friend to Julien by email or WhatsApp
              </p>
            </div>

            <div className="text-center md:text-left space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 text-white">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl text-gray-900 font-medium">
                2. They try Overbase
              </h3>
              <p className="text-gray-600 leading-relaxed">
                You've earned a reward when someone tries Overbase for 1 month
                or more
              </p>
            </div>

            <div className="text-center md:text-left space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 text-white">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-xl text-gray-900 font-medium">
                3. Get your iPhones
              </h3>
              <p className="text-gray-600 leading-relaxed">
                You both receive an iPhone 17. We'll contact you to arrange
                delivery once the payment clears
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-26 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-4xl text-gray-900 font-medium">
                Why we value your referrals
              </h2>
              <p className="text-md text-gray-600 leading-relaxed">
                Overbase is a community-driven project. All our product ideas
                come from our community. And almost all our customers come from
                our community
              </p>
              <p className="text-md text-gray-600 leading-relaxed">
                We want to work above all else with likeminded customers who
                will participate in and support our community. And the best way
                to find that type of customer is through you
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="text-lg text-gray-900 font-medium">
                      Our CEO meets with every referral
                    </h4>
                    <p className="text-gray-600 mt-2">
                      Our CEO Julien will always personally meet with everyone
                      you refer to us
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="text-lg text-gray-900 font-medium">
                      We'll welcome them to our community
                    </h4>
                    <p className="text-gray-600 mt-2">
                      Whether they buy or not. We'll welcome your friend into
                      our community after you connect us
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="text-lg text-gray-900 font-medium">
                      We respect everyone's time
                    </h4>
                    <p className="text-gray-600 mt-2">
                      We commit to always respecting your friend's time which
                      includes not pushing the conversation if the fit isn't
                      obvious
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl text-gray-900 font-medium">
              Program details
            </h2>

            <p className="text-lg text-gray-600 font-medium">
              Both you and your friend get a gift when we receive a first
              payment
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 space-y-8 border border-gray-200">
            <div className="space-y-3">
              <h3 className="text-xl text-gray-900 font-medium">
                You get the gift when
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span>You refer a friend and they talk to our CEO</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span>
                    Your friend's business pays to add at least 1 customers to
                    Overbase{" "}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span>
                    This purchase happens within 3 months of the introduction
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl text-gray-900 font-medium">
                Your friend gets the gift when
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span>
                    They were referred by someone who is part of our community
                    and they talk to our CEO
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span>
                    Their business pays to add at least 1 customers to Overbase
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span>
                    This purchase happens within 3 months of the introduction
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl text-gray-900 font-medium">
                Receiving the gift
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span>The referral gift changes every few months</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span>
                    You and your friend receive the gift which was offered when
                    the intro was made
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span>
                    We contact both of you when we receive a first payment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span>
                    We purchase the gift and the gift manufacturer ships it to
                    you
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
