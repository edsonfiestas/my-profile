"use client";

import React, { useState, useEffect } from "react";

export default function EcomercePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula la inicialización o carga de datos
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-6 transition-colors duration-500">
      <div className="max-w-md w-full text-center space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl dark:shadow-black/30 border border-gray-100 dark:border-gray-700">
        {/* Icono de bolsa de compras con animación */}
        <div className="inline-flex p-4 bg-blue-50 dark:bg-blue-900/30 rounded-2xl text-blue-500 dark:text-blue-400 animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white tracking-tight">
          E-commerce Portfolio
        </h1>

        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
          <span className="flex-shrink mx-4 text-xs font-semibold uppercase tracking-wider text-orange-500 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30 px-3 py-1 rounded-full">
            {loading ? "Cargando..." : "En construcción"}
          </span>
          <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Esta sección está lista con soporte React client-side (`"use
          client"`), hooks y librerías externas. ¡Escribe aquí tu diseño!
        </p>

        {/* Enlace para volver al Inicio */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Volver al Inicio
        </a>
      </div>
    </div>
  );
}
