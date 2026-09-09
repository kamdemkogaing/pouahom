import Container from "../components/ui/Container";

const images = [
  "/images/gallery/photo-1.jpg",
  "/images/gallery/photo-2.jpg",
  "/images/gallery/photo-3.jpg",
  "/images/gallery/photo-4.jpg",
  "/images/gallery/photo-5.jpg",
  "/images/gallery/photo-6.jpg",
];

export default function Gallery() {
  return (
    <>
      <section className="bg-[#4b0808] py-24 text-white">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#edc568]">
            Nos moments
          </p>

          <h1 className="mt-4 text-5xl font-black">Galerie</h1>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <div
                key={image}
                className="aspect-square overflow-hidden rounded-[24px] bg-[#f8f1e3]"
              >
                <img
                  src={image}
                  alt={`PouaHom ${index + 1}`}
                  onError={(event) => {
                    event.currentTarget.src = "/images/logo/pouahom-logo.jpg";
                  }}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
