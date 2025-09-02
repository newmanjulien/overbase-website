"use client";
import { useRouter } from "next/navigation";

export function CEOLetter() {
  const router = useRouter();

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50/50">
      <div className="max-w-3xl mx-auto">
        {/* Paper Stack Container */}
        <div className="relative mx-auto max-w-3xl">
          {/* Background papers – stack effect */}
          <div className="absolute inset-0 bg-white rounded-lg shadow-lg transform -rotate-1 scale-[1.02] translate-x-1 translate-y-1 border border-gray-200"></div>
          <div className="absolute inset-0 bg-white rounded-lg shadow-md transform rotate-2 scale-[1.015] -translate-x-1 translate-y-0.5 border border-gray-200"></div>
          <div className="absolute inset-0 bg-gray-100 rounded-lg shadow-sm transform rotate-0.5 scale-[1.005] border border-gray-200"></div>

          {/* Main letter */}
          <div className="relative bg-white rounded-lg shadow-xl p-8 md:p-12 z-10">
            <div className="mb-8">
              <div className="text-xl text-gray-900 font-semibold">
                Introducing hndl
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200"></div>

            <div className="space-y-6 text-gray-900 text-lg leading-relaxed">
              <p>
                Work is insane. You might have a boss who&apos;s hard to deal
                with. Or demanding customers. Or you might just have ambitious
                KPIs you need to hit
              </p>

              <p>
                Which is why you can&apos;t afford for your personal life to be
                just as busy
              </p>

              <p>
                But lets be honest. Your personal life is just as busy as your
                work
              </p>

              <p>
                You might have a large home you need to take care of. Aging
                parents. Or you might have kids who need you. And what&apos;s
                for sure is that there&apos;s at least some paperwork which you
                just don&apos;t have time to get to
              </p>

              <p>
                <strong className="font-medium">
                  hndl is an assistant that makes your personal life unbusy.
                </strong>{" "}
                We take care of an unlimited amount of busy-ness in your
                personal life for $900 per month
              </p>

              <p>
                Haven&apos;t filed taxes for 3 years? We&apos;ll figure it out.
                Running low on laundry detergent? We&apos;ll get some for you?
                Babysitter cancelled at the last minute? We&apos;re here to help
              </p>

              <p>
                With hndl, you&apos;re assigned a team of 2 named assistants
                (who you can meet) and who are available 24/7
              </p>

              <p>
                Your assistants are vetted, work in-person from our high
                security HQ and use encrypted storage which let&apos;s them
                offer you a secure service
              </p>

              <p>
                And your assistants are supported by a specialized AI system
                which is designed to let them get stuff done for you faster and
                more reliably
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
