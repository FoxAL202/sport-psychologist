import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Блог",
  description:
    "Полезные статьи о детской спортивной психологии: мотивация, тревожность, подготовка к соревнованиям, работа с агрессией.",
};

export default function BlogPage() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container-main">
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-4 block">
            Блог
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
            Статьи о спортивной психологии
          </h1>
          <p className="text-surface-500 text-lg">
            Для родителей и тренеров. Осознанный подход к воспитанию юных спортсменов.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
