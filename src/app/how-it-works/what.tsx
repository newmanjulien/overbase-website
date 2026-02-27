import {
  Calendar,
  dealReviewCalendar,
} from "@/app/how-it-works/graphics/calendar";

export default function HowItWorksWhat() {
  return (
    <section className="mb-22 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="pt-12">
        <div className="mx-auto flex flex-col items-center text-center gap-6 max-w-xl">
          <div className="space-y-4 text-gray-500">
            <p>
              Have deal intelligence conveniently packaged up at your fingertips
            </p>
            <p>
              A human data scientist does an audit of every deal. Then we put
              everything you need in a calendar invite which sits beside
              pipeline review meetings
            </p>
          </div>
        </div>
        <div className="mt-10 mx-auto w-full max-w-xl">
          <Calendar day={dealReviewCalendar} className="mt-0" />
        </div>
      </div>
    </section>
  );
}
