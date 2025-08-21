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
              <p>Great customer support is the backbone of your business</p>

              <p>
                It's one of the main reasons customers buy from you. It's one of
                the main reasons your customers stay or come back. Great
                customer support is one of the keys to why you're growing so
                fast
              </p>

              <p>
                But customer support is a lot of work. Which is why you hired a
                small team to help you. Maybe this team is outsourced. Maybe
                they're in-house
              </p>

              <p>
                Either way, one thing is for sure. Damn it's{" "}
                <span
                  style={{
                    backgroundColor: "rgba(255, 0, 0, 0.1)",
                    color: "black",
                    padding: "2px 3px",
                  }}
                >
                  hard to get your customer support team to do a good job
                </span>
              </p>

              <p>
                You're not alone. Startups have always struggled with scaling
                customer support. And founders have always done a way better job
                than anyone else at taking care of their customers
              </p>

              <p>
                Which is why today, the best startups are doing founder-only
                customer support
              </p>

              <p>Founder-only!? No customer support team at all?</p>

              <p>
                You heard right. There's now a way to scale how you do customer
                support that is so good and so easy that you can actually do
                everything yourself
              </p>

              <p>
                hndl gives you 3 AI agents who you easily customize so the AI
                does the work exactly how you'd do it personally
              </p>

              <p>
                <strong>1) Email Reply Agent -</strong> Replies to customer
                emails in the same way you&apos;d reply
              </p>

              <p>
                <strong>2) Customer Chat Agent -</strong> Logs into whatever
                helpdesk software you use and chat with customers the way you
                would chat with customers
              </p>

              <p>
                <strong>3) Ticket resolver Agent -</strong> Resolves even the
                hardest customer problems the way you'd resolve those problems
              </p>

              <p>
                What's unique about our AI is that it knows what parts of the
                work it can do better than humans (almost everything). And it
                knows what parts a human would do better than an AI (a few
                critical parts)
              </p>

              <p>
                What's unique about hndl is that we built a marketplace of
                vetted humans who are trained at helping an AI do the work it
                can't do well
              </p>

              <p>
                This means the AI does most of the work. But the AI also knows
                when to ask one of the humans in our marketplace to help (and
                the AI also knows how to QA the work those humans did)
              </p>

              <p>
                And it's this unique combination of AI and human which creates
                the quality you need for founder-only customer support
              </p>

              <p>
                Check out this{" "}
                <a
                  href="https://hndl.notion.site/Q-A-246226f80dd38065a1eac0e6321967da"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Q&A
                </a>{" "}
                if you have questions. Or join our{" "}
                <button
                  type="button"
                  onClick={onJoinWaitlist}
                  className="text-blue-600 underline hover:text-blue-800 cursor-pointer"
                >
                  waitlist
                </button>{" "}
                and I&apos;ll be in touch quickly to help you get set up
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
