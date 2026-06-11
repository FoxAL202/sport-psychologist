import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { services } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return services.map((s) => ({ sport: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ sport: string }> }): Promise<Metadata> {
  const { sport } = await params;
  const service = services.find((s) => s.slug === sport);
  if (!service) return {};
  return {
    title: `Психолог для ${service.title.toLowerCase()}`,
    description: service.description,
  };
}

export default async function SportPage({ params }: { params: Promise<{ sport: string }> }) {
  const { sport } = await params;
  const service = services.find((s) => s.slug === sport);
  if (!service) notFound();

  return (
    <section className="py-20 md:py-28">
      <div className="container-main">
        <Link
          href="/uslugi"
          className="text-sm font-medium text-surface-400 hover:text-brand-700 mb-8 inline-flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft size={14} />
          Все направления
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 mt-4">
          <div className="lg:col-span-2">
            <div className="text-5xl mb-5">{service.icon}</div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
              Психологическая помощь:<br />
              {service.title.toLowerCase()}
            </h1>
            <p className="text-surface-500 text-lg leading-relaxed mb-10">
              {service.longDescription}
            </p>

            <div className="bg-surface-50 rounded-2xl p-8 mb-8">
              <h2 className="font-heading text-xl font-bold text-brand-900 mb-5">
                С чем работаю
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.problems.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-surface-600">
                    <span className="text-red-400 shrink-0 mt-0.5">✕</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <h2 className="font-heading text-xl font-bold text-brand-900 mb-5">
                Результаты после работы
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.results.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-surface-600">
                    <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-surface-200 p-7 lg:sticky lg:top-24 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-surface-100">
                <span className="text-3xl">{service.icon}</span>
                <div>
                  <div className="font-heading font-bold text-brand-900">{service.title}</div>
                  <div className="text-xs text-surface-400">{service.ageGroup}</div>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-surface-400">Возраст</span>
                  <span className="font-semibold text-surface-800">{service.ageGroup}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-surface-400">Формат</span>
                  <span className="font-semibold text-surface-800">Очно / Онлайн</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-surface-400">Длительность</span>
                  <span className="font-semibold text-surface-800">50 мин</span>
                </div>
              </div>

              <Link
                href="/kontakty"
                className="block w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white text-center px-5 py-3.5 rounded-xl font-semibold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 mt-6 shadow-sm"
              >
                Записаться
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
