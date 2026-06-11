import type { Metadata } from "next";
import { Calendar, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Записаться на консультацию спортивного психолога. Очно в Саратове и онлайн. Бесплатная 20-минутная консультация-знакомство.",
};

const contacts = [
  {
    icon: MapPin,
    title: "Адрес",
    value: "г. Саратов / Онлайн",
  },
  {
    icon: Phone,
    title: "Телефон",
    value: "+7 (900) 000-00-00",
    href: "tel:+79000000000",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@sport-psychologist.ru",
    href: "mailto:info@sport-psychologist.ru",
  },
];

export default function KontaktyPage() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container-main">
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-4 block">
            Контакты
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
            Записаться на консультацию
          </h1>
          <p className="text-surface-500 text-lg leading-relaxed">
            Выберите удобный способ связи. Я отвечу в течение дня и подберу время для бесплатной 20-минутной консультации-знакомства.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl">
          {/* Форма */}
          <div className="bg-white rounded-3xl border border-surface-200 p-8 md:p-10 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-brand-900 mb-8">
              Отправить заявку
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1.5">Ваше имя</label>
                <input
                  type="text"
                  className="w-full border border-surface-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow bg-surface-50 min-h-[44px]"
                  placeholder="Как к вам обращаться?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1.5">Телефон</label>
                <input
                  type="tel"
                  className="w-full border border-surface-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow bg-surface-50 min-h-[44px]"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1.5">Email</label>
                <input
                  type="email"
                  className="w-full border border-surface-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow bg-surface-50 min-h-[44px]"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1.5">Вид спорта</label>
                <select className="w-full border border-surface-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow bg-surface-50 min-h-[44px]">
                  <option value="">Выберите...</option>
                  <option value="hokkey">Хоккей</option>
                  <option value="futbol">Футбол</option>
                  <option value="tennis">Теннис</option>
                  <option value="gimnastika">Гимнастика / балет</option>
                  <option value="other">Другой</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-surface-700 mb-1.5">Кратко опишите запрос</label>
                <textarea
                  rows={4}
                  className="w-full border border-surface-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow bg-surface-50 resize-none min-h-[44px]"
                  placeholder="Что беспокоит? Как давно? Возраст ребёнка..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-800 to-brand-900 text-white py-4 rounded-xl font-semibold hover:from-brand-900 hover:to-brand-950 transition-all shadow-sm min-h-[48px]"
              >
                Отправить заявку
              </button>
            </form>
          </div>

          {/* Контакты и кнопки */}
          <div className="space-y-6">
            <div className="bg-surface-50 rounded-3xl p-8 md:p-10">
              <h2 className="font-heading text-xl font-bold text-brand-900 mb-7">
                Контакты
              </h2>
              <div className="space-y-6">
                {contacts.map((c) => (
                  <div key={c.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
                      <c.icon size={18} className="text-brand-700" />
                    </div>
                    <div>
                      <div className="text-sm text-surface-400 font-medium">{c.title}</div>
                      {c.href ? (
                        <a href={c.href} className="font-semibold text-surface-800 hover:text-accent-600 transition-colors">
                          {c.value}
                        </a>
                      ) : (
                        <div className="font-semibold text-surface-800">{c.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-surface-200 p-8 md:p-10 shadow-sm">
              <h2 className="font-heading text-xl font-bold text-brand-900 mb-3">
                Бесплатная консультация
              </h2>
              <p className="text-sm text-surface-500 mb-7">
                Запишитесь на 20-минутную онлайн-встречу, чтобы познакомиться, обсудить запрос и понять, подхожу ли я вам и вашему ребёнку.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-800 to-brand-900 text-white py-4 rounded-xl font-semibold hover:from-brand-900 hover:to-brand-950 transition-all shadow-sm min-h-[48px]"
                >
                  <Calendar size={18} />
                  Выбрать время в календаре
                </a>
                <a
                  href="https://wa.me/79000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-sm min-h-[48px]"
                >
                  <MessageCircle size={18} />
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
