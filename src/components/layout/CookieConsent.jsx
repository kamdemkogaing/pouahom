import { Check, Cookie, Settings, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CONSENT_KEY = "pouahom-cookie-consent-v1";

const defaultPreferences = {
  necessary: true,
  analytics: false,
};

export default function CookieConsent() {
  const { t } = useTranslation();
  const [consentState, setConsentState] = useState(readConsentState);
  const [preferences, setPreferences] = useState(consentState.preferences);
  const [isVisible, setIsVisible] = useState(consentState.isVisible);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const savePreferences = (nextPreferences) => {
    const nextState = { isVisible: false, preferences: nextPreferences };
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(nextPreferences));
    setConsentState(nextState);
    setPreferences(nextPreferences);
    setIsVisible(false);
    setIsSettingsOpen(false);
  };

  const rejectOptional = () => {
    savePreferences(defaultPreferences);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-60 sm:inset-x-5 sm:bottom-5">
      <section
        aria-label={t("cookies.title")}
        className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-[#211817]/95 text-white shadow-[0_24px_80px_-28px_rgba(0,0,0,0.75)] backdrop-blur-xl"
      >
        <div className="flex items-start gap-4 p-5 sm:p-6">
          <div className="hidden h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#edc568] text-[#2f0505] sm:grid">
            <Cookie size={21} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#edc568]">
                  {t("cookies.eyebrow")}
                </p>
                <h2 className="mt-2 text-xl font-black tracking-tight sm:text-2xl">
                  {t("cookies.title")}
                </h2>
              </div>
              <button
                type="button"
                onClick={rejectOptional}
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-white/55 transition hover:bg-white/10 hover:text-white"
                aria-label={t("cookies.close")}
              >
                <X size={17} />
              </button>
            </div>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/68">
              {t("cookies.description")}
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link
                to="/datenschutz"
                className="text-sm font-semibold text-[#edc568] underline decoration-[#edc568]/40 underline-offset-4 transition hover:text-white"
              >
                {t("cookies.privacy")}
              </Link>

              <div className="flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setIsSettingsOpen((current) => !current)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 px-4 py-2.5 text-sm font-bold text-white/80 transition hover:border-[#edc568]/60 hover:text-white"
                >
                  <Settings size={16} />
                  {t("cookies.settings")}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    savePreferences({ necessary: true, analytics: true })
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#edc568] px-5 py-2.5 text-sm font-black text-[#2f0505] transition hover:bg-white"
                >
                  <Check size={16} />
                  {t("cookies.acceptAll")}
                </button>
              </div>
            </div>
          </div>
        </div>

        {isSettingsOpen ? (
          <div className="border-t border-white/10 bg-black/10 p-5 sm:px-6">
            <div className="grid gap-3 sm:grid-cols-2">
              <PreferenceRow
                label={t("cookies.necessary")}
                description={t("cookies.necessaryDescription")}
                checked
                disabled
              />
              <PreferenceRow
                label={t("cookies.analytics")}
                description={t("cookies.analyticsDescription")}
                checked={preferences.analytics}
                onChange={(event) =>
                  setPreferences((current) => ({
                    ...current,
                    analytics: event.target.checked,
                  }))
                }
              />
            </div>
            <button
              type="button"
              onClick={() => savePreferences(preferences)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-[#edc568]/50 px-5 py-2.5 text-sm font-bold text-[#edc568] transition hover:bg-[#edc568] hover:text-[#2f0505] sm:w-auto"
            >
              {t("cookies.save")}
            </button>
          </div>
        ) : null}
      </section>
    </div>
  );
}

function readConsentState() {
  const savedConsent = window.localStorage.getItem(CONSENT_KEY);

  if (!savedConsent) {
    return { isVisible: true, preferences: defaultPreferences };
  }

  try {
    return {
      isVisible: false,
      preferences: { ...defaultPreferences, ...JSON.parse(savedConsent) },
    };
  } catch {
    window.localStorage.removeItem(CONSENT_KEY);
    return { isVisible: true, preferences: defaultPreferences };
  }
}

function PreferenceRow({
  label,
  description,
  checked,
  disabled = false,
  onChange,
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/8">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="mt-1 h-4 w-4 accent-[#edc568]"
      />
      <span>
        <span className="block text-sm font-bold text-white">{label}</span>
        <span className="mt-1 block text-xs leading-5 text-white/55">
          {description}
        </span>
      </span>
    </label>
  );
}
