import { ArrowRight, CalendarDays, Clock3, MapPin } from "lucide-react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Container from "../ui/Container";

export default function NextMeeting() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[34px] border border-neutral-200/70 bg-[#120f0f] text-white shadow-[0_30px_90px_-44px_rgba(0,0,0,0.65)]">
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#8f0d0d]/18 via-transparent to-transparent" />

          <div className="relative grid lg:grid-cols-[1fr_1.35fr]">
            <div className="bg-linear-to-br from-[#9f1010] via-[#870d0d] to-[#730b0b] p-7 md:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#edc568] md:text-xs">
                {t("meeting.small")}
              </p>

              <h2 className="mt-4 max-w-sm text-3xl font-black leading-tight md:text-[2.45rem]">
                {t("meeting.title")}
              </h2>

              <Link
                to="/meetings"
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#edc568]/40 bg-[#edc568]/10 px-5 py-2.5 text-sm font-bold text-[#f3cb72] transition hover:bg-[#edc568]/18"
              >
                {t("meeting.program")}
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-4 p-6 sm:p-7 md:grid-cols-3 md:p-8 lg:p-10">
              <Info icon={CalendarDays} value={t("meeting.date")} />

              <Info icon={Clock3} value={t("meeting.time")} />

              <Info icon={MapPin} value={t("meeting.location")} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Info({ icon: Icon, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/4 p-4 backdrop-blur-xs transition hover:border-[#edc568]/45 hover:bg-white/[0.07]">
      <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#edc568]/35 bg-[#edc568]/10 text-[#edc568]">
        <Icon size={20} />
      </span>
      <p className="text-[1.02rem] font-semibold leading-7 text-white/96">
        {value}
      </p>
    </div>
  );
}
