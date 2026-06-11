import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/data";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white rounded-2xl border border-surface-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold text-accent-700 bg-accent-50 px-2.5 py-1 rounded-full shrink-0">
            {post.category}
          </span>
          <span className="text-xs text-surface-400">{post.date}</span>
        </div>
        <h3 className="font-heading font-bold text-brand-900 mb-2.5 leading-snug group-hover:text-accent-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-surface-500 text-sm leading-relaxed flex-1">
          {post.excerpt}
        </p>
        <div className="text-sm font-semibold text-brand-700 group-hover:text-accent-600 transition-colors inline-flex items-center gap-1.5 mt-4 pt-4 border-t border-surface-100">
          Читать
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
