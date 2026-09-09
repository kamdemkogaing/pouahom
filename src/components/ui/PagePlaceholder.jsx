import Container from "./Container";

export default function PagePlaceholder({ eyebrow, title, description }) {
  return (
    <>
      <section className="bg-gradient-to-br from-[#4b0808] to-[#8f0d0d] py-24 text-white">
        <Container>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#edc568]">
            {eyebrow}
          </p>

          <h1 className="max-w-4xl text-4xl font-black md:text-6xl">{title}</h1>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <p className="max-w-3xl text-lg leading-8 text-neutral-600">
            {description}
          </p>
        </Container>
      </section>
    </>
  );
}
