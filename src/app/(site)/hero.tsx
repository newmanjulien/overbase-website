import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  const newLocal =
    "mt-10 flex w-full flex-col items-center gap-2.5 sm:flex-row sm:justify-center md:items-start md:justify-start";
  return (
    <section className="flex flex-col px-6 sm:px-4 md:px-8 lg:px-12 xl:px-24 pt-20 pb-[4.5rem] bg-white">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-8 lg:gap-12 xl:gap-24 scale-[0.98]">
        {/* === Left Section: Headings & CTA === */}
        <div className="w-full text-center md:text-left scale-[0.89]">
          <h1 className="max-w-xs text-5xl text-gray-900 tracking-tight leading-tight font-semibold mx-auto md:mx-0">
            Fill your CRM's gaps
          </h1>

          <h2 className="mt-4 max-w-md text-2xl text-gray-600 font-medium mx-auto md:mx-0">
            Sales insight for businesses where{" "}
            <span className="bg-[#ffffcc] px-1">CRMs don't fully deliver</span>
          </h2>

          <div className={newLocal}>
            <Button
              variant="default"
              size="lg"
              className="w-full max-w-lg p-6 text-base rounded-lg sm:w-46"
              asChild
            >
              <Link href="/waitlist">Join waitlist</Link>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="w-full max-w-lg p-6 text-base rounded-lg sm:w-46"
              asChild
            >
              <Link href="https://cal.com/juliennewman">Request a demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
