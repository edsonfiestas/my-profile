"use client";

import React from "react";
import Link from "next/link";

export default function SystemDesignPageMailOnBike() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-900 text-slate-300 font-body-appbike">
      <header
        className="bg-appbike-primary overflow-hidden w-full"
        style={{ borderRadius: "0 0 100% 25% / 0 0 30% 30%" }}
      >
        <div className="py-6 px-9 text-center font-heading-appbike font-bold text-appbike-tertiary text-4xl">
          Mail on <span className="">Bike</span> - Design System
        </div>
      </header>
      <main className="px-3 xl:px-0 py-9 w-full max-w-[1440px] mx-auto relative">
        <h1 className="font-heading-appbike text-4xl text-center text-white mb-12">
          Design System
        </h1>

        {/* ---------- COLORES ---------- */}
        <h2 className="font-heading-appbike text-3xl uppercase mt-12 mb-3 text-appbike-secondary">
          Design tokens
        </h2>
        <section className="border border-slate-700 p-6 flex flex-col gap-3 mb-3 relative bg-slate-800 rounded-lg">
          <h3 className="font-heading-appbike text-2xl text-white">Colores</h3>
          <div className="flex flex-col gap-6 mb-9">
            <article className="flex gap-3 items-center py-2 px-3 bg-slate-900 rounded border border-slate-700">
              <p className="w-1/3">
                Primario <strong>#0856d4</strong>:
              </p>
              <div className="bg-appbike-primary block w-10 h-10 border-2 border-white rounded"></div>
              <p className="text-sm">bg-appbike-primary</p>
            </article>
            <article className="flex gap-3 items-center py-2 px-3 bg-slate-900 rounded border border-slate-700">
              <p className="w-1/3">
                Secundario <strong>#ff8a3d</strong>:
              </p>
              <div className="bg-appbike-secondary block w-10 h-10 border-2 border-white rounded"></div>
              <p className="text-sm">bg-appbike-secondary</p>
            </article>
            <article className="flex gap-3 items-center py-2 px-3 bg-slate-900 rounded border border-slate-700">
              <p className="w-1/3">
                Terciario <strong>#f5f1e8</strong>:
              </p>
              <div className="bg-appbike-tertiary block w-10 h-10 border-2 border-slate-400 rounded"></div>
              <p className="text-sm text-slate-400">bg-appbike-tertiary</p>
            </article>
            <article className="flex gap-3 items-center py-2 px-3 bg-slate-900 rounded border border-slate-700">
              <p className="w-1/3">
                Fondo General <strong>#0f172a</strong>:
              </p>
              <div className="bg-slate-900 block w-10 h-10 border-2 border-slate-400 rounded"></div>
              <p className="text-sm text-slate-400">bg-slate-900</p>
            </article>
          </div>

          {/* ---------- TIPOGRAFÍAS ---------- */}
          <h3 className="font-heading-appbike text-2xl text-white mt-6">
            Tipografias Familias
          </h3>
          <div className="flex flex-col gap-3 mb-9">
            <h4 className="font-heading-appbike text-4xl text-appbike-tertiary">
              Archivo - Fuente principal (Títulos)
            </h4>
            <h4 className="font-body-appbike text-2xl text-slate-300">
              Inter - Fuente general (Cuerpo de texto)
            </h4>
          </div>

          <h3 className="font-heading-appbike text-2xl text-white mt-6">
            Tamaños
          </h3>
          <div className="flex flex-col gap-4 mb-9">
            <h1 className="font-heading-appbike text-4xl text-white">
              Fuente principal h1 - 36px (text-4xl)
            </h1>
            <h2 className="font-heading-appbike text-3xl text-white">
              Fuente principal h2 - 30px (text-3xl)
            </h2>
            <h3 className="font-heading-appbike text-2xl text-white">
              Fuente principal h3 - 24px (text-2xl)
            </h3>
            <h4 className="font-heading-appbike text-xl text-white">
              Fuente principal h4 - 20px (text-xl)
            </h4>
          </div>
          <p className="text-base text-slate-300">
            Resto del contenido tamaño de fuente 16px (text-base) o 14px
            (text-sm)
          </p>
        </section>

        {/* ---------- ESPACIADO ---------- */}
        <h2 className="font-heading-appbike text-3xl uppercase mt-12 mb-3 text-appbike-secondary">
          Espaciado
        </h2>
        <section className="border border-slate-700 p-6 flex flex-col gap-3 mb-3 relative bg-slate-800 rounded-lg">
          <p className="text-sm mb-4">
            Escala base de 4px. Acorde a TailwindCSS.
          </p>
          <div className="flex flex-col gap-3 mt-3">
            {[
              { token: "gap-2 / p-2", px: "8px" },
              { token: "gap-3 / p-3", px: "12px" },
              { token: "gap-4 / p-4", px: "16px" },
              { token: "gap-5 / p-5", px: "20px" },
              { token: "gap-6 / p-6", px: "24px" },
              { token: "gap-9 / p-9", px: "36px" },
              { token: "gap-12 / p-12", px: "48px" },
            ].map((s) => (
              <article key={s.token} className="flex gap-6 items-center">
                <p className="w-40 flex-none text-sm uppercase text-appbike-secondary font-bold">
                  {s.token}
                </p>
                <p className="w-16 flex-none text-sm">{s.px}</p>
                <div
                  className="bg-appbike-primary h-6 rounded"
                  style={{ width: s.px }}
                ></div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- BOTONES ---------- */}
        <h2 className="font-heading-appbike text-3xl uppercase mt-12 mb-3 text-appbike-secondary">
          Botones y Enlaces
        </h2>
        <section className="border border-slate-700 p-6 flex flex-col gap-8 mb-3 relative bg-slate-800 rounded-lg">
          <div>
            <h3 className="font-heading-appbike text-2xl text-white mb-4">
              Primarios (Solid)
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="font-heading-appbike font-bold h-12 px-6 bg-appbike-secondary border border-appbike-secondary rounded-lg text-white flex items-center justify-center gap-2">
                Iniciar sesión
              </button>

              <button className="font-heading-appbike font-bold h-12 w-full max-w-[200px] bg-appbike-secondary border border-appbike-secondary rounded-lg text-white flex items-center justify-center gap-2">
                Bloque Completo
              </button>

              <button className="font-heading-appbike font-bold h-12 px-6 bg-appbike-primary border border-appbike-primary rounded-lg text-white flex items-center justify-center gap-2">
                Acción Alternativa
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-heading-appbike text-2xl text-white mb-4">
              Secundarios (Outline)
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="font-heading-appbike font-bold h-12 px-6 bg-transparent border-2 border-appbike-secondary rounded-lg text-appbike-secondary flex items-center justify-center gap-2">
                Cancelar
              </button>

              <button className="font-heading-appbike font-bold h-12 px-6 bg-transparent border-2 border-appbike-primary rounded-lg text-appbike-primary flex items-center justify-center gap-2">
                Ver Rutas
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-heading-appbike text-2xl text-white mb-4">
              Estados Deshabilitados
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <button
                disabled
                className="font-heading-appbike font-bold h-12 px-6 bg-appbike-secondary border border-appbike-secondary rounded-lg text-white flex items-center justify-center gap-2 opacity-80 cursor-not-allowed"
              >
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Cargando...
              </button>
            </div>
          </div>
        </section>

        {/* ---------- FORMULARIOS ---------- */}
        <h2 className="font-heading-appbike text-3xl uppercase mt-12 mb-3 text-appbike-secondary">
          Elementos de Formulario
        </h2>
        <section className="border border-slate-700 p-6 flex flex-col gap-8 mb-3 relative bg-slate-800 rounded-lg">
          <div className="w-full max-w-md bg-appbike-tertiary p-6 rounded-lg text-slate-900">
            <h3 className="font-heading-appbike text-xl font-bold mb-4">
              Inputs con Floating Label
            </h3>
            <div className="flex flex-col gap-5">
              {/* Normal Input */}
              <div className="relative">
                <input
                  type="text"
                  id="normal-input"
                  placeholder=" "
                  className="peer h-12 w-full px-4 pt-3 border border-slate-400 outline-none rounded-lg focus:border-appbike-primary bg-white"
                />
                <label
                  htmlFor="normal-input"
                  className="absolute left-4 top-3.5 text-base text-slate-500 pointer-events-none transition-all
                    peer-focus:top-1 peer-focus:text-xs peer-focus:text-appbike-primary
                    peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Normal Input
                </label>
              </div>

              {/* Error Input */}
              <div className="relative">
                <input
                  type="text"
                  id="error-input"
                  placeholder=" "
                  className="peer h-12 w-full px-4 pt-3 border border-red-500 outline-none rounded-lg focus:border-red-500 bg-white"
                />
                <label
                  htmlFor="error-input"
                  className="absolute left-4 top-3.5 text-base text-red-500 pointer-events-none transition-all
                    peer-focus:top-1 peer-focus:text-xs peer-focus:text-red-500
                    peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Error Input
                </label>
              </div>

              {/* Checkbox */}
              <span className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  id="demo-checkbox"
                  defaultChecked
                  className="h-4 w-4 appearance-none rounded-sm border border-slate-400 checked:bg-appbike-primary checked:border-appbike-primary focus:outline-none"
                />
                <label
                  htmlFor="demo-checkbox"
                  className="text-slate-700 text-sm font-semibold"
                >
                  Checkbox Activo
                </label>
              </span>
            </div>
          </div>
        </section>

        {/* ---------- MENSAJES FLOTANTES ---------- */}
        <h2 className="font-heading-appbike text-3xl uppercase mt-12 mb-3 text-appbike-secondary">
          Mensajes Flotantes (Toasts)
        </h2>
        <section className="border border-slate-700 p-6 flex flex-col gap-6 mb-3 relative bg-slate-800 rounded-lg">
          <h3 className="font-heading-appbike text-2xl text-white">
            Toast Base
          </h3>
          <div className="flex flex-wrap gap-3">
            <div className="bg-slate-800 border border-slate-600 text-white px-5 py-3 rounded-lg shadow-lg relative max-w-sm">
              ¡Bienvenido! Ingresando...
            </div>
            <div className="bg-slate-800 border border-red-500 text-red-500 px-5 py-3 rounded-lg shadow-lg relative max-w-sm">
              Correo o contraseña incorrectos
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
