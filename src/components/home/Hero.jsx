import { ArrowRight, CalendarDays } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Container from "../ui/Container";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-[#4b0808] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4b0808] via-[#790b0b] to-[#260303]" />

      <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-[#d6a43b]/10 blur-3xl" />

      <Container className="relative">
        <div className="grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-[#edc568]">
              {t("hero.eyebrow")}
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              {t("hero.title1")}
              <br />
              <span className="text-[#edc568]">{t("hero.title2")}</span>
              <br />
              {t("hero.title3")}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/75">
              {t("hero.description")}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/association"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d6a43b] px-7 py-4 font-bold text-[#2f0505] transition hover:bg-[#edc568]"
              >
                {t("hero.discover")}
                <ArrowRight size={19} />
              </Link>

              <Link
                to="/activities"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#4b0808]"
              >
                {t("hero.activities")}
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:flex justify-center">
            <div className="relative w-full max-w-md rounded-[40px] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
              <img
                src="/images/logo/pouahom-logo.jpeg"
                alt="PouaHom Deutschland"
                className="w-full rounded-[30px]"
              />

              <div className="absolute -bottom-8 -left-8 rounded-3xl bg-white p-5 text-[#171311] shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8f0d0d] text-white">
                    <CalendarDays />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase text-neutral-400">
                      Next
                    </p>
                    <p className="font-black">12.09.2026</p>
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
