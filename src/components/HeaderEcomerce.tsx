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
      { label: "Polos", href: "/portfolio/ecommerce/category" },
      { label: "Pantalones", href: "/portfolio/ecommerce/category" },
      { label: "Zapatillas", href: "/portfolio/ecommerce/category" },
      { label: "Poleras", href: "/portfolio/ecommerce/category" },
      { label: "Gorras", href: "/portfolio/ecommerce/category" },
      { label: "Correas", href: "/portfolio/ecommerce/category" },
      { label: "Zapatos", href: "/portfolio/ecommerce/category" },
    ],
  },
  {
    title: "Mujeres",
    children: [
      { label: "Vestidos", href: "/portfolio/ecommerce/category" },
      { label: "Blusas", href: "/portfolio/ecommerce/category" },
    ],
  },
  {
    title: "Outlets",
    children: [
      { label: "Polos", href: "/portfolio/ecommerce/category" },
      { label: "Pantalones", href: "/portfolio/ecommerce/category" },
      { label: "Zapatillas", href: "/portfolio/ecommerce/category" },
    ],
  },
  {
    title: "Compañias",
    children: [
      { label: "Vestidos", href: "/portfolio/ecommerce/category" },
      { label: "Blusas", href: "/portfolio/ecommerce/category" },
    ],
  },
  {
    title: "Tiendas",
    children: [
      { label: "Vestidos", href: "/portfolio/ecommerce/category" },
      { label: "Blusas", href: "/portfolio/ecommerce/category" },
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

export default function HeaderEcomerce() {
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
    <>
      {/* BUSCADOR PRINCIPAL INICIO*/}
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
                        href="/portfolio/ecommerce/detail"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/ecomerce-ropa-01.jpg"
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
                        href="/portfolio/ecommerce/detail"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/ecomerce-ropa-02.jpg"
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
                        href="/portfolio/ecommerce/detail"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/ecomerce-ropa-03.jpg"
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
                        href="/portfolio/ecommerce/detail"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/ecomerce-ropa-04.jpg"
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
                        href="/portfolio/ecommerce/detail"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/ecomerce-ropa-05.jpg"
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
                        href="/portfolio/ecommerce/detail"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/ecomerce-ropa-06.jpg"
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
                        href="/portfolio/ecommerce/detail"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/ecomerce-ropa-06.jpg"
                            alt="Camiseta Básica Algodón"
                            className="w-full h-full object-cover"
                          />
                        </figure>
                        <div className="flex flex-col gap-1">
                          <span>
                            <small className="bg-ecommerce-secondary text-teal-900 mb-3 inline-block px-3 py-1 rounded-lg">
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
                        href="/portfolio/ecommerce/detail"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/ecomerce-ropa-05.jpg"
                            alt="Jeans Clásico Ajuste Recto"
                            className="w-full h-full object-cover"
                          />
                        </figure>
                        <div className="flex flex-col gap-1">
                          <span>
                            <small className="bg-ecommerce-primary text-red-100 mb-3 inline-block px-3 py-1 rounded-lg">
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
                        href="/portfolio/ecommerce/detail"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/ecomerce-ropa-04.jpg"
                            alt="Sudadera con Capucha Unisex"
                            className="w-full h-full object-cover"
                          />
                        </figure>
                        <div className="flex flex-col gap-1">
                          <span>
                            <small className="bg-ecommerce-tertiary text-yellow-900 mb-3 inline-block px-3 py-1 rounded-lg">
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
                        href="/portfolio/ecommerce/detail"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/ecomerce-ropa-03.jpg"
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
                        href="/portfolio/ecommerce/detail"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/ecomerce-ropa-02.jpg"
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
                        href="/portfolio/ecommerce/detail"
                        className="flex flex-row hover:bg-slate-100 items-center gap-3"
                      >
                        <figure className="w-32 shrink-0">
                          <img
                            src="/images/ecomerce-ropa-01.jpg"
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
      {/* BUSCADOR PRINCIPAL FIN*/}
      {/* MENU PRINCIPAL PARA RESPONSIVE INICIO*/}
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
                        src="/images/ecomerce-ropa-01.jpg"
                        alt="Edson"
                        className="w-sm h-auto object-cover"
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
      {/* MENU PRINCIPAL PARA RESPONSIVE FIN*/}
      {/* HEADER INICIO*/}
      <header className=" w-full">
        <div className="flex flex-col w-full">
          {/* CARRUSEL INICIO*/}
          <div className="pt-2 pb-1 bg-ecommerce-secondary text-white">
            <div className="carrusel-top">
              <div className="carrusel-track font-subheading-ecommerce text-lg tracking-wider uppercase">
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
          {/* CARRUSEL FIN*/}
          <div className="px-3 xl:px-0 py-3 w-full max-w-[1440px] mx-auto relative">
            <div className="flex justify-between items-center">
              {/* BOTON MENU RESPONSIVE Y BUSCADOR TABLET INICIO*/}
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
              {/* BOTON MENU RESPONSIVE Y BUSCADOR TABLET FIN*/}
              {/* LOGOTIPO INICIO*/}
              <div className="">
                <a href="/portfolio/ecommerce">
                  <img
                    src="/logo-apaisado.svg"
                    alt="Logotipo"
                    className="w-full max-w-20 h-auto object-contain"
                  />
                </a>
              </div>
              {/* LOGOTIPO FIN*/}
              {/* MENU PRINCIPAL PC INICIO*/}
              <nav ref={navRef} className="hidden xl:flex gap-3 ">
                <a
                  href="#"
                  className="text-xs font-heading-ecommerce text-slate-400 hover:text-ecommerce-primary border-ecommerce-tertiary hover:border-ecommerce-primary border-4 px-4 py-2"
                  onClick={toggleMenu("hombres")}
                >
                  Hombres
                </a>
                <a
                  href="#"
                  className="text-xs font-heading-ecommerce text-slate-400 hover:text-ecommerce-primary border-ecommerce-tertiary hover:border-ecommerce-primary border-4 px-4 py-2"
                  onClick={toggleMenu("mujeres")}
                >
                  Mujeres
                </a>
                <a
                  href="#"
                  className="text-xs font-heading-ecommerce text-slate-400 hover:text-ecommerce-primary border-ecommerce-tertiary hover:border-ecommerce-primary border-4 px-4 py-2"
                  onClick={toggleMenu("ninos")}
                >
                  Niños
                </a>
                <a
                  href="#"
                  className="text-xs font-heading-ecommerce text-slate-400 hover:text-ecommerce-primary border-ecommerce-tertiary hover:border-ecommerce-primary border-4 px-4 py-2"
                  onClick={toggleMenu("outlet")}
                >
                  Outlet
                </a>
                <a
                  href="#"
                  className="text-xs font-heading-ecommerce text-slate-400 hover:text-ecommerce-primary border-ecommerce-tertiary hover:border-ecommerce-primary border-4 px-4 py-2"
                  onClick={toggleMenu("companias")}
                >
                  Compañías
                </a>
                <a
                  href="#"
                  className="text-xs font-heading-ecommerce text-slate-400 hover:text-ecommerce-primary border-ecommerce-tertiary hover:border-ecommerce-primary border-4 px-4 py-2"
                  onClick={toggleMenu("tiendas")}
                >
                  Tiendas
                </a>
                {/* MENU PRINCIPAL OPCIONES INICIO*/}
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
                        <h3 className="uppercase pb-3 text-lg text-slate-600 font-bold border-b border-slate-600">
                          Hombres
                        </h3>
                        <div className="grid grid-cols-8">
                          <div className="col-span-2">
                            <h4 className="uppercase text-slate-600 font-bold mb-6">
                              Verano
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Polos (manga corta)
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Camisas de lino
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Bermudas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Zapatillas urbanas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Sandalias
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Gorras
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Trajes de baño
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-slate-600 font-bold mb-6">
                              Otoño
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Camisas manga larga
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Poleras cuello redondo
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Chompas ligeras
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Casacas livianas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Jeans
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Bufandas ligeras
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Chalecos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-slate-600 font-bold mb-6">
                              Invierno
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Casacas gruesas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Abrigos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Chompas de lana
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Poleras térmicas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Pantalones de vestir
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Botas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Blazers de paño
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-slate-600 font-bold mb-6">
                              Primavera
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Camisas manga larga livianas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Poleras y polos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Chompas finas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Casacas cortavientos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Pantalones chinos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Zapatillas o mocasines
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Accesorios livianos
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
                        <h3 className="uppercase pb-3 text-lg text-gray-600 font-bold border-b border-slate-600">
                          Mujeres
                        </h3>
                        <div className="grid grid-cols-8">
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-600 font-bold mb-6">
                              Verano
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Vestidos ligeros
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Blusas manga corta
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Tops y crop tops
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Shorts / faldas cortas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Enterizos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Sandalias / plataformas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Trajes de baño
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-600 font-bold mb-6">
                              Otoño
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Blusas manga larga
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Chompas livianas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Jeans
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Casacas de mezclilla
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Botines bajos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Bufandas finas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Faldas midi con medias
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-600 font-bold mb-6">
                              Invierno
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Abrigos largos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Casacas acolchadas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Chompas de lana gruesa
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Pantalones de vestir
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Botas altas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Gorros, bufandas y guantes
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Blazers estructurados
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-600 font-bold mb-6">
                              Primavera
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Blusas florales
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Vestidos midi frescos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Cárdigans finos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Faldas plisadas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Jeans claros
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Sandalias o flats
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Accesorios livianos
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
                        <h3 className="uppercase pb-3 text-lg text-gray-600 font-bold border-b border-slate-600">
                          Niños
                        </h3>
                        <div className="grid grid-cols-8">
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-600 font-bold mb-6">
                              Verano
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Polos manga corta
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Shorts / bermudas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Enterizos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Vestidos ligeros
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Sandalias
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Trajes de baño
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Conjuntos de dos piezas
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-600 font-bold mb-6">
                              Otoño
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Poleras manga larga
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Chompas livianas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Casacas cortavientos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Jeans / pantalones de drill
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Vestidos midi con medias
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Buzos deportivos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Zapatillas casuales cerradas
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-600 font-bold mb-6">
                              Invierno
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Casacas acolchadas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Chompas gruesas de lana
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Polos térmicos manga larga
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Pantalones de buzo
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Botas o zapatillas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Gorros, bufandas y guantes
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Conjuntos térmicos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-600 font-bold mb-6">
                              Primavera
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Poleras y polos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Vestidos florales livianos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Cárdigans o chompas finas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Shorts o pantalones capri
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Casacas ligeras cortavientos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Zapatillas o sandalias
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Conjuntos coordinados
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
                        <h3 className="uppercase pb-3 text-lg text-gray-600 font-bold border-b border-slate-600">
                          Outlets
                        </h3>
                        <div className="grid grid-cols-8">
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-600 font-bold mb-6">
                              Ropa
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Polos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Camisas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Poleras
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Chompas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Casacas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Pantalones
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Correas
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-600 font-bold mb-6">
                              Calzado
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Zapatillas urbanas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Zapatillas deportivas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Zapatos formales
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Botas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Sandalias
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Mocasines
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-600 font-bold mb-6">
                              Accesorios
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Gorras
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Correas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Billeteras
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Mochilas / morrales
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Lentes de sol
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Relojes
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Collares
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-600 font-bold mb-6">
                              Deportivo
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Polos deportivos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Shorts deportivos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Buzos / conjuntos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Zapatillas running
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Medias deportivas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Accesorios fitness
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
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
                        <h3 className="uppercase pb-3 text-lg text-gray-600 font-bold border-b border-slate-600">
                          Compañias
                        </h3>
                        <div className="grid grid-cols-8">
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-600 font-bold mb-6">
                              Deportivas
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Nike
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Adidas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Puma
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                New Balance
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Under Armour
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Reebok
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Converse
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-600 font-bold mb-6">
                              Casual / Urbana
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Levi's
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Tommy Hilfiger
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Calvin Klein
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Lacoste
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Vans
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Converse
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                TopyTop
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-600 font-bold mb-6">
                              Formal / Premium
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Ralph Lauren
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Hugo Boss
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Diesel
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Guess
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Aldo
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Kenneth Cole
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Dior
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-600 font-bold mb-6">
                              Locales / Emergentes
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Hiraoka Basics
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Índice
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Basement
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Anda
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Colorshop
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Rockford
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
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
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Polos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Pantalones
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Zapatillas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Poleras
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Gorras
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Correas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Primavera
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Polos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Pantalones
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Zapatillas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Poleras
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Gorras
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Correas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Otoño
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Polos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Pantalones
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Zapatillas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Poleras
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Gorras
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Correas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Zapatos
                              </a>
                            </nav>
                          </div>
                          <div className="col-span-2">
                            <h4 className="uppercase text-gray-900 font-bold mb-6">
                              Invierno
                            </h4>
                            <nav className="flex flex-col gap-3">
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Polos
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Pantalones
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Zapatillas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Poleras
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Gorras
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Correas
                              </a>
                              <a
                                href="/portfolio/ecommerce/category"
                                className="hover:font-bold"
                              >
                                Zapatos
                              </a>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                {/* MENU PRINCIPAL OPCIONES FIN*/}
              </nav>
              {/* MENU PRINCIPAL PC Fin*/}
              <div className="flex gap-6">
                {/* MONEDAS Y IDIOMA INICIO*/}
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
                {/* MONEDAS Y IDIOMA FIN*/}
                {/* ICONOS DE ACCION INICIO*/}
                <div className="flex gap-3">
                  <Link
                    href="portfolio/ecommerce/favoritos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:bg-ecommerce-primary hover:text-ecommerce-tertiary transition-colors duration-300 ease-in-out h-9 w-9 justify-center items-center hidden md:flex"
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
                  </Link>
                  <Link
                    href="/portfolio/ecommerce/favoritos"
                    target=""
                    rel="noopener noreferrer"
                    className=" hover:bg-ecommerce-primary hover:text-ecommerce-tertiary transition-colors duration-300 ease-in-out h-9 w-9 justify-center items-center hidden md:flex"
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
                  </Link>
                  <Link
                    href="/portfolio/ecommerce/login"
                    target=""
                    rel="noopener noreferrer"
                    className=" hover:bg-ecommerce-primary hover:text-ecommerce-tertiary transition-colors duration-300 ease-in-out h-9 w-9 justify-center items-center hidden md:flex"
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
                  </Link>
                  <Link
                    href="/portfolio/ecommerce/cart"
                    target=""
                    rel="noopener noreferrer"
                    className=" hover:bg-ecommerce-primary hover:text-ecommerce-tertiary transition-colors duration-300 ease-in-out h-9 w-9 justify-center items-center hidden md:flex"
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
                  </Link>
                </div>
                {/* ICONOS DE ACCION FIN*/}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* HEADER FIN*/}
    </>
  );
}
