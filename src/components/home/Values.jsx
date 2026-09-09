import { HeartHandshake, Landmark, Sprout } from "lucide-react";
import { useTranslation } from "react-i18next";

import Container from "../ui/Container";

export default function Values() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Landmark,
      title: t("values.culture"),
      text: t("values.cultureText"),
    },
    {
      icon: HeartHandshake,
      title: t("values.community"),
      text: t("values.communityText"),
    },
    {
      icon: Sprout,
      title: t("values.future"),
      text: t("values.futureText"),
    },
  ];

  return (
    <section className="bg-[#f8f1e3] py-20">
      <Container>
        <h2 className="mb-12 text-center text-3xl font-black md:text-4xl">
          {t("values.title")}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-[28px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8f0d0d] text-[#edc568]">
                <Icon size={27} />
              </div>

              <h3 className="text-xl font-black">{title}</h3>

              <p className="mt-3 leading-7 text-neutral-600">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
