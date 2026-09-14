"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import HeaderEcomerce from "@/components/HeaderEcomerce";

export default function SystemDesignPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-ecommerce-tertiary text-slate-300 font-body-ecommerce">
      <HeaderEcomerce />
      <main className="px-3 xl:px-0 py-9 w-full max-w-[1440px] mx-auto relative">
        <h1 className="font-heading-ecommerce text-3xl text-center">
          Design System
        </h1>
        <h2 className="font-subheading-ecommerce text-4xl uppercase mt-12 mb-3">
          Design tokens
        </h2>
        <section className="border border-white/40 p-6 flex flex-col gap-3 mb-3 relative">
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Colores
          </h3>
          <div className="flex flex-col gap-6 mb-9">
            <article className="flex gap-3 items-center py-1 px-2">
              <p>
                Primario <strong>#c6ff34</strong>:
              </p>
              <div className="bg-ecommerce-primary block w-6 h-6 border border-white"></div>
              <p>Activo</p>
              <div className="bg-ecommerce-primary/30 block w-6 h-6 border border-white"></div>
              <p>Inactivo (transparencia al 30%vdel color base)</p>
            </article>
            <article className="flex gap-3 items-center py-1 px-2">
              <p>
                Secundario <strong>#7f3aed</strong>:
              </p>
              <div className="bg-ecommerce-secondary block w-6 h-6 border border-white"></div>
              <p>Activo</p>
              <div className="bg-ecommerce-secondary/30 block w-6 h-6 border border-white"></div>
              <p>Inactivo (transparencia al 30%vdel color base)</p>
            </article>
            <article className="flex gap-3 items-center py-1 px-2 bg-white text-black">
              <p>
                Terciario <strong>#0f0b0a</strong>:
              </p>
              <div className="bg-ecommerce-tertiary block w-6 h-6 border border-white"></div>
              <p>Activo</p>
              <div className="bg-ecommerce-tertiary/30 block w-6 h-6 border border-white"></div>
              <p>Inactivo (transparencia al 30%vdel color base)</p>
            </article>
            <article className="flex gap-3 items-center py-1 px-2">
              <p>
                Texty general <strong>#CAD5E2</strong>:
              </p>
              <div className="bg-[#CAD5E2] block w-6 h-6 border border-white"></div>
              <p>Activo</p>
              <div className="bg-[#CAD5E2]/30 block w-6 h-6 border border-white"></div>
              <p>Inactivo (transparencia al 30%vdel color base)</p>
            </article>
          </div>
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Tipografias Familias
          </h3>
          <div className="flex flex-col gap-3 mb-9">
            <h4 className="font-heading-ecommerce text-3xl">
              Press Start 2P - Fuente principal
            </h4>
            <h4 className="font-subheading-ecommerce text-5xl">
              Teko - Fuente secundaria
            </h4>
            <h4 className="font-body-ecommerce text-4xl">
              Manrope - Fuente general
            </h4>
          </div>
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Tamaños
          </h3>
          <div className="flex flex-col gap-3 mb-9">
            <h1 className="font-heading-ecommerce text-3xl">
              Fuente principal h1 - 30px
            </h1>
            <h2 className="font-heading-ecommerce text-2xl">
              Fuente principal h2 - 24px
            </h2>
            <h3 className="font-heading-ecommerce text-xl">
              Fuente principal h3 - 20px
            </h3>
          </div>
          <div className="flex flex-col gap-3 mb-9">
            <h2 className="font-subheading-ecommerce text-5xl">
              Fuente secundaria h2 - 48px
            </h2>
            <h3 className="font-subheading-ecommerce text-4xl">
              Fuente secundaria h3 -36px
            </h3>
            <h4 className="font-subheading-ecommerce text-3xl">
              Fuente secundaria h4 - 30px
            </h4>
          </div>
          <p>Resto del contenido tamaña de fuente 16px</p>
        </section>
        {/* ---------- ESPACIADO ---------- */}
        <h2 className="font-subheading-ecommerce text-4xl uppercase mt-12 mb-3">
          Espaciado
        </h2>
        <section className="border border-white/40 p-6 flex flex-col gap-3 mb-3 relative">
          <p className="text-sm">
            Escala base de 4px. Se usan solo estos valores para mantener ritmo
            visual consistente en toda la tienda.
          </p>
          <div className="flex flex-col gap-2 mt-3">
            {[
              { token: "gap-2 / p-2", px: "8px" },
              { token: "gap-3 / p-3", px: "12px" },
              { token: "gap-6 / p-6", px: "24px" },
              { token: "gap-9 / p-9", px: "36px" },
              { token: "gap-12 / p-12", px: "48px" },
            ].map((s) => (
              <article key={s.token} className="flex gap-6 items-center">
                <p className="w-40 flex-none text-xs uppercase text-ecommerce-secondary">
                  {s.token}
                </p>
                <p className="w-16 flex-none text-xs">{s.px}</p>
                <div
                  className="bg-ecommerce-primary h-4"
                  style={{ width: s.px }}
                ></div>
              </article>
            ))}
          </div>
        </section>
        <h2 className="font-subheading-ecommerce text-4xl uppercase mt-12 mb-3">
          Botones
        </h2>
        <section className="border border-white/40 p-6 flex flex-col gap-3 mb-3 relative">
          <h2 className="bg-ecommerce-primary px-6 py-1 font-subheading-ecommerce text-3xl text-ecommerce-tertiary absolute top-0 right-0">
            Primario
          </h2>
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            &lt;button&gt;
          </h3>
          <div className="flex flex-wrap gap-3 items-center">
            <button className="flex gap-2 items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-primary hover:border-ecommerce-primary/0 bg-ecommerce-primary hover:bg-ecommerce-primary/80 h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
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
              Button Primary
            </button>
            <button className="flex gap-2 items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-primary/0 bg-ecommerce-primary/30 h-10 px-6">
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
              Button Primary
            </button>
            <button className="flex gap-2 items-center font-bold text-ecommerce-primary hover:text-ecommerce-tertiary border-4 border-ecommerce-primary hover:bg-ecommerce-primary h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
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
              Button Primary
            </button>
            <button className="flex gap-2 items-center font-bold text-ecommerce-primary/30 border-4 border-ecommerce-primary/30 h-10 pl-5 pr-6">
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
              Button Primary
            </button>
            <button className="font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-primary hover:border-ecommerce-primary/0 bg-ecommerce-primary hover:bg-ecommerce-primary/80 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
            <button className="font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-primary/0 bg-ecommerce-primary/30 h-10 px-6">
              Button Primary
            </button>
            <button className="font-bold text-ecommerce-primary hover:text-ecommerce-tertiary border-4 border-ecommerce-primary hover:bg-ecommerce-primary h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
            <button className="font-bold text-ecommerce-primary/30 border-4 border-ecommerce-primary/30 h-10 px-6">
              Button Primary
            </button>
            <button className="font-bold text-xs text-ecommerce-tertiary border-4 border-solid border-ecommerce-primary hover:border-ecommerce-primary/0 bg-ecommerce-primary hover:bg-ecommerce-primary/80 h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
            <button className="text-xs text-ecommerce-primary hover:text-ecommerce-tertiary font-bold border-2 border-ecommerce-primary hover:bg-ecommerce-primary h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
          </div>
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            &lt;a href&gt;
          </h3>
          <div className="flex flex-wrap gap-3 items-center">
            <a
              href=""
              className="flex gap-2 items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-primary hover:border-ecommerce-primary/0 bg-ecommerce-primary hover:bg-ecommerce-primary/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
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
              Link Primary
            </a>
            <a
              href=""
              className="flex gap-2 items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-primary/0 bg-ecommerce-primary/30 h-10 px-6 cursor-default"
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
              Link Primary
            </a>
            <a
              href=""
              className="flex gap-2 items-center font-bold text-ecommerce-primary hover:text-ecommerce-tertiary border-4 border-ecommerce-primary hover:bg-ecommerce-primary h-10 px-6 transition-colors duration-300 ease-in-out"
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
              Link Primary
            </a>
            <a
              href=""
              className="flex gap-2 items-center font-bold text-ecommerce-primary/30 border-4 border-ecommerce-primary/30 h-10 px-6 cursor-default"
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
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-primary hover:border-ecommerce-primary/0 bg-ecommerce-primary hover:bg-ecommerce-primary/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-primary/0 bg-ecommerce-primary/30 h-10 px-6 cursor-default"
            >
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-ecommerce-primary hover:text-ecommerce-tertiary border-4 border-ecommerce-primary hover:bg-ecommerce-primary h-10 px-6 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-ecommerce-primary/30 border-4 border-ecommerce-primary/30 h-10 px-6 cursor-default"
            >
              Link Primary
            </a>
            <a
              href=""
              className="text-ecommerce-primary underline decoration-transparent hover:decoration-current transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-ecommerce-primary hover:border-ecommerce-primary/0 bg-ecommerce-primary hover:bg-ecommerce-primary/80 h-6 px-3 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="text-xs flex items-center font-bold text-ecommerce-primary hover:text-ecommerce-tertiary border-2 border-ecommerce-primary hover:bg-ecommerce-primary h-6 px-3 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
          </div>
        </section>
        <section className="border border-ecommerce-secondary p-6 flex flex-col gap-3 mb-3 relative">
          <h2 className="bg-ecommerce-secondary px-6 py-1 font-subheading-ecommerce text-3xl text-ecommerce-tertiary absolute top-0 right-0">
            Secundario
          </h2>
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            &lt;button&gt;
          </h3>
          <div className="flex flex-wrap gap-3 items-center">
            <button className="flex gap-2 items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-secondary hover:border-ecommerce-secondary/0 bg-ecommerce-secondary hover:bg-ecommerce-secondary/80 h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
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
              Button Primary
            </button>
            <button className="flex gap-2 items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-secondary/0 bg-ecommerce-secondary/50 h-10 px-6">
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
              Button Primary
            </button>
            <button className="flex gap-2 items-center font-bold text-ecommerce-secondary hover:text-ecommerce-tertiary border-4 border-ecommerce-secondary hover:bg-ecommerce-secondary h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
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
              Button Primary
            </button>
            <button className="flex gap-2 items-center font-bold text-ecommerce-secondary/50 border-4 border-ecommerce-secondary/50 h-10 pl-5 pr-6">
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
              Button Primary
            </button>
            <button className="font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-secondary hover:border-ecommerce-secondary/0 bg-ecommerce-secondary hover:bg-ecommerce-secondary/80 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
            <button className="font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-secondary/0 bg-ecommerce-secondary/50 h-10 px-6">
              Button Primary
            </button>
            <button className="font-bold text-ecommerce-secondary hover:text-ecommerce-tertiary border-4 border-ecommerce-secondary hover:bg-ecommerce-secondary h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
            <button className="font-bold text-ecommerce-secondary/50 border-4 border-ecommerce-secondary/50 h-10 px-6">
              Button Primary
            </button>
            <button className="font-bold text-xs text-ecommerce-tertiary border-4 border-solid border-ecommerce-secondary hover:border-ecommerce-secondary/0 bg-ecommerce-secondary hover:bg-ecommerce-secondary/80 h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
            <button className="text-xs text-ecommerce-secondary hover:text-ecommerce-tertiary font-bold border-2 border-ecommerce-secondary hover:bg-ecommerce-secondary h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
          </div>
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            &lt;a href&gt;
          </h3>
          <div className="flex flex-wrap gap-3 items-center">
            <a
              href=""
              className="flex gap-2 items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-secondary hover:border-ecommerce-secondary/0 bg-ecommerce-secondary hover:bg-ecommerce-secondary/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
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
              Link Primary
            </a>
            <a
              href=""
              className="flex gap-2 items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-secondary/0 bg-ecommerce-secondary/50 h-10 px-6 cursor-default"
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
              Link Primary
            </a>
            <a
              href=""
              className="flex gap-2 items-center font-bold text-ecommerce-secondary hover:text-ecommerce-tertiary border-4 border-ecommerce-secondary hover:bg-ecommerce-secondary h-10 px-6 transition-colors duration-300 ease-in-out"
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
              Link Primary
            </a>
            <a
              href=""
              className="flex gap-2 items-center font-bold text-ecommerce-secondary/50 border-4 border-ecommerce-secondary/50 h-10 px-6 cursor-default"
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
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-secondary hover:border-ecommerce-secondary/0 bg-ecommerce-secondary hover:bg-ecommerce-secondary/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-secondary/0 bg-ecommerce-secondary/50 h-10 px-6 cursor-default"
            >
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-ecommerce-secondary hover:text-ecommerce-tertiary border-4 border-ecommerce-secondary hover:bg-ecommerce-secondary h-10 px-6 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-ecommerce-secondary/50 border-4 border-ecommerce-secondary/50 h-10 px-6 cursor-default"
            >
              Link Primary
            </a>
            <a
              href=""
              className="text-ecommerce-secondary underline decoration-transparent hover:decoration-current transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-ecommerce-secondary hover:border-ecommerce-secondary/0 bg-ecommerce-secondary hover:bg-ecommerce-secondary/80 h-6 px-3 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="text-xs flex items-center font-bold text-ecommerce-secondary hover:text-ecommerce-tertiary border-2 border-ecommerce-secondary hover:bg-ecommerce-secondary h-6 px-3 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
          </div>
        </section>
        <section className="bg-white border border-white p-6 flex flex-col gap-3 mb-3 relative">
          <h2 className="bg-ecommerce-tertiary px-6 py-1 font-subheading-ecommerce text-3xl text-white absolute top-0 right-0">
            Terciario
          </h2>
          <h3 className="font-subheading-ecommerce text-2xl text-ecommerce-tertiary">
            &lt;button&gt;
          </h3>
          <div className="flex flex-wrap gap-3 items-center">
            <button className="flex gap-2 items-center font-bold text-white border-4 border-solid border-ecommerce-tertiary hover:border-ecommerce-tertiary/0 bg-ecommerce-tertiary hover:bg-ecommerce-tertiary/80 h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
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
              Button Primary
            </button>
            <button className="flex gap-2 items-center font-bold text-white/70 border-4 border-solid border-ecommerce-tertiary/0 bg-ecommerce-tertiary/30 h-10 px-6">
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
              Button Primary
            </button>
            <button className="flex gap-2 items-center font-bold text-ecommerce-tertiary hover:text-white border-4 border-ecommerce-tertiary hover:bg-ecommerce-tertiary h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
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
              Button Primary
            </button>
            <button className="flex gap-2 items-center font-bold text-ecommerce-tertiary/30 border-4 border-ecommerce-tertiary/30 h-10 pl-5 pr-6">
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
              Button Primary
            </button>
            <button className="font-bold text-white border-4 border-solid border-ecommerce-tertiary hover:border-ecommerce-tertiary/0 bg-ecommerce-tertiary hover:bg-ecommerce-tertiary/80 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
            <button className="font-bold text-white/70 border-4 border-solid border-ecommerce-tertiary/0 bg-ecommerce-tertiary/30 h-10 px-6">
              Button Primary
            </button>
            <button className="font-bold text-ecommerce-tertiary hover:text-white border-4 border-ecommerce-tertiary hover:bg-ecommerce-tertiary h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
            <button className="font-bold text-ecommerce-tertiary/30 border-4 border-ecommerce-tertiary/30 h-10 px-6">
              Button Primary
            </button>
            <button className="font-bold text-xs text-white border-4 border-solid border-ecommerce-tertiary hover:border-ecommerce-tertiary/0 bg-ecommerce-tertiary hover:bg-ecommerce-tertiary/80 h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
            <button className="text-xs text-ecommerce-tertiary hover:text-white font-bold border-2 border-ecommerce-tertiary hover:bg-ecommerce-tertiary h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
          </div>
          <h3 className="font-subheading-ecommerce text-2xl text-ecommerce-tertiary">
            &lt;a href&gt;
          </h3>
          <div className="flex flex-wrap gap-3 items-center">
            <a
              href=""
              className="flex gap-2 items-center font-bold text-white border-4 border-solid border-ecommerce-tertiary hover:border-ecommerce-tertiary/0 bg-ecommerce-tertiary hover:bg-ecommerce-tertiary/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
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
              Link Primary
            </a>
            <a
              href=""
              className="flex gap-2 items-center font-bold text-white/70 border-4 border-solid border-ecommerce-tertiary/0 bg-ecommerce-tertiary/30 h-10 px-6 cursor-default"
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
              Link Primary
            </a>
            <a
              href=""
              className="flex gap-2 items-center font-bold text-ecommerce-tertiary hover:text-white border-4 border-ecommerce-tertiary hover:bg-ecommerce-tertiary h-10 px-6 transition-colors duration-300 ease-in-out"
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
              Link Primary
            </a>
            <a
              href=""
              className="flex gap-2 items-center font-bold text-ecommerce-tertiary/30 border-4 border-ecommerce-tertiary/30 h-10 px-6 cursor-default"
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
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-white border-4 border-solid border-ecommerce-tertiary hover:border-ecommerce-tertiary/0 bg-ecommerce-tertiary hover:bg-ecommerce-tertiary/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-white/70 border-4 border-solid border-ecommerce-tertiary/0 bg-ecommerce-tertiary/30 h-10 px-6 cursor-default"
            >
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-ecommerce-tertiary hover:text-white border-4 border-ecommerce-tertiary hover:bg-ecommerce-tertiary h-10 px-6 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-ecommerce-tertiary/30 border-4 border-ecommerce-tertiary/30 h-10 px-6 cursor-default"
            >
              Link Primary
            </a>
            <a
              href=""
              className="text-ecommerce-tertiary underline decoration-transparent hover:decoration-current transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="text-xs flex items-center font-bold text-white border-2 border-solid border-ecommerce-tertiary hover:border-ecommerce-tertiary/0 bg-ecommerce-tertiary hover:bg-ecommerce-tertiary/80 h-6 px-3 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="text-xs flex items-center font-bold text-ecommerce-tertiary hover:text-white border-2 border-ecommerce-tertiary hover:bg-ecommerce-tertiary h-6 px-3 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
          </div>
        </section>
        <h2 className="font-subheading-ecommerce text-4xl uppercase mb-3 mt-12">
          Mensajes Flotantes
        </h2>
        <section className="border border-white/40 p-6 flex flex-col gap-3 mb-3 relative">
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Base
          </h3>
          <div className="flex flex-wrap gap-3">
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-ecommerce-secondary -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <figure className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-ecommerce-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <article className="grow text-ecommerce-secondary">
                  <h4 className="font-bold mb-0.5">Mensaje de general</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <div className="flex-none">
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-ecommerce-secondary hover:border-ecommerce-secondary/0 bg-ecommerce-secondary hover:bg-ecommerce-secondary/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
                <a
                  href=""
                  className="absolute top-2 right-2 z-10 text-ecommerce-secondary"
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
            Mensaje
          </h3>
          <div className="flex flex-wrap gap-3">
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-ecommerce-secondary -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <figure className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-ecommerce-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <article className="grow text-ecommerce-secondary">
                  <h4 className="font-bold mb-0.5">Mensaje de general</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <a
                  href=""
                  className="absolute top-2 right-2 z-10 text-ecommerce-secondary"
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
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-red-500 -absolute">
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
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-yellow-500 -absolute">
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
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-green-500 -absolute">
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
          <div className="flex flex-wrap gap-3">
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-ecommerce-secondary -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <article className="grow text-ecommerce-secondary">
                  <h4 className="font-bold mb-0.5">Mensaje de general</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <a
                  href=""
                  className="absolute top-2 right-2 z-10 text-ecommerce-secondary"
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
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-red-500 -absolute">
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
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-yellow-500 -absolute">
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
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-green-500 -absolute">
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
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-ecommerce-secondary -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <figure className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-ecommerce-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <article className="grow text-ecommerce-secondary">
                  <h4 className="font-bold mb-0.5">Mensaje de general</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <div className="flex-none">
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-ecommerce-secondary hover:border-ecommerce-secondary/0 bg-ecommerce-secondary hover:bg-ecommerce-secondary/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-red-500 -absolute">
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
                    className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-red-500 hover:border-red-500/0 bg-red-500 hover:bg-red-500/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-yellow-500 -absolute">
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
                    className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-yellow-500 hover:border-yellow-500/0 bg-yellow-500 hover:bg-yellow-500/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-green-500 -absolute">
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
                    className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-green-500 hover:border-green-500/0 bg-green-500 hover:bg-green-500/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-ecommerce-secondary -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <article className="grow text-ecommerce-secondary">
                  <h4 className="font-bold mb-0.5">Mensaje de general</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <div className="flex-none">
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-ecommerce-secondary hover:border-ecommerce-secondary/0 bg-ecommerce-secondary hover:bg-ecommerce-secondary/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-red-500 -absolute">
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
                    className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-red-500 hover:border-red-500/0 bg-red-500 hover:bg-red-500/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-yellow-500 -absolute">
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
                    className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-yellow-500 hover:border-yellow-500/0 bg-yellow-500 hover:bg-yellow-500/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-green-500 -absolute">
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
                    className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-green-500 hover:border-green-500/0 bg-green-500 hover:bg-green-500/80 h-6 px-3 transition-colors duration-300 ease-in-out"
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
        <section className="border border-white/40 p-6 mb-3 relative">
          <div className="border border-b-4 border-ecommerce-secondary -shadow-[8px_8px_0px_0px_var(--color-ecommerce-secondary)] w-full max-w-md">
            <h2 className="h-full font-subheading-ecommerce text-5xl uppercase pt-6 px-6 pb-3 text-ecommerce-primary flex justify-center items-center gap-3">
              <span>Credenciales</span>
            </h2>
            <h3 className="border-t border-b border-ecommerce-secondary text-xl font-bold text-ecommerce-secondary uppercase text-center pt-2 pb-2">
              Hola denuevo usuario
            </h3>
            <div className="flex flex-col gap-6 p-6">
              <div>
                <label className="flex gap-2 items-center text-ecommerce-secondary uppercase text-xs mb-2">
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
                  className="w-full border border-ecommerce-secondary focus:border-ecommerce-primary focus:outline-none h-10 px-6"
                />
              </div>
              <div>
                <label className="flex gap-2 items-center text-ecommerce-secondary uppercase text-xs mb-2">
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
                  className="w-full border border-ecommerce-secondary focus:border-ecommerce-primary focus:outline-none h-10 px-6"
                />
              </div>
              <button
                type="submit"
                className="w-full justify-center flex gap-2 items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-primary/0 bg-ecommerce-primary/30 h-10 px-6"
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
              <label className="block text-ecommerce-secondary uppercase text-xs mb-2">
                Campo normal
              </label>
              <input
                type="text"
                placeholder="Escribe aquí"
                className="w-full border border-ecommerce-secondary focus:border-ecommerce-primary focus:outline-none h-10 px-6 bg-transparent placeholder:text-slate-500"
              />
            </div>
            <div>
              <label className="block text-ecommerce-secondary uppercase text-xs mb-2">
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
              <label className="block text-ecommerce-secondary uppercase text-xs mb-2">
                Campo correcto
              </label>
              <input
                type="text"
                defaultValue="jugador@correo.com"
                className="w-full border border-green-500 focus:outline-none h-10 px-6 bg-transparent"
              />
            </div>
            <div>
              <label className="block text-ecommerce-secondary/30 uppercase text-xs mb-2">
                Campo deshabilitado
              </label>
              <input
                type="text"
                disabled
                placeholder="No editable"
                className="w-full border border-ecommerce-secondary/30 h-10 px-6 bg-transparent text-slate-500 cursor-not-allowed"
              />
            </div>
          </div>

          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Selector y área de texto
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-ecommerce-secondary uppercase text-xs mb-2">
                Plataforma
              </label>
              <select className="w-full border border-ecommerce-secondary focus:border-ecommerce-primary focus:outline-none h-10 px-6 bg-ecommerce-tertiary">
                <option>PlayStation</option>
                <option>Xbox</option>
                <option>Nintendo</option>
                <option>PC</option>
              </select>
            </div>
            <div>
              <label className="block text-ecommerce-secondary uppercase text-xs mb-2">
                Comentario
              </label>
              <textarea
                rows={3}
                placeholder="Cuéntanos qué te pareció el juego"
                className="w-full border border-ecommerce-secondary focus:border-ecommerce-primary focus:outline-none px-6 py-3 bg-transparent placeholder:text-slate-500"
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
                className="appearance-none w-5 h-5 border-2 border-ecommerce-primary checked:bg-ecommerce-primary cursor-pointer"
              />
              <span className="text-sm">Recordar sesión</span>
            </label>
            <label className="flex gap-2 items-center cursor-pointer">
              <input
                type="radio"
                name="envio"
                defaultChecked
                className="appearance-none w-5 h-5 border-2 border-ecommerce-primary checked:bg-ecommerce-primary cursor-pointer"
              />
              <span className="text-sm">Envío estándar</span>
            </label>
            <label className="flex gap-2 items-center cursor-pointer">
              <input
                type="radio"
                name="envio"
                className="appearance-none w-5 h-5 border-2 border-ecommerce-primary checked:bg-ecommerce-primary cursor-pointer"
              />
              <span className="text-sm">Envío express</span>
            </label>
          </div>

          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Cantidad
          </h3>
          <div className="flex items-center border-2 border-ecommerce-primary w-fit">
            <button className="w-10 h-10 text-ecommerce-primary hover:bg-ecommerce-primary hover:text-ecommerce-tertiary font-bold cursor-pointer transition-colors duration-300 ease-in-out">
              −
            </button>
            <span className="w-12 text-center font-bold">1</span>
            <button className="w-10 h-10 text-ecommerce-primary hover:bg-ecommerce-primary hover:text-ecommerce-tertiary font-bold cursor-pointer transition-colors duration-300 ease-in-out">
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
            <span className="bg-ecommerce-primary text-ecommerce-tertiary font-bold text-xs uppercase px-3 py-1">
              Nuevo
            </span>
            <span className="bg-ecommerce-secondary text-white font-bold text-xs uppercase px-3 py-1">
              Preventa
            </span>
            <span className="bg-red-500 text-white font-bold text-xs uppercase px-3 py-1">
              -50%
            </span>
            <span className="bg-yellow-500 text-ecommerce-tertiary font-bold text-xs uppercase px-3 py-1">
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
                className="border border-ecommerce-primary text-ecommerce-primary text-xs uppercase px-3 py-1"
              >
                {p}
              </span>
            ))}
          </div>

          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Valoración
          </h3>
          <div className="flex gap-1 items-center text-ecommerce-primary">
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
                className="border border-b-4 border-ecommerce-secondary bg-ecommerce-tertiary flex flex-col group"
              >
                <figure className="relative aspect-4/3 bg-ecommerce-secondary/20 flex items-center justify-center overflow-hidden">
                  <span className="font-heading-ecommerce text-xs text-ecommerce-secondary">
                    IMG
                  </span>
                  {prod.etiqueta && (
                    <span className="absolute top-0 left-0 bg-ecommerce-primary text-ecommerce-tertiary font-bold text-xs uppercase px-3 py-1">
                      {prod.etiqueta}
                    </span>
                  )}
                  <button className="absolute bottom-0 left-0 right-0 bg-ecommerce-primary text-ecommerce-tertiary font-bold text-xs uppercase py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out cursor-pointer">
                    Vista rápida
                  </button>
                </figure>
                <div className="p-6 flex flex-col gap-2 grow">
                  <span className="text-ecommerce-secondary text-xs uppercase">
                    PlayStation 5
                  </span>
                  <h4 className="font-subheading-ecommerce text-2xl text-white leading-none">
                    {prod.titulo}
                  </h4>
                  <div className="flex gap-3 items-baseline mt-auto pt-3">
                    <span className="font-heading-ecommerce text-sm text-ecommerce-primary">
                      {prod.precio}
                    </span>
                    {prod.antes && (
                      <span className="text-xs line-through text-slate-500">
                        {prod.antes}
                      </span>
                    )}
                  </div>
                  <button className="mt-3 w-full font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-primary hover:border-ecommerce-primary/0 bg-ecommerce-primary hover:bg-ecommerce-primary/80 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
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
              className="text-ecommerce-secondary hover:text-ecommerce-primary transition-colors duration-300"
            >
              Inicio
            </a>
            <span className="text-slate-600">/</span>
            <a
              href=""
              className="text-ecommerce-secondary hover:text-ecommerce-primary transition-colors duration-300"
            >
              Consolas
            </a>
            <span className="text-slate-600">/</span>
            <span className="text-white">PlayStation 5</span>
          </nav>

          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Pestañas
          </h3>
          <div className="flex flex-wrap border-b border-ecommerce-secondary">
            <button className="font-bold text-sm uppercase px-6 py-2 text-ecommerce-primary border-b-4 border-ecommerce-primary -mb-px cursor-pointer">
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
            <button className="w-10 h-10 border-2 border-ecommerce-primary/30 text-ecommerce-primary/30 font-bold cursor-not-allowed">
              ‹
            </button>
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                className={
                  n === 1
                    ? "w-10 h-10 bg-ecommerce-primary text-ecommerce-tertiary font-bold cursor-pointer"
                    : "w-10 h-10 border-2 border-ecommerce-primary text-ecommerce-primary hover:bg-ecommerce-primary hover:text-ecommerce-tertiary font-bold cursor-pointer transition-colors duration-300 ease-in-out"
                }
              >
                {n}
              </button>
            ))}
            <button className="w-10 h-10 border-2 border-ecommerce-primary text-ecommerce-primary hover:bg-ecommerce-primary hover:text-ecommerce-tertiary font-bold cursor-pointer transition-colors duration-300 ease-in-out">
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
              <tr className="border-b-2 border-ecommerce-primary text-left">
                <th className="font-subheading-ecommerce text-xl uppercase text-ecommerce-primary py-2">
                  Producto
                </th>
                <th className="font-subheading-ecommerce text-xl uppercase text-ecommerce-primary py-2">
                  Cantidad
                </th>
                <th className="font-subheading-ecommerce text-xl uppercase text-ecommerce-primary py-2">
                  Precio
                </th>
                <th className="font-subheading-ecommerce text-xl uppercase text-ecommerce-primary py-2 text-right">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { n: "Chrono Raider", c: 1, p: "S/ 189", t: "S/ 189" },
                { n: "Neon Drift 84", c: 2, p: "S/ 99", t: "S/ 198" },
              ].map((fila) => (
                <tr
                  key={fila.n}
                  className="border-b border-ecommerce-secondary/40"
                >
                  <td className="py-3">{fila.n}</td>
                  <td className="py-3">{fila.c}</td>
                  <td className="py-3">{fila.p}</td>
                  <td className="py-3 text-right text-ecommerce-primary font-bold">
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
                <td className="py-3 text-right font-heading-ecommerce text-sm text-ecommerce-primary">
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
            <div className="bg-ecommerce-tertiary border border-b-4 border-ecommerce-secondary w-full max-w-md relative">
              <h3 className="font-subheading-ecommerce text-4xl uppercase px-6 pt-6 pb-3 text-ecommerce-primary">
                Vaciar carrito
              </h3>
              <div className="border-t border-ecommerce-secondary p-6 flex flex-col gap-6">
                <p className="text-sm">
                  Se quitarán los 3 productos de tu carrito. Esta acción no se
                  puede deshacer.
                </p>
                <div className="flex flex-wrap gap-3 justify-end">
                  <button className="font-bold text-ecommerce-secondary hover:text-white border-4 border-ecommerce-secondary hover:bg-ecommerce-secondary h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    Cancelar
                  </button>
                  <button className="font-bold text-white border-4 border-solid border-red-500 bg-red-500 hover:bg-red-500/80 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
                    Vaciar carrito
                  </button>
                </div>
              </div>
              <button className="absolute top-2 right-2 text-ecommerce-secondary hover:text-white cursor-pointer transition-colors duration-300">
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
                className="border border-ecommerce-secondary/40 flex flex-col"
              >
                <div className="aspect-4/3 bg-ecommerce-secondary/20 animate-pulse"></div>
                <div className="p-6 flex flex-col gap-2">
                  <div className="h-3 w-1/3 bg-ecommerce-secondary/20 animate-pulse"></div>
                  <div className="h-5 w-3/4 bg-ecommerce-secondary/20 animate-pulse"></div>
                  <div className="h-4 w-1/2 bg-ecommerce-secondary/20 animate-pulse mt-3"></div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Sin resultados
          </h3>
          <div className="border border-dashed border-ecommerce-secondary/60 p-12 flex flex-col items-center gap-3 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-12 w-12 text-ecommerce-secondary"
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
              className="mt-3 flex items-center font-bold text-ecommerce-primary hover:text-ecommerce-tertiary border-4 border-ecommerce-primary hover:bg-ecommerce-primary h-10 px-6 transition-colors duration-300 ease-in-out"
            >
              Quitar filtros
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
