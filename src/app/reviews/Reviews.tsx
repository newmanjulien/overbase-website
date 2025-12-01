"use client";

import { ReviewCard } from "../../components/ReviewCard";
import { ThumbsUp, ThumbsDown } from "lucide-react";

const positiveReviews = [
  {
    name: "Sarah Chen",
    title: "CEO",
    company: "Meridian Health",
    avatar: "/kenny.png",
    quote:
      "Overbase has completely transformed how we handle patient data across 12 hospital systems. What used to take our team weeks now happens in real-time.",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    title: "CFO",
    company: "Vertex Capital",
    avatar: "/kenny.png",
    quote:
      "The ROI was immediate. We consolidated 8 different data tools into one platform and cut our infrastructure costs by 60%.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    title: "CTO",
    company: "NovaTech Solutions",
    avatar: "/kenny.png",
    quote:
      "Finally, a database that speaks human. Our non-technical executives can now query data without filing IT tickets. Game changer.",
    rating: 5,
  },
  {
    name: "James Patterson",
    title: "COO",
    company: "Global Logistics Inc",
    avatar: "/kenny.png",
    quote:
      "We process 2M+ transactions daily. Overbase handles it without breaking a sweat. The natural language queries alone saved us 200+ engineering hours monthly.",
    rating: 4,
  },
  {
    name: "Priya Sharma",
    title: "CEO",
    company: "FinEdge Analytics",
    avatar: "/kenny.png",
    quote:
      "Switched from Snowflake. The migration was seamless and our query performance improved by 3x. Wish we'd found this sooner.",
    rating: 5,
  },
];

const negativeReviews = [
  {
    name: "Robert Klein",
    title: "CTO",
    company: "Legacy Systems Corp",
    avatar: "/kenny.png",
    quote:
      "Too innovative for our taste. Our team was comfortable with SQL and didn't want to learn something new, even if it's easier.",
    rating: 2,
  },
  {
    name: "Diana Foster",
    title: "CFO",
    company: "Traditional Bank Holdings",
    avatar: "/kenny.png",
    quote:
      "The platform is genuinely impressive, but our 40-year-old COBOL systems aren't going anywhere. We're just not ready for this level of change.",
    rating: 2,
  },
  {
    name: "Michael Chang",
    title: "CIO",
    company: "SlowMove Industries",
    avatar: "/kenny.png",
    quote:
      "Our board took 18 months to approve a new coffee machine. A revolutionary database platform? Maybe in 2030.",
    rating: 3,
  },
  {
    name: "Catherine Moore",
    title: "CEO",
    company: "Paper & Pencil Ltd",
    avatar: "/kenny.png",
    quote:
      "We tried the demo and it worked perfectly. That's exactly the problem—our IT department needs something to complain about.",
    rating: 2,
  },
];

export default function Reviews() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-22 mt-10">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 text-balance">
              What people are saying
            </h1>

            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
              Overbase is the best fit for executives who make high impact
              decisions. And for large businesses where it's hard to know what's
              going on
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Positive Reviews Column */}
            <div>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                  <ThumbsUp className="w-4 h-4 text-green-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Positive Reviews
                </h2>
                <span className="ml-auto text-sm text-gray-500">
                  {positiveReviews.length} reviews
                </span>
              </div>
              <div className="flex flex-col gap-4">
                {positiveReviews.map((review, index) => (
                  <ReviewCard key={index} {...review} variant="positive" />
                ))}
              </div>
            </div>

            {/* Negative Reviews Column */}
            <div>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100">
                  <ThumbsDown className="w-4 h-4 text-[#FC3636]" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Negative Reviews
                </h2>
                <span className="ml-auto text-sm text-gray-500">
                  {negativeReviews.length} reviews
                </span>
              </div>
              <div className="flex flex-col gap-4">
                {negativeReviews.map((review, index) => (
                  <ReviewCard key={index} {...review} variant="negative" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
