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

            <div className="mt-8 pt-6 border-t border-gray-200"></div>

            <div className="space-y-6 text-gray-900 text-lg leading-relaxed">
              <p>
                Scaling your B2B Marketplace&apos;s customer support beyond your
                current team seems like a daunting task
              </p>

              <p>
                You&apos;ll need to hire endlessly.{" "}
                <span
                  style={{
                    backgroundColor: "rgba(255, 0, 0, 0.1)",
                    color: "#FF5437",
                    padding: "2px 3px",
                  }}
                >
                  Customer support agents to take care of customers. Managers to
                  manage the agents. Even more managers to manage the managers
                </span>
              </p>

              <p>
                And the alternative seems to be low quality outsourcing
                companies. Or more recently, AIs that just frustrate your
                customers
              </p>

              <p>It doesn&apos;t need to be like this</p>

              <p>
                <strong className="font-semibold">
                  hndl is building the first founder-only customer support
                  system for B2B Marketplaces.
                </strong>{" "}
                Software that takes care of your customers so well that you can
                scale customer support without ever hiring anyone else
              </p>

              <p>
                If you already have a customer support team. You&apos;ll never
                need to hire anyone beyond your current team
              </p>

              <p>
                And if it&apos;s just you and your cofounders. You can scale to
                $1B without ever hiring anyone ever
              </p>

              <p>
                The way hndl works is simple, easy and familiar. You give
                instructions to an AI just like any other customer support AI
                tool
              </p>

              <p>The only thing that&apos;s different is our router</p>

              <p>
                This router automatically breaks your instructions down into
                microtasks. Then decides whether to assign each microtask to an
                AI or to a human
              </p>

              <p>
                The router assigns most microtasks to AI. But when it&apos;s
                best to get a human involved, the router assigns the microtask
                to a human from our pool of &quot;handlers&quot; in a way that
                doesn&apos;t require any work (or hiring) from you
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
                  onClick={onJoinWaitlist}
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
              <div className="text-md text-gray-600">Founder & CEO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
