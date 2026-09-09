import { Clock3, Download, FileText, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

import Container from "../components/ui/Container";

const documents = [
  {
    key: "statutes",
    file: "/documents/statuts.pdf",
    status: "available",
  },
  {
    key: "rules",
    file: "/documents/reglement-interieur.pdf",
    status: "available",
  },
  {
    key: "minutes",
    status: "comingSoon",
  },
  {
    key: "membership",
    status: "comingSoon",
  },
];

export default function Documents() {
  const { t } = useTranslation();
  const availableCount = documents.filter(
    (document) => document.status === "available",
  ).length;
  const comingSoonCount = documents.length - availableCount;

  return (
    <>
      <section className="bg-[#4b0808] py-24 text-white">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#edc568]">
            {t("documents.eyebrow")}
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-5xl">
            {t("documents.title")}
          </h1>

          <p className="mt-5 max-w-3xl text-base text-white/80 sm:text-lg">
            {t("documents.description")}
          </p>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#8f0d0d]/15 bg-white px-5 py-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                {t("documents.availableLabel")}
              </p>

              <p className="mt-2 text-3xl font-black text-[#8f0d0d]">
                {availableCount}
              </p>
            </div>

            <div className="rounded-2xl border border-[#edc568]/45 bg-[#fffaf0] px-5 py-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f0d0d]/80">
                {t("documents.comingSoonLabel")}
              </p>

              <p className="mt-2 text-3xl font-black text-[#8f0d0d]">
                {comingSoonCount}
              </p>
            </div>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {documents.map((document) => (
              <article
                key={document.key}
                className="group flex h-full flex-col rounded-[30px] border border-neutral-100 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#8f0d0d]/20 hover:shadow-xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8f0d0d] text-[#edc568] transition duration-300 group-hover:scale-105">
                    <FileText />
                  </div>

                  {document.status === "available" ? (
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-emerald-700">
                      <Sparkles size={14} />
                      {t("documents.statusAvailable")}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-amber-700">
                      <Clock3 size={14} />
                      {t("documents.statusSoon")}
                    </span>
                  )}
                </div>

                <div className="mt-6 flex-1">
                  <h2 className="text-2xl font-black">
                    {t(`documents.items.${document.key}.title`)}
                  </h2>

                  <p className="mt-3 text-neutral-600">
                    {t(`documents.items.${document.key}.description`)}
                  </p>
                </div>

                {document.status === "available" ? (
                  <a
                    href={document.file}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 self-start rounded-full bg-[#8f0d0d] px-6 py-3 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#6f0a0a]"
                  >
                    <Download size={18} />
                    {t("documents.consult")}
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="mt-7 inline-flex cursor-not-allowed items-center gap-2 self-start rounded-full border border-neutral-200 bg-neutral-50 px-6 py-3 font-bold text-neutral-500"
                  >
                    <Clock3 size={18} />
                    {t("documents.soonButton")}
                  </button>
                )}
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-[#8f0d0d]/10 bg-linear-to-r from-[#fffaf0] via-[#fff7ea] to-[#fffaf4] p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f0d0d]/75">
              {t("documents.updateTitle")}
            </p>

            <p className="mt-3 text-base text-neutral-700 sm:text-lg">
              {t("documents.updateText")}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
