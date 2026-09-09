import { BriefcaseBusiness, Mail, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Container from "../components/ui/Container";
import { boardMembers } from "../data/boardMembers";

export default function Board() {
  const { t } = useTranslation();
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (member) => {
    setSelectedMember(member);
    requestAnimationFrame(() => {
      setIsModalVisible(true);
    });
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (!selectedMember) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  useEffect(() => {
    if (!selectedMember || isModalVisible) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setSelectedMember(null);
    }, 240);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isModalVisible, selectedMember]);

  return (
    <>
      <section className="bg-linear-to-br from-[#4b0808] via-[#7c0d0d] to-[#8f0d0d] py-24 text-white">
        <Container>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#edc568] md:text-sm">
            {t("board.eyebrow")}
          </p>

          <h1 className="max-w-4xl text-4xl font-black md:text-6xl">
            {t("board.title")}
          </h1>
        </Container>
      </section>

      <section className="section-padding bg-[#faf9f7]">
        <Container>
          <div className="mb-12 rounded-[28px] border border-neutral-200/80 bg-white p-6 shadow-[0_20px_60px_-48px_rgba(0,0,0,0.6)] md:p-8">
            <p className="max-w-3xl text-base leading-8 text-neutral-600 md:text-lg">
              {t("board.description")}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {boardMembers.map((member) => (
              <article
                key={member.id}
                className="group overflow-hidden rounded-[30px] border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative overflow-hidden bg-[#e9ece4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = "/images/logo/pouahom-logo.jpg";
                    }}
                    className="aspect-4/5 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/75 bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#8f0d0d] backdrop-blur">
                    <BriefcaseBusiness size={13} />
                    {t("board.memberLabel")}
                  </span>
                </div>

                <div className="p-6">
                  <h2>
                    <button
                      type="button"
                      onClick={() => openModal(member)}
                      className="group inline-flex items-center gap-2 text-left text-xl font-black text-[#171311] transition hover:text-[#8f0d0d]"
                    >
                      <span>{member.name}</span>
                      <span className="h-px w-0 bg-[#8f0d0d] transition-all duration-300 group-hover:w-8" />
                    </button>
                  </h2>
                  <p className="mt-2 text-[0.98rem] font-medium text-neutral-600">
                    {t(member.roleKey)}
                  </p>
                  <button
                    type="button"
                    onClick={() => openModal(member)}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#8f0d0d] transition hover:text-[#6e0a0a]"
                  >
                    {t("board.viewProfile")}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {selectedMember ? (
        <div
          className={`fixed inset-0 z-50 p-4 transition duration-300 ${
            isModalVisible
              ? "bg-[#140f0f]/75 opacity-100 backdrop-blur-sm"
              : "bg-[#140f0f]/0 opacity-0 backdrop-blur-none"
          }`}
          onClick={closeModal}
        >
          <div className="grid h-full place-items-center">
            <article
              role="dialog"
              aria-modal="true"
              aria-label={selectedMember.name}
              onClick={(event) => event.stopPropagation()}
              className={`relative w-full max-w-2xl overflow-hidden rounded-[30px] border border-white/15 bg-white shadow-2xl transition duration-300 ease-out ${
                isModalVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-6 scale-95 opacity-0"
              }`}
            >
              <div className="absolute right-4 top-4 z-20">
                <button
                  type="button"
                  onMouseDown={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    closeModal();
                  }}
                  onClick={closeModal}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition hover:border-[#8f0d0d]/35 hover:text-[#8f0d0d]"
                  aria-label={t("board.closeModal")}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="grid md:grid-cols-[220px_1fr]">
                <div className="bg-[#e9ece4]">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = "/images/logo/pouahom-logo.jpg";
                    }}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-7 md:p-8">
                  <p
                    className={`text-[11px] font-bold uppercase tracking-[0.2em] text-[#8f0d0d] transition duration-300 ${
                      isModalVisible
                        ? "translate-y-0 opacity-100 delay-75"
                        : "translate-y-2 opacity-0"
                    }`}
                  >
                    {t("board.memberLabel")}
                  </p>

                  <h3
                    className={`mt-2 text-3xl font-black text-[#171311] transition duration-300 ${
                      isModalVisible
                        ? "translate-y-0 opacity-100 delay-100"
                        : "translate-y-2 opacity-0"
                    }`}
                  >
                    {selectedMember.name}
                  </h3>

                  <p
                    className={`mt-2 text-base font-semibold text-neutral-700 transition duration-300 ${
                      isModalVisible
                        ? "translate-y-0 opacity-100 delay-150"
                        : "translate-y-2 opacity-0"
                    }`}
                  >
                    {t(selectedMember.roleKey)}
                  </p>

                  <p
                    className={`mt-6 text-sm font-bold uppercase tracking-[0.16em] text-neutral-500 transition duration-300 ${
                      isModalVisible
                        ? "translate-y-0 opacity-100 delay-200"
                        : "translate-y-2 opacity-0"
                    }`}
                  >
                    {t("board.profileTitle")}
                  </p>

                  <p
                    className={`mt-2 leading-7 text-neutral-600 transition duration-300 ${
                      isModalVisible
                        ? "translate-y-0 opacity-100 delay-200"
                        : "translate-y-2 opacity-0"
                    }`}
                  >
                    {t(selectedMember.infoKey)}
                  </p>

                  <a
                    href={`mailto:${selectedMember.email}`}
                    className={`mt-7 inline-flex items-center gap-2 rounded-full border border-[#8f0d0d]/20 bg-[#8f0d0d]/6 px-4 py-2 text-sm font-semibold text-[#8f0d0d] transition duration-300 hover:bg-[#8f0d0d]/12 ${
                      isModalVisible
                        ? "translate-y-0 opacity-100 delay-250"
                        : "translate-y-2 opacity-0"
                    }`}
                  >
                    <Mail size={16} />
                    {selectedMember.email}
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      ) : null}
    </>
  );
}
