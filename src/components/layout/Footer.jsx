import { ArrowUpRight, Mail, MapPin, Scale } from "lucide-react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import Container from "../ui/Container";

export default function Footer() {
  const { t } = useTranslation();
  const mapsRouteUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    t("meeting.location"),
  )}`;
  const footerLinkClass =
    "group inline-flex w-fit items-center text-white/72 transition duration-300 ease-out hover:-translate-y-0.5 hover:text-white";

  return (
    <footer className="relative overflow-hidden bg-[#120f0f] text-white">
      <div className="pointer-events-none absolute -left-20 top-24 h-64 w-64 rounded-full bg-[#8f0d0d]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-20 h-64 w-64 rounded-full bg-[#d6a43b]/10 blur-3xl" />

      <Container>
        <div className="grid gap-10 border-b border-white/10 py-16 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1.3fr]">
          <div>
            <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/5 p-2.5 shadow-lg shadow-black/20">
              <img
                src="/images/logo/pouahom-logo.jpg"
                alt="PouaHom"
                className="h-16 w-16 rounded-xl object-cover"
              />
            </div>

            <p className="max-w-[18rem] text-xl font-black leading-8 text-[#edc568]">
              {t("footer.description")}
            </p>

            <div className="mt-7 flex gap-3">
              <Social label="f" />
              <Social label="ig" />
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-[#edc568]">
              {t("footer.navigation")}
            </h3>

            <div className="flex flex-col gap-3 text-[0.96rem] text-white/72">
              <Link className={footerLinkClass} to="/">
                <span>{t("nav.home")}</span>
                <span className="ml-0 h-px w-0 bg-[#edc568] transition-all duration-300 group-hover:ml-2 group-hover:w-3" />
              </Link>
              <Link className={footerLinkClass} to="/activities">
                <span>{t("nav.activities")}</span>
                <span className="ml-0 h-px w-0 bg-[#edc568] transition-all duration-300 group-hover:ml-2 group-hover:w-3" />
              </Link>
              <Link className={footerLinkClass} to="/news">
                <span>{t("nav.news")}</span>
                <span className="ml-0 h-px w-0 bg-[#edc568] transition-all duration-300 group-hover:ml-2 group-hover:w-3" />
              </Link>
              <Link className={footerLinkClass} to="/gallery">
                <span>{t("nav.gallery")}</span>
                <span className="ml-0 h-px w-0 bg-[#edc568] transition-all duration-300 group-hover:ml-2 group-hover:w-3" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-[#edc568]">
              {t("footer.association")}
            </h3>

            <div className="flex flex-col gap-3 text-[0.96rem] text-white/72">
              <Link className={footerLinkClass} to="/association">
                <span>{t("nav.association")}</span>
                <span className="ml-0 h-px w-0 bg-[#edc568] transition-all duration-300 group-hover:ml-2 group-hover:w-3" />
              </Link>

              <Link className={footerLinkClass} to="/history">
                <span>{t("nav.history")}</span>
                <span className="ml-0 h-px w-0 bg-[#edc568] transition-all duration-300 group-hover:ml-2 group-hover:w-3" />
              </Link>

              <Link className={footerLinkClass} to="/board">
                <span>{t("nav.board")}</span>
                <span className="ml-0 h-px w-0 bg-[#edc568] transition-all duration-300 group-hover:ml-2 group-hover:w-3" />
              </Link>

              <Link className={footerLinkClass} to="/documents">
                <span>{t("nav.documents")}</span>
                <span className="ml-0 h-px w-0 bg-[#edc568] transition-all duration-300 group-hover:ml-2 group-hover:w-3" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-[#edc568]">
              {t("footer.contact")}
            </h3>

            <div className="space-y-4 text-[0.96rem] text-white/72">
              <a
                href={`mailto:${t("footer.email")}`}
                className="group inline-flex items-center gap-3 transition duration-300 hover:text-white"
              >
                <Mail
                  size={18}
                  className="transition duration-300 group-hover:-translate-y-0.5 group-hover:text-[#edc568]"
                />
                {t("footer.email")}
              </a>

              <div className="flex gap-3">
                <Scale size={18} className="shrink-0" />

                <span>
                  {t("footer.court")}
                  <br />
                  {t("footer.registry")}
                </span>
              </div>

              <a
                href={mapsRouteUrl}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl border border-white/14 bg-white/4 p-4 transition duration-300 ease-out hover:-translate-y-1 hover:border-[#edc568]/55 hover:bg-white/8 hover:shadow-[0_14px_35px_-20px_rgba(237,197,104,0.75)]"
              >
                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0 text-[#edc568] transition duration-300 group-hover:-translate-y-0.5"
                  />

                  <div>
                    <p className="font-semibold text-white">
                      {t("meeting.location")}
                    </p>
                    <p className="mt-1 inline-flex items-center gap-1 text-sm text-[#edc568]">
                      {t("footer.route")}
                      <ArrowUpRight
                        size={16}
                        className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 py-7 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} PouaHom Deutschland e. V. ·{" "}
            {t("footer.rights")}
          </p>

          <div className="flex gap-5">
            <Link className={footerLinkClass} to="/impressum">
              Impressum
            </Link>
            <Link className={footerLinkClass} to="/datenschutz">
              Datenschutz
            </Link>
          </div>
        </div>
      </Container>

      <div className="border-t border-black/10 bg-[#d6a43b] py-3 text-center text-xs font-black uppercase tracking-[0.35em] text-[#2f0505]">
        {t("footer.tomorrow")}
      </div>
    </footer>
  );
}

function Social({ label }) {
  return (
    <button
      type="button"
      aria-label={label === "ig" ? "Instagram" : "Facebook"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-sm font-black uppercase text-white/90 transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:border-[#edc568]/55 hover:bg-[#8f0d0d] hover:shadow-[0_12px_30px_-16px_rgba(159,16,16,0.95)]"
    >
      {label}
    </button>
  );
}
