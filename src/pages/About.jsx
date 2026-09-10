import {
  Building2,
  CalendarDays,
  Landmark,
  Sparkles,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import Container from "../components/ui/Container";

export default function About() {
  const { t } = useTranslation();

  const valueItems = [
    "cultureIdentity",
    "transmission",
    "unitySharing",
    "openness",
    "engagement",
  ];

  const storySections = [
    {
      titleKey: "identityTitle",
      paragraphs: ["identityP1", "identityP2", "identityP3"],
    },
    {
      titleKey: "missionTitle",
      paragraphs: ["missionP1", "missionP2"],
    },
    {
      titleKey: "openTitle",
      paragraphs: ["openP1", "openP2", "openP3"],
    },
  ];

  return (
    <>
      <section className="bg-[#4b0808] py-24 text-white">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#edc568]">
            {t("aboutPage.eyebrow")}
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
            {t("aboutPage.orgName")}
          </h1>

          <p className="mt-5 max-w-3xl text-base text-white/85 sm:text-xl">
            {t("aboutPage.tagline")}
          </p>
        </Container>
      </section>

      <section className="section-padding bg-[#fffdfa]">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-[34px] border border-neutral-200/80 bg-white p-7 shadow-sm sm:p-10">
              <p className="text-lg leading-relaxed text-neutral-700">
                {t("aboutPage.introP1")}
              </p>

              <p className="mt-5 text-lg leading-relaxed text-neutral-700">
                {t("aboutPage.introP2")}
              </p>

              {storySections.map((section) => (
                <div key={section.titleKey} className="mt-10">
                  <h2 className="text-2xl font-black text-neutral-900 sm:text-[2rem]">
                    {t(`aboutPage.${section.titleKey}`)}
                  </h2>

                  {section.paragraphs.map((paragraphKey) => (
                    <p
                      key={paragraphKey}
                      className="mt-4 text-lg leading-relaxed text-neutral-700"
                    >
                      {t(`aboutPage.${paragraphKey}`)}
                    </p>
                  ))}
                </div>
              ))}
            </article>

            <aside className="rounded-[34px] border border-[#8f0d0d]/10 bg-[#fff6ed] p-7 shadow-sm sm:p-9 lg:sticky lg:top-24 lg:self-start">
              <h2 className="text-xl font-black text-[#8f0d0d] sm:text-2xl">
                {t("aboutPage.factsTitle")}
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3 rounded-2xl border border-[#8f0d0d]/10 bg-white p-4">
                  <CalendarDays className="mt-0.5 text-[#8f0d0d]" size={20} />
                  <p className="text-sm text-neutral-700 sm:text-base">
                    {t("aboutPage.factFounded")}
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-[#8f0d0d]/10 bg-white p-4">
                  <Building2 className="mt-0.5 text-[#8f0d0d]" size={20} />
                  <p className="text-sm text-neutral-700 sm:text-base">
                    {t("aboutPage.factLocation")}
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-[#8f0d0d]/10 bg-white p-4">
                  <Landmark className="mt-0.5 text-[#8f0d0d]" size={20} />
                  <p className="text-sm text-neutral-700 sm:text-base">
                    {t("aboutPage.factNeutral")}
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-[#8f0d0d]/10 bg-white p-4">
                  <Users className="mt-0.5 text-[#8f0d0d]" size={20} />
                  <p className="text-sm text-neutral-700 sm:text-base">
                    {t("aboutPage.factInclusive")}
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-12 rounded-[34px] border border-[#8f0d0d]/10 bg-white p-7 shadow-sm sm:p-10">
            <h2 className="text-2xl font-black text-neutral-900 sm:text-[2rem]">
              {t("aboutPage.valuesTitle")}
            </h2>

            <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {valueItems.map((itemKey) => (
                <article
                  key={itemKey}
                  className="group rounded-3xl border border-neutral-200 bg-[#fffdfa] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8f0d0d]/25 hover:shadow-lg"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#8f0d0d] text-[#edc568] transition duration-300 group-hover:scale-105">
                    <Sparkles size={16} />
                  </span>

                  <h3 className="mt-4 text-xl font-black text-neutral-900">
                    {t(`aboutPage.values.${itemKey}.title`)}
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-neutral-700">
                    {t(`aboutPage.values.${itemKey}.text`)}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-[34px] border border-[#edc568]/45 bg-[#fff7ea] p-7 sm:p-10">
            <h2 className="text-2xl font-black text-[#8f0d0d] sm:text-[2rem]">
              {t("aboutPage.futureTitle")}
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-neutral-700">
              {t("aboutPage.futureP1")}
            </p>

            <p className="mt-5 text-lg leading-relaxed text-neutral-700">
              {t("aboutPage.futureP2")}
            </p>

            <p className="mt-7 text-lg font-black text-[#8f0d0d]">
              {t("aboutPage.finalLine")}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
