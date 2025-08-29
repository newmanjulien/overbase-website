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
                Your business might have significantly less revenue than it
                should if{" "}
                <strong className="font-semibold">
                  your unit economics don&apos;t let you hire enough Customer
                  Success Managers
                </strong>
              </p>

              <p>
                Your Customer Success Managers may be getting bogged down in low
                level transactional conversations with customers. And they may
                not have time for upselling and renewals
              </p>

              <p>
                The result could be that customer churn is higher than it should
                be. Your renewal rate might be lower than it should. And you may
                not be getting the upsell expansions you would with
                enterprise-grade Customer Success
              </p>

              <p>
                ...not to mention that you might be burning out your Customer
                Success team
              </p>

              <p>
                hndl is building Customer Success automation that&apos;s so good
                you can now give enterprise-grade Customer Success to all your
                customers{" "}
                <strong className="font-semibold">
                  at any scale without ever hiring another Customer Success
                  Manager
                </strong>
              </p>

              <p>
                hndl is easy, quick and intuitive. You simply set up and
                customize AI agents using a familiar workflow UI
              </p>

              <p>What&apos;s different is that we have humans in the loop </p>

              <p>
                You give instructions to hndl&apos;s AI agents. And almost all
                the work is done by AI. But when the AI encounters tasks AIs
                can&apos;t do well, it delegates that task to one of the
                Customer Success Experts who work at hndl HQ
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
