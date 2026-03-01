"use client";

import { useState, useEffect } from "react";

type Tab = "about" | "skills" | "reviews";

/* ─── Placeholder icon component (swap for real Heroicons later) ─── */
function Icon({ d, className = "" }: { d: string; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

function IconSolid({ d, className = "" }: { d: string; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path fillRule="evenodd" d={d} clipRule="evenodd" />
    </svg>
  );
}

/* ─── Icon paths (Heroicons) ─── */
const ICONS = {
  sun: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z",
  moon: "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z",
  xMark: "M6 18 18 6M6 6l12 12",
  arrowLeft: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18",
  heart:
    "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
  userGroup:
    "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
  arrowTrendingUp:
    "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941",
  clock: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  user: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
  squares:
    "M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z",
  star: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
  chevronRight: "m8.25 4.5 7.5 7.5-7.5 7.5",
  commandLine:
    "m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z",
  eye: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  cursorArrowRays:
    "M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59",
  map: "M9 6.75V15m0-8.25a1.5 1.5 0 0 1 3 0V15m-3 0a1.5 1.5 0 0 0 3 0m-9.75 0h15M2.25 15a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25M2.25 15V5.625A2.25 2.25 0 0 1 4.5 3.375h15a2.25 2.25 0 0 1 2.25 2.25V15",
  shieldCheck:
    "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  codeBracket:
    "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
  sparkles:
    "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z",
  codeBracketSquare:
    "M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z",
  globeAlt:
    "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
  checkBadgeSolid:
    "M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
  userPlus:
    "M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z",
};

/* ─── Skills data ─── */
const skills = [
  {
    name: "16+ Years Web Development",
    icon: ICONS.clock,
    color: "text-amber-500 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-900/30",
  },
  {
    name: "C Programming Foundation",
    icon: ICONS.commandLine,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/30",
  },
  {
    name: "UX / UI Design",
    icon: ICONS.eye,
    color: "text-purple-500 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-900/30",
  },
  {
    name: "Figma Design",
    icon: ICONS.cursorArrowRays,
    color: "text-pink-500 dark:text-pink-400",
    bg: "bg-pink-50 dark:bg-pink-900/30",
  },
  {
    name: "User Flows",
    icon: ICONS.map,
    color: "text-teal-500 dark:text-teal-400",
    bg: "bg-teal-50 dark:bg-teal-900/30",
  },
  {
    name: "QA Testing",
    icon: ICONS.shieldCheck,
    color: "text-green-500 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-900/30",
  },
  {
    name: "React",
    icon: ICONS.codeBracket,
    color: "text-cyan-500 dark:text-cyan-400",
    bg: "bg-cyan-50 dark:bg-cyan-900/30",
  },
  {
    name: "Tailwind CSS",
    icon: ICONS.sparkles,
    color: "text-sky-500 dark:text-sky-400",
    bg: "bg-sky-50 dark:bg-sky-900/30",
  },
  {
    name: "JavaScript",
    icon: ICONS.codeBracketSquare,
    color: "text-yellow-500 dark:text-yellow-400",
    bg: "bg-yellow-50 dark:bg-yellow-900/30",
  },
  {
    name: "HTML & CSS",
    icon: ICONS.globeAlt,
    color: "text-orange-500 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-900/30",
  },
];

/* ─── Social links (brand SVG paths, viewBox 24x24) ─── */
const socialLinks = [
  {
    href: "https://pe.linkedin.com/in/edson-fiestas-22ab1617",
    label: "LinkedIn",
    viewBox: "0 0 24 24",
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    href: "https://www.behance.net/edsonfiestas",
    label: "Behance",
    viewBox: "0 0 24 24",
    d: "M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.63.16-1.3.24-2.004.24H0V4.51h6.938v-.007zM6.545 10.16c.6 0 1.096-.166 1.486-.5.39-.333.58-.803.58-1.41 0-.35-.06-.64-.19-.87-.13-.24-.3-.42-.52-.55-.22-.13-.48-.22-.76-.27-.28-.05-.57-.08-.87-.08H3.72v3.68h2.825zm.185 5.98c.34 0 .655-.04.94-.13.29-.08.54-.21.75-.38.21-.17.37-.39.49-.65.12-.26.18-.57.18-.93 0-.74-.21-1.29-.64-1.62-.43-.34-.99-.51-1.69-.51H3.72v4.22h3.01zM15.41 5.753h5.657v1.6H15.41v-1.6zM21.81 13.16c-.24.66-.59 1.22-1.05 1.69-.46.47-1.01.84-1.67 1.11-.66.27-1.39.41-2.2.41-.8 0-1.54-.14-2.2-.42-.66-.28-1.23-.67-1.7-1.15-.47-.49-.84-1.08-1.1-1.77-.27-.69-.4-1.45-.4-2.27s.13-1.59.4-2.28c.27-.69.64-1.28 1.12-1.78.48-.5 1.05-.88 1.71-1.16.66-.28 1.39-.42 2.18-.42.87 0 1.62.17 2.25.52.64.34 1.16.81 1.57 1.39.41.59.71 1.27.89 2.06.19.79.24 1.64.17 2.55h-7.56c.04.76.3 1.38.78 1.84.49.46 1.12.69 1.89.69.58 0 1.07-.15 1.47-.46.4-.31.67-.64.82-1.01h2.63l.01.01zM19.2 11.07c-.07-.66-.33-1.19-.79-1.57-.46-.38-1.02-.57-1.68-.57-.42 0-.77.07-1.07.2-.3.14-.55.32-.75.53-.2.22-.35.46-.45.73-.1.26-.16.51-.18.77h4.92v.01z",
  },
  {
    href: "https://www.instagram.com/narunarudg/?hl=es-la",
    label: "Instagram",
    viewBox: "0 0 24 24",
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
];

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════ */

export default function ProfileCard() {
  const [activeTab, setActiveTab] = useState<Tab>("about");
  const [darkMode, setDarkMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [tabAnimating, setTabAnimating] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem("darkMode", String(next));
    document.documentElement.classList.toggle("dark", next);
  };

  const switchTab = (tab: Tab) => {
    if (tab === activeTab) return;
    setTabAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setTabAnimating(false);
    }, 150);
  };

  return (
    <>
      <main className="w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl shadow-gray-400 dark:shadow-black/50 rounded-3xl overflow-hidden transition-colors duration-500">
        {/* ── Top Bar ── */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <div className="flex items-center gap-3">
            {/* <Icon
              d={ICONS.arrowLeft}
              className="w-5 h-5 text-gray-800 dark:text-white"
            /> */}
            <span className="text-base font-semibold text-gray-800 dark:text-white">
              Freelancer Profile
            </span>
          </div>
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="relative w-12 h-6 rounded-full bg-gray-200 dark:bg-blue-600 transition-colors duration-300 focus:outline-none cursor-pointer"
              aria-label="Toggle dark mode"
            >
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center ${
                  darkMode ? "translate-x-6" : "translate-x-0"
                }`}
              >
                {darkMode ? (
                  <Icon d={ICONS.moon} className="w-3 h-3 text-blue-600" />
                ) : (
                  <Icon d={ICONS.sun} className="w-3 h-3 text-amber-500" />
                )}
              </div>
            </button>
            {/* Heart */}
            <button onClick={() => setLiked(!liked)} className="cursor-pointer">
              <Icon
                d={ICONS.heart}
                className={`w-6 h-6 transition-colors duration-300 ${
                  liked
                    ? "text-rose-500 fill-rose-500"
                    : "text-rose-400 dark:text-rose-400"
                }`}
              />
            </button>
          </div>
        </div>

        {/* ── Blue Banner + Profile Image ── */}
        <div className="relative">
          <div className="h-28 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700" />
          <div className="absolute bottom-0 left-5 translate-y-1/2">
            <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-900 shadow-lg transition-colors duration-300">
              <img
                src="/images/faceProfile.png"
                alt="Edson"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ── Name & Title (left-aligned, offset for photo) ── */}
        <div className="pt-14 px-5 pb-3">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
              Edson Fiestas
            </h1>
            <IconSolid
              d={ICONS.checkBadgeSolid}
              className="w-5 h-5 text-blue-500"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
            Graphic design / UX / UI / Front Developer
          </p>
        </div>

        {/* ── Stats Row ── */}
        <div className="flex items-center gap-6 px-5 pb-4 text-sm">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <Icon
                d={ICONS.userGroup}
                className="w-4 h-4 text-gray-800 dark:text-gray-500"
              />
              <span className="font-semibold text-gray-800 dark:text-white">
                315
              </span>
            </div>
            <span className="text-gray-400 dark:text-gray-500">Projects</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <Icon
                d={ICONS.arrowTrendingUp}
                className="w-4 h-4 text-gray-800 dark:text-gray-500"
              />
              <span className="font-semibold text-gray-800 dark:text-white">
                $219,000
              </span>
            </div>
            <span className="text-gray-400 dark:text-gray-500 hidden min-[400px]:inline">
              Total earnings
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-start gap-1.5">
              <Icon
                d={ICONS.clock}
                className="w-4 h-4 text-gray-800 dark:text-gray-500"
              />
              <span className="font-semibold text-gray-800 dark:text-white">
                $40
              </span>
            </div>
            <span className="text-gray-400 dark:text-gray-500">
              Hourly rate
            </span>
          </div>
        </div>

        {/* ── Social Links (circular) ── */}
        <div className="flex items-center gap-3 px-5 pb-5">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-blue-400 hover:text-blue-500 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={link.viewBox}
                fill="currentColor"
                className="w-4.5 h-4.5"
              >
                <path d={link.d} />
              </svg>
            </a>
          ))}
        </div>

        {/* ── Tabs ── */}
        <div className="flex items-center border-t border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
          {(["about", "skills", "reviews"] as Tab[]).map((tab) => {
            const tabIcon =
              tab === "about"
                ? ICONS.user
                : tab === "skills"
                  ? ICONS.squares
                  : ICONS.star;
            const tabLabel =
              tab === "about"
                ? "About me"
                : tab === "skills"
                  ? "Skills"
                  : "Reviews";
            return (
              <button
                key={tab}
                onClick={() => switchTab(tab)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <Icon d={tabIcon} className="w-4 h-4" />
                {tabLabel}
              </button>
            );
          })}
        </div>

        {/* ── Tab Content ── */}
        <div
          className={`px-5 pt-4 pb-2 overflow-y-auto max-h-64 custom-scrollbar transition-all duration-200 ${
            tabAnimating
              ? "opacity-0 translate-y-2"
              : "opacity-100 translate-y-0"
          }`}
        >
          {activeTab === "about" && <AboutContent />}
          {activeTab === "skills" && <SkillsContent />}
          {activeTab === "reviews" && <ReviewsContent />}
        </div>

        {/* ── CTA Button ── */}
        <div className="px-5 pb-5 pt-2">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer"
          >
            Book Mentoring
            <Icon d={ICONS.userPlus} className="w-5 h-5" />
          </button>
        </div>
      </main>

      {/* ═══ Mentoring Modal ═══ */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-lg w-full shadow-2xl animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-200 cursor-pointer"
            >
              <Icon d={ICONS.xMark} className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              My Work
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden aspect-square cursor-pointer group"
                >
                  <img
                    src="/images/faceProfile.png"
                    alt={`Project ${i}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ─── Tab: About Me ─── */
function AboutContent() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed animate-skill-in transition-colors duration-300">
        I design products that are simple, useful, and look great. My focus is
        on creating experiences people love while meeting real business needs.
        Every design I create aims to be functional, engaging, and ready for the
        market...
      </p>

      <div
        className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-white animate-skill-in transition-colors duration-300"
        style={{ animationDelay: "50ms" }}
      >
        I can help with <span className="text-lg">👍</span>
      </div>

      {[
        "Mobile app UI/UX design",
        "Interactive prototypes",
        "Design Systems & Components",
      ].map((service, i) => (
        <div
          key={service}
          className="flex items-center justify-between py-3 px-4 border border-gray-100 dark:border-gray-800 rounded-xl text-sm text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 cursor-pointer animate-skill-in"
          style={{ animationDelay: `${(i + 2) * 50}ms` }}
        >
          {service}
          <Icon
            d={ICONS.chevronRight}
            className="w-4 h-4 text-gray-400 dark:text-gray-500"
          />
        </div>
      ))}
    </div>
  );
}

/* ─── Tab: Skills ─── */
function SkillsContent() {
  return (
    <div className="flex flex-col gap-2">
      {skills.map((skill, i) => (
        <div
          key={skill.name}
          className="flex items-center justify-between py-3 px-4 border border-gray-100 dark:border-gray-800 rounded-xl transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-sm animate-skill-in"
          style={{ animationDelay: `${i * 50}ms` }}
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg ${skill.bg} ${skill.color} transition-colors duration-300`}
            >
              <Icon d={skill.icon} className="w-5 h-5" />
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-200 font-medium transition-colors duration-300">
              {skill.name}
            </span>
          </div>
          <Icon
            d={ICONS.chevronRight}
            className="w-4 h-4 text-gray-400 dark:text-gray-500"
          />
        </div>
      ))}
    </div>
  );
}

/* ─── Tab: Reviews ─── */
function ReviewsContent() {
  const reviews = [
    {
      name: "Maria Lopez",
      text: "Excellent work on our website redesign. Very professional and delivered on time.",
    },
    {
      name: "Carlos Rivera",
      text: "Great UX skills. The user flows he created improved our conversion rate significantly.",
    },
    {
      name: "Ana Torres",
      text: "Edson is a talented designer and developer. Highly recommended for any project.",
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {reviews.map((review, i) => (
        <div
          key={review.name}
          className="p-4 border border-gray-100 dark:border-gray-800 rounded-xl animate-skill-in transition-colors duration-300"
          style={{ animationDelay: `${i * 60}ms` }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-500 text-xs font-bold">
              {review.name.charAt(0)}
            </div>
            <span className="text-sm font-semibold text-gray-800 dark:text-white">
              {review.name}
            </span>
            <div className="flex gap-0.5 ml-auto">
              {[1, 2, 3, 4, 5].map((s) => (
                <Icon
                  key={s}
                  d={ICONS.star}
                  className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            {review.text}
          </p>
        </div>
      ))}
    </div>
  );
}
