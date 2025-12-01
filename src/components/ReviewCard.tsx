import Image from "next/image";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  title: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  variant: "positive" | "negative";
}

export function ReviewCard({
  name,
  title,
  company,
  avatar,
  quote,
  rating,
  variant,
}: ReviewCardProps) {
  return (
    <div
      className={`p-5 rounded-lg border transition-shadow hover:shadow-md ${
        variant === "positive"
          ? "bg-green-50/50 border-green-200"
          : "bg-red-50/50 border-red-200"
      }`}
    >
      {/* Star Rating */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? variant === "positive"
                  ? "fill-green-500 text-green-500"
                  : "fill-[#FC3636] text-[#FC3636]"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 text-sm leading-relaxed mb-4">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 relative flex-shrink-0">
          <Image
            src={avatar || "/placeholder.svg"}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <p className="font-medium text-gray-900 text-sm">{name}</p>
          <p className="text-xs text-gray-500">
            {title}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}
