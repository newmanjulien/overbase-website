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
                As the CEO of a SaaS startup. You are one of the busiest people
                in the world. No matter what you do there just aren&apos;t
                enough hours in your day
              </p>

              <p>
                Your cofounders are killing it. You have an amazing team. And
                you may even have a world class EA or a Chief of Staff. But
                there still aren&apos;t enough hours in your day no matter what
              </p>

              <p>
                With hndl you can now actually{" "}
                <strong>get more done easily, quickly and reliably</strong>
              </p>

              <p>
                We combine AI & humans to handle 3 of your most important and
                time consuming tasks. We (1) triage your emails and Slack
                messages, (2) update your team after you finish calls, (3)
                gather data so you make better decisions
              </p>

              <p>
                We built 3 specialized AIs who each take care of one of the
                tasks
              </p>

              <p>
                And what's unique is that{" "}
                <strong>
                  our AIs can call on a human to do the parts which AI
                  can&apos;t do well
                </strong>
              </p>

              <p>
                For example, you might tell hndl to use your LinkedIn to DM a
                few people who would have a perspective on a question you're
                trying to figure out. Our AI could do most of that using normal
                tool calls. But LinkedIn won't let AIs use your account to send
                DMs. So the AI will call on a human for help
              </p>

              <p>
                Or another example, you might tell hndl to find all the emails
                where there&apos;s an opportunity for you to highlight the
                success of one of your team members. The AI might do a good
                enough job of finding the right emails. But you might get better
                results if a human reviews the AI's work
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
