interface CEOLetterProps {
  onJoinWaitlist: () => void;
}

export function CEOLetter({ onJoinWaitlist }: CEOLetterProps) {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50/50">
      <div className="max-w-4xl mx-auto">
        {/* Paper Stack Container */}
        <div className="relative mx-auto max-w-3xl">
          {/* Background papers – stack effect */}
          <div className="absolute inset-0 bg-white rounded-lg shadow-lg transform rotate-1 scale-[1.02] border border-gray-200"></div>
          <div className="absolute inset-0 bg-white rounded-lg shadow-md transform -rotate-1 scale-[1.01] border border-gray-200"></div>
          <div className="absolute inset-0 bg-gray-100 rounded-lg shadow-sm transform rotate-0.5 scale-[1.005] border border-gray-200"></div>

          {/* Main letter */}
          <div className="relative bg-white rounded-lg shadow-xl p-8 md:p-12 z-10">
            <div className="mb-8">
              <div className="text-xl text-gray-900 font-bold">
                Introducing hndl
              </div>
            </div>

            <div className="space-y-6 text-gray-900 leading-relaxed">
              <p>
                You&apos;re the CEO of a venture-backed startup. Which means
                you&apos;re one of the busiest people in the world
              </p>

              <p>
                You have co-founders who you trust and rely on. You have a
                top-notch team who supports you. And you might even have an EA
                or a Chief of Staff who makes your life so much easier
              </p>

              <p>
                But there still{" "}
                <span
                  style={{
                    backgroundColor: "rgba(255, 0, 0, 0.1)",
                    color: "black",
                    padding: "2px 3px",
                  }}
                >
                  aren&apos;t enough hours in the day
                </span>
              </p>

              <p>
                Imagine if you could take 3 time-consuming tasks. Then make them
                easy and quick
              </p>

              <p>
                <strong>Email & Slack:</strong> You spend most of your day
                answering emails and/or Slack messages. Which means you&apos;re
                not doing everything else. Let us triage your emails and Slack
                so you spend less time on unimportant stuff and never miss
                important messages
              </p>

              <p>
                <strong>After sales calls:</strong> Customers want to talk to
                you and you love talking to them. But it&apos;s hard to do all
                the work that comes after each sales call. Let us update your
                CRM, follow up, make sure action items get done, etc
              </p>

              <p>
                <strong>Customer success:</strong> Staying involved in your
                customer success and customer support motions lets you stay
                close to users. But it&apos;s hard to keep up with the
                repetitive parts. Let us help answer customer questions, prepare
                calls, gather data for check-ins with customers, etc.
              </p>

              <p>
                hndl is the first AI agent that actually can do those 3 tasks in
                a way that&apos;s good enough to be useful. Because hndl is the
                first AI agent that combines what AI does best with what humans
                do best
              </p>

              <p>
                Our AI does most of its work with tool calls. Like other AI
                agents
              </p>

              <p>
                The difference is that hndl is the first AI agent that can also
                make human calls. In other words, our AI calls on humans to do
                parts of the work
              </p>

              <p>
                Check out this{" "}
                <a
                  href="https://hndl.notion.site/Q-A-246226f80dd38065a1eac0e6321967da"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Q&A
                </a>{" "}
                if you have questions. Or join our{" "}
                <button
                  type="button"
                  onClick={onJoinWaitlist}
                  className="text-blue-600 underline hover:text-blue-800 cursor-pointer"
                >
                  waitlist
                </button>{" "}
                and I&apos;ll be in touch quickly to help you get set up
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-lg text-gray-900 mb-2">Julien Newman</div>
              <div className="text-md text-gray-500">Founder & CEO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
