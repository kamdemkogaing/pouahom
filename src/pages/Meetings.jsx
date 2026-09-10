import { CalendarDays, Clock3, MapPin, Sparkles } from "lucide-react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import Container from "../components/ui/Container";

function getSecondSaturday(year, month) {
  const firstDay = new Date(year, month, 1);
  const firstDayWeekday = firstDay.getDay();
  const firstSaturdayDate = ((6 - firstDayWeekday + 7) % 7) + 1;
  const secondSaturdayDate = firstSaturdayDate + 7;

  return new Date(year, month, secondSaturdayDate);
}

export default function Meetings() {
  const { t, i18n } = useTranslation();

  const meetings = useMemo(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const upcomingMeetings = [];

    let year = today.getFullYear();
    let month = today.getMonth();

    while (upcomingMeetings.length < 8) {
      const meetingDate = getSecondSaturday(year, month);

      if (meetingDate >= today) {
        upcomingMeetings.push(meetingDate);
      }

      month += 1;

      if (month > 11) {
        month = 0;
        year += 1;
      }
    }

    return upcomingMeetings;
  }, []);

  const languageTag = i18n.language || "fr";
  const nextMeeting = meetings[0];
  const mapsRouteUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    t("meeting.location"),
  )}`;

  return (
    <>
      <section className="relative overflow-hidden bg-[#4b0808] py-24 text-white">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#edc568]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <Container>
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#edc568]">
                {t("meetingsPage.eyebrow")}
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
                {t("meetingsPage.title")}
              </h1>

              <p className="mt-5 max-w-3xl text-base text-white/85 sm:text-lg">
                {t("meetingsPage.description")}
              </p>
            </div>

            {nextMeeting && (
              <article className="w-full rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-md lg:w-[360px]">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#edc568]">
                  {t("meetingsPage.nextBadge")}
                </p>

                <p className="mt-3 text-base font-semibold text-white/95">
                  {new Intl.DateTimeFormat(languageTag, {
                    weekday: "long",
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  }).format(nextMeeting)}
                </p>

                <p className="mt-2 text-sm text-white/80">
                  {t("meeting.time")} •{" "}
                  <a
                    href={mapsRouteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#edc568] underline decoration-[#edc568]/60 underline-offset-2 transition hover:text-white"
                  >
                    {t("meeting.location")}
                  </a>
                </p>
              </article>
            )}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-[#fffdfa]">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="group rounded-3xl border border-[#8f0d0d]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8f0d0d] text-[#edc568]">
                <CalendarDays size={20} />
              </div>

              <h2 className="mt-4 text-lg font-black text-neutral-900">
                {t("meetingsPage.ruleTitle")}
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
                {t("meetingsPage.ruleText")}
              </p>
            </article>

            <article className="group rounded-3xl border border-[#8f0d0d]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8f0d0d] text-[#edc568]">
                <Clock3 size={20} />
              </div>

              <h2 className="mt-4 text-lg font-black text-neutral-900">
                {t("meetingsPage.timeTitle")}
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
                {t("meetingsPage.timeValue")}
              </p>
            </article>

            <article className="group rounded-3xl border border-[#8f0d0d]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8f0d0d] text-[#edc568]">
                <MapPin size={20} />
              </div>

              <h2 className="mt-4 text-lg font-black text-neutral-900">
                {t("meetingsPage.locationTitle")}
              </h2>

              <a
                href={mapsRouteUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm leading-relaxed text-neutral-600 underline decoration-[#8f0d0d]/35 underline-offset-4 transition hover:text-[#8f0d0d] sm:text-base"
              >
                {t("meeting.location")}
              </a>
            </article>
          </div>

          <div className="mt-10 rounded-[34px] border border-neutral-200 bg-white p-7 shadow-sm sm:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-black text-neutral-900 sm:text-3xl">
                {t("meetingsPage.timelineTitle")}
              </h2>

              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-emerald-700">
                <Sparkles size={14} />
                {t("meetingsPage.nextBadge")}
              </span>
            </div>

            <p className="mt-3 text-neutral-600">
              {t("meetingsPage.timelineDescription")}
            </p>

            <div className="relative mt-8 space-y-5 before:absolute before:bottom-3 before:left-[21px] before:top-3 before:w-px before:bg-[#8f0d0d]/15">
              {meetings.map((meetingDate, index) => {
                const monthLabel = new Intl.DateTimeFormat(languageTag, {
                  month: "long",
                  year: "numeric",
                }).format(meetingDate);

                const fullDate = new Intl.DateTimeFormat(languageTag, {
                  weekday: "long",
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                }).format(meetingDate);

                return (
                  <article
                    key={`${meetingDate.getFullYear()}-${meetingDate.getMonth()}`}
                    className="group relative grid gap-4 rounded-3xl border border-neutral-200 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#8f0d0d]/30 hover:bg-[#fffaf6] hover:shadow-md sm:grid-cols-[auto_1fr] sm:p-6"
                  >
                    <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8f0d0d] font-black text-[#edc568] shadow-sm">
                      {index + 1}
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f0d0d]/75">
                        {monthLabel}
                      </p>

                      <h3 className="mt-2 text-xl font-black text-neutral-900">
                        {t("meetingsPage.entryTitle", { index: index + 1 })}
                      </h3>

                      <p className="mt-2 text-sm text-neutral-600 sm:text-base">
                        {fullDate}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                        <span className="rounded-full bg-neutral-100 px-3 py-1 font-semibold text-neutral-700">
                          {t("meeting.time")}
                        </span>

                        <a
                          href={mapsRouteUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full bg-[#fff1d2] px-3 py-1 font-semibold text-[#7c2d12] transition hover:bg-[#ffe7b3]"
                        >
                          {t("meeting.location")}
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
