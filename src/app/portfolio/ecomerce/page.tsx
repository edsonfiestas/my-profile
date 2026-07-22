"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

type MenuItem = {
  title: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const ITEMS: MenuItem[] = [
  {
    title: "Hombres",
    children: [
      { label: "Polos", href: "/hombres/polos" },
      { label: "Pantalones", href: "/hombres/pantalones" },
      { label: "Zapatillas", href: "/hombres/zapatillas" },
      { label: "Poleras", href: "/hombres/poleras" },
      { label: "Gorras", href: "/hombres/gorras" },
      { label: "Correas", href: "/hombres/correas" },
      { label: "Zapatos", href: "/hombres/zapatos" },
    ],
  },
  {
    title: "Mujeres",
    children: [
      { label: "Vestidos", href: "/mujeres/vestidos" },
      { label: "Blusas", href: "/mujeres/blusas" },
    ],
  },
  {
    title: "Outlets",
    children: [
      { label: "Polos", href: "/hombres/polos" },
      { label: "Pantalones", href: "/hombres/pantalones" },
      { label: "Zapatillas", href: "/hombres/zapatillas" },
    ],
  },
  {
    title: "Compañias",
    children: [
      { label: "Vestidos", href: "/mujeres/vestidos" },
      { label: "Blusas", href: "/mujeres/blusas" },
    ],
  },
  {
    title: "Tiendas",
    children: [
      { label: "Vestidos", href: "/mujeres/vestidos" },
      { label: "Blusas", href: "/mujeres/blusas" },
    ],
  },
  {
    title: "Ofertas",
    href: "/ofertas",
  },
];

type MenuKey =
  | "hombres"
  | "mujeres"
  | "ninos"
  | "outlet"
  | "companias"
  | "tiendas";

export default function EcomercePage() {
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // cursor custom que sigue el mouse sobre el overlay
  const [isOverOverlay, setIsOverOverlay] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle =
    (index: number) => (e: React.SyntheticEvent<HTMLDetailsElement>) => {
      if (e.currentTarget.open) {
        setOpenIndex(index);
      } else if (openIndex === index) {
        setOpenIndex(null);
      }
    };

  const closeNav = () => {
    setIsNavOpen(false);
    setIsOverOverlay(false);
  };

  const handleOverlayMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  //MENU PRINCIPAL
  const toggleMenu = (key: MenuKey) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenMenu((prev) => (prev === key ? null : key)); // si ya está abierto, cierra; si no, abre y cierra los demás
  };

  // click fuera cierra el menú abierto
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col h-screen w-full text-slate-600">
      {/* BUSCADOR PRINCIPAL*/}
      <div
        className={`${isVisible ? "fixed" : "hidden"} inset-0 p-3 bg-slate-900/60 w-screen h-screen z-50 cursor-none`}
      >
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col gap-12 bg-white p-6 rounded-lg shadow-lg w-full h-full cursor-auto">
            <section className="flex-none">
              <div className="flex flex-row gap-6 items-start">
                <input
                  type="text"
                  name=""
                  id=""
                  className="text-xl border-b border-b-slate-400 px-6 py-3 w-full focus:outline-none"
                  placeholder="Buscar por..."
                />
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    setIsVisible(false);
                  }}
                  className="cursor-pointer bg-white rounded-full justify-center items-center flex h-10 w-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </div>
            </section>
            <section className="flex-1 overflow-y-auto overflow-x-hidden scrollbar min-h-0 w-full">
              <div className=" grid grid-cols-6 gap-12">
                <div className="col-span-6 md:col-span-3 lg:col-span-2">
                  <h3 className="uppercase text-lg text-gray-900 font-bold mb-9">
                    Productos
                  </h3>
                  <nav className="flex flex-col gap-9">
                    <article className="">
                      <a
                        href="/producto/123"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/faceProfile.png"
                            alt="Camiseta Básica Algodón"
                            className="w-full h-full object-cover"
                          />
                        </figure>
                        <div className="flex flex-col gap-1">
                          <h4 className="text-gray-900 font-bold uppercase">
                            Camiseta Básica Algodón
                          </h4>
                          <span className="text-lg">$15.00 USD</span>
                        </div>
                      </a>
                    </article>
                    <article className="">
                      <a
                        href="/producto/123"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/faceProfile.png"
                            alt="Jeans Clásico Ajuste Recto"
                            className="w-full h-full object-cover"
                          />
                        </figure>
                        <div className="flex flex-col gap-1">
                          <h4 className="text-gray-900 font-bold uppercase">
                            Jeans Clásico Ajuste Recto
                          </h4>
                          <span className="text-lg">$45.00 USD</span>
                        </div>
                      </a>
                    </article>
                    <article className="">
                      <a
                        href="/producto/123"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/faceProfile.png"
                            alt="Sudadera con Capucha Unisex"
                            className="w-full h-full object-cover"
                          />
                        </figure>
                        <div className="flex flex-col gap-1">
                          <h4 className="text-gray-900 font-bold uppercase">
                            Sudadera con Capucha Unisex
                          </h4>
                          <span className="text-lg">$35.00 USD</span>
                        </div>
                      </a>
                    </article>
                    <article className="">
                      <a
                        href="/producto/123"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/faceProfile.png"
                            alt="Vestido Floral Veraniego"
                            className="w-full h-full object-cover"
                          />
                        </figure>
                        <div className="flex flex-col gap-1">
                          <h4 className="text-gray-900 font-bold uppercase">
                            Vestido Floral Veraniego
                          </h4>
                          <span className="text-lg">$50.00 USD</span>
                        </div>
                      </a>
                    </article>
                    <article className="">
                      <a
                        href="/producto/123"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/faceProfile.png"
                            alt="Chaleco Ligero Acolchado"
                            className="w-full h-full object-cover"
                          />
                        </figure>
                        <div className="flex flex-col gap-1">
                          <h4 className="text-gray-900 font-bold uppercase">
                            Chaleco Ligero Acolchado
                          </h4>
                          <span className="text-lg">$80.00 USD</span>
                        </div>
                      </a>
                    </article>
                    <article className="">
                      <a
                        href="/producto/123"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/faceProfile.png"
                            alt="Short Deportivo Elástico"
                            className="w-full h-full object-cover"
                          />
                        </figure>
                        <div className="flex flex-col gap-1">
                          <h4 className="text-gray-900 font-bold uppercase">
                            Short Deportivo Elástico
                          </h4>
                          <span className="text-lg">$25.00 USD</span>
                        </div>
                      </a>
                    </article>
                  </nav>
                </div>
                <div className="col-span-6 md:col-span-3 lg:col-span-2">
                  <h3 className="uppercase text-lg text-gray-900 font-bold mb-9">
                    Enlaces de interés
                  </h3>
                  <nav className="flex flex-col gap-6">
                    <span>
                      <a href="#" className="hover:font-bold">
                        Camiseta Básica Algodón
                      </a>
                    </span>
                    <span>
                      <a href="#" className="hover:font-bold">
                        Jeans Clásico Ajuste Recto
                      </a>
                    </span>
                    <span>
                      <a href="#" className="hover:font-bold">
                        Sudadera con Capucha Unisex
                      </a>
                    </span>
                    <span>
                      <a href="#" className="hover:font-bold">
                        Vestido Floral Veraniego
                      </a>
                    </span>
                    <span>
                      <a href="#" className="hover:font-bold">
                        Chaleco Ligero Acolchado
                      </a>
                    </span>
                    <span>
                      <a href="#" className="hover:font-bold">
                        Short Deportivo Elástico
                      </a>
                    </span>
                  </nav>
                </div>
                <div className="col-span-6 md:col-span-3 lg:col-span-2">
                  <h3 className="uppercase text-lg text-gray-900 font-bold mb-9">
                    Paginas
                  </h3>
                  <nav className="flex flex-col gap-9">
                    <article className="">
                      <a
                        href="/producto/123"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/faceProfile.png"
                            alt="Camiseta Básica Algodón"
                            className="w-full h-full object-cover"
                          />
                        </figure>
                        <div className="flex flex-col gap-1">
                          <span>
                            <small className="bg-secondary-color text-teal-900 mb-3 inline-block px-3 py-1 rounded-lg">
                              Novedades
                            </small>
                          </span>
                          <h4 className="text-gray-900 font-bold uppercase">
                            Camiseta Básica Algodón
                          </h4>
                        </div>
                      </a>
                    </article>
                    <article className="">
                      <a
                        href="/producto/123"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/faceProfile.png"
                            alt="Jeans Clásico Ajuste Recto"
                            className="w-full h-full object-cover"
                          />
                        </figure>
                        <div className="flex flex-col gap-1">
                          <span>
                            <small className="bg-primary-color text-red-100 mb-3 inline-block px-3 py-1 rounded-lg">
                              De remate
                            </small>
                          </span>
                          <h4 className="text-gray-900 font-bold uppercase">
                            Jeans Clásico Ajuste Recto
                          </h4>
                        </div>
                      </a>
                    </article>
                    <article className="">
                      <a
                        href="/producto/123"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/faceProfile.png"
                            alt="Sudadera con Capucha Unisex"
                            className="w-full h-full object-cover"
                          />
                        </figure>
                        <div className="flex flex-col gap-1">
                          <span>
                            <small className="bg-tertiary-color text-yellow-900 mb-3 inline-block px-3 py-1 rounded-lg">
                              En oferta
                            </small>
                          </span>
                          <h4 className="text-gray-900 font-bold uppercase">
                            Sudadera con Capucha Unisex
                          </h4>
                        </div>
                      </a>
                    </article>
                    <article className="">
                      <a
                        href="/producto/123"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/faceProfile.png"
                            alt="Vestido Floral Veraniego"
                            className="w-full h-full object-cover"
                          />
                        </figure>
                        <div className="flex flex-col gap-1">
                          <h4 className="text-gray-900 font-bold uppercase">
                            Vestido Floral Veraniego
                          </h4>
                          <span className="text-lg">$50.00 USD</span>
                        </div>
                      </a>
                    </article>
                    <article className="">
                      <a
                        href="/producto/123"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/faceProfile.png"
                            alt="Chaleco Ligero Acolchado"
                            className="w-full h-full object-cover"
                          />
                        </figure>
                        <div className="flex flex-col gap-1">
                          <h4 className="text-gray-900 font-bold uppercase">
                            Chaleco Ligero Acolchado
                          </h4>
                          <span className="text-lg">$80.00 USD</span>
                        </div>
                      </a>
                    </article>
                    <article className="">
                      <a
                        href="/producto/123"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/faceProfile.png"
                            alt="Short Deportivo Elástico"
                            className="w-full h-full object-cover"
                          />
                        </figure>
                        <div className="flex flex-col gap-1">
                          <h4 className="text-gray-900 font-bold uppercase">
                            Short Deportivo Elástico
                          </h4>
                          <span className="text-lg">$25.00 USD</span>
                        </div>
                      </a>
                    </article>
                  </nav>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* MENU PRINCIPAL PARA RESPONSIVE*/}
      {isNavOpen && (
        <div
          id="popup-nav"
          onClick={closeNav}
          onMouseMove={handleOverlayMouseMove}
          onMouseEnter={() => setIsOverOverlay(true)}
          onMouseLeave={() => setIsOverOverlay(false)}
          className="fixed inset-0 p-3 bg-slate-900/60 w-screen h-screen z-50 cursor-none"
        >
          <div className="flex justify-center md:justify-start items-end h-full">
            <div
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={() => setIsOverOverlay(false)}
              onMouseLeave={() => setIsOverOverlay(true)}
              className="relative bg-white px-6 pb-6 pt-6 md:pt-20 rounded-lg shadow-lg w-full md:w-1/2 md:max-w-96 h-3/4 md:h-full cursor-auto"
            >
              <div className="flex h-full w-full">
                <div className="overflow-y-auto overflow-x-hidden scrollbar min-h-0 w-full">
                  <div className="h-full">
                    {/* Botón X para cerrar */}
                    <button
                      type="button"
                      onClick={closeNav}
                      aria-label="Cerrar menú"
                      className="absolute cursor-pointer bg-white rounded-full justify-center items-center -top-12 md:top-6 left-1/2 md:left-6 -translate-x-1/2 md:-translate-x-0 flex h-10 w-10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-8 w-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>

                    <div className="mx-auto">
                      {ITEMS.map((item, index) =>
                        item.children ? (
                          <details
                            key={item.title}
                            className="group p-4"
                            open={openIndex === index}
                            onToggle={handleToggle(index)}
                          >
                            <summary className="flex cursor-pointer items-center justify-between uppercase text-lg text-gray-900 font-bold list-none">
                              {item.title}
                              <svg
                                className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </summary>
                            <ul className="mt-3 space-y-2">
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={closeNav}
                                    className="block text-sm text-gray-600 hover:text-gray-900"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </details>
                        ) : (
                          <Link
                            key={item.title}
                            href={item.href!}
                            onClick={closeNav}
                            className="block p-4 font-medium text-gray-900 hover:bg-gray-50"
                          >
                            {item.title}
                          </Link>
                        ),
                      )}
                    </div>
                    <div>
                      <img
                        src="/images/faceProfile.png"
                        alt="Edson"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cursor custom: círculo blanco con X, solo visible sobre el overlay */}
          {isOverOverlay && (
            <div
              className="pointer-events-none fixed z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md"
              style={{
                left: cursorPos.x,
                top: cursorPos.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-4 w-4 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}
        </div>
      )}
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
          <div className="px-3 xl:px-0 py-3 w-full xl:w-7xl mx-auto relative">
            <div className="flex justify-between items-center">
              <div className="flex xl:hidden gap-3">
                <a
                  id="btn-popup-nav"
                  onClick={() => setIsNavOpen(true)}
                  className="hover:text-slate-800 flex gap-2 items-center cursor-pointer"
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
                  onClick={(e) => {
                    e.preventDefault();
                    setIsVisible(true);
                  }}
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
              <nav ref={navRef} className="hidden xl:flex gap-3 ">
                <a
                  href="#"
                  className="button-secondary-border-color border-4 px-3 py-1"
                  onClick={toggleMenu("hombres")}
                >
                  Hombres
                </a>
                <a
                  href="#"
                  className="button-secondary-border-color border-4 px-3 py-1"
                  onClick={toggleMenu("mujeres")}
                >
                  Mujeres
                </a>
                <a
                  href="#"
                  className="button-secondary-border-color border-4 px-3 py-1"
                  onClick={toggleMenu("ninos")}
                >
                  Niños
                </a>
                <a
                  href="#"
                  className="button-secondary-border-color border-4 px-3 py-1"
                  onClick={toggleMenu("outlet")}
                >
                  Outlet
                </a>
                <a
                  href="#"
                  className="button-secondary-border-color border-4 px-3 py-1"
                  onClick={toggleMenu("companias")}
                >
                  Compañías
                </a>
                <a
                  href="#"
                  className="button-secondary-border-color border-4 px-3 py-1"
                  onClick={toggleMenu("tiendas")}
                >
                  Tiendas
                </a>

                <div
                  className={`${openMenu === "hombres" ? "absolute" : "hidden"} w-full bg-white rounded-lg z-40 p-6 top-16 left-0`}
                >
                  <div className="flex flex-row gap-12">
                    <section className="flex-none">
                      <img
                        src="/images/ecomerce-ropa-01.jpg"
                        alt="Edson"
                        className="w-sm h-auto object-cover"
                      />
                    </section>
                    <section className="flex-1">
                      <div className="flex flex-col gap-6">
                        <h3 className="uppercase pb-3 text-lg text-gray-900 font-bold border-b border-slate-600">
                          Hombres
                        </h3>
                        <div className="grid grid-cols-8">
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Verano
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Primavera
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Otoño
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Invierno
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div
                  className={`${openMenu === "mujeres" ? "absolute" : "hidden"} w-full bg-white rounded-lg z-40 p-6 top-16 left-0`}
                >
                  <div className="flex flex-row gap-12">
                    <section className="flex-none">
                      <img
                        src="/images/ecomerce-ropa-02.jpg"
                        alt="Edson"
                        className="w-sm h-auto object-cover"
                      />
                    </section>
                    <section className="flex-1">
                      <div className="flex flex-col gap-6">
                        <h3 className="uppercase pb-3 text-lg text-gray-900 font-bold border-b border-slate-600">
                          Mujeres
                        </h3>
                        <div className="grid grid-cols-8">
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Verano
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Primavera
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Otoño
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Invierno
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div
                  className={`${openMenu === "ninos" ? "absolute" : "hidden"} w-full bg-white rounded-lg z-40 p-6 top-16 left-0`}
                >
                  <div className="flex flex-row gap-12">
                    <section className="flex-none">
                      <img
                        src="/images/ecomerce-ropa-05.jpg"
                        alt="Edson"
                        className="w-sm h-auto object-cover"
                      />
                    </section>
                    <section className="flex-1">
                      <div className="flex flex-col gap-6">
                        <h3 className="uppercase pb-3 text-lg text-gray-900 font-bold border-b border-slate-600">
                          Niños
                        </h3>
                        <div className="grid grid-cols-8">
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Verano
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Primavera
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Otoño
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Invierno
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div
                  className={`${openMenu === "outlet" ? "absolute" : "hidden"} w-full bg-white rounded-lg z-40 p-6 top-16 left-0`}
                >
                  <div className="flex flex-row gap-12">
                    <section className="flex-none">
                      <img
                        src="/images/ecomerce-ropa-03.jpg"
                        alt="Edson"
                        className="w-sm h-auto object-cover"
                      />
                    </section>
                    <section className="flex-1">
                      <div className="flex flex-col gap-6">
                        <h3 className="uppercase pb-3 text-lg text-gray-900 font-bold border-b border-slate-600">
                          Outlets
                        </h3>
                        <div className="grid grid-cols-8">
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Verano
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Primavera
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Otoño
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Invierno
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div
                  className={`${openMenu === "companias" ? "absolute" : "hidden"} w-full bg-white rounded-lg z-40 p-6 top-16 left-0`}
                >
                  <div className="flex flex-row gap-12">
                    <section className="flex-none">
                      <img
                        src="/images/ecomerce-ropa-04.jpg"
                        alt="Edson"
                        className="w-sm h-auto object-cover"
                      />
                    </section>
                    <section className="flex-1">
                      <div className="flex flex-col gap-6">
                        <h3 className="uppercase pb-3 text-lg text-gray-900 font-bold border-b border-slate-600">
                          Compañias
                        </h3>
                        <div className="grid grid-cols-8">
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Verano
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Primavera
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Otoño
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Invierno
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div
                  className={`${openMenu === "tiendas" ? "absolute" : "hidden"} w-full bg-white rounded-lg z-40 p-6 top-16 left-0`}
                >
                  <div className="flex flex-row gap-12">
                    <section className="flex-none">
                      <img
                        src="/images/ecomerce-ropa-06.jpg"
                        alt="Edson"
                        className="w-sm h-auto object-cover"
                      />
                    </section>
                    <section className="flex-1">
                      <div className="flex flex-col gap-6">
                        <h3 className="uppercase pb-3 text-lg text-gray-900 font-bold border-b border-slate-600">
                          Tiendas
                        </h3>
                        <div className="grid grid-cols-8">
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Verano
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Primavera
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Otoño
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Invierno
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a href="#" className="hover:font-bold">
                                Polos
                              </a>
                              <a href="#" className="hover:font-bold">
                                Pantalones
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatillas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Poleras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Gorras
                              </a>
                              <a href="#" className="hover:font-bold">
                                Correas
                              </a>
                              <a href="#" className="hover:font-bold">
                                Zapatos
                              </a>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
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
                    onClick={(e) => {
                      e.preventDefault();
                      setIsVisible(true);
                    }}
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
      <section className="bg-[#D1AE8E] flex">
        <figure className="w-1/2 shrink-0">
          <img
            src="/images/ecomerce-banner.jpg"
            alt="Camiseta Básica Algodón"
            className="w-full h-auto object-cover"
          />
        </figure>
        <figure className="w-1/2 shrink-0">
          <img
            src="/images/ecomerce-banner02.jpg"
            alt="Camiseta Básica Algodón"
            className="w-full h-auto object-cover"
          />
        </figure>
      </section>
      <footer>footer</footer>
    </div>
  );
}
