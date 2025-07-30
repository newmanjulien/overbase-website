export function CEOLetter() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Paper Stack Container */}
        <div className="relative mx-auto max-w-3xl">
          {/* Background papers - creating stack effect */}
          <div className="absolute inset-0 bg-white rounded-lg shadow-lg transform rotate-1 scale-[1.02]"></div>
          <div className="absolute inset-0 bg-white rounded-lg shadow-md transform -rotate-1 scale-[1.01]"></div>
          <div className="absolute inset-0 bg-gray-100 rounded-lg shadow-sm transform rotate-0.5 scale-[1.005]"></div>

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
                As a startup founder. You&apos;re one of the busiest people in
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
                Imagine if there was a way to take 3 time consuming tasks then
                make them easy and quick in a way that&apos;s totally reliable
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
                also everything. What are customers saying? Why aren&apos;t
                prospects converting? Which team member is actually killing it?
                Let us collaborate with your team to get you the information you
                need
              </p>

              <p>
                Ok. Let&apos;s be honest. AI can&apos;t actually do any of those
                tasks in a way that&apos;s good enough to be useful. It&apos;s
                almost impossible to delegate these tasks to even the smartest
                people on your team
              </p>

              <p>
                But hndl can actually do these 3 tasks in a way that&apos;s so
                good and reliable that we might sometimes do it better than if
                you did the work yourself
              </p>

              <p>
                The way we get this level of quality is by combining what AI
                does best with what humans do best
              </p>

              <p>
                Our AI agent does most of its work with tool calls like all
                other AI agents. The difference is that hndl is the first AI
                agent that can also make human calls. In other words, our AI
                calls on humans to do the parts humans do better (then it QAs
                the work those humans do)
              </p>

              <p>
                Join our waitlist and I&apos;ll be in touch quickly to help you
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
