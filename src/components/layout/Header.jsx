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
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-xl">
      <Container>
        <div className="flex h-[82px] items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/logo/pouahom-logo.jpg"
              alt="PouaHom Deutschland e. V."
              className="h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-6">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition ${
                    isActive
                      ? "text-[#8f0d0d]"
                      : "text-neutral-700 hover:text-[#8f0d0d]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-3">
            <LanguageSwitcher />

            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-full bg-[#8f0d0d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#650909]"
            >
              <Mail size={17} />
              {t("nav.contact")}
            </Link>
          </div>

          <div className="flex xl:hidden items-center gap-3">
            <LanguageSwitcher />

            <button
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8f0d0d] text-white"
              aria-label="Menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="xl:hidden border-t border-neutral-100 py-5">
            <nav className="flex flex-col">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="border-b border-neutral-100 py-4 font-semibold text-neutral-800"
                >
                  {item.name}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-5 rounded-xl bg-[#8f0d0d] px-5 py-4 text-center font-bold text-white"
              >
                {t("nav.contact")}
              </Link>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
