import NewsCard from "../components/news/NewsCard";
import Container from "../components/ui/Container";
import { news } from "../data/news";

export default function News() {
  return (
    <>
      <section className="bg-[#4b0808] py-24 text-white">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#edc568]">
            PouaHom
          </p>

          <h1 className="mt-4 text-5xl font-black">Actualités</h1>
        </Container>
      </section>

      <section className="section-padding bg-[#fafafa]">
        <Container>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
