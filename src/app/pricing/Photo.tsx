import Image from "next/image";

export function Photo() {
  return (
    <section className="py-20 px-6 bg-neutral-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl text-center mb-4">
          Your Personal LLM on our machines
        </h2>
        <p className="text-neutral-600 text-center mb-10 max-w-2xl mx-auto">
          Your Personal Large Language Model is a 200 GB file which we train for
          you using NVIDIA chips then run on a local machine in Overbase's
          office
        </p>
        <div
          className="relative rounded-lg overflow-hidden"
          style={{ height: "500px" }}
        >
          <Image
            src="/nvidia.png"
            alt="Agentic Analyst Interface"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
