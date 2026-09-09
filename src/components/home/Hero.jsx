import { ArrowRight, CalendarDays } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Container from "../ui/Container";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-[#4b0808] text-white">
      <div className="absolute inset-0 bg-linear-to-br from-[#4b0808] via-[#790b0b] to-[#260303]" />

      <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-[#d6a43b]/10 blur-3xl" />

      <Container className="relative">
        <div className="grid min-h-140 items-center gap-10 py-14 lg:grid-cols-2 lg:py-16">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#edc568] md:text-[11px]">
              {t("hero.eyebrow")}
            </p>

            <h1 className="max-w-2xl text-[clamp(1.85rem,5.2vw,4rem)] font-black leading-[0.95] tracking-tight">
              {t("hero.title1")}
              <br />
              <span className="text-[#edc568]">{t("hero.title2")}</span>
              <br />
              {t("hero.title3")}
            </h1>

            <p className="mt-4 max-w-xl text-[0.92rem] leading-6 text-white/75 md:text-[0.98rem] md:leading-7">
              {t("hero.description")}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/association"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d6a43b] px-6 py-3 font-semibold text-[0.88rem] text-[#2f0505] transition hover:bg-[#edc568] md:text-[0.92rem]"
              >
                {t("hero.discover")}
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/activities"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-[0.88rem] text-white transition hover:bg-white hover:text-[#4b0808] md:text-[0.92rem]"
              >
                {t("hero.activities")}
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:flex justify-center">
            <div className="relative w-full max-w-107.5 overflow-hidden rounded-[34px] border border-white/12 bg-white/5 p-4 shadow-2xl backdrop-blur">
              <img
                src="/images/logo/pouahom-logo.jpg"
                alt="PouaHom Deutschland"
                className="aspect-4/5 w-full rounded-[26px] object-cover"
              />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-white px-4 py-3 text-[#171311] shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8f0d0d] text-white">
                    <CalendarDays size={19} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-neutral-400">
                      Next
                    </p>
                    <p className="whitespace-nowrap text-[0.88rem] font-black leading-tight xl:text-[0.95rem]">
                      12.09.2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
