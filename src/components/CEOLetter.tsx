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
                Great customer support is the backbone of your B2B marketplace
              </p>

              <p>
                It might be one of the reasons customers buy from you. It's
                almost certainly one of the reasons customers come back
              </p>

              <p>
                But customer support is a lot of work. And you can't do it all
                on your own. You may have tried hiring people to help. And you
                may have tried some of the new AI tools
              </p>

              <p>
                But you're likely finding what most B2B marketplace founders
                find:{" "}
                <span
                  style={{
                    backgroundColor: "rgba(255, 0, 0, 0.1)",
                    color: "black",
                    padding: "2px 3px",
                  }}
                >
                  offloading customer support is hard and the results just
                  aren't good
                </span>
              </p>

              <p>
                hndl is a new, different and better way of doing customer
                support emails for your B2B marketplace
              </p>

              <p>
                We take care of your customer support emails in a way that's{" "}
                <strong>
                  as good as if you and your cofounders were answering the
                  emails yourselves
                </strong>
              </p>

              <p>
                The reason hndl is so good is because of the unique way we blend
                AI with humans
              </p>

              <p>
                hndl is the first AI that knows what parts of the work it can do
                better than humans vs. what parts a human do better than AI
              </p>

              <p>
                You set up hndl in the same way you'd set up any other customer
                support AI. You give instructions to the AI and tailor it for
                your specific business. Then the AI does the work just like any
                other customer support AI
              </p>

              <p>
                Except that the hndl AI knows which parts of your instructions
                it cannot do well
              </p>

              <p>
                And for the parts which AI cannot do well, the AI gets one of
                the humans from hndl's marketplace to help it do the work
              </p>

              <p>
                The result is that your customer support emails easily get
                answered exactly how you'd answer them. You don't need to hire
                anyone. And everything gets done perfectly
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
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="font-medium text-lg text-gray-900 mb-2">
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
