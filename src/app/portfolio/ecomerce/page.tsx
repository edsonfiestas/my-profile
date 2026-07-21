"use client";

import React, { useState, useRef, useEffect } from "react";

interface MenuItem {
  label: string;
  submenu: { label: string; href: string }[];
}

export default function EcomercePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula la inicialización o carga de datos
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);
  //MENU ACORDION
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  // Datos del menú
  const menuItems: MenuItem[] = [
    {
      label: "Hombres",
      submenu: [
        { label: "Camisas", href: "/hombres/camisas" },
        { label: "Pantalones", href: "/hombres/pantalones" },
        { label: "Zapatos", href: "/hombres/zapatos" },
        { label: "Accesorios", href: "/hombres/accesorios" },
      ],
    },
    {
      label: "Mujeres",
      submenu: [
        { label: "Vestidos", href: "/mujeres/vestidos" },
        { label: "Blusas", href: "/mujeres/blusas" },
        { label: "Faldas", href: "/mujeres/faldas" },
        { label: "Zapatos", href: "/mujeres/zapatos" },
      ],
    },
    {
      label: "Niños",
      submenu: [
        { label: "Ropa", href: "/ninos/ropa" },
        { label: "Juguetes", href: "/ninos/juguetes" },
        { label: "Zapatos", href: "/ninos/zapatos" },
      ],
    },
    {
      label: "Outlet",
      submenu: [
        { label: "Outlet Hombres", href: "/outlet/hombres" },
        { label: "Outlet Mujeres", href: "/outlet/mujeres" },
        { label: "Outlet Niños", href: "/outlet/ninos" },
      ],
    },
    {
      label: "Tiendas",
      submenu: [
        { label: "Lima", href: "/tiendas/lima" },
        { label: "Callao", href: "/tiendas/callao" },
        { label: "Arequipa", href: "/tiendas/arequipa" },
      ],
    },
  ];

  // Enlace normal (Compañias)
  const companiasLink = {
    label: "Compañias",
    href: "https://tusitio.com/companias",
    target: "_blank",
  };

  const toggleMenu = (label: string) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <div className="flex flex-col h-screen w-screen text-slate-600">
      <div className="absolute p-3 bg-slate-900/60 w-screen h-screen z-50">
        <div className="flex justify-center items-end h-full">
          <div className="bg-white rounded-lg shadow-lg w-full max-h-3/4 overflow-hidden">
            <div className="flex flex-col w-auto gap-8 h-full  rounded-xl p-4">
              <div className="overflow-y-auto overflow-x-hidden scrollbar flex-1 min-h-0">
                <nav className="flex flex-col gap-2">
                  {menuItems.map((item) => (
                    <div
                      key={item.label}
                      className="border border-gray-200 rounded-lg overflow-visible" // ← Cambiamos a overflow-visible
                    >
                      {/* Botón del acordeón */}
                      <button
                        onClick={() => toggleMenu(item.label)}
                        className={`w-full px-4 py-3 bg-white hover:bg-gray-50 flex justify-between items-center transition-colors ${
                          openMenu === item.label
                            ? "rounded-t-lg"
                            : "rounded-lg"
                        }`}
                      >
                        <span className="font-medium">{item.label}</span>
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 flex-shrink-0 ${
                            openMenu === item.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Submenú - QUITAMOS overflow-hidden */}
                      <div
                        className={`
              ${openMenu === item.label ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
              transition-all duration-300 ease-in-out
            `}
                      >
                        <div className="bg-gray-50 px-4 py-2 border-t border-gray-200 rounded-b-lg">
                          {item.submenu.map((sub) => (
                            <a
                              key={sub.href}
                              href={sub.href}
                              className="block py-2 px-3 hover:bg-gray-200 rounded transition-colors text-gray-700 hover:text-gray-900"
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Enlace normal (Compañias) */}
                  <a
                    href={companiasLink.href}
                    target={companiasLink.target}
                    rel="noopener noreferrer"
                    className="px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center font-medium"
                  >
                    {companiasLink.label}
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="bg-tertiary-color w-full">
        <div className="flex flex-col w-full">
          <div className="py-3 bg-secondary-color text-teal-800">
            <div className="carrusel-top">
              <div className="carrusel-track font-semibold text-xs tracking-wider uppercase">
                <span>Participa para ganar el kit "Hecho en verano"</span>
                <span>•</span>
                <span>Participa para ganar el kit "Hecho en verano"</span>
                <span>•</span>
                <span>Participa para ganar el kit "Hecho en verano"</span>
                <span>•</span>
                <span>Participa para ganar el kit "Hecho en verano"</span>
                <span>•</span>
                <span>Participa para ganar el kit "Hecho en verano"</span>
                <span>•</span>
                <span>Participa para ganar el kit "Hecho en verano"</span>
                <span>•</span>
                <span>Participa para ganar el kit "Hecho en verano"</span>
                <span>•</span>
                <span>Participa para ganar el kit "Hecho en verano"</span>
                <span>•</span>
                {/* Duplicar exactamente para hacer el loop infinito perfecto */}
                <span>Participa para ganar el kit "Hecho en verano"</span>
                <span>•</span>
                <span>Participa para ganar el kit "Hecho en verano"</span>
                <span>•</span>
                <span>Participa para ganar el kit "Hecho en verano"</span>
                <span>•</span>
                <span>Participa para ganar el kit "Hecho en verano"</span>
                <span>•</span>
                <span>Participa para ganar el kit "Hecho en verano"</span>
                <span>•</span>
                <span>Participa para ganar el kit "Hecho en verano"</span>
                <span>•</span>
                <span>Participa para ganar el kit "Hecho en verano"</span>
                <span>•</span>
                <span>Participa para ganar el kit "Hecho en verano"</span>
                <span>•</span>
              </div>
            </div>
          </div>
          <div className="px-3 xl:px-0 py-3 w-full xl:w-7xl mx-auto">
            <div className="flex justify-between items-center">
              <div className="flex xl:hidden gap-3">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-800 flex gap-2 items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                  </svg>
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-800 flex md:hidden gap-2 items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <div className="">
                <img
                  src="/logo-apaisado.svg"
                  alt="Logotipo"
                  className="w-full max-w-20 h-auto object-contain"
                />
              </div>
              <nav className="hidden xl:flex gap-3 ">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary-border-color border-4 px-3 py-1"
                >
                  Hombres
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary-border-color border-4 px-3 py-1"
                >
                  Mujeres
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary-border-color border-4 px-3 py-1"
                >
                  Niños
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary-border-color border-4 px-3 py-1"
                >
                  Outlet
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary-border-color border-4 px-3 py-1"
                >
                  Compañias
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary-border-color border-4 px-3 py-1"
                >
                  Tiendas
                </a>
              </nav>
              <div className="flex gap-6">
                <div className="hidden lg:flex gap-3">
                  <div className="text-sm">
                    <select name="currency" id="currency" className="px-1 h-8">
                      <option value="PEN">PEN</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="JPY">JPY</option>
                      <option value="CNY">CNY</option>
                      <option value="KRW">KRW</option>
                    </select>
                  </div>
                  <div className="text-sm">
                    <select name="language" id="language" className="px-1 h-8">
                      <option value="es">ES</option>
                      <option value="en">EN</option>
                      <option value="pt">PT</option>
                      <option value="fr">FR</option>
                      <option value="de">DE</option>
                      <option value="it">IT</option>
                      <option value="ja">JA</option>
                      <option value="zh">ZH</option>
                      <option value="ko">KO</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-800  gap-2 items-center hidden md:flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-800  gap-2 items-center hidden xl:flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-800  gap-2 items-center hidden md:flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-800 flex gap-2 items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="">libre</section>
      <footer>footer</footer>
    </div>
  );
}
