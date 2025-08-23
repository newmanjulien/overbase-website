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
                The only alternative are janky AIs that just frustrate customers
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
                We started by helping B2B Marketplace founders answer customer
                support emails. And later we will help you with your full
                customer support stack
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
                if you have questions. Join our{" "}
                <button
                  type="button"
                  onClick={onJoinWaitlist}
                  className="font-normal text-blue-600 underline hover:text-blue-800 cursor-pointer"
                >
                  waitlist
                </button>{" "}
                and I&apos;ll be in touch quickly to help you get set up. Or
                just email me at: julien@hndlai.com
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8">
              <div className="font-medium text-xl text-gray-900 mb-2">
                Julien Newman
              </div>
              <div className="text-lg text-gray-500">Founder & CEO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
