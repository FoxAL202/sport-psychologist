import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="py-16 md:py-24">
      <div className="container-main max-w-3xl">
        <Link href="/blog" className="text-sm font-medium text-surface-400 hover:text-brand-700 mb-8 inline-flex items-center gap-1.5 transition-colors">
          <ArrowLeft size={14} />
          Все статьи
        </Link>

        <div className="flex items-center gap-3 mt-4 mb-6">
          <span className="text-xs font-semibold text-accent-700 bg-accent-50 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-sm text-surface-400">{post.date}</span>
        </div>

        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-10 leading-tight">
          {post.title}
        </h1>

        <div className="prose prose-lg max-w-none text-surface-600 leading-relaxed">
          {post.content.split('\n').map((line, i) => {
            if (line.startsWith('**') && line.endsWith('**')) {
              return <h2 key={i} className="font-heading font-bold text-xl text-brand-900 mt-8 mb-4">{line.replace(/\*\*/g, '')}</h2>;
            }
            if (line.startsWith('- ')) {
              return <li key={i} className="text-surface-600 ml-4">{line.replace('- ', '')}</li>;
            }
            if (line.trim() === '') {
              return <div key={i} className="h-4" />;
            }
            return <p key={i} className="mb-4">{line}</p>;
          })}
        </div>

        <div className="border-t border-surface-200 mt-14 pt-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-surface-400">Понравилась статья? Поделитесь:</p>
            <div className="flex gap-2">
              <a
                href={`https://vk.com/share.php?url=https://sport-psychologist.ru/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-100 hover:bg-surface-200 px-4 py-2 rounded-lg text-sm font-medium text-surface-600 transition-colors"
              >
                ВКонтакте
              </a>
              <a
                href={`https://t.me/share/url?url=https://sport-psychologist.ru/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-100 hover:bg-surface-200 px-4 py-2 rounded-lg text-sm font-medium text-surface-600 transition-colors"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
