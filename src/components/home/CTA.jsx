import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Container from "../ui/Container";

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#d6a43b] py-20">
      <Container>
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-black text-[#2f0505] md:text-5xl">
              {t("cta.title")}
            </h2>

            <p className="mt-4 text-lg text-[#2f0505]/70">{t("cta.text")}</p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#4b0808] px-7 py-4 font-bold text-white"
          >
            {t("cta.button")}
            <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
