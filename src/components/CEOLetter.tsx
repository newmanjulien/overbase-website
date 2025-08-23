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
                Scaling your B2B Marketplace's customer support beyond your
                current team seems impossible
              </p>

              <p>
                You'll need to hire endlessly.{" "}
                <span
                  style={{
                    backgroundColor: "rgba(255, 0, 0, 0.1)",
                    color: "black",
                    padding: "2px 3px",
                  }}
                >
                  Hire agents to take care of customers. Hire managers to manage
                  the agents. Hire more managers to manage the managers
                </span>
              </p>

              <p>
                The alternatives are janky AIs that just frustrate customers. Or
                low quality outsourcing companies
              </p>

              <p>It doesn't need to be like this</p>

              <p>
                <strong className="font-semibold">
                  hndl is building the first founder-only customer support
                  system for B2B Marketplaces.
                </strong>{" "}
                Software that takes care of your customers so well that you can
                scale customer support without ever hiring anyone else
              </p>

              <p>
                If you already have a customer support team. You'll never need
                to hire anyone beyond your current team
              </p>

              <p>
                If it's just you and your cofounders. You can scale to $1B
                without ever hiring anyone ever
              </p>

              <p>
                The way hndl works is simple, easy and familiar. You give
                instructions to an AI just like any other customer support AI
                tool
              </p>

              <p>
                The only thing that's different is our router which works in the
                background
              </p>

              <p>
                This router breaks your instructions down into microtasks. Then
                decides whether to assign each microtask to an AI or to a human
              </p>

              <p>
                AI does a better job of most of the microtasks so the router
                assigns most of them to AI. But sometimes it's best to get a
                human involved and the router assigns the microtask to a human
                from our pool of "handlers"
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
                or join our{" "}
                <button
                  type="button"
                  onClick={onJoinWaitlist}
                  className="font-normal text-blue-600 underline hover:text-blue-800 cursor-pointer"
                >
                  waitlist
                </button>{" "}
                and I&apos;ll be in touch quickly
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
