import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  variable: "--font-heading",
  display: "swap",
});

const siteUrl = "https://sport-psychologist.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    "психолог гимнастика",
  ],
  openGraph: {
    title: "Спортивный психолог | Помощь юным спортсменам",
    description:
      "Помогаю детям и подросткам раскрыть спортивный потенциал через работу с психологией.",
    type: "website",
    locale: "ru_RU",
    siteName: "Спортивный психолог",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Спортивный психолог | Помощь юным спортсменам",
    description:
      "Помогаю детям и подросткам раскрыть спортивный потенциал через работу с психологией.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
  verification: {
    yandex: "ваш-ключ-яндекс-вебмастер",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased text-surface-800 bg-white font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <SchemaOrg />
      </body>
    </html>
  );
}
