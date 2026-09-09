import { Mail, Scale, Send } from "lucide-react";

import Container from "../components/ui/Container";

export default function Contact() {
  return (
    <>
      <section className="bg-[#4b0808] py-24 text-white">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#edc568]">
            PouaHom Deutschland e. V.
          </p>

          <h1 className="mt-4 text-5xl font-black">Contact</h1>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black">Nous contacter</h2>

              <p className="mt-4 max-w-lg leading-7 text-neutral-600">
                Vous souhaitez obtenir plus d'informations sur notre association
                ou nos activités ? Contactez-nous.
              </p>

              <div className="mt-10 space-y-5">
                <a
                  href="mailto:info@pouahom.de"
                  className="flex items-center gap-4"
                >
                  <ContactIcon icon={Mail} />

                  <div>
                    <span className="text-sm text-neutral-500">E-mail</span>

                    <strong className="block">info@pouahom.de</strong>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <ContactIcon icon={Scale} />

                  <div>
                    <span className="text-sm text-neutral-500">Registre</span>

                    <strong className="block">Amtsgericht Mannheim</strong>

                    <span>Registernummer: VR 703420</span>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="rounded-[32px] bg-[#f8f1e3] p-7 md:p-10"
            >
              <div className="grid gap-5">
                <Input label="Nom" />

                <Input label="E-mail" type="email" />

                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    className="w-full resize-none rounded-2xl border border-neutral-200 bg-white p-4 outline-none focus:border-[#8f0d0d]"
                  />
                </div>

                <button className="flex items-center justify-center gap-2 rounded-full bg-[#8f0d0d] px-6 py-4 font-bold text-white">
                  <Send size={18} />
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactIcon({ icon: Icon }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8f0d0d] text-white">
      <Icon size={20} />
    </div>
  );
}

function Input({ label, type = "text" }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold">{label}</label>

      <input
        type={type}
        className="w-full rounded-2xl border border-neutral-200 bg-white p-4 outline-none focus:border-[#8f0d0d]"
      />
    </div>
  );
}
