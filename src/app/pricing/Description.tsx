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
        <div className="space-y-6 text-gray-500">
          <p>
            Overbase is where product, design, and infrastructure converge.
            We're creating the layer that helps the greatest teams understand
            how their product really works and how to make it better.
          </p>

          <p>
            Software runs the world. When it breaks, civilization stutters.
            We're building the immune system for the computer age – and we need
            architects of the impossible to help us build it.
          </p>

          <p>It's demanding work.</p>

          <p>
            You'll think deeply, ship fast, and sweat the details that most
            people miss. But you'll have freedom, ownership, and the chance to
            shape something that could redefine how software is built.
          </p>
        </div>
      </div>
    </section>
  );
}
