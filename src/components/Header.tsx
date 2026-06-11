"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Главная" },
  { href: "/uslugi", label: "Услуги" },
  { href: "/o-nas", label: "О специалисте" },
  { href: "/blog", label: "Блог" },
  { href: "/kontakty", label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-surface-100">
      <div className="container-main flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-800 to-brand-900 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:shadow-md transition-shadow">
            СП
          </div>
          <div className="hidden sm:block">
            <div className="font-heading font-bold text-brand-900 text-sm leading-tight">Спортивный Психолог</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-brand-50 text-brand-800"
                    : "text-surface-600 hover:text-brand-700 hover:bg-surface-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="w-px h-6 bg-surface-200 mx-2" />
          <Link
            href="/kontakty"
            className="bg-brand-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-brand-900 transition-all shadow-sm hover:shadow-md"
          >
            Записаться
          </Link>
        </nav>

        <button className="md:hidden p-2.5 rounded-lg hover:bg-surface-50 transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-surface-100 bg-white shadow-lg">
          <div className="container-main py-5 flex flex-col gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium ${
                    isActive
                      ? "bg-brand-50 text-brand-800"
                      : "text-surface-600 hover:bg-surface-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <hr className="my-2 border-surface-100" />
            <Link
              href="/kontakty"
              onClick={() => setOpen(false)}
              className="bg-brand-800 text-white px-5 py-3.5 rounded-xl text-sm font-semibold text-center hover:bg-brand-900 transition-colors"
            >
              Записаться на консультацию
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
