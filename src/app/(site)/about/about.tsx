import Hero from "@/components/hero";
import FounderSection from "./founder-section";

export default function About() {
  return (
    <>
      <Hero
        title={
          <>
            Build the <span className="italic">future</span> of sales
          </>
        }
      />
      <section className="px-6 md:px-12 lg:px-24 pt-[4.5rem] max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 md:gap-30">
          <div>
            <h2 className="text-2xl text-gray-900 font-medium leading-tight">
              We partner with customer-centered sales teams
            </h2>
          </div>
          <div className="space-y-6 text-gray-500 text-[15px]">
            <p>
              Overbase partners with the sales teams who have the most
              customer-centered culture
            </p>

            <p>
              Sales tech has enabled many meaningful advances. But somewhere
              along the way, the focus shifted away from customers
            </p>

            <p>
              We are machine learning engineers who have been building sales
              tech together for over 10 years
            </p>

            <p>
              Today, we're building the future by partnering with the teams who
              stayed customer-centered, and who may not have adopted all the
              legacy tech from previous decades as aggressively as some others
            </p>
          </div>
        </div>
      </section>
      <FounderSection />
    </>
  );
}
