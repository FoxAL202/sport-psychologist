import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Спортивный психолог | Помощь юным спортсменам",
    template: "%s | Спортивный психолог",
  },
  description:
    "Профессиональная психологическая помощь детям и подросткам в спорте. Работа с мотивацией, тревожностью, страхом ошибок, агрессией. Хоккей, футбол, теннис, гимнастика.",
  keywords: [
    "спортивный психолог",
    "детский спортивный психолог",
    "психолог для спортсменов",
    "спортивная психология дети",
    "психолог хоккей",
    "психолог футбол",
    "психолог теннис",
  ],
  openGraph: {
    title: "Спортивный психолог | Помощь юным спортсменам",
    description:
      "Помогаю детям и подросткам раскрыть спортивный потенциал через работу с психологией.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased text-surface-800 bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
