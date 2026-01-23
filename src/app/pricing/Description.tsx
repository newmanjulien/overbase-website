export function Description() {
  return (
    <section className="px-6 md:px-12 lg:px-24 pt-18 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-14 md:gap-30">
        {/* Left Column - Headline */}
        <div>
          <h2 className="text-2xl text-gray-900 font-medium leading-tight">
            We train a Large Language Model for each Revenue Exec
          </h2>
        </div>

        {/* Right Column - Body Copy */}
        <div className="space-y-6 text-gray-500 text-[15px]">
          <p>
            Getting reliable answers to your hardest questions means doing
            things differently
          </p>

          <p>
            Overbase trains a full standalone 26B+ parameter Personal Large
            Language Model for each Revenue Exec. And we run each model on local
            machines in our office
          </p>

          <p>
            Our Data Scientists continuously train, retrain and fine-tune each
            model so it understands how the Revenue Exec it's serving thinks
          </p>

          <p>
            And so it learns how to use agents to find information and navigate
            each business's data infrastructure
          </p>
        </div>
      </div>
    </section>
  );
}
