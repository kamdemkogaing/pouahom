import { Mail, MapPin, Scale, Send, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

import Container from "../components/ui/Container";

export default function Contact() {
  const { t } = useTranslation();
  const mapsRouteUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    t("meeting.location"),
  )}`;

  return (
    <>
      <section className="relative overflow-hidden bg-[#4b0808] py-24 text-white">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#edc568]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <Container>
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#edc568]">
                {t("contactPage.eyebrow")}
              </p>

              <h1 className="mt-4 text-4xl font-black sm:text-5xl">
                {t("contactPage.title")}
              </h1>

              <p className="mt-5 max-w-3xl text-base text-white/85 sm:text-lg">
                {t("contactPage.description")}
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-md lg:w-[360px]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#edc568]">
                {t("contactPage.quickContact")}
              </p>

              <a
                href="mailto:info@pouahom.de"
                className="mt-3 inline-flex items-center gap-2 text-base font-semibold text-white transition hover:text-[#edc568]"
              >
                <Mail size={17} />
                info@pouahom.de
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-[#fffdfa]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black text-neutral-900 sm:text-4xl">
                {t("contactPage.blockTitle")}
              </h2>

              <p className="mt-4 max-w-lg leading-7 text-neutral-600">
                {t("contactPage.blockText")}
              </p>

              <div className="mt-10 grid gap-4">
                <a
                  href="mailto:info@pouahom.de"
                  className="group flex items-center gap-4 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#8f0d0d]/25 hover:shadow-md"
                >
                  <ContactIcon icon={Mail} />

                  <div>
                    <span className="text-sm text-neutral-500">
                      {t("contactPage.emailLabel")}
                    </span>

                    <strong className="block text-neutral-900">
                      info@pouahom.de
                    </strong>
                  </div>
                </a>

                <a
                  href={mapsRouteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#8f0d0d]/25 hover:shadow-md"
                >
                  <ContactIcon icon={MapPin} />

                  <div>
                    <span className="text-sm text-neutral-500">
                      {t("contactPage.addressLabel")}
                    </span>

                    <strong className="block text-neutral-900">
                      {t("meeting.location")}
                    </strong>

                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#8f0d0d]">
                      {t("footer.route")}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
                  <ContactIcon icon={Scale} />

                  <div>
                    <span className="text-sm text-neutral-500">
                      {t("contactPage.registryLabel")}
                    </span>

                    <strong className="block text-neutral-900">
                      {t("footer.court")}
                    </strong>

                    <span className="text-neutral-700">
                      {t("footer.registry")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="rounded-[32px] border border-[#8f0d0d]/10 bg-[#fff7ea] p-7 shadow-sm md:p-10"
            >
              <div className="mb-6 flex items-center gap-2 text-[#8f0d0d]">
                <Sparkles size={17} />
                <p className="text-sm font-bold uppercase tracking-[0.16em]">
                  {t("contactPage.formEyebrow")}
                </p>
              </div>

              <h3 className="text-2xl font-black text-neutral-900">
                {t("contactPage.formTitle")}
              </h3>

              <div className="grid gap-5">
                <Input
                  label={t("contactPage.name")}
                  placeholder={t("contactPage.namePlaceholder")}
                />

                <Input
                  label={t("contactPage.email")}
                  type="email"
                  placeholder={t("contactPage.emailPlaceholder")}
                />

                <div>
                  <label className="mb-2 block text-sm font-bold text-neutral-800">
                    {t("contactPage.message")}
                  </label>

                  <textarea
                    rows="6"
                    placeholder={t("contactPage.messagePlaceholder")}
                    className="w-full resize-none rounded-2xl border border-neutral-200 bg-white p-4 outline-none transition focus:border-[#8f0d0d] focus:ring-2 focus:ring-[#8f0d0d]/15"
                  />
                </div>

                <button className="flex items-center justify-center gap-2 rounded-full bg-[#8f0d0d] px-6 py-4 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#6f0a0a]">
                  <Send size={18} />
                  {t("contactPage.send")}
                </button>

                <p className="text-xs text-neutral-500">
                  {t("contactPage.formHint")}
                </p>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactIcon({ icon: Icon }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#8f0d0d] text-[#edc568]">
      <Icon size={20} />
    </div>
  );
}

function Input({ label, type = "text", placeholder = "" }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-neutral-800">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-neutral-200 bg-white p-4 outline-none transition focus:border-[#8f0d0d] focus:ring-2 focus:ring-[#8f0d0d]/15"
      />
    </div>
  );
}
