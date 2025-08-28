"use client";
import { useRouter } from "next/navigation";

export function CEOLetter() {
  const router = useRouter();

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50/50">
      <div className="max-w-4xl mx-auto">
        {/* Paper Stack Container */}
        <div className="relative mx-auto max-w-3xl">
          {/* Background papers – stack effect */}
          <div className="absolute inset-0 bg-white rounded-lg shadow-lg transform -rotate-1 scale-[1.02] translate-x-1 translate-y-1 border border-gray-200"></div>
          <div className="absolute inset-0 bg-white rounded-lg shadow-md transform rotate-2 scale-[1.015] -translate-x-1 translate-y-0.5 border border-gray-200"></div>
          <div className="absolute inset-0 bg-gray-100 rounded-lg shadow-sm transform rotate-0.5 scale-[1.005] border border-gray-200"></div>

          {/* Main letter */}
          <div className="relative bg-white rounded-lg shadow-xl p-8 md:p-12 z-10">
            <div className="mb-8">
              <div className="text-xl text-gray-900 font-bold">
                Introducing hndl
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200"></div>

            <div className="space-y-6 text-gray-900 text-lg leading-relaxed">
              <p>
                Your business has significantly less revenue than it should
                because you&apos;re not offering enterprise-grade Customer
                Success to all your customers
              </p>

              <p>
                Your Customer Success Managers are getting bogged down in low
                level transactional conversations with customers. And they
                don&apos;t have time for upselling and renewals
              </p>

              <p>
                The result is that customer churn is higher than it should be.
                Your renewal rate is lower than it should. And you&apos;re not
                getting the upsell expansions you would with enterprise-grade
                Customer Success
              </p>

              <p>
                You&apos;re not alone. Most SaaS businesses struggle with this.
                The problem is that{" "}
                <strong className="font-semibold">
                  your unit economics don&apos;t allow you to hire enough
                  Customer Success Managers
                </strong>
              </p>

              <p>
                hndl is building Customer Success automation that&apos;s so good
                you can now offer enterprise-grade Customer Success to all your
                customers at any scale without ever hiring another Customer
                Success Manager
              </p>

              <p>
                hndl is easy, quick and intuitive. You simply set up and
                customize AI agents using a familiar workflow UI
              </p>

              <p>
                What&apos;s different about hndl is that{" "}
                <strong className="font-semibold">
                  we have humans in the loop{" "}
                </strong>
              </p>

              <p>
                You give instructions to hndl&apos;s AI agents then the AI does
                your Customer Success work. The reason the AI does such great
                work is that it can ask one of the Customer Success Experts who
                work at hndl HQ for help when it encounters tasks AIs can&apos;t
                do well
              </p>

              <p>
                Check out this{" "}
                <a
                  href="https://hndl.notion.site/Q-A-246226f80dd38065a1eac0e6321967da"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal text-blue-600 underline hover:text-blue-800"
                >
                  Q&A
                </a>{" "}
                if you have questions. Or join our{" "}
                <button
                  type="button"
                  onClick={() => router.push("/waitlist")}
                  className="font-normal text-blue-600 underline hover:text-blue-800 cursor-pointer"
                >
                  waitlist
                </button>{" "}
                if you&apos;re interested
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8">
              <div className="font-semibold text-lg text-gray-900 mb-1">
                Julien Newman
              </div>
              <div className="text-md text-gray-500">Founder & CEO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
