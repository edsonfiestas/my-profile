"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const VALID_EMAIL = "admin@gmail.com";
const VALID_PASSWORD = "12345";

export default function MailOnBike() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [shake, setShake] = useState(false);
  const [errors, setErrors] = useState({ email: false, password: false });
  const [toast, setToast] = useState<{ show: boolean; message: string }>({
    show: false,
    message: "",
  });

  // Animación de entrada al cargar
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ email: false, password: false });

    setLoading(true);

    // Simula una petición async
    setTimeout(() => {
      const emailOk = email === VALID_EMAIL;
      const passOk = password === VALID_PASSWORD;

      if (emailOk && passOk) {
        showToast("¡Bienvenido! Ingresando...");
        // Aquí iría tu redirect real, ej: router.push("/dashboard")
      } else {
        setErrors({ email: !emailOk, password: !passOk });
        setShake(true);
        showToast("Correo o contraseña incorrectos");
        setTimeout(() => setShake(false), 500);
      }
      setLoading(false);
    }, 1200);
  };

  return (
    <main className="flex justify-center min-w-screen min-h-screen bg-slate-900 font-body-appbike">
      <div
        className={`w-md flex flex-col bg-appbike-tertiary transition-all duration-700 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <header
          className="bg-appbike-primary overflow-hidden"
          style={{ borderRadius: "0 0 100% 25% / 0 0 30% 30%" }}
        >
          <div className="py-3 px-9 text-center font-heading-appbike font-bold text-appbike-tertiary text-2xl">
            Mail on <span className="">Bike</span>
          </div>
          <div>
            <img
              src="/images/appbike004.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <section className="p-9">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Input Correo con floating label */}
            <div
              className={`relative ${shake ? "animate-[shake_0.4s_ease-in-out]" : ""}`}
            >
              <input
                type="text"
                id="login-email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`peer h-12 w-full px-4 pt-3 border outline-none rounded-lg transition-colors duration-200
                  ${errors.email ? "border-red-500 focus:border-red-500" : "border-slate-400 focus:border-appbike-primary"}`}
              />
              <label
                htmlFor="login-email"
                className={`absolute left-4 top-3.5 text-base transition-all duration-200 pointer-events-none
                  peer-focus:top-1 peer-focus:text-xs peer-focus:text-appbike-primary
                  peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs
                  ${errors.email ? "text-red-500" : "text-slate-500"}`}
              >
                Correo
              </label>
            </div>

            {/* Input Contraseña con floating label + ojo */}
            <div
              className={`relative ${shake ? "animate-[shake_0.4s_ease-in-out]" : ""}`}
            >
              <input
                type={showPassword ? "text" : "password"}
                id="login-password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`peer h-12 w-full px-4 pr-11 pt-3 border outline-none rounded-lg transition-colors duration-200
                  ${errors.password ? "border-red-500 focus:border-red-500" : "border-slate-400 focus:border-appbike-primary"}`}
              />
              <label
                htmlFor="login-password"
                className={`absolute left-4 top-3.5 text-base transition-all duration-200 pointer-events-none
                  peer-focus:top-1 peer-focus:text-xs peer-focus:text-appbike-primary
                  peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs
                  ${errors.password ? "text-red-500" : "text-slate-500"}`}
              >
                Contraseña
              </label>

              {/* Botón del ojo */}
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-appbike-primary transition-colors duration-200 cursor-pointer"
                tabIndex={-1}
              >
                {showPassword ? (
                  // Ojo abierto
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  // Ojo cerrado (tachado)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.6 18.6 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                )}
              </button>
            </div>

            <span className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 appearance-none rounded-sm border border-slate-400 checked:bg-appbike-primary checked:border-appbike-primary focus:outline-none transition-colors cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="text-slate-500 text-sm cursor-pointer"
              >
                Recordar cuenta
              </label>
            </span>

            <button
              type="submit"
              disabled={loading}
              className="font-heading-appbike font-bold relative h-12 w-full bg-appbike-secondary border border-appbike-secondary rounded-lg text-white cursor-pointer
                transition-all duration-200 ease-out
                hover:brightness-110 hover:shadow-lg hover:shadow-appbike-secondary/40
                active:scale-95
                disabled:opacity-80 disabled:cursor-not-allowed
                flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
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
                  Ingresando...
                </>
              ) : (
                "Iniciar sesión"
              )}
            </button>
          </form>
        </section>

        <footer className="text-center mt-auto text-slate-500 py-3 text-sm">
          Desde 2013 - version 2.0
        </footer>
      </div>

      {/* Toast */}
      {toast.show && (
        <div
          className="fixed top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-5 py-3 rounded-lg shadow-lg
            animate-[toast-in_0.3s_ease-out] z-50"
        >
          {toast.message}
        </div>
      )}
    </main>
  );
}
