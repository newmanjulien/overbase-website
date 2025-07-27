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
                You&apos;re a busy executive and there{" "}
                <strong>
                  just aren&apos;t enough hours in your day no matter what you
                  do
                </strong>
              </p>

              <p>
                You have a great team who supports you. You might have
                cofounders who you rely on and trust completely. And you might
                have a world class EA or a superstar Chief of Staff. But
                you&apos;re still drowning in work and you need a boost
              </p>

              <p>
                hndl is the first AI agent that is good enough to help you get
                unbusy easily, quickly and reliably. Because{" "}
                <strong>
                  hndl is the only AI agent who can make human calls
                </strong>
              </p>

              <p>
                Like all agents, our AI makes tools calls. But what&apos;s
                special is that our AI can also call on a human to do parts of
                the task
              </p>

              <p>
                For example, you might tell hndl to help with something which
                involves using your LinkedIn to send DMs. Most of the work can
                be done using tool calls. But LinkedIn won&apos;t let AIs log
                into your account and send DMs. So the AI will call on a human
                to do that part
              </p>

              <p>
                Or another example, you might want your agent to do a task where
                the AI can&apos;t do a good enough job. But where you'd get good
                results if a human reviews the AI&apos;s work
              </p>

              <p>
                Today, hndl helps with two tasks: (1) triaging emails or Slack
                messages and (2) gathering data to help you make decisions.
                We're focused on just those two tasks to be sure we do them
                perfectly
              </p>

              <p>
                But we&apos;re building the AI agent who is actually going to be
                able to help with all of your most time consuming and important
                work
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
