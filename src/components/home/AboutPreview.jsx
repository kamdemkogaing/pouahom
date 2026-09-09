import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function AboutPreview() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="aspect-4/3 overflow-hidden rounded-[36px] bg-[#899789]">
              <img
                src="/images/logo/pouahom-logo.jpg"
                alt="PouaHom"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="absolute -bottom-6 -right-3 rounded-3xl bg-[#8f0d0d] px-7 py-5 text-white shadow-xl md:right-8">
              <strong className="block text-2xl text-[#edc568]">PouaHom</strong>
              <span className="text-sm">Deutschland e. V.</span>
            </div>
          </div>

          <div>
            <SectionTitle
              eyebrow={t("about.small")}
              title={t("about.title")}
              description={t("about.text")}
            />

            <Link
              to="/association"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#8f0d0d]"
            >
              {t("about.more")}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
