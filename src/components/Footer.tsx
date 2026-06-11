import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  {
    title: "Услуги",
    links: [
      { href: "/uslugi/hokkey", label: "Хоккей" },
      { href: "/uslugi/futbol", label: "Футбол" },
      { href: "/uslugi/tennis", label: "Теннис" },
      { href: "/uslugi/gimnastika", label: "Гимнастика и балет" },
    ],
  },
  {
    title: "Информация",
    links: [
      { href: "/o-nas", label: "О специалисте" },
      { href: "/blog", label: "Блог" },
      { href: "/kontakty", label: "Контакты" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-bold text-white">СП</div>
              <div className="font-heading font-bold text-lg">Спортивный Психолог</div>
            </div>
            <p className="text-surface-400 text-sm leading-relaxed max-w-sm">
              Помогаю юным спортсменам раскрыть потенциал через работу с психологией. Индивидуальный подход к каждому ребёнку.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://wa.me/79000000000" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center" title="WhatsApp">
                <span className="text-sm">WA</span>
              </a>
              <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center" title="Telegram">
                <span className="text-sm">TG</span>
              </a>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-surface-400 mb-5">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-surface-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-surface-400 mb-5">
              Контакты
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-surface-400">
              <li className="flex items-start gap-2">
                <span className="text-surface-500 shrink-0 mt-0.5">📍</span>
                <span>г. Саратов / Онлайн</span>
              </li>
              <li>
                <a href="tel:+79000000000" className="hover:text-white transition-colors">
                  +7 (900) 000-00-00
                </a>
              </li>
              <li>
                <a href="mailto:info@sport-psychologist.ru" className="hover:text-white transition-colors">
                  info@sport-psychologist.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-800 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-surface-500 text-xs">
            © 2026 Спортивный психолог. Все права защищены.
          </p>
          <p className="text-surface-500 text-xs">
            Сайт носит информационный характер и не является публичной офертой
          </p>
        </div>
      </div>
    </footer>
  );
}
