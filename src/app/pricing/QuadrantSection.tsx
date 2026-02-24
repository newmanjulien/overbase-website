import { QuadrantChart } from "@/components/charts/QuadrantChart";
import { quadrantSample } from "@/app/pricing/QuadrantData";

export default function QuadrantSection() {
  return (
    <section className="px-6 pt-18 max-w-5xl mx-auto">
      <div className="max-w-4xl mx-auto">
        <QuadrantChart chart={quadrantSample} />
      </div>
    </section>
  );
}
