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
                It&apos;s amazing what the AI agent your startup built can do.
                But it&apos;s also amazing what your AI agent cannot do
              </p>

              <p>
                <span
                  style={{
                    backgroundColor: "rgba(255, 0, 0, 0.1)",
                    color: "#FF5437",
                    padding: "2px 3px",
                  }}
                >
                  Your product is constantly struggling against the limits of
                  the LLM tech
                </span>
                and the crazy thing is that the tasks which your AI agent just
                can&apos;t seem to do are tasks which any human would find easy
              </p>

              <p>hndl&apos;s humans-as-a-service changes this</p>

              <p>
                <strong className="font-semibold">
                  hndl is a way to easily make your AI agent 10x smarter
                  overnight.
                </strong>{" "}
                Our API lets your AI agent programmatically get a human to do
                any small one-off task which the AI needs help with
              </p>

              <p>
                The way hndl works is similar to data labeling services like
                Scale AI. But our humans are not training your AI. They&apos;re
                helping your AI agent do it&apos;s job
              </p>

              <p>
                We built a pool of vetted humans in low cost geographies who are
                specialized in doing one-off tasks delegated by an AI. And your
                AI agent can easily put these humans to work through a simple
                API call
              </p>

              <p>
                There&apos;s 0 management work for you just an API. You&apos;re
                in full control of which humans are working on which of your
                tasks. And from the perspective of your users, they can&apos;t
                tell that there&apos;s a human in the loop at all
              </p>

              <p>
                Plus the work is always reliable because we give your AI tools
                to QA the work our humans did
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
