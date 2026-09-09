import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { news } from "../../data/news";
import NewsCard from "../news/NewsCard";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function NewsPreview() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-[#fafafa]">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow={t("news.small")}
            title={t("news.title")}
            description={t("news.description")}
          />

          <Link
            to="/news"
            className="inline-flex items-center gap-2 font-bold text-[#8f0d0d]"
          >
            {t("news.all")}
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
