import {
  ArrowUpRight,
  BriefcaseBusiness,
  Mail,
  ShieldCheck,
  X,
} from "lucide-react";
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
      <section className="relative overflow-hidden bg-linear-to-br from-[#2f0505] via-[#720b0b] to-[#a31919] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-[#edc568]/20 bg-[#edc568]/10 blur-3xl" />
        <Container>
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#edc568] md:text-sm">
              <ShieldCheck size={16} />
              {t("board.eyebrow")}
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight md:text-7xl">
              {t("board.title")}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              {t("board.description")}
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-[#f7f5f1]">
        <Container>
          <div className="mb-12 flex flex-col gap-5 border-b border-[#171311]/12 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8f0d0d]">
                {t("board.memberLabel")}
              </p>
              <h2 className="mt-3 max-w-xl text-2xl font-black tracking-tight text-[#171311] md:text-4xl">
                {t("board.title")}
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-neutral-500">
              {boardMembers.length.toString().padStart(2, "0")}{" "}
              {t("board.memberLabel")}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {boardMembers.map((member, index) => (
              <article
                key={member.id}
                className="group overflow-hidden rounded-[26px] border border-neutral-200/90 bg-white shadow-[0_12px_35px_-28px_rgba(23,19,17,0.65)] transition duration-500 hover:-translate-y-2 hover:border-[#8f0d0d]/25 hover:shadow-[0_24px_55px_-28px_rgba(78,8,8,0.5)]"
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
                  <span className="absolute bottom-4 right-4 text-5xl font-black leading-none text-white/70 drop-shadow-sm">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>

                <div className="p-6 md:p-7">
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
                  <p className="mt-2 text-[0.98rem] font-semibold text-[#8f0d0d]">
                    {t(member.roleKey)}
                  </p>
                  <button
                    type="button"
                    onClick={() => openModal(member)}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#171311] transition hover:text-[#8f0d0d]"
                  >
                    {t("board.viewProfile")}
                    <ArrowUpRight
                      size={16}
                      className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {selectedMember ? (
        <div
          className={`fixed inset-0 z-50 overflow-y-auto p-5 sm:p-6 transition duration-300 ${
            isModalVisible
              ? "bg-[#140f0f]/75 opacity-100 backdrop-blur-sm"
              : "bg-[#140f0f]/0 opacity-0 backdrop-blur-none"
          }`}
          onClick={closeModal}
        >
          <div className="grid min-h-full place-items-center py-1 sm:py-2">
            <article
              role="dialog"
              aria-modal="true"
              aria-label={selectedMember.name}
              onClick={(event) => event.stopPropagation()}
              className={`relative max-h-[calc(100dvh-2.5rem)] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/15 bg-white shadow-2xl transition duration-300 ease-out sm:max-h-[calc(100dvh-3rem)] sm:rounded-[30px] ${
                isModalVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-6 scale-95 opacity-0"
              }`}
            >
              <div className="absolute right-3 top-3 z-20 sm:right-4 sm:top-4">
                <button
                  type="button"
                  onMouseDown={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    closeModal();
                  }}
                  onClick={closeModal}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white/95 text-neutral-500 shadow-sm transition hover:border-[#8f0d0d]/35 hover:text-[#8f0d0d] sm:h-10 sm:w-10"
                  aria-label={t("board.closeModal")}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="grid md:grid-cols-[220px_1fr]">
                <div className="w-full bg-[#e9ece4] md:h-full">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = "/images/logo/pouahom-logo.jpg";
                    }}
                    className="block h-auto w-full object-contain md:h-full md:object-cover"
                  />
                </div>

                <div className="p-6 sm:p-7 md:p-8">
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
