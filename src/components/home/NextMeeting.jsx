import { ArrowRight, CalendarDays, Clock3, MapPin } from "lucide-react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Container from "../ui/Container";

export default function NextMeeting() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="overflow-hidden rounded-[36px] bg-[#171311] text-white">
          <div className="grid lg:grid-cols-[1fr_1.3fr]">
            <div className="bg-[#8f0d0d] p-8 md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#edc568]">
                {t("meeting.small")}
              </p>

              <h2 className="mt-4 text-4xl font-black">{t("meeting.title")}</h2>

              <Link
                to="/meetings"
                className="mt-8 inline-flex items-center gap-2 font-bold text-[#edc568]"
              >
                {t("meeting.program")}
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-8 p-8 md:grid-cols-3 md:p-12">
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
    <div>
      <Icon className="mb-4 text-[#edc568]" size={27} />
      <p className="font-bold leading-6">{value}</p>
    </div>
  );
}
