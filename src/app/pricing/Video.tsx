export function Video() {
  return (
    <section className="py-20 px-6 bg-neutral-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-4">
          The first Agentic Data System for Revenue Execs
        </h2>
        <p className="text-neutral-600 text-center mb-10 max-w-2xl mx-auto">
          Agentic Data Systems are a new tech that get in-depth answers to the
          most complex questions. Overbase is the first Agentic Data System for
          Revenue Execs
        </p>
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ height: "500px" }}
        >
          <iframe
            src="https://www.videoask.com/fko4jni93"
            allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;"
            width="100%"
            height="535px"
            style={{ border: "none", borderRadius: "14px" }}
          />
        </div>
      </div>
    </section>
  );
}
