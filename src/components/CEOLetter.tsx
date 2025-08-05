export function CEOLetter() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50/50">
      <div className="max-w-4xl mx-auto">
        {/* Paper Stack Container */}
        <div className="relative mx-auto max-w-3xl">
          {/* Background papers - creating stack effect */}
          <div className="absolute inset-0 bg-white rounded-lg shadow-lg transform rotate-1 scale-[1.02] border border-gray-200"></div>
          <div className="absolute inset-0 bg-white rounded-lg shadow-md transform -rotate-1 scale-[1.01] border border-gray-200"></div>
          <div className="absolute inset-0 bg-gray-100 rounded-lg shadow-sm transform rotate-0.5 scale-[1.005] border border-gray-200"></div>

          {/* Main letter content */}
          <div className="relative bg-white rounded-lg shadow-xl p-8 md:p-12 transform rotate-0 z-10">
            {/* Letter header */}
            <div className="mb-8">
              <div className="text-xl text-gray-900 font-bold">
                Introducing hndl
              </div>
            </div>

            {/* Letter content */}
            <div className="space-y-6 text-gray-900 leading-relaxed">
              <p>
                You&apos;re the CEO of a venture backed startup. Which means you&apos;re one of the busiest people in
                the world
              </p>

              <p>
                You have cofounders who you trust and rely on. You have a top
                notch team who supports you. And you might even have an EA or a
                Chief of Staff who makes your life so much easier
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
                  aren&apos;t enough hours in each day
                </span>
              </p>

              <p>
                Imagine if you could take 3 time consuming tasks. Then make them
                easy and quick
              </p>

              <p>
                <strong>Email & Slack: </strong>You spend most of your day
                answering emails and/or Slack messages. Which means you&apos;re
                not doing everything else. Let us triage your emails and Slack
                so you spend less time on unimportant stuff and never miss
                important messages
              </p>

              <p>
                <strong>Investor updates & board decks:</strong> Communicating
                with your investors is key to getting their help and support.
                But it takes a ridiculous amount of time. Let us gather the data
                you need. Then prepare investor updates and board decks in the
                format you prefer
              </p>

              <p>
                <strong>Internal research: </strong>Knowing what&apos;s actually
                going on in your business is surprisingly hard. But it&apos;s
                also the most important part of your job. What are customers saying? Why aren&apos;t
                prospects converting? Which team member is killing it? Let us
                collaborate with your team to get you the information you need
              </p>

              <p>
                hndl is the first AI agent that actually can do those 3 tasks in a way that&apos;s good enough to be useful. Because hndl is the first AI agent which combines what AI does best with
                what humans do best
              </p>

              <p>
                Our AI does most of its work with tool calls. Like
                other AI agents
               </p>  

              <p>
                The difference is that hndl is the first AI agent that can also make human calls. In other words, our {" "}
                <span
                  style={{
                    backgroundColor: "rgba(60, 200, 60, 0.1)",
                    color: "black",
                    padding: "2px 3px",
                  }}
                >
                  AI calls on humans to do parts of the work
                </span>
              </p>

              <p>
Check out this <a href="https://hndl.notion.site/Q-A-246226f80dd38065a1eac0e6321967da" target="_blank" className="text-blue-600 underline hover:text-blue-800">Q&A</a> if you have questions. Check out this <a href="https://www.figma.com/deck/hzRpBLPMQkgbZ1KEP09941/hndl?node-id=3828-33&t=mdIOiRjX2bfl6k82-1" target="_blank" className="text-blue-600 underline hover:text-blue-800">deck</a> if you want to understand our vision
              </p>

              <p>
                Or join our waitlist and I&apos;ll be in touch quickly to help you
                get set up. I still onboard every founder personally and will do
                everything I can to make hndl work for you
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
