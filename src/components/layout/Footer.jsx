import { Mail, MapPin, Scale } from "lucide-react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import Container from "../ui/Container";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#171311] text-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/images/logo/pouahom-logo.jpg"
              alt="PouaHom"
              className="mb-6 h-16 w-auto"
            />

            <p className="font-semibold text-[#edc568]">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-black text-[#edc568]">
              {t("footer.navigation")}
            </h3>

            <div className="flex flex-col gap-3 text-sm text-white/70">
              <Link to="/">{t("nav.home")}</Link>
              <Link to="/activities">{t("nav.activities")}</Link>
              <Link to="/news">{t("nav.news")}</Link>
              <Link to="/gallery">{t("nav.gallery")}</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-black text-[#edc568]">
              {t("footer.association")}
            </h3>

            <div className="flex flex-col gap-3 text-sm text-white/70">
              <Link to="/association">{t("nav.association")}</Link>

              <Link to="/history">{t("nav.history")}</Link>

              <Link to="/board">{t("nav.board")}</Link>

              <Link to="/documents">{t("nav.documents")}</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-black text-[#edc568]">
              {t("footer.contact")}
            </h3>

            <div className="space-y-4 text-sm text-white/70">
              <a href="mailto:info@pouahom.de" className="flex gap-3">
                <Mail size={18} />
                info@pouahom.de
              </a>

              <div className="flex gap-3">
                <Scale size={18} className="shrink-0" />

                <span>
                  Amtsgericht Mannheim
                  <br />
                  Registernummer: VR 703420
                </span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} />
                Deutschland
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Social label="f" />
              <Social label="ig" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/10 py-7 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} PouaHom Deutschland e. V. ·{" "}
            {t("footer.rights")}
          </p>

          <div className="flex gap-5">
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </Container>

      <div className="bg-[#d6a43b] py-3 text-center text-xs font-black uppercase tracking-[0.35em] text-[#2f0505]">
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
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-black uppercase transition hover:bg-[#8f0d0d]"
    >
      {label}
    </button>
  );
}
