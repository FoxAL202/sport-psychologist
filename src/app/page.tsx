import { ArrowRight, CheckCircle, Calendar, MessageCircle, Star, Shield, Heart, Zap } from "lucide-react";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import BlogCard from "@/components/BlogCard";
import { services, reviews, blogPosts, problems, methods } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-accent-500/10 rounded-full blur-[80px] sm:blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-brand-400/10 rounded-full blur-[100px] sm:blur-[150px]" />
          <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/5 rounded-full blur-[200px]" />
        </div>
        <div className="container-main relative pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-full text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Приём онлайн и в Саратове
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
              Помогаю юным спортсменам<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 via-accent-400 to-accent-500">
                раскрыть свой потенциал
              </span>
            </h1>
            <p className="text-lg md:text-xl text-surface-300 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              Детский спортивный психолог. Работаю с тревожностью, страхом ошибок, потерей мотивации,
              агрессией и другими запросами, которые мешают ребёнку расти в спорте.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <Link
                href="/kontakty"
                className="w-full sm:w-auto bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-accent-500/25"
              >
                <Calendar size={18} />
                Записаться на консультацию
              </Link>
              <Link
                href="/uslugi"
                className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                Узнать подробнее
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 text-sm text-surface-400">
              {[
                { icon: Star, text: "Опыт 8+ лет" },
                { icon: Heart, text: "300+ детей" },
                { icon: Zap, text: "5 видов спорта" },
              ].map((item) => (
                <span key={item.text} className="flex items-center gap-2">
                  <item.icon size={16} className="text-accent-400" />
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Проблемы */}
      <section className="py-16 sm:py-24 lg:py-32 bg-surface-50">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-4 block">
              С чем работаю
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
              Узнаёте своего ребёнка?
            </h2>
            <p className="text-surface-600 text-lg leading-relaxed">
              Чаще всего ко мне приходят с этими запросами. Посмотрите, насколько это про вас.
            </p>
          </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="group bg-white rounded-2xl p-7 border border-surface-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col">
                <div className="text-4xl mb-5">{p.icon}</div>
                <h3 className="font-heading font-bold text-lg text-brand-900 mb-2">{p.title}</h3>
                <p className="text-surface-500 text-sm leading-relaxed flex-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-16 sm:py-24 lg:py-32" id="uslugi">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-4 block">
                Направления
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 leading-tight">
                Для каждого вида спорта — <br className="hidden lg:block" />
                <span className="text-accent-600">свой подход</span>
              </h2>
            </div>
            <p className="text-surface-500 max-w-md text-sm leading-relaxed">
              Психология хоккеиста и гимнастки — это разные миры. Я подбираю методику под нагрузку, возраст и специфику конкретного спорта.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Цитата / Блок доверия */}
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px]" />
        </div>
        <div className="container-main relative py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl md:text-7xl font-heading font-bold text-accent-500/20 leading-none mb-6">&ldquo;</div>
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-heading font-medium leading-relaxed text-surface-200 mb-8">
              Спорт — это не только тело. Это характер, эмоции и умение вставать после падений.
              Я помогаю детям научиться этому.
            </blockquote>
            <div className="w-12 h-0.5 bg-accent-500 mx-auto mb-4" />
            <div className="text-sm text-surface-400">Спортивный психолог</div>
          </div>
        </div>
      </section>

      {/* О себе */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-4 block">
                О специалисте
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                Я знаю спорт <span className="text-accent-600">изнутри</span>
              </h2>
              <div className="space-y-5 text-surface-500 leading-relaxed">
                <p>
                  Меня зовут [Имя], я клинический психолог и спортивный психолог с опытом работы более 8 лет.
                  Сама прошла путь от юной спортсменки до мастера спорта — знаю, что такое страх перед стартом,
                  горечь поражений и давление ожиданий.
                </p>
                <p>
                  Специализируюсь на работе с детьми и подростками от 6 до 18 лет. Помогаю не просто
                  «решить проблему», а научить ребёнка понимать себя, свои эмоции и использовать их
                  как силу, а не как помеху.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 mt-10 p-5 sm:p-8 bg-surface-50 rounded-2xl">
                {[
                  { num: "8+", label: "лет опыта", desc: "непрерывной практики" },
                  { num: "300+", label: "детей", desc: "которым помогла" },
                  { num: "5", label: "видов спорта", desc: "в работе" },
                ].map((s) => (
                  <div key={s.num} className="text-center">
                    <div className="font-heading text-3xl lg:text-4xl font-bold text-brand-900">{s.num}</div>
                    <div className="text-sm font-semibold text-brand-700 mt-1">{s.label}</div>
                    <div className="text-xs text-surface-400 mt-0.5">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-brand-100 to-brand-200 border border-brand-200 overflow-hidden flex items-center justify-center shadow-xl">
                <div className="text-center p-8">
                  <div className="w-28 h-28 rounded-full bg-brand-300/40 mx-auto mb-5 flex items-center justify-center">
                    <span className="text-5xl">👩‍⚕️</span>
                  </div>
                  <p className="text-brand-600 font-medium text-sm">[Ваше фото]</p>
                </div>
              </div>
              <div className="absolute -bottom-5 right-0 sm:-right-5 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-5 sm:p-7 shadow-xl max-w-[180px] sm:max-w-[220px]">
                <div className="font-heading text-xl font-bold text-white mb-1">Бесплатно</div>
                <div className="text-sm text-white/80">20-минутная консультация-знакомство</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Методы */}
      <section className="py-16 sm:py-24 lg:py-32 bg-surface-50" id="metody">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-4 block">
              Методология
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
              Как я работаю
            </h2>
            <p className="text-surface-500 text-lg">
              Использую научно обоснованные подходы, адаптированные под возраст и особенности ребёнка.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {methods.map((m) => (
              <div key={m.title} className="bg-white rounded-2xl p-7 border border-surface-100 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300 flex flex-col">
                <h3 className="font-heading font-bold text-lg text-brand-900 mb-3">{m.title}</h3>
                <p className="text-surface-500 text-sm leading-relaxed flex-1">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 sm:py-24 lg:py-32" id="otzyvy">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-4 block">
              Отзывы
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
              Что говорят родители
            </h2>
            <p className="text-surface-500 text-lg">
              Реальные отзывы родителей, которые уже прошли программу работы со мной.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Блог */}
      <section className="py-16 sm:py-24 lg:py-32 bg-surface-50" id="blog">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-4 block">
                Блог
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 leading-tight">
                Полезные статьи
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-accent-600 transition-colors"
            >
              Читать все статьи <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.slice(0, 4).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <div className="mt-10 text-center lg:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-accent-600 transition-colors"
            >
              Читать все статьи <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-950 to-brand-900" />
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-accent-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-brand-400/10 rounded-full blur-[120px]" />
        </div>
        <div className="container-main relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Готовы помочь ребёнку?
            </h2>
            <p className="text-surface-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Запишитесь на бесплатную 20-минутную консультацию, чтобы познакомиться,
              обсудить запрос и понять, подхожу ли я вам и вашему ребёнку.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kontakty"
                className="w-full sm:w-auto bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-accent-500/25"
              >
                <Calendar size={18} />
                Выбрать время
              </Link>
              <a
                href="https://wa.me/79000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
