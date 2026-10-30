"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import HeaderEcomerce from "@/components/HeaderEcomerce";

export default function SystemDesignPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-stone-900 text-stone-400 font-body-ecommerce">
      <HeaderEcomerce />
      <main className="px-3 xl:px-0 py-9 w-full max-w-[1440px] mx-auto relative">
        <h1 className="font-heading-ecommerce text-3xl text-center">
          Design System
        </h1>
        <h2 className="font-subheading-ecommerce text-4xl uppercase mt-12 mb-3">
          Design tokens
        </h2>
        <section className="border border-stone-400 p-6 flex flex-col gap-3 mb-3 relative">
          <h3 className="font-subheading-ecommerce text-2xl text-white mb-3">
            Colores principales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-9">
            <section className="">
              <div className="inline-flex gap-3 pt-3 px-6 bg-stone-900 border-t border-x border-lime-500 z-10 -mb-0.5">
                <h3 className="font-subheading-ecommerce text-3xl">Primario</h3>
                <strong className="text-2xl text-white font-bold">
                  Lime-500
                </strong>
              </div>
              <article className="flex flex-col gap-3 border border-lime-500 p-6">
                <div className="flex gap-3">
                  <div className="block w-6 h-6 bg-lime-500"></div>
                  <p>Fondo</p>
                </div>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 border-4 border-lime-500"></div>
                  <p>Borde</p>
                </div>
                <div className="flex gap-3">
                  <strong className="text-lime-500">Primario</strong>
                  <p>Texto</p>
                </div>
                <h4>Inactivo (transparencia al 40%)</h4>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 bg-lime-500/40"></div>
                  <p>Fondo</p>
                </div>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 border-4 border-lime-500/40"></div>
                  <p>Borde</p>
                </div>
                <div className="flex gap-3">
                  <strong className="text-lime-500/40">Primario</strong>
                  <p>Texto</p>
                </div>
              </article>
            </section>
            <section className="">
              <div className="inline-flex gap-3 pt-3 px-6 bg-stone-900 border-t border-x border-violet-500 z-10 -mb-0.5">
                <h3 className="font-subheading-ecommerce text-3xl">
                  Secundario
                </h3>
                <strong className="text-2xl text-white font-bold">
                  Violet-500
                </strong>
              </div>
              <article className="flex flex-col gap-3 border border-violet-500 p-6">
                <div className="flex gap-3">
                  <div className="block w-6 h-6 bg-violet-500"></div>
                  <p>Fondo</p>
                </div>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 border-4 border-violet-500"></div>
                  <p>Borde</p>
                </div>
                <div className="flex gap-3">
                  <strong className="text-violet-500">Primario</strong>
                  <p>Texto</p>
                </div>
                <h4>Inactivo (transparencia al 40%)</h4>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 bg-violet-500/40"></div>
                  <p>Fondo</p>
                </div>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 border-4 border-violet-500/40"></div>
                  <p>Borde</p>
                </div>
                <div className="flex gap-3">
                  <strong className="text-violet-500/40">Primario</strong>
                  <p>Texto</p>
                </div>
              </article>
            </section>
            <section className="">
              <div className="inline-flex gap-3 pt-3 px-6 bg-stone-900 border-t border-x border-stone-400 z-10 -mb-0.5">
                <h3 className="font-subheading-ecommerce text-3xl">
                  Terciario
                </h3>
                <strong className="text-2xl text-white font-bold">
                  Stone-400
                </strong>
              </div>
              <article className="flex flex-col gap-3 border border-stone-400 p-6">
                <div className="flex gap-3">
                  <div className="block w-6 h-6 bg-stone-400"></div>
                  <p>Fondo</p>
                </div>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 border-4 border-stone-400"></div>
                  <p>Borde</p>
                </div>
                <div className="flex gap-3">
                  <strong className="text-stone-400">Primario</strong>
                  <p>Texto</p>
                </div>
                <h4>Inactivo (transparencia al 40%)</h4>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 bg-stone-400/40"></div>
                  <p>Fondo</p>
                </div>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 border-4 border-stone-400/40"></div>
                  <p>Borde</p>
                </div>
                <div className="flex gap-3">
                  <strong className="text-stone-400/40">Primario</strong>
                  <p>Texto</p>
                </div>
              </article>
            </section>
            <section className="text-stone-900">
              <div className="inline-flex gap-3 pt-3 px-6 bg-stone-400 border-t border-x z-10 -mb-0.5">
                <h3 className="font-subheading-ecommerce text-3xl">General</h3>
                <strong className="text-2xl text-stone-900 font-bold">
                  Stone-900
                </strong>
              </div>
              <article className="flex flex-col gap-3 border bg-stone-400 p-6">
                <div className="flex gap-3">
                  <div className="block w-6 h-6 bg-stone-900"></div>
                  <p>Fondo</p>
                </div>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 border-4 border-stone-900"></div>
                  <p>Borde</p>
                </div>
                <div className="flex gap-3">
                  <strong className="text-stone-900">Primario</strong>
                  <p>Texto</p>
                </div>
                <h4>Inactivo (transparencia al 40%)</h4>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 bg-stone-900/40"></div>
                  <p>Fondo</p>
                </div>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 border-4 border-stone-900/40"></div>
                  <p>Borde</p>
                </div>
                <div className="flex gap-3">
                  <strong className="text-stone-900/40">Primario</strong>
                  <p>Texto</p>
                </div>
              </article>
            </section>
          </div>
          <h3 className="font-subheading-ecommerce text-2xl text-white mb-3">
            Colores complementarios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-9">
            <section className="">
              <div className="inline-flex gap-3 pt-3 px-6 bg-stone-900 border-t border-x border-red-500 z-10 -mb-0.5">
                <h3 className="font-subheading-ecommerce text-3xl">Alert</h3>
                <strong className="text-2xl text-white font-bold">
                  Red-500
                </strong>
              </div>
              <article className="flex flex-col gap-3 border border-red-500 p-6">
                <div className="flex gap-3">
                  <div className="block w-6 h-6 bg-red-500"></div>
                  <p>Fondo</p>
                </div>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 border-4 border-red-500"></div>
                  <p>Borde</p>
                </div>
                <div className="flex gap-3">
                  <strong className="text-red-500">Primario</strong>
                  <p>Texto</p>
                </div>
                <h4>Inactivo (transparencia al 40%)</h4>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 bg-red-500/40"></div>
                  <p>Fondo</p>
                </div>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 border-4 border-red-500/40"></div>
                  <p>Borde</p>
                </div>
                <div className="flex gap-3">
                  <strong className="text-red-500/40">Primario</strong>
                  <p>Texto</p>
                </div>
              </article>
            </section>
            <section className="">
              <div className="inline-flex gap-3 pt-3 px-6 bg-stone-900 border-t border-x border-yellow-500 z-10 -mb-0.5">
                <h3 className="font-subheading-ecommerce text-3xl">Warning</h3>
                <strong className="text-2xl text-white font-bold">
                  Yellow-500
                </strong>
              </div>
              <article className="flex flex-col gap-3 border border-yellow-500 p-6">
                <div className="flex gap-3">
                  <div className="block w-6 h-6 bg-yellow-500"></div>
                  <p>Fondo</p>
                </div>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 border-4 border-yellow-500"></div>
                  <p>Borde</p>
                </div>
                <div className="flex gap-3">
                  <strong className="text-yellow-500">Primario</strong>
                  <p>Texto</p>
                </div>
                <h4>Inactivo (transparencia al 40%)</h4>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 bg-yellow-500/40"></div>
                  <p>Fondo</p>
                </div>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 border-4 border-yellow-500/40"></div>
                  <p>Borde</p>
                </div>
                <div className="flex gap-3">
                  <strong className="text-yellow-500/40">Primario</strong>
                  <p>Texto</p>
                </div>
              </article>
            </section>
            <section className="">
              <div className="inline-flex gap-3 pt-3 px-6 bg-stone-900 border-t border-x border-cyan-500 z-10 -mb-0.5">
                <h3 className="font-subheading-ecommerce text-3xl">Info</h3>
                <strong className="text-2xl text-white font-bold">
                  Cyan-500
                </strong>
              </div>
              <article className="flex flex-col gap-3 border border-cyan-500 p-6">
                <div className="flex gap-3">
                  <div className="block w-6 h-6 bg-cyan-500"></div>
                  <p>Fondo</p>
                </div>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 border-4 border-cyan-500"></div>
                  <p>Borde</p>
                </div>
                <div className="flex gap-3">
                  <strong className="text-cyan-500">Primario</strong>
                  <p>Texto</p>
                </div>
                <h4>Inactivo (transparencia al 40%)</h4>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 bg-cyan-500/40"></div>
                  <p>Fondo</p>
                </div>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 border-4 border-cyan-500/40"></div>
                  <p>Borde</p>
                </div>
                <div className="flex gap-3">
                  <strong className="text-cyan-500/40">Primario</strong>
                  <p>Texto</p>
                </div>
              </article>
            </section>
            <section className="">
              <div className="inline-flex gap-3 pt-3 px-6 bg-stone-900 border-t border-x border-white z-10 -mb-0.5">
                <h3 className="font-subheading-ecommerce text-3xl">Neutro</h3>
                <strong className="text-2xl text-white font-bold">White</strong>
              </div>
              <article className="flex flex-col gap-3 border border-white p-6">
                <div className="flex gap-3">
                  <div className="block w-6 h-6 bg-white"></div>
                  <p>Fondo</p>
                </div>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 border-4 border-white"></div>
                  <p>Borde</p>
                </div>
                <div className="flex gap-3">
                  <strong className="text-white">Primario</strong>
                  <p>Texto</p>
                </div>
                <h4>Inactivo (transparencia al 40%)</h4>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 bg-white/40"></div>
                  <p>Fondo</p>
                </div>
                <div className="flex gap-3">
                  <div className="block w-6 h-6 border-4 border-white/40"></div>
                  <p>Borde</p>
                </div>
                <div className="flex gap-3">
                  <strong className="text-white/40">Primario</strong>
                  <p>Texto</p>
                </div>
              </article>
            </section>
          </div>
          <h3 className="font-subheading-ecommerce text-2xl text-white mb-3">
            Tipografias Familias
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-9">
            <section className="">
              <div className="inline-flex gap-3 pt-3 px-6 bg-stone-900 border-t border-x border-stone-400 z-10 -mb-0.5">
                <h3 className="font-subheading-ecommerce text-3xl">
                  Principal
                </h3>
                <strong className="text-2xl text-white font-bold">
                  Press Start 2P
                </strong>
              </div>
              <article className="flex flex-col gap-3 border border-stone-400 p-6">
                <h1 className="font-heading-ecommerce text-3xl">
                  H1 - text-3xl
                </h1>
                <p className="mb-6">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
                <h2 className="font-heading-ecommerce text-2xl">
                  H2 - text-2xl
                </h2>
                <p className="mb-6">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
                <h3 className="font-heading-ecommerce text-xl">H3 - text-xl</h3>
                <p className="mb-6">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
              </article>
            </section>
            <section className="">
              <div className="inline-flex gap-3 pt-3 px-6 bg-stone-900 border-t border-x border-stone-400 z-10 -mb-0.5">
                <h3 className="font-subheading-ecommerce text-3xl">
                  Secundaria
                </h3>
                <strong className="text-2xl text-white font-bold">Teko</strong>
              </div>
              <article className="flex flex-col gap-3 border border-stone-400 p-6">
                <h2 className="font-subheading-ecommerce text-5xl">
                  Titulo h2 - text-5xl
                </h2>
                <p className="mb-6">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
                <h3 className="font-subheading-ecommerce text-4xl">
                  Titulo h3 - text-4xl
                </h3>
                <p className="mb-6">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
                <h4 className="font-subheading-ecommerce text-3xl">
                  Titulo h4 - text-3xl
                </h4>
                <p className="mb-6">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
              </article>
            </section>
            <section className="">
              <div className="inline-flex gap-3 pt-3 px-6 bg-stone-900 border-t border-x border-stone-400 z-10 -mb-0.5">
                <h3 className="font-subheading-ecommerce text-3xl">General</h3>
                <strong className="text-2xl text-white font-bold">
                  Manrope
                </strong>
              </div>
              <article className="flex flex-col gap-3 border border-stone-400 p-6">
                <h3 className="font-body-ecommerce text-4xl">
                  Titulo h3 text-4xl
                </h3>
                <p className="mb-6">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
                <h4 className="font-body-ecommerce text-3xl">
                  Titulo h4 text-3xl
                </h4>{" "}
                <p className="mb-6">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
                <h5 className="font-body-ecommerce text-2xl">
                  Titulo h5 text-2xl
                </h5>{" "}
                <p className="mb-6">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
              </article>
            </section>
          </div>
          <p>Resto del contenido tamaña de fuente 16px</p>
        </section>
        {/* ---------- ESPACIADO ---------- */}
        <h2 className="font-subheading-ecommerce text-4xl uppercase mt-12 mb-3">
          Espaciado
        </h2>
        <section className="border border-stone-400 p-6 flex flex-col gap-3 mb-3 relative">
          <p>
            Escala base de 12px. Se usan solo estos valores para mantener ritmo
            visual consistente en toda la tienda.
          </p>
          <div className="flex flex-col gap-2 mt-3">
            {[
              { token: "gap-3 / p-3", px: "12px" },
              { token: "gap-6 / p-6", px: "24px" },
              { token: "gap-9 / p-9", px: "36px" },
              { token: "gap-12 / p-12", px: "48px" },
            ].map((s) => (
              <article key={s.token} className="flex gap-6 items-center">
                <p className="w-40 flex-none uppercase font-bold">{s.token}</p>
                <p className="w-16 flex-none">{s.px}</p>
                <div className="bg-lime-500 h-4" style={{ width: s.px }}></div>
              </article>
            ))}
          </div>
        </section>
        {/* ---------- BOTONES ---------- */}
        <h2 className="font-subheading-ecommerce text-4xl uppercase mt-12 mb-3">
          Botones
        </h2>
        <section className="border border-stone-400 p-6 flex flex-col gap-3 mb-3 relative">
          <h3 className="font-subheading-ecommerce text-2xl text-white mb-3">
            Principales
          </h3>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <section className="">
              <div className="inline-flex gap-3 pt-3 px-6 bg-stone-900 border-t border-x border-lime-500 z-10 -mb-0.5">
                <h3 className="font-subheading-ecommerce text-3xl">Primario</h3>
                <strong className="text-2xl text-white font-bold">
                  Lime-500
                </strong>
              </div>
              <article className="flex flex-col gap-3 border border-lime-500 p-6">
                <h5 className="text-2xl text-white">Button</h5>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="flex gap-2 items-center font-bold text-stone-900 bg-lime-500 hover:bg-lime-500/80 h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="flex gap-2 items-center font-bold text-stone-900 bg-lime-500/30 h-10 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="flex gap-2 items-center font-bold text-lime-500 hover:text-stone-900 border-4 border-lime-500 hover:bg-lime-500 h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="flex gap-2 items-center font-bold text-lime-500/30 border-4 border-lime-500/30 h-10 pl-5 pr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="font-bold text-stone-900 bg-lime-500 hover:bg-lime-500/80 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="font-bold text-stone-900 bg-lime-500/30 h-10 px-6">
                    Button
                  </button>
                  <button className="font-bold text-lime-500 hover:text-stone-900 border-4 border-lime-500 hover:bg-lime-500 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="font-bold text-lime-500/30 border-4 border-lime-500/30 h-10 px-6">
                    Button
                  </button>
                </div>
                <h4>Small</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-lime-500 hover:bg-lime-500/80 h-8 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-lime-500/30 h-8 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-sm flex gap-2 items-center font-bold text-lime-500 hover:text-stone-900 border-2 border-lime-500 hover:bg-lime-500 h-8 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-sm flex gap-2 items-center font-bold text-lime-500/30 border-2 border-lime-500/30 h-8 pl-5 pr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-sm font-bold text-stone-900 bg-lime-500 hover:bg-lime-500/80 h-8 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-sm font-bold text-stone-900 bg-lime-500/30 h-8 px-3">
                    Button
                  </button>
                  <button className="text-sm font-bold text-lime-500 hover:text-stone-900 border-2 border-lime-500 hover:bg-lime-500 h-8 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-sm font-bold text-lime-500/30 border-2 border-lime-500/30 h-8 px-3">
                    Button
                  </button>
                </div>
                <h4>XS</h4>
                <div className="flex flex-wrap gap-3 items-center mb-6">
                  <button className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-lime-500 hover:bg-lime-500/80 h-6 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-lime-500/30 h-6 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs flex gap-2 items-center font-bold text-lime-500 hover:text-stone-900 border-2 border-lime-500 hover:bg-lime-500 h-6 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs flex gap-2 items-center font-bold text-lime-500/30 border-2 border-lime-500/30 h-6 pl-5 pr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs font-bold text-stone-900 bg-lime-500 hover:bg-lime-500/80 h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-xs font-bold text-stone-900 bg-lime-500/30 h-6 px-3">
                    Button
                  </button>
                  <button className="text-xs font-bold text-lime-500 hover:text-stone-900 border-2 border-lime-500 hover:bg-lime-500 h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-xs font-bold text-lime-500/30 border-2 border-lime-500/30 h-6 px-3">
                    Button
                  </button>
                </div>
                <h5 className="text-2xl text-white">Link</h5>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-stone-900 border-4 border-solid border-lime-500 hover:border-lime-500/0 bg-lime-500 hover:bg-lime-500/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-stone-900 border-4 border-solid border-lime-500/0 bg-lime-500/30 h-10 px-6 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-lime-500 hover:text-stone-900 border-4 border-lime-500 hover:bg-lime-500 h-10 px-6 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-lime-500/30 border-4 border-lime-500/30 h-10 px-6 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-stone-900 bg-lime-500 hover:bg-lime-500/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-stone-900 bg-lime-500/30 h-10 px-6 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-lime-500 hover:text-stone-900 border-4 border-lime-500 hover:bg-lime-500 h-10 px-6 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-lime-500/30 border-4 border-lime-500/30 h-10 px-6 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-lime-500 underline decoration-transparent hover:decoration-current transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                </div>
                <h4>Small</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-lime-500 hover:bg-lime-500/80 h-8 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-lime-500/30 h-8 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-lime-500 hover:text-stone-900 border-2 border-lime-500 hover:bg-lime-500 h-8 px-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-lime-500/30 border-2 border-lime-500/30 h-8 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-stone-900 bg-lime-500 hover:bg-lime-500/80 h-8 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-stone-900 bg-lime-500/30 h-8 px-3 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-lime-500 hover:text-stone-900 border-2 border-lime-500 hover:bg-lime-500 h-8 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-lime-500/30 border-2 border-lime-500/30 h-8 px-3 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm text-lime-500 underline decoration-transparent hover:decoration-current transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                </div>
                <h4>XS</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-lime-500 hover:bg-lime-500/80 h-6 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-lime-500/30 h-6 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-lime-500 hover:text-stone-900 border-2 border-lime-500 hover:bg-lime-500 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-lime-500/30 border-2 border-lime-500/30 h-6 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 bg-lime-500 hover:bg-lime-500/80 h-6 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 bg-lime-500/30 h-6 px-3 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-lime-500 hover:text-stone-900 border-2 border-lime-500 hover:bg-lime-500 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-lime-500/30 border-2 border-lime-500/30 h-6 px-3 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm text-lime-500 underline decoration-transparent hover:decoration-current transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                </div>
              </article>
            </section>
            <section className="">
              <div className="inline-flex gap-3 pt-3 px-6 bg-stone-900 border-t border-x border-violet-500 z-10 -mb-0.5">
                <h3 className="font-subheading-ecommerce text-3xl">
                  Secundario
                </h3>
                <strong className="text-2xl text-white font-bold">
                  Violet-500
                </strong>
              </div>
              <article className="flex flex-col gap-3 border border-violet-500 p-6">
                <h5 className="text-2xl text-white">Button</h5>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="flex gap-2 items-center font-bold text-stone-900 bg-violet-500 hover:bg-violet-500/80 h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="flex gap-2 items-center font-bold text-stone-900 bg-violet-500/30 h-10 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="flex gap-2 items-center font-bold text-violet-500 hover:text-stone-900 border-4 border-violet-500 hover:bg-violet-500 h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="flex gap-2 items-center font-bold text-violet-500/30 border-4 border-violet-500/30 h-10 pl-5 pr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="font-bold text-stone-900 bg-violet-500 hover:bg-violet-500/80 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="font-bold text-stone-900 bg-violet-500/30 h-10 px-6">
                    Button
                  </button>
                  <button className="font-bold text-violet-500 hover:text-stone-900 border-4 border-violet-500 hover:bg-violet-500 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="font-bold text-violet-500/30 border-4 border-violet-500/30 h-10 px-6">
                    Button
                  </button>
                </div>
                <h4>Small</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-violet-500 hover:bg-violet-500/80 h-8 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-violet-500/30 h-8 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-sm flex gap-2 items-center font-bold text-violet-500 hover:text-stone-900 border-2 border-violet-500 hover:bg-violet-500 h-8 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-sm flex gap-2 items-center font-bold text-violet-500/30 border-2 border-violet-500/30 h-8 pl-5 pr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-sm font-bold text-stone-900 bg-violet-500 hover:bg-violet-500/80 h-8 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-sm font-bold text-stone-900 bg-violet-500/30 h-8 px-3">
                    Button
                  </button>
                  <button className="text-sm font-bold text-violet-500 hover:text-stone-900 border-2 border-violet-500 hover:bg-violet-500 h-8 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-sm font-bold text-violet-500/30 border-2 border-violet-500/30 h-8 px-3">
                    Button
                  </button>
                </div>
                <h4>XS</h4>
                <div className="flex flex-wrap gap-3 items-center mb-6">
                  <button className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-violet-500 hover:bg-violet-500/80 h-6 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-violet-500/30 h-6 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs flex gap-2 items-center font-bold text-violet-500 hover:text-stone-900 border-2 border-violet-500 hover:bg-violet-500 h-6 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs flex gap-2 items-center font-bold text-violet-500/30 border-2 border-violet-500/30 h-6 pl-5 pr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs font-bold text-stone-900 bg-violet-500 hover:bg-violet-500/80 h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-xs font-bold text-stone-900 bg-violet-500/30 h-6 px-3">
                    Button
                  </button>
                  <button className="text-xs font-bold text-violet-500 hover:text-stone-900 border-2 border-violet-500 hover:bg-violet-500 h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-xs font-bold text-violet-500/30 border-2 border-violet-500/30 h-6 px-3">
                    Button
                  </button>
                </div>
                <h5 className="text-2xl text-white">Link</h5>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-stone-900 border-4 border-solid border-violet-500 hover:border-violet-500/0 bg-violet-500 hover:bg-violet-500/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-stone-900 border-4 border-solid border-violet-500/0 bg-violet-500/30 h-10 px-6 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-violet-500 hover:text-stone-900 border-4 border-violet-500 hover:bg-violet-500 h-10 px-6 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-violet-500/30 border-4 border-violet-500/30 h-10 px-6 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-stone-900 bg-violet-500 hover:bg-violet-500/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-stone-900 bg-violet-500/30 h-10 px-6 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-violet-500 hover:text-stone-900 border-4 border-violet-500 hover:bg-violet-500 h-10 px-6 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-violet-500/30 border-4 border-violet-500/30 h-10 px-6 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-violet-500 underline decoration-transparent hover:decoration-current transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                </div>
                <h4>Small</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-violet-500 hover:bg-violet-500/80 h-8 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-violet-500/30 h-8 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-violet-500 hover:text-stone-900 border-2 border-violet-500 hover:bg-violet-500 h-8 px-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-violet-500/30 border-2 border-violet-500/30 h-8 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-stone-900 bg-violet-500 hover:bg-violet-500/80 h-8 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-stone-900 bg-violet-500/30 h-8 px-3 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-violet-500 hover:text-stone-900 border-2 border-violet-500 hover:bg-violet-500 h-8 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-violet-500/30 border-2 border-violet-500/30 h-8 px-3 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm text-violet-500 underline decoration-transparent hover:decoration-current transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                </div>
                <h4>XS</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-violet-500 hover:bg-violet-500/80 h-6 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-violet-500/30 h-6 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-violet-500 hover:text-stone-900 border-2 border-violet-500 hover:bg-violet-500 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-violet-500/30 border-2 border-violet-500/30 h-6 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 bg-violet-500 hover:bg-violet-500/80 h-6 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 bg-violet-500/30 h-6 px-3 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-violet-500 hover:text-stone-900 border-2 border-violet-500 hover:bg-violet-500 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-violet-500/30 border-2 border-violet-500/30 h-6 px-3 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm text-violet-500 underline decoration-transparent hover:decoration-current transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                </div>
              </article>
            </section>
            <section className="">
              <div className="inline-flex gap-3 pt-3 px-6 bg-stone-900 border-t border-x border-stone-400 z-10 -mb-0.5">
                <h3 className="font-subheading-ecommerce text-3xl">
                  Terciario
                </h3>
                <strong className="text-2xl text-white font-bold">
                  Stone-400
                </strong>
              </div>
              <article className="flex flex-col gap-3 border border-stone-400 p-6">
                <h5 className="text-2xl text-white">Button</h5>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="flex gap-2 items-center font-bold text-stone-900 bg-stone-400 hover:bg-stone-400/80 h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="flex gap-2 items-center font-bold text-stone-900 bg-stone-400/30 h-10 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="flex gap-2 items-center font-bold text-stone-400 hover:text-stone-900 border-4 border-stone-400 hover:bg-stone-400 h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="flex gap-2 items-center font-bold text-stone-400/30 border-4 border-stone-400/30 h-10 pl-5 pr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="font-bold text-stone-900 bg-stone-400 hover:bg-stone-400/80 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="font-bold text-stone-900 bg-stone-400/30 h-10 px-6">
                    Button
                  </button>
                  <button className="font-bold text-stone-400 hover:text-stone-900 border-4 border-stone-400 hover:bg-stone-400 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="font-bold text-stone-400/30 border-4 border-stone-400/30 h-10 px-6">
                    Button
                  </button>
                </div>
                <h4>Small</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-stone-400 hover:bg-stone-400/80 h-8 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-stone-400/30 h-8 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-sm flex gap-2 items-center font-bold text-stone-400 hover:text-stone-900 border-2 border-stone-400 hover:bg-stone-400 h-8 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-sm flex gap-2 items-center font-bold text-stone-400/30 border-2 border-stone-400/30 h-8 pl-5 pr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-sm font-bold text-stone-900 bg-stone-400 hover:bg-stone-400/80 h-8 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-sm font-bold text-stone-900 bg-stone-400/30 h-8 px-3">
                    Button
                  </button>
                  <button className="text-sm font-bold text-stone-400 hover:text-stone-900 border-2 border-stone-400 hover:bg-stone-400 h-8 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-sm font-bold text-stone-400/30 border-2 border-stone-400/30 h-8 px-3">
                    Button
                  </button>
                </div>
                <h4>XS</h4>
                <div className="flex flex-wrap gap-3 items-center mb-6">
                  <button className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-stone-400 hover:bg-stone-400/80 h-6 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-stone-400/30 h-6 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs flex gap-2 items-center font-bold text-stone-400 hover:text-stone-900 border-2 border-stone-400 hover:bg-stone-400 h-6 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs flex gap-2 items-center font-bold text-stone-400/30 border-2 border-stone-400/30 h-6 pl-5 pr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs font-bold text-stone-900 bg-stone-400 hover:bg-stone-400/80 h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-xs font-bold text-stone-900 bg-stone-400/30 h-6 px-3">
                    Button
                  </button>
                  <button className="text-xs font-bold text-stone-400 hover:text-stone-900 border-2 border-stone-400 hover:bg-stone-400 h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-xs font-bold text-stone-400/30 border-2 border-stone-400/30 h-6 px-3">
                    Button
                  </button>
                </div>
                <h5 className="text-2xl text-white">Link</h5>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-stone-900 border-4 border-solid border-stone-400 hover:border-stone-400/0 bg-stone-400 hover:bg-stone-400/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-stone-900 border-4 border-solid border-stone-400/0 bg-stone-400/30 h-10 px-6 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-stone-400 hover:text-stone-900 border-4 border-stone-400 hover:bg-stone-400 h-10 px-6 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-stone-400/30 border-4 border-stone-400/30 h-10 px-6 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-stone-900 bg-stone-400 hover:bg-stone-400/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-stone-900 bg-stone-400/30 h-10 px-6 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-stone-400 hover:text-stone-900 border-4 border-stone-400 hover:bg-stone-400 h-10 px-6 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-stone-400/30 border-4 border-stone-400/30 h-10 px-6 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-stone-400 underline decoration-transparent hover:decoration-current transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                </div>
                <h4>Small</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-stone-400 hover:bg-stone-400/80 h-8 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-stone-400/30 h-8 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-stone-400 hover:text-stone-900 border-2 border-stone-400 hover:bg-stone-400 h-8 px-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-stone-400/30 border-2 border-stone-400/30 h-8 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-stone-900 bg-stone-400 hover:bg-stone-400/80 h-8 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-stone-900 bg-stone-400/30 h-8 px-3 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-stone-400 hover:text-stone-900 border-2 border-stone-400 hover:bg-stone-400 h-8 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-stone-400/30 border-2 border-stone-400/30 h-8 px-3 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm text-stone-400 underline decoration-transparent hover:decoration-current transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                </div>
                <h4>XS</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-stone-400 hover:bg-stone-400/80 h-6 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-stone-400/30 h-6 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-stone-400 hover:text-stone-900 border-2 border-stone-400 hover:bg-stone-400 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-stone-400/30 border-2 border-stone-400/30 h-6 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 bg-stone-400 hover:bg-stone-400/80 h-6 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 bg-stone-400/30 h-6 px-3 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-400 hover:text-stone-900 border-2 border-stone-400 hover:bg-stone-400 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-400/30 border-2 border-stone-400/30 h-6 px-3 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm text-stone-400 underline decoration-transparent hover:decoration-current transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                </div>
              </article>
            </section>
            <section className="text-stone-900">
              <div className="inline-flex gap-3 pt-3 px-6 bg-stone-400 z-10 -mb-0.5">
                <h3 className="font-subheading-ecommerce text-3xl">General</h3>
                <strong className="text-2xl font-bold">Stone-900</strong>
              </div>
              <article className="flex flex-col gap-3 border bg-stone-400 p-6">
                <h5 className="text-2xl">Button</h5>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="flex gap-2 items-center font-bold text-stone-400 bg-stone-900 hover:bg-stone-900/80 h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="flex gap-2 items-center font-bold text-stone-900 bg-stone-900/30 h-10 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="flex gap-2 items-center font-bold text-stone-900 hover:text-stone-400 border-4 border-stone-900 hover:bg-stone-900 h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="flex gap-2 items-center font-bold text-stone-900/30 border-4 border-stone-900/30 h-10 pl-5 pr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="font-bold text-stone-400 bg-stone-900 hover:bg-stone-900/80 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="font-bold text-stone-900 bg-stone-900/30 h-10 px-6">
                    Button
                  </button>
                  <button className="font-bold text-stone-900 hover:text-stone-400 border-4 border-stone-900 hover:bg-stone-900 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="font-bold text-stone-900/30 border-4 border-stone-900/30 h-10 px-6">
                    Button
                  </button>
                </div>
                <h4>Small</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="text-sm flex gap-2 items-center font-bold text-stone-400 bg-stone-900 hover:bg-stone-900/80 h-8 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-stone-900/30 h-8 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-sm flex gap-2 items-center font-bold text-stone-900 hover:text-stone-400 border-2 border-stone-900 hover:bg-stone-900 h-8 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-sm flex gap-2 items-center font-bold text-stone-900/30 border-2 border-stone-900/30 h-8 pl-5 pr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-sm font-bold text-stone-400 bg-stone-900 hover:bg-stone-900/80 h-8 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-sm font-bold text-stone-900 bg-stone-900/30 h-8 px-3">
                    Button
                  </button>
                  <button className="text-sm font-bold text-stone-900 hover:text-stone-400 border-2 border-stone-900 hover:bg-stone-900 h-8 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-sm font-bold text-stone-900/30 border-2 border-stone-900/30 h-8 px-3">
                    Button
                  </button>
                </div>
                <h4>XS</h4>
                <div className="flex flex-wrap gap-3 items-center mb-6">
                  <button className="text-xs flex gap-2 items-center font-bold text-stone-400 bg-stone-900 hover:bg-stone-900/80 h-6 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-stone-900/30 h-6 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs flex gap-2 items-center font-bold text-stone-900 hover:text-stone-900 border-2 border-stone-900 hover:bg-stone-900 h-6 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs flex gap-2 items-center font-bold text-stone-900/30 border-2 border-stone-900/30 h-6 pl-5 pr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs font-bold text-stone-400 bg-stone-900 hover:bg-stone-900/80 h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-xs font-bold text-stone-900 bg-stone-900/30 h-6 px-3">
                    Button
                  </button>
                  <button className="text-xs font-bold text-stone-900 hover:text-stone-400 border-2 border-stone-900 hover:bg-stone-900 h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-xs font-bold text-stone-900/30 border-2 border-stone-900/30 h-6 px-3">
                    Button
                  </button>
                </div>
                <h5 className="text-2xl">Link</h5>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-stone-400 border-4 border-solid border-stone-900 hover:border-stone-900/0 bg-stone-900 hover:bg-stone-900/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-stone-900 border-4 border-solid border-stone-900/0 bg-stone-900/30 h-10 px-6 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-stone-900 hover:text-stone-400 border-4 border-stone-900 hover:bg-stone-900 h-10 px-6 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-stone-900/30 border-4 border-stone-900/30 h-10 px-6 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-stone-400 bg-stone-900 hover:bg-stone-900/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-stone-900 bg-stone-900/30 h-10 px-6 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-stone-900 hover:text-stone-400 border-4 border-stone-900 hover:bg-stone-900 h-10 px-6 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-stone-900/30 border-4 border-stone-900/30 h-10 px-6 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-stone-900 underline decoration-transparent hover:decoration-current transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                </div>
                <h4>Small</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-stone-400 bg-stone-900 hover:bg-stone-900/80 h-8 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-stone-900/30 h-8 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-stone-900 hover:text-stone-400 border-2 border-stone-900 hover:bg-stone-900 h-8 px-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-stone-900/30 border-2 border-stone-900/30 h-8 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-stone-400 bg-stone-900 hover:bg-stone-900/80 h-8 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-stone-900 bg-stone-900/30 h-8 px-3 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-stone-900 hover:text-stone-400 border-2 border-stone-900 hover:bg-stone-900 h-8 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-stone-900/30 border-2 border-stone-900/30 h-8 px-3 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm text-stone-900 underline decoration-transparent hover:decoration-current transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                </div>
                <h4>XS</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-stone-400 bg-stone-900 hover:bg-stone-900/80 h-6 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-stone-900/30 h-6 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-stone-900 hover:text-stone-400 border-2 border-stone-900 hover:bg-stone-900 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-stone-900/30 border-2 border-stone-900/30 h-6 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-400 bg-stone-900 hover:bg-stone-900/80 h-6 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 bg-stone-900/30 h-6 px-3 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 hover:text-stone-400 border-2 border-stone-900 hover:bg-stone-900 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900/30 border-2 border-stone-900/30 h-6 px-3 cursor-default"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm text-stone-900 underline decoration-transparent hover:decoration-current transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                </div>
              </article>
            </section>
          </div>
          <h3 className="font-subheading-ecommerce text-2xl text-white mb-3">
            Complementarios
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <section className="">
              <div className="inline-flex gap-3 pt-3 px-6 bg-stone-900 border-t border-x border-red-500 z-10 -mb-0.5">
                <h3 className="font-subheading-ecommerce text-3xl">Alert</h3>
                <strong className="text-2xl text-white font-bold">
                  Red-500
                </strong>
              </div>
              <article className="flex flex-col gap-3 border border-red-500 p-6">
                <h5 className="text-2xl text-white">Button</h5>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="flex gap-2 items-center font-bold text-stone-900 bg-red-500 hover:bg-red-500/80 h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="flex gap-2 items-center font-bold text-stone-900 bg-red-500/30 h-10 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="font-bold text-stone-900 bg-red-500 hover:bg-red-500/80 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="font-bold text-stone-900 bg-red-500/30 h-10 px-6">
                    Button
                  </button>
                </div>
                <h4>Small</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-red-500 hover:bg-red-500/80 h-8 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-red-500/30 h-8 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>

                  <button className="text-sm font-bold text-stone-900 bg-red-500 hover:bg-red-500/80 h-8 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-sm font-bold text-stone-900 bg-red-500/30 h-8 px-3">
                    Button
                  </button>
                </div>
                <h4>XS</h4>
                <div className="flex flex-wrap gap-3 items-center mb-6">
                  <button className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-red-500 hover:bg-red-500/80 h-6 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-red-500/30 h-6 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs font-bold text-stone-900 bg-red-500 hover:bg-red-500/80 h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-xs font-bold text-stone-900 bg-red-500/30 h-6 px-3">
                    Button
                  </button>
                </div>
                <h5 className="text-2xl text-white">Link</h5>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-stone-900 border-4 border-solid border-red-500 hover:border-red-500/0 bg-red-500 hover:bg-red-500/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-stone-900 border-4 border-solid border-red-500/0 bg-red-500/30 h-10 px-6 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-stone-900 bg-red-500 hover:bg-red-500/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-stone-900 bg-red-500/30 h-10 px-6 cursor-default"
                  >
                    Link
                  </a>
                </div>
                <h4>Small</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-red-500 hover:bg-red-500/80 h-8 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-red-500/30 h-8 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-stone-900 bg-red-500 hover:bg-red-500/80 h-8 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-stone-900 bg-red-500/30 h-8 px-3 cursor-default"
                  >
                    Link
                  </a>
                </div>
                <h4>XS</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-red-500 hover:bg-red-500/80 h-6 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-red-500/30 h-6 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 bg-red-500 hover:bg-red-500/80 h-6 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 bg-red-500/30 h-6 px-3 cursor-default"
                  >
                    Link
                  </a>
                </div>
              </article>
            </section>
            <section className="">
              <div className="inline-flex gap-3 pt-3 px-6 bg-stone-900 border-t border-x border-yellow-500 z-10 -mb-0.5">
                <h3 className="font-subheading-ecommerce text-3xl">Warning</h3>
                <strong className="text-2xl text-white font-bold">
                  Yellow-500
                </strong>
              </div>
              <article className="flex flex-col gap-3 border border-yellow-500 p-6">
                <h5 className="text-2xl text-white">Button</h5>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="flex gap-2 items-center font-bold text-stone-900 bg-yellow-500 hover:bg-yellow-500/80 h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="flex gap-2 items-center font-bold text-stone-900 bg-yellow-500/30 h-10 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="font-bold text-stone-900 bg-yellow-500 hover:bg-yellow-500/80 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="font-bold text-stone-900 bg-yellow-500/30 h-10 px-6">
                    Button
                  </button>
                </div>
                <h4>Small</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-yellow-500 hover:bg-yellow-500/80 h-8 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-yellow-500/30 h-8 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>

                  <button className="text-sm font-bold text-stone-900 bg-yellow-500 hover:bg-yellow-500/80 h-8 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-sm font-bold text-stone-900 bg-yellow-500/30 h-8 px-3">
                    Button
                  </button>
                </div>
                <h4>XS</h4>
                <div className="flex flex-wrap gap-3 items-center mb-6">
                  <button className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-yellow-500 hover:bg-yellow-500/80 h-6 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-yellow-500/30 h-6 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs font-bold text-stone-900 bg-yellow-500 hover:bg-yellow-500/80 h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-xs font-bold text-stone-900 bg-yellow-500/30 h-6 px-3">
                    Button
                  </button>
                </div>
                <h5 className="text-2xl text-white">Link</h5>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-stone-900 border-4 border-solid border-yellow-500 hover:border-yellow-500/0 bg-yellow-500 hover:bg-yellow-500/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-stone-900 border-4 border-solid border-yellow-500/0 bg-yellow-500/30 h-10 px-6 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-stone-900 bg-yellow-500 hover:bg-yellow-500/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-stone-900 bg-yellow-500/30 h-10 px-6 cursor-default"
                  >
                    Link
                  </a>
                </div>
                <h4>Small</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-yellow-500 hover:bg-yellow-500/80 h-8 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-yellow-500/30 h-8 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-stone-900 bg-yellow-500 hover:bg-yellow-500/80 h-8 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-stone-900 bg-yellow-500/30 h-8 px-3 cursor-default"
                  >
                    Link
                  </a>
                </div>
                <h4>XS</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-yellow-500 hover:bg-yellow-500/80 h-6 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-yellow-500/30 h-6 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 bg-yellow-500 hover:bg-yellow-500/80 h-6 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 bg-yellow-500/30 h-6 px-3 cursor-default"
                  >
                    Link
                  </a>
                </div>
              </article>
            </section>
            <section className="">
              <div className="inline-flex gap-3 pt-3 px-6 bg-stone-900 border-t border-x border-cyan-500 z-10 -mb-0.5">
                <h3 className="font-subheading-ecommerce text-3xl">Info</h3>
                <strong className="text-2xl text-white font-bold">
                  Cyan-500
                </strong>
              </div>
              <article className="flex flex-col gap-3 border border-cyan-500 p-6">
                <h5 className="text-2xl text-white">Button</h5>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="flex gap-2 items-center font-bold text-stone-900 bg-cyan-500 hover:bg-cyan-500/80 h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="flex gap-2 items-center font-bold text-stone-900 bg-cyan-500/30 h-10 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="font-bold text-stone-900 bg-cyan-500 hover:bg-cyan-500/80 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="font-bold text-stone-900 bg-cyan-500/30 h-10 px-6">
                    Button
                  </button>
                </div>
                <h4>Small</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-cyan-500 hover:bg-cyan-500/80 h-8 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-cyan-500/30 h-8 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>

                  <button className="text-sm font-bold text-stone-900 bg-cyan-500 hover:bg-cyan-500/80 h-8 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-sm font-bold text-stone-900 bg-cyan-500/30 h-8 px-3">
                    Button
                  </button>
                </div>
                <h4>XS</h4>
                <div className="flex flex-wrap gap-3 items-center mb-6">
                  <button className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-cyan-500 hover:bg-cyan-500/80 h-6 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-cyan-500/30 h-6 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs font-bold text-stone-900 bg-cyan-500 hover:bg-cyan-500/80 h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-xs font-bold text-stone-900 bg-cyan-500/30 h-6 px-3">
                    Button
                  </button>
                </div>
                <h5 className="text-2xl text-white">Link</h5>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-stone-900 border-4 border-solid border-cyan-500 hover:border-cyan-500/0 bg-cyan-500 hover:bg-cyan-500/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-stone-900 border-4 border-solid border-cyan-500/0 bg-cyan-500/30 h-10 px-6 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-stone-900 bg-cyan-500 hover:bg-cyan-500/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-stone-900 bg-cyan-500/30 h-10 px-6 cursor-default"
                  >
                    Link
                  </a>
                </div>
                <h4>Small</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-cyan-500 hover:bg-cyan-500/80 h-8 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-cyan-500/30 h-8 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-stone-900 bg-cyan-500 hover:bg-cyan-500/80 h-8 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-stone-900 bg-cyan-500/30 h-8 px-3 cursor-default"
                  >
                    Link
                  </a>
                </div>
                <h4>XS</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-cyan-500 hover:bg-cyan-500/80 h-6 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-cyan-500/30 h-6 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 bg-cyan-500 hover:bg-cyan-500/80 h-6 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 bg-cyan-500/30 h-6 px-3 cursor-default"
                  >
                    Link
                  </a>
                </div>
              </article>
            </section>
            <section className="">
              <div className="inline-flex gap-3 pt-3 px-6 bg-stone-900 border-t border-x border-white z-10 -mb-0.5">
                <h3 className="font-subheading-ecommerce text-3xl">Neutro</h3>
                <strong className="text-2xl text-white font-bold">White</strong>
              </div>
              <article className="flex flex-col gap-3 border border-white p-6">
                <h5 className="text-2xl text-white">Button</h5>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="flex gap-2 items-center font-bold text-stone-900 bg-white hover:bg-white/80 h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="flex gap-2 items-center font-bold text-stone-900 bg-white/30 h-10 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="font-bold text-stone-900 bg-white hover:bg-white/80 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="font-bold text-stone-900 bg-white/30 h-10 px-6">
                    Button
                  </button>
                </div>
                <h4>Small</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-white hover:bg-white/80 h-8 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-white/30 h-8 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>

                  <button className="text-sm font-bold text-stone-900 bg-white hover:bg-white/80 h-8 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-sm font-bold text-stone-900 bg-white/30 h-8 px-3">
                    Button
                  </button>
                </div>
                <h4>XS</h4>
                <div className="flex flex-wrap gap-3 items-center mb-6">
                  <button className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-white hover:bg-white/80 h-6 pl-2 pr-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-white/30 h-6 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Button
                  </button>
                  <button className="text-xs font-bold text-stone-900 bg-white hover:bg-white/80 h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
                    Button
                  </button>
                  <button className="text-xs font-bold text-stone-900 bg-white/30 h-6 px-3">
                    Button
                  </button>
                </div>
                <h5 className="text-2xl text-white">Link</h5>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-stone-900 border-4 border-solid border-white hover:border-white/0 bg-white hover:bg-white/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex gap-2 items-center font-bold text-stone-900 border-4 border-solid border-white/0 bg-white/30 h-10 px-6 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-stone-900 bg-white hover:bg-white/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="flex items-center font-bold text-stone-900 bg-white/30 h-10 px-6 cursor-default"
                  >
                    Link
                  </a>
                </div>
                <h4>Small</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-white hover:bg-white/80 h-8 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex gap-2 items-center font-bold text-stone-900 bg-white/30 h-8 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-stone-900 bg-white hover:bg-white/80 h-8 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-sm flex items-center font-bold text-stone-900 bg-white/30 h-8 px-3 cursor-default"
                  >
                    Link
                  </a>
                </div>
                <h4>XS</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-white hover:bg-white/80 h-6 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex gap-2 items-center font-bold text-stone-900 bg-white/30 h-6 px-3 cursor-default"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 bg-white hover:bg-white/80 h-6 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                  >
                    Link
                  </a>
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 bg-white/30 h-6 px-3 cursor-default"
                  >
                    Link
                  </a>
                </div>
              </article>
            </section>
          </div>
        </section>
        <h2 className="font-subheading-ecommerce text-4xl uppercase mb-3 mt-12">
          Mensajes Flotantes
        </h2>
        <section className="border border-white/40 p-6 flex flex-col gap-3 mb-3 relative">
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Base
          </h3>
          <div className="flex flex-wrap gap-3 mb-6">
            <section className="bg-stone-900 w-full max-w-3xs border border-violet-500">
              <div className="p-6 flex flex-col gap-3 relative">
                <figure className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-12 w-12 mx-auto text-violet-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>
                </figure>
                <div className="flex-none">
                  <article className="grow text-violet-500">
                    <h5 className="font-bold font-body-ecommerce text-lg text-center mb-3">
                      No se pudo subir el archivo
                    </h5>
                    <p className="leading-4 text-xs">
                      El archivo supera los 5 MB o no tiene un formato
                      compatible (JPG, PNG o PDF).
                    </p>
                  </article>
                  <div className="flex-none text-center mt-6">
                    <a
                      href=""
                      className="inline-flex items-center text-center text-xs font-bold text-stone-900 bg-violet-500 hover:bg-violet-500/80 h-6 pl-2 pr-3 transition-colors duration-300 ease-in-out"
                    >
                      Elegir otro archivo
                    </a>
                  </div>
                </div>
                <div className="flex-none">
                  <a
                    href=""
                    className="absolute top-2 right-2 z-10 text-violet-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </section>
          </div>
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Mensaje
          </h3>
          <div className="flex flex-wrap gap-3">
            <div className="bg-stone-900 w-full max-w-md border border-b-4 border-violet-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <figure className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-violet-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <article className="grow text-violet-500">
                  <h4 className="font-bold mb-0.5">Mensaje de general</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <a
                  href=""
                  className="absolute top-2 right-2 z-10 text-violet-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-stone-900 w-full max-w-md border border-b-4 border-red-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <figure className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-red-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <article className="grow text-red-500">
                  <h4 className="font-bold mb-0.5">Mensaje de peligro</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <a href="" className="absolute top-2 right-2 z-10 text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-stone-900 w-full max-w-md border border-b-4 border-yellow-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <figure className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <article className="grow text-yellow-500">
                  <h4 className="font-bold mb-0.5">Mensaje de advertencia</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <a
                  href=""
                  className="absolute top-2 right-2 z-10 text-yellow-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-stone-900 w-full max-w-md border border-b-4 border-green-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <figure className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <article className="grow text-green-500">
                  <h4 className="font-bold mb-0.5">Mensaje de exito</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <a
                  href=""
                  className="absolute top-2 right-2 z-10 text-green-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="bg-stone-900 w-full max-w-md border border-b-4 border-violet-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <article className="grow text-violet-500">
                  <h4 className="font-bold mb-0.5">Mensaje de general</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <a
                  href=""
                  className="absolute top-2 right-2 z-10 text-violet-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-stone-900 w-full max-w-md border border-b-4 border-red-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <article className="grow text-red-500">
                  <h4 className="font-bold mb-0.5">Mensaje de peligro</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <a href="" className="absolute top-2 right-2 z-10 text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-stone-900 w-full max-w-md border border-b-4 border-yellow-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <article className="grow text-yellow-500">
                  <h4 className="font-bold mb-0.5">Mensaje de advertencia</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <a
                  href=""
                  className="absolute top-2 right-2 z-10 text-yellow-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-stone-900 w-full max-w-md border border-b-4 border-green-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <article className="grow text-green-500">
                  <h4 className="font-bold mb-0.5">Mensaje de exito</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <a
                  href=""
                  className="absolute top-2 right-2 z-10 text-green-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Alerta
          </h3>
          <div className="flex flex-wrap gap-3">
            <div className="bg-stone-900 w-full max-w-md border border-b-4 border-violet-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <figure className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-violet-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <article className="grow text-violet-500">
                  <h4 className="font-bold mb-0.5">Mensaje de general</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <div className="flex-none">
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 border-2 border-solid border-violet-500 hover:border-violet-500/0 bg-violet-500 hover:bg-violet-500/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-stone-900 w-full max-w-md border border-b-4 border-red-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <figure className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-red-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <article className="grow text-red-500">
                  <h4 className="font-bold mb-0.5">Mensaje de peligro</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <div className="flex-none">
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 border-2 border-solid border-red-500 hover:border-red-500/0 bg-red-500 hover:bg-red-500/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-stone-900 w-full max-w-md border border-b-4 border-yellow-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <figure className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <article className="grow text-yellow-500">
                  <h4 className="font-bold mb-0.5">Mensaje de advertencia</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <div className="flex-none">
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 border-2 border-solid border-yellow-500 hover:border-yellow-500/0 bg-yellow-500 hover:bg-yellow-500/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-stone-900 w-full max-w-md border border-b-4 border-green-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <figure className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <article className="grow text-green-500">
                  <h4 className="font-bold mb-0.5">Mensaje de exito</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <div className="flex-none">
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 border-2 border-solid border-green-500 hover:border-green-500/0 bg-green-500 hover:bg-green-500/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="bg-stone-900 w-full max-w-md border border-b-4 border-violet-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <article className="grow text-violet-500">
                  <h4 className="font-bold mb-0.5">Mensaje de general</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <div className="flex-none">
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 border-2 border-solid border-violet-500 hover:border-violet-500/0 bg-violet-500 hover:bg-violet-500/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-stone-900 w-full max-w-md border border-b-4 border-red-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <article className="grow text-red-500">
                  <h4 className="font-bold mb-0.5">Mensaje de peligro</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <div className="flex-none">
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 border-2 border-solid border-red-500 hover:border-red-500/0 bg-red-500 hover:bg-red-500/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-stone-900 w-full max-w-md border border-b-4 border-yellow-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <article className="grow text-yellow-500">
                  <h4 className="font-bold mb-0.5">Mensaje de advertencia</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <div className="flex-none">
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 border-2 border-solid border-yellow-500 hover:border-yellow-500/0 bg-yellow-500 hover:bg-yellow-500/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-stone-900 w-full max-w-md border border-b-4 border-green-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <article className="grow text-green-500">
                  <h4 className="font-bold mb-0.5">Mensaje de exito</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <div className="flex-none">
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-stone-900 border-2 border-solid border-green-500 hover:border-green-500/0 bg-green-500 hover:bg-green-500/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <h2 className="font-subheading-ecommerce text-4xl uppercase mt-12 mb-3">
          Login
        </h2>
        <section className="border border-stone-400 p-6 mb-3 relative">
          <div className="w-full max-w-md">
            <div className="inline-flex gap-3 pt-3 px-6 bg-stone-900 border-t border-x border-lime-500 z-10 -mb-0.5">
              <h4 className="font-subheading-ecommerce text-3xl">
                Credenciales
              </h4>
            </div>
            <div className="flex flex-col gap-6 p-6">
              <div>
                <label className="flex gap-2 items-center text-violet-500 uppercase text-xs mb-2">
                  <figure className="h-6 w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 22H4v-4h2v4Zm14 0h-2v-4h2v4ZM8 18H6v-2h2v2Zm10 0h-2v-2h2v2Zm-2-2H8v-2h8v2Zm-1-4H9v-2h6v2Zm-6-2H7V4h2v6Zm8 0h-2V4h2v6Zm-2-6H9V2h6v2Z" />
                    </svg>
                  </figure>
                  Nombre de usuario
                </label>
                <input
                  type="text"
                  name="login-name"
                  id=""
                  className="w-full border border-violet-500 focus:border-lime-500 focus:outline-none h-10 px-6"
                />
              </div>
              <div>
                <label className="flex gap-2 items-center text-violet-500 uppercase text-xs mb-2">
                  <figure className="h-6 w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11 8H13V9H23V14H21V18H19V14H17V16H15V14H13V16H11V18H3V16H1V8H3V6H11V8ZM5 14H9V10H5V14Z" />
                    </svg>
                  </figure>
                  Contraseña
                </label>
                <input
                  type="password"
                  name="login-password"
                  id=""
                  className="w-full border border-violet-500 focus:border-lime-500 focus:outline-none h-10 px-6"
                />
              </div>
              <button
                type="submit"
                className="w-full justify-center flex gap-2 items-center font-bold text-stone-900 border-4 border-solid border-lime-500/0 bg-lime-500/30 h-10 px-6"
              >
                Ingresar
              </button>
            </div>
          </div>
        </section>
        {/* ---------- FORMULARIOS ---------- */}
        <h2 className="font-subheading-ecommerce text-4xl uppercase mt-12 mb-3">
          Formularios
        </h2>
        <section className="border border-white/40 p-6 flex flex-col gap-6 mb-3 relative">
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Campos de texto
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-violet-500 uppercase text-xs mb-2">
                Campo normal
              </label>
              <input
                type="text"
                placeholder="Escribe aquí"
                className="w-full border border-violet-500 focus:border-lime-500 focus:outline-none h-10 px-6 bg-transparent placeholder:text-slate-500"
              />
            </div>
            <div>
              <label className="block text-violet-500 uppercase text-xs mb-2">
                Campo con error
              </label>
              <input
                type="text"
                defaultValue="valor@invalido"
                className="w-full border border-red-500 focus:outline-none h-10 px-6 bg-transparent"
              />
              <p className="text-red-500 text-xs mt-1">
                Ingresa un correo válido
              </p>
            </div>
            <div>
              <label className="block text-violet-500 uppercase text-xs mb-2">
                Campo correcto
              </label>
              <input
                type="text"
                defaultValue="jugador@correo.com"
                className="w-full border border-green-500 focus:outline-none h-10 px-6 bg-transparent"
              />
            </div>
            <div>
              <label className="block text-violet-500/30 uppercase text-xs mb-2">
                Campo deshabilitado
              </label>
              <input
                type="text"
                disabled
                placeholder="No editable"
                className="w-full border border-violet-500/30 h-10 px-6 bg-transparent text-slate-500 cursor-not-allowed"
              />
            </div>
          </div>

          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Selector y área de texto
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-violet-500 uppercase text-xs mb-2">
                Plataforma
              </label>
              <select className="w-full border border-violet-500 focus:border-lime-500 focus:outline-none h-10 px-6 bg-stone-900">
                <option>PlayStation</option>
                <option>Xbox</option>
                <option>Nintendo</option>
                <option>PC</option>
              </select>
            </div>
            <div>
              <label className="block text-violet-500 uppercase text-xs mb-2">
                Comentario
              </label>
              <textarea
                rows={3}
                placeholder="Cuéntanos qué te pareció el juego"
                className="w-full border border-violet-500 focus:border-lime-500 focus:outline-none px-6 py-3 bg-transparent placeholder:text-slate-500"
              />
            </div>
          </div>

          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Selección
          </h3>
          <div className="flex flex-wrap gap-9">
            <label className="flex gap-2 items-center cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="appearance-none w-5 h-5 border-2 border-lime-500 checked:bg-lime-500 cursor-pointer"
              />
              <span className="text-sm">Recordar sesión</span>
            </label>
            <label className="flex gap-2 items-center cursor-pointer">
              <input
                type="radio"
                name="envio"
                defaultChecked
                className="appearance-none w-5 h-5 border-2 border-lime-500 checked:bg-lime-500 cursor-pointer"
              />
              <span className="text-sm">Envío estándar</span>
            </label>
            <label className="flex gap-2 items-center cursor-pointer">
              <input
                type="radio"
                name="envio"
                className="appearance-none w-5 h-5 border-2 border-lime-500 checked:bg-lime-500 cursor-pointer"
              />
              <span className="text-sm">Envío express</span>
            </label>
          </div>

          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Cantidad
          </h3>
          <div className="flex items-center border-2 border-lime-500 w-fit">
            <button className="w-10 h-10 text-lime-500 hover:bg-lime-500 hover:text-stone-900 font-bold cursor-pointer transition-colors duration-300 ease-in-out">
              −
            </button>
            <span className="w-12 text-center font-bold">1</span>
            <button className="w-10 h-10 text-lime-500 hover:bg-lime-500 hover:text-stone-900 font-bold cursor-pointer transition-colors duration-300 ease-in-out">
              +
            </button>
          </div>
        </section>

        {/* ---------- ETIQUETAS ---------- */}
        <h2 className="font-subheading-ecommerce text-4xl uppercase mt-12 mb-3">
          Etiquetas
        </h2>
        <section className="border border-white/40 p-6 flex flex-col gap-6 mb-3 relative">
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Estado
          </h3>
          <div className="flex flex-wrap gap-3 items-center">
            <span className="bg-lime-500 text-stone-900 font-bold text-xs uppercase px-3 py-1">
              Nuevo
            </span>
            <span className="bg-violet-500 text-white font-bold text-xs uppercase px-3 py-1">
              Preventa
            </span>
            <span className="bg-red-500 text-white font-bold text-xs uppercase px-3 py-1">
              -50%
            </span>
            <span className="bg-yellow-500 text-stone-900 font-bold text-xs uppercase px-3 py-1">
              Últimas unidades
            </span>
            <span className="bg-slate-600 text-slate-300 font-bold text-xs uppercase px-3 py-1">
              Agotado
            </span>
          </div>

          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Plataforma
          </h3>
          <div className="flex flex-wrap gap-3 items-center">
            {["PS5", "Xbox Series", "Switch", "PC", "Retro"].map((p) => (
              <span
                key={p}
                className="border border-lime-500 text-lime-500 text-xs uppercase px-3 py-1"
              >
                {p}
              </span>
            ))}
          </div>

          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Valoración
          </h3>
          <div className="flex gap-1 items-center text-lime-500">
            {[1, 2, 3, 4].map((i) => (
              <svg
                key={i}
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
              </svg>
            ))}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5 opacity-40"
            >
              <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
            </svg>
            <span className="text-xs ml-2">4.0 · 128 reseñas</span>
          </div>
        </section>

        {/* ---------- TARJETA DE PRODUCTO ---------- */}
        <h2 className="font-subheading-ecommerce text-4xl uppercase mt-12 mb-3">
          Tarjeta de producto
        </h2>
        <section className="border border-white/40 p-6 mb-3 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                titulo: "Chrono Raider",
                precio: "S/ 189",
                antes: "S/ 249",
                etiqueta: "-24%",
              },
              {
                titulo: "Neon Drift 84",
                precio: "S/ 99",
                antes: null,
                etiqueta: "Nuevo",
              },
              {
                titulo: "Pixel Dungeon X",
                precio: "S/ 149",
                antes: null,
                etiqueta: null,
              },
            ].map((prod) => (
              <article
                key={prod.titulo}
                className="border border-b-4 border-violet-500 bg-stone-900 flex flex-col group"
              >
                <figure className="relative aspect-4/3 bg-violet-500/20 flex items-center justify-center overflow-hidden">
                  <span className="font-heading-ecommerce text-xs text-violet-500">
                    IMG
                  </span>
                  {prod.etiqueta && (
                    <span className="absolute top-0 left-0 bg-lime-500 text-stone-900 font-bold text-xs uppercase px-3 py-1">
                      {prod.etiqueta}
                    </span>
                  )}
                  <button className="absolute bottom-0 left-0 right-0 bg-lime-500 text-stone-900 font-bold text-xs uppercase py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out cursor-pointer">
                    Vista rápida
                  </button>
                </figure>
                <div className="p-6 flex flex-col gap-2 grow">
                  <span className="text-violet-500 text-xs uppercase">
                    PlayStation 5
                  </span>
                  <h4 className="font-subheading-ecommerce text-2xl text-white leading-none">
                    {prod.titulo}
                  </h4>
                  <div className="flex gap-3 items-baseline mt-auto pt-3">
                    <span className="font-heading-ecommerce text-sm text-lime-500">
                      {prod.precio}
                    </span>
                    {prod.antes && (
                      <span className="text-xs line-through text-slate-500">
                        {prod.antes}
                      </span>
                    )}
                  </div>
                  <button className="mt-3 w-full font-bold text-stone-900 border-4 border-solid border-lime-500 hover:border-lime-500/0 bg-lime-500 hover:bg-lime-500/80 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    Agregar al carrito
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- NAVEGACIÓN ---------- */}
        <h2 className="font-subheading-ecommerce text-4xl uppercase mt-12 mb-3">
          Navegación
        </h2>
        <section className="border border-white/40 p-6 flex flex-col gap-6 mb-3 relative">
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Ruta de navegación
          </h3>
          <nav className="flex flex-wrap gap-2 items-center text-xs">
            <a
              href=""
              className="text-violet-500 hover:text-lime-500 transition-colors duration-300"
            >
              Inicio
            </a>
            <span className="text-slate-600">/</span>
            <a
              href=""
              className="text-violet-500 hover:text-lime-500 transition-colors duration-300"
            >
              Consolas
            </a>
            <span className="text-slate-600">/</span>
            <span className="text-white">PlayStation 5</span>
          </nav>

          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Pestañas
          </h3>
          <div className="flex flex-wrap border-b border-violet-500">
            <button className="font-bold text-sm uppercase px-6 py-2 text-lime-500 border-b-4 border-lime-500 -mb-px cursor-pointer">
              Descripción
            </button>
            <button className="font-bold text-sm uppercase px-6 py-2 text-slate-400 hover:text-white border-b-4 border-transparent -mb-px cursor-pointer transition-colors duration-300">
              Requisitos
            </button>
            <button className="font-bold text-sm uppercase px-6 py-2 text-slate-400 hover:text-white border-b-4 border-transparent -mb-px cursor-pointer transition-colors duration-300">
              Reseñas
            </button>
          </div>

          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Paginación
          </h3>
          <div className="flex flex-wrap gap-2 items-center">
            <button className="w-10 h-10 border-2 border-lime-500/30 text-lime-500/30 font-bold cursor-not-allowed">
              ‹
            </button>
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                className={
                  n === 1
                    ? "w-10 h-10 bg-lime-500 text-stone-900 font-bold cursor-pointer"
                    : "w-10 h-10 border-2 border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-stone-900 font-bold cursor-pointer transition-colors duration-300 ease-in-out"
                }
              >
                {n}
              </button>
            ))}
            <button className="w-10 h-10 border-2 border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-stone-900 font-bold cursor-pointer transition-colors duration-300 ease-in-out">
              ›
            </button>
          </div>
        </section>

        {/* ---------- TABLA ---------- */}
        <h2 className="font-subheading-ecommerce text-4xl uppercase mt-12 mb-3">
          Tabla
        </h2>
        <section className="border border-white/40 p-6 mb-3 relative overflow-x-auto">
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="border-b-2 border-lime-500 text-left">
                <th className="font-subheading-ecommerce text-xl uppercase text-lime-500 py-2">
                  Producto
                </th>
                <th className="font-subheading-ecommerce text-xl uppercase text-lime-500 py-2">
                  Cantidad
                </th>
                <th className="font-subheading-ecommerce text-xl uppercase text-lime-500 py-2">
                  Precio
                </th>
                <th className="font-subheading-ecommerce text-xl uppercase text-lime-500 py-2 text-right">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { n: "Chrono Raider", c: 1, p: "S/ 189", t: "S/ 189" },
                { n: "Neon Drift 84", c: 2, p: "S/ 99", t: "S/ 198" },
              ].map((fila) => (
                <tr key={fila.n} className="border-b border-violet-500/40">
                  <td className="py-3">{fila.n}</td>
                  <td className="py-3">{fila.c}</td>
                  <td className="py-3">{fila.p}</td>
                  <td className="py-3 text-right text-lime-500 font-bold">
                    {fila.t}
                  </td>
                </tr>
              ))}
              <tr>
                <td
                  colSpan={3}
                  className="py-3 font-bold uppercase text-right pr-6"
                >
                  Total
                </td>
                <td className="py-3 text-right font-heading-ecommerce text-sm text-lime-500">
                  S/ 387
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ---------- MODAL ---------- */}
        <h2 className="font-subheading-ecommerce text-4xl uppercase mt-12 mb-3">
          Modal
        </h2>
        <section className="border border-white/40 p-6 mb-3 relative">
          <div className="bg-black/60 p-12 flex items-center justify-center">
            <div className="bg-stone-900 border border-b-4 border-violet-500 w-full max-w-md relative">
              <h3 className="font-subheading-ecommerce text-4xl uppercase px-6 pt-6 pb-3 text-lime-500">
                Vaciar carrito
              </h3>
              <div className="border-t border-violet-500 p-6 flex flex-col gap-6">
                <p className="text-sm">
                  Se quitarán los 3 productos de tu carrito. Esta acción no se
                  puede deshacer.
                </p>
                <div className="flex flex-wrap gap-3 justify-end">
                  <button className="font-bold text-violet-500 hover:text-white border-4 border-violet-500 hover:bg-violet-500 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    Cancelar
                  </button>
                  <button className="font-bold text-white border-4 border-solid border-red-500 bg-red-500 hover:bg-red-500/80 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    Vaciar carrito
                  </button>
                </div>
              </div>
              <button className="absolute top-2 right-2 text-violet-500 hover:text-white cursor-pointer transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* ---------- ESTADOS DE CARGA Y VACÍO ---------- */}
        <h2 className="font-subheading-ecommerce text-4xl uppercase mt-12 mb-3">
          Carga y vacío
        </h2>
        <section className="border border-white/40 p-6 flex flex-col gap-6 mb-3 relative">
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Esqueleto de carga
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border border-violet-500/40 flex flex-col"
              >
                <div className="aspect-4/3 bg-violet-500/20 animate-pulse"></div>
                <div className="p-6 flex flex-col gap-2">
                  <div className="h-3 w-1/3 bg-violet-500/20 animate-pulse"></div>
                  <div className="h-5 w-3/4 bg-violet-500/20 animate-pulse"></div>
                  <div className="h-4 w-1/2 bg-violet-500/20 animate-pulse mt-3"></div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Sin resultados
          </h3>
          <div className="border border-dashed border-violet-500/60 p-12 flex flex-col items-center gap-3 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-12 w-12 text-violet-500"
            >
              <path d="M5 3h14v2H5V3Zm-2 4h18v2H3V7Zm0 4h18v10H3V11Zm4 3v2h2v-2H7Zm8 0v2h2v-2h-2Z" />
            </svg>
            <h4 className="font-subheading-ecommerce text-3xl uppercase text-white">
              No encontramos juegos
            </h4>
            <p className="text-sm max-w-sm">
              Prueba con otra plataforma o quita algunos filtros para ver más
              resultados.
            </p>
            <a
              href=""
              className="mt-3 flex items-center font-bold text-lime-500 hover:text-stone-900 border-4 border-lime-500 hover:bg-lime-500 h-10 px-6 transition-colors duration-300 ease-in-out"
            >
              Quitar filtros
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
