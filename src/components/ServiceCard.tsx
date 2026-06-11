import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/data";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/uslugi/${service.slug}`}
      className="group bg-white rounded-2xl p-7 border border-surface-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full"
    >
      <div className="text-4xl mb-5">{service.icon}</div>
      <h3 className="font-heading font-bold text-lg text-brand-900 mb-3 group-hover:text-accent-600 transition-colors">
        {service.title}
      </h3>
      <p className="text-surface-500 text-sm leading-relaxed mb-5 flex-1">
        {service.description}
      </p>
      <div className="text-sm font-semibold text-brand-700 group-hover:text-accent-600 transition-colors inline-flex items-center gap-1.5 mt-auto pt-4 border-t border-surface-100">
        Подробнее
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
