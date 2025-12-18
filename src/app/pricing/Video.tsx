export function Video() {
  return (
    <section className="py-20 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-4">
          How you get answers you can trust
        </h2>
        <p className="text-neutral-600 text-center mb-10 max-w-2xl mx-auto">
          See how millions of tokens per request and humans in the loop gets you
          the easiest and most reliable data
        </p>
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-neutral-200">
          <video
            className="w-full h-full object-cover"
            controls
            poster="/kenny.png"
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
