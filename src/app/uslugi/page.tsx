import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Психологическая помощь юным спортсменам по направлениям: хоккей, футбол, теннис, гимнастика и балет.",
};

export default function UslugiPage() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container-main">
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-4 block">
            Направления
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
            Услуги спортивного психолога
          </h1>
          <p className="text-surface-500 text-lg leading-relaxed">
            Каждый вид спорта предъявляет свои требования к психике ребёнка. Я подбираю методику индивидуально, учитывая специфику нагрузки, возраст и характер.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-3xl p-10 md:p-14 text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-900 mb-4">
            Не нашли свой вид спорта?
          </h2>
          <p className="text-surface-500 mb-8 max-w-md mx-auto">
            Это не проблема. Я работаю с разными запросами — напишите мне, и мы обсудим ваш случай индивидуально.
          </p>
          <Link
            href="/kontakty"
            className="inline-flex items-center gap-2 bg-brand-800 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-brand-900 transition-all"
          >
            Связаться
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
