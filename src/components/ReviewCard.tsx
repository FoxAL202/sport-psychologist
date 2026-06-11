import { Star } from "lucide-react";
import type { Review } from "@/lib/data";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-surface-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
      <div className="flex items-center gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < review.rating ? "text-accent-400 fill-accent-400" : "text-surface-200"}
          />
        ))}
      </div>
      <p className="text-surface-600 text-sm leading-relaxed mb-5 flex-1">
                &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-surface-100">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 text-brand-700 flex items-center justify-center text-xs font-bold shrink-0">
          {review.name[0]}
        </div>
        <div>
          <div className="text-sm font-semibold text-surface-800">{review.name}</div>
          <div className="text-xs text-surface-400">{review.sport}</div>
        </div>
      </div>
    </div>
  );
}
