import { Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

import Container from "../ui/Container";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const navigation = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.association"), path: "/association" },
    { name: t("nav.activities"), path: "/activities" },
    { name: t("nav.news"), path: "/news" },
    { name: t("nav.meetings"), path: "/meetings" },
    { name: t("nav.gallery"), path: "/gallery" },
    { name: t("nav.documents"), path: "/documents" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 shadow-[0_8px_30px_rgba(23,19,17,0.04)] backdrop-blur-xl">
      <Container>
        <div className="flex h-19 items-center justify-between">
          <Link
            to="/"
            className="group flex items-center gap-3 rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#d6a43b] focus-visible:ring-offset-4"
          >
            <img
              src="/images/logo/pouahom-logo.jpg"
              alt="PouaHom Deutschland e. V."
              className="h-11 w-auto rounded-xl object-contain transition duration-300 group-hover:scale-105 group-hover:shadow-md"
            />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `group relative rounded-full px-3.5 py-2 text-sm font-bold outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-[#d6a43b] focus-visible:ring-offset-2 ${
                    isActive
                      ? "text-[#8f0d0d]"
                      : "text-neutral-700 hover:bg-[#8f0d0d]/5 hover:text-[#8f0d0d]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span
                      className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-[#d6a43b] transition-transform duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <LanguageSwitcher />

            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-full bg-[#8f0d0d] px-5 py-3 text-sm font-bold text-white shadow-sm outline-none transition duration-300 hover:-translate-y-0.5 hover:bg-[#650909] hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#d6a43b] focus-visible:ring-offset-2"
            >
              <Mail size={17} />
              {t("nav.contact")}
            </Link>
          </div>

          <div className="flex items-center gap-3 xl:hidden">
            <LanguageSwitcher />

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8f0d0d] text-white shadow-sm outline-none transition duration-300 hover:-translate-y-0.5 hover:bg-[#650909] hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#d6a43b] focus-visible:ring-offset-2"
              aria-label="Menu"
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-neutral-100 py-4 xl:hidden">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 font-bold transition ${
                      isActive
                        ? "bg-[#8f0d0d]/8 text-[#8f0d0d]"
                        : "text-neutral-800 hover:bg-neutral-50 hover:text-[#8f0d0d]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#8f0d0d] px-5 py-3.5 text-center font-bold text-white transition hover:bg-[#650909]"
              >
                <Mail size={17} />
                {t("nav.contact")}
              </Link>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
