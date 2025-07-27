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
                You&apos;'re a busy executive and there just aren&apos;t enough
                hours in your day. No matter what you do.
              </p>

              <p>
                You have a great team who supports you. You might have
                cofounders you rely on and trust. And you might have a world
                class EA or a super effective Chief of Staff. But you&apos;re
                still drowning in work
              </p>

              <p>
                hndl is the only AI agent that is good enough to help you get
                unbusy easily, quickly and reliably. Because hndl is{" "}
                <strong>the first AI agent who can make human calls</strong>
              </p>

              <p>
                Other AI agents make tools calls to get work done for you. And
                hndl can do that too. What&apos;s special is that our AI can
                also call on a human to do parts of the task when only a human
                can do it
              </p>

              <p>
                For example, you might tell hndl to do something which involves
                using your LinkedIn account to send DMs. Most of the work can be
                done using normal tool calls. But LinkedIn won&apos;t let AIs
                actually log into your account and send DMs. So the AI will call
                on a human to do that part
              </p>

              <p>
                Or another example, you might want your agent to do a task which
                the AI can do good-enough. But you might get better results if a
                human reviews the AI&apos;s work
              </p>

              <p>
                <strong>
                  With hndl you know that everything is done reliably and just
                  how you want it.
                </strong>{" "}
                Our workflow creator lets you give detailed instructions to the
                AI. Then the AI is built so it QAs the work which the humans do
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-lg text-gray-900 mb-2">Julien Newman</div>
              <div className="text-sm text-gray-500">Founder & CEO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
