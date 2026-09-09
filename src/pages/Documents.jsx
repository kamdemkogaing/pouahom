import { Download, FileText } from "lucide-react";

import Container from "../components/ui/Container";

const documents = [
  {
    title: "Statuts de l'association",
    description: "Statuts officiels de PouaHom Deutschland e. V.",
    file: "/documents/statuts.pdf",
  },
  {
    title: "Règlement intérieur",
    description: "Règlement intérieur de PouaHom Deutschland e. V.",
    file: "/documents/reglement-interieur.pdf",
  },
];

export default function Documents() {
  return (
    <>
      <section className="bg-[#4b0808] py-24 text-white">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#edc568]">
            Association
          </p>

          <h1 className="mt-4 text-5xl font-black">Documents officiels</h1>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid gap-7 md:grid-cols-2">
            {documents.map((document) => (
              <article
                key={document.title}
                className="rounded-[30px] border border-neutral-100 p-8 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8f0d0d] text-[#edc568]">
                  <FileText />
                </div>

                <h2 className="mt-6 text-2xl font-black">{document.title}</h2>

                <p className="mt-3 text-neutral-600">{document.description}</p>

                <a
                  href={document.file}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#8f0d0d] px-6 py-3 font-bold text-white"
                >
                  <Download size={18} />
                  Consulter
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
