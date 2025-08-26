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
                Scaling customer support is one of the biggest headaches for
                growing startups
              </p>

              <p>
                You need to hire endlessly.{" "}
                <span
                  style={{
                    backgroundColor: "rgba(255, 0, 0, 0.1)",
                    color: "#FF5437",
                    padding: "2px 3px",
                  }}
                >
                  Customer support agents. Managers to manage the agents. More
                  managers to manage the managers
                </span>
              </p>

              <p>
                And the alternatives seem to be low quality outsourcing. Or AIs
                that frustrate your customers
              </p>

              <p>It doesn&apos;t need to be like this</p>

              <p>
                <strong className="font-semibold">
                  hndl is the first founder-only customer support system.
                </strong>{" "}
                Our software takes care of your startup&apos;s customers so well
                that you can scale customer support without ever hiring anyone
                else
              </p>

              <p>
                The way hndl works is simple, easy and familiar. It&apos;s just
                kust like with any agentic AI
              </p>

              <p>
                What&apos;s different is that hndl&apos;s AI can get help from
                humans
              </p>

              <p>
                When you give instructions to our AI, it knows which parts it
                can do well. And which parts a human would be a lot better
              </p>

              <p>
                The AI has access to hndl's pool of human workers who are
                specialized in doing one-off tasks our AI delegates to them. And
                the AI gets those humans to take care of the tasks which humans
                do better than AI
              </p>

              <p>
                The result is an AI-lead system which does your customer support
                so well you'll never hire anyone else
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
