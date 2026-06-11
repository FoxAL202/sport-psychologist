import type { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "О специалисте",
  description:
    "Клинический психолог, специалист по спортивной психологии. Опыт работы с детьми и подростками более 8 лет.",
};

const stages = [
  { title: "Знакомство", desc: "Бесплатная 20-минутная консультация, на которой мы знакомимся, обсуждаем запрос, и я рассказываю, как буду работать." },
  { title: "Диагностика", desc: "Первая полноценная сессия. Провожу диагностику эмоционального состояния ребёнка и определяю стратегию работы." },
  { title: "Работа", desc: "Регулярные сессии 1-2 раза в неделю. Прорабатываем запрос через выбранные методики, адаптированные под возраст." },
  { title: "Результат", desc: "Фиксируем изменения. Даю рекомендации родителям и тренеру, чтобы закрепить результат в повседневной жизни." },
];

const principles = [
  "Индивидуальный подход — нет шаблонных решений и готовых протоколов",
  "Безопасная среда — ребёнок не боится говорить о том, что чувствует на самом деле",
  "Работа с родителями — вы не отдаёте ребёнка, вы становитесь частью процесса",
  "Конфиденциальность — всё, что сказано на сессии, остаётся между нами",
  "Доказательные методы — использую только научно обоснованные подходы",
];

export default function ONasPage() {
  return (
    <>
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start mb-16 sm:mb-24">
            <div className="lg:col-span-2">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-brand-100 via-brand-50 to-brand-200 border border-brand-200 flex items-center justify-center shadow-lg">
                <div className="text-center p-10">
                  <div className="w-28 h-28 rounded-full bg-brand-200/60 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-5xl">👩‍⚕️</span>
                  </div>
                  <p className="text-brand-600 font-medium text-sm">[Ваше фото]</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-4 block">
                О специалисте
              </span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                Спортивный психолог<br />
                <span className="text-accent-600">с опытом 8+ лет</span>
              </h1>
              <div className="space-y-5 text-surface-500 leading-relaxed max-w-xl">
                <p>
                  Меня зовут [Имя], я клинический психолог и практикующий специалист по спортивной психологии.
                  Окончила [название вуза] по специальности «Клиническая психология», прошла профессиональную
                  переподготовку по направлению «Спортивная психология».
                </p>
                <p>
                  В прошлом — действующая спортсменка (мастер спорта по [вид спорта]). Знаю не понаслышке,
                  что такое предстартовая лихорадка, страх ошибки, работа на пределе возможностей и
                  восстановление после травм. Этот опыт позволяет мне понимать спортсменов глубже, чем позволяет любая теория.
                </p>
                <p>
                  За 8 лет практики провела более 2000 консультаций, работала с детьми и подростками от 6 до 18 лет.
                  Постоянно повышаю квалификацию, участвую в профильных конференциях и прохожу супервизии.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 p-5 sm:p-8 bg-surface-50 rounded-2xl max-w-lg">
                {[
                  { num: "8+", label: "лет опыта" },
                  { num: "300+", label: "детей" },
                  { num: "2000+", label: "консультаций" },
                ].map((s) => (
                  <div key={s.num} className="text-center">
                    <div className="font-heading text-3xl font-bold text-brand-900">{s.num}</div>
                    <div className="text-sm text-surface-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Принципы */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-4 block">
                Принципы
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-900 mb-4 leading-tight">
                Как я работаю
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {principles.map((p) => (
                <div key={p} className="bg-surface-50 rounded-2xl p-6 border border-surface-100 hover:border-brand-200 transition-colors">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-accent-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-surface-600 leading-relaxed">{p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Этапы */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-4 block">
                Этапы
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-900 mb-4 leading-tight">
                Как проходит работа
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stages.map((s, i) => (
                <div key={s.title} className="relative text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-800 to-brand-900 text-white flex items-center justify-center font-heading font-bold text-xl mx-auto mb-5 shadow-sm group-hover:shadow-md transition-shadow">
                    {i + 1}
                  </div>
                  <h3 className="font-heading font-bold text-brand-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-brand-900 to-brand-950 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-500/10 rounded-full blur-[100px]" />
        </div>
        <div className="container-main relative text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Запишитесь на консультацию
          </h2>
          <p className="text-surface-300 max-w-xl mx-auto mb-8">
            Бесплатная 20-минутная встреча, чтобы познакомиться и обсудить ваш запрос.
          </p>
          <Link
            href="/kontakty"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-accent-600 hover:to-accent-700 transition-all shadow-lg shadow-accent-500/25"
          >
            Записаться <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
