import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Flag,
  Sparkles,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import Container from "../components/ui/Container";

const milestones = [
  { year: "2021", icon: Flag, tone: "red" },
  { year: "2023", icon: Sparkles, tone: "gold", featured: true },
  { year: "2024", icon: Users, tone: "green" },
  { year: "2025", icon: CalendarDays, tone: "red" },
  { year: "2026", icon: Sparkles, tone: "gold" },
];

export default function History() {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative overflow-hidden bg-[#2f0505] py-20 text-white md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(237,197,104,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(237,197,104,0.18)_1px,transparent_1px)] bg-size-[56px_56px] opacity-20" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-[#edc568]/20" />
        <Container>
          <div className="relative grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#edc568] md:text-sm">
                {t("history.eyebrow")}
              </p>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] md:text-8xl">
                {t("history.title")}
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
                {t("history.description")}
              </p>
            </div>

            <div className="relative border-l border-[#edc568]/35 pl-6 lg:mb-2">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">
                {t("history.timelineLabel")}
              </p>
              <div className="mt-3 flex items-end gap-3">
                <span className="text-6xl font-black leading-none text-[#edc568] md:text-8xl">
                  21
                </span>
                <ArrowRight className="mb-2 text-[#edc568]" size={24} />
                <span className="text-6xl font-black leading-none md:text-8xl">
                  26
                </span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">
                {t("history.todayText")}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding overflow-hidden bg-[#f5f3ee]">
        <Container>
          <div className="mb-20 flex flex-col justify-between gap-5 border-b border-[#171311]/15 pb-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8f0d0d]">
                {t("history.timelineLabel")}
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-[-0.03em] text-[#171311] md:text-5xl">
                {t("history.timelineTitle")}
              </h2>
            </div>
            <span className="text-5xl font-black leading-none text-[#171311]/10 md:text-7xl">
              01—05
            </span>
          </div>

          <div className="relative">
            <div className="absolute bottom-10 left-4.75 top-10 w-px bg-linear-to-b from-[#8f0d0d] via-[#d6a43b] to-[#71836b] md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-16 md:space-y-5">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isRight = index % 2 === 1;

                return (
                  <article
                    key={milestone.year}
                    className="relative md:grid md:min-h-64 md:grid-cols-2 md:gap-20"
                  >
                    <div
                      className={`pl-16 md:pl-0 ${isRight ? "md:col-start-2" : "md:col-start-1 md:text-right"}`}
                    >
                      <p className="text-6xl font-black leading-none tracking-[-0.06em] text-[#171311]/12 md:text-8xl">
                        {milestone.year}
                      </p>
                      <div className="-mt-7 md:-mt-10">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8f0d0d]">
                          {milestone.year}
                        </span>
                        <h3 className="mt-3 text-2xl font-black tracking-tight text-[#171311] md:text-3xl">
                          {t(`history.events.${milestone.year}.title`)}
                        </h3>
                        <p className="mt-3 max-w-md text-base leading-7 text-neutral-600 md:ml-auto">
                          {t(`history.events.${milestone.year}.text`)}
                        </p>
                      </div>

                      {milestone.featured ? (
                        <div className="mt-7 max-w-md overflow-hidden rounded-sm border border-[#d6a43b]/35 bg-[#2f0505] text-left shadow-[0_22px_45px_-28px_rgba(47,5,5,0.8)] md:ml-auto">
                          <div className="relative flex min-h-36 items-end overflow-hidden bg-[radial-gradient(circle_at_75%_30%,rgba(214,164,59,0.55),transparent_32%),linear-gradient(135deg,#8f0d0d,#2f0505)] p-6">
                            <div className="absolute -right-4 -top-8 text-[9rem] font-black leading-none text-white/8">
                              23
                            </div>
                            <div className="relative">
                              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#edc568]">
                                {t("history.eventCard.label")}
                              </p>
                              <p className="mt-2 text-xl font-black text-white">
                                {t("history.eventCard.title")}
                              </p>
                            </div>
                          </div>
                          <p className="p-6 text-sm leading-6 text-white/70">
                            {t("history.eventCard.text")}
                          </p>
                        </div>
                      ) : null}
                    </div>

                    <div className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border-4 border-[#f5f3ee] bg-[#8f0d0d] text-white shadow-[0_0_0_6px_rgba(143,13,13,0.08)] md:left-1/2 md:-translate-x-1/2">
                      <Icon size={15} />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex justify-center text-[#8f0d0d]">
            <ArrowDown size={22} />
          </div>

          <div className="mt-10 border-l-4 border-[#d6a43b] bg-[#2f0505] p-7 text-white md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#edc568]">
              {t("history.todayLabel")}
            </p>
            <p className="mt-4 max-w-3xl text-xl font-semibold leading-8 md:text-2xl">
              {t("history.todayText")}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
