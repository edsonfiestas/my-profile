"use client";

import Link from "next/link";
import { useState } from "react";

// --- Íconos de ojo (mostrar / ocultar contraseña) ---
function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
}

function EyeSlashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );
}

// --- Tooltip de error junto al input (al lado en desktop, debajo en mobile) ---
function FieldError({ show, message }: { show: boolean; message: string }) {
  return (
    <div
      className={`absolute z-10 left-1/2 -translate-x-1/2 top-full mt-2 sm:left-full sm:top-1/2 sm:-translate-x-0 sm:ml-3 whitespace-nowrap bg-red-500 text-white text-xs px-3 py-1.5 rounded-md shadow-lg transition-all duration-200 ${
        show
          ? "opacity-100 translate-y-0 sm:-translate-y-1/2"
          : "opacity-0 -translate-y-1 sm:-translate-y-1/2 sm:-translate-x-2 pointer-events-none"
      }`}
    >
      {message}
      <span className="hidden sm:block absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-red-500" />
      <span className="sm:hidden absolute left-1/2 -translate-x-1/2 bottom-full border-4 border-transparent border-b-red-500" />
    </div>
  );
}

// --- Utilidad para medir la seguridad de la contraseña ---
function getPasswordStrength(password: string) {
  if (password.length === 0) {
    return {
      score: 0,
      label: "",
      color: "bg-slate-200",
      textColor: "",
      width: "0%",
    };
  }

  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) {
    return {
      score,
      label: "Insegura",
      color: "bg-red-500",
      textColor: "text-red-500",
      width: "33%",
    };
  }
  if (score <= 4) {
    return {
      score,
      label: "Segura",
      color: "bg-yellow-500",
      textColor: "text-yellow-600",
      width: "66%",
    };
  }
  return {
    score,
    label: "Muy segura",
    color: "bg-green-500",
    textColor: "text-green-600",
    width: "100%",
  };
}

export default function EcomerceLoginPage() {
  // --- Panel activo: 'register' muestra form-registrarse + mensaje-ingresar ---
  // --- 'login' muestra form-ingresar + mensaje-registrarse ---
  const [displayMode, setDisplayMode] = useState<"login" | "register">("login");
  const [fading, setFading] = useState(false);

  const switchTo = (target: "login" | "register") => {
    if (target === displayMode) return;
    // 1. Se hace fade-out del panel actual
    setFading(true);
    setTimeout(() => {
      // 2. Se cambia qué par está "no oculto"
      setDisplayMode(target);
      // 3. Doble rAF para asegurar que el navegador pinte el estado
      //    opacity-0 del panel entrante antes de animarlo a opacity-100
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setFading(false));
      });
    }, 250); // debe coincidir con duration-300 (un poco menor)
  };

  // --- Mostrar / ocultar contraseñas (uno por campo) ---
  const [showLoginPass, setShowLoginPass] = useState(false);
  const [showRegPass, setShowRegPass] = useState(false);
  const [showRegConfirmPass, setShowRegConfirmPass] = useState(false);

  // --- Validación de credenciales en form-ingresar (login) ---
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginEmailError, setLoginEmailError] = useState(false);
  const [loginPasswordError, setLoginPasswordError] = useState(false);

  const loginButtonDisabled =
    loginEmail.trim() === "" || loginPassword.trim() === "";

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailOk = loginEmail === "edsonfiestas@gmail.com";
    const passwordOk = loginPassword === "E$caflone.92";
    setLoginEmailError(!emailOk);
    setLoginPasswordError(!passwordOk);
    if (emailOk && passwordOk) {
      // credenciales correctas -> aquí va la lógica real de inicio de sesión
      console.log("Login correcto");
    }
  };

  // --- Validación de contraseña segura en form-registrarse ---
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");

  const strength = getPasswordStrength(regPassword);
  const passwordsMismatch =
    regConfirmPassword.length > 0 && regConfirmPassword !== regPassword;

  const registerButtonDisabled =
    regName.trim() === "" ||
    regEmail.trim() === "" ||
    regPassword.trim() === "" ||
    regConfirmPassword.trim() === "";

  const [regEmailError, setRegEmailError] = useState(false);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailTaken = regEmail === "edsonfiestas@gmail.com";
    setRegEmailError(emailTaken);
    if (!emailTaken) {
      // correo disponible -> aquí va la lógica real de registro
      console.log("Registro correcto");
    }
  };

  // Clases del botón según su estado activo/inactivo
  const submitButtonClass = (disabled: boolean) =>
    `h-12 transition-colors uppercase duration-200 ${
      disabled
        ? "bg-slate-300 text-slate-400 border border-slate-300 cursor-normal"
        : "button-primary-color text-white cursor-pointer"
    }`;

  // Clase compartida para el efecto de hidden <-> visible
  // side: de qué lado "entra" el panel (columna izquierda o derecha del grid)
  const panelClass = (visible: boolean, side: "left" | "right") => {
    if (!visible) return "hidden";
    const offset = side === "left" ? "-translate-x-8" : "translate-x-8";
    return `transition-all duration-300 ease-out ${
      fading ? `opacity-0 ${offset}` : "opacity-100 translate-x-0"
    }`;
  };

  return (
    <div className="w-full h-full min-h-screen font-body text-slate-600">
      <div className="grid grid-cols-2 overflow-hidden">
        {/* ---------- FORM INGRESAR (login) ---------- */}
        <div
          id="form-ingresar"
          className={panelClass(displayMode === "login", "left")}
        >
          <section className="px-3 xl:px-0 py-9 max-w-xs h-full min-h-screen mx-auto relative flex flex-col gap-6 justify-between">
            <div className="justify-center items-center flex">
              <img
                src="/logo-apaisado.svg"
                alt="Logotipo"
                className="w-full max-w-20 h-auto object-contain"
              />
            </div>
            <div>
              <h2 className="text-center font-heading text-4xl uppercase text-slate-900 mb-6">
                Ingresar con
              </h2>
              <div className="flex justify-center items-center gap-9 mb-6">
                <Link href="/portfolio/ecommerce/login/facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M29.44,16.318c0-.993-.089-1.947-.255-2.864h-13.185v5.422h7.535c-.331,1.744-1.324,3.22-2.813,4.213v3.525h4.544c2.647-2.444,4.175-6.033,4.175-10.296Z"
                      opacity=".4"
                    ></path>
                    <path d="M16,30c3.78,0,6.949-1.247,9.265-3.385l-4.544-3.525c-1.247,.84-2.838,1.349-4.722,1.349-3.64,0-6.733-2.456-7.84-5.765l-2.717,2.09-1.941,1.525c2.304,4.569,7.025,7.713,12.498,7.713Z"></path>
                    <path
                      d="M8.16,18.66c-.28-.84-.445-1.731-.445-2.66s.165-1.82,.445-2.66v-3.615H3.502c-.955,1.884-1.502,4.009-1.502,6.275s.547,4.391,1.502,6.275h3.332s1.327-3.615,1.327-3.615Z"
                      opacity=".4"
                    ></path>
                    <path d="M16,7.575c2.062,0,3.895,.713,5.358,2.087l4.009-4.009c-2.431-2.265-5.587-3.653-9.367-3.653-5.473,0-10.195,3.144-12.498,7.725l4.658,3.615c1.107-3.309,4.2-5.765,7.84-5.765Z"></path>
                  </svg>
                </Link>
                <Link href="/portfolio/ecommerce/login/google">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
                  </svg>
                </Link>
                <Link href="/portfolio/ecommerce/login/tiktok">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <Link href="/portfolio/ecommerce/login/x">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"></path>
                  </svg>
                </Link>
              </div>
              <p className="text-center mb-3">
                O usando un e-mail y contraseña
              </p>
              <form
                onSubmit={handleLoginSubmit}
                className="flex flex-col gap-6"
              >
                <div className="relative">
                  <input
                    type="email"
                    id="login-email"
                    name="login-email"
                    value={loginEmail}
                    onChange={(e) => {
                      setLoginEmail(e.target.value);
                      if (loginEmailError) setLoginEmailError(false);
                    }}
                    className="w-full border border-slate-200 bg-slate-200 rounded-lg px-3 py-2"
                    placeholder="Ingresar email"
                  />
                  <FieldError
                    show={loginEmailError}
                    message="Correo incorrecto"
                  />
                </div>

                {/* Password con botón mostrar/ocultar */}
                <div className="relative">
                  <input
                    type={showLoginPass ? "text" : "password"}
                    id="login-password"
                    name="login-password"
                    value={loginPassword}
                    onChange={(e) => {
                      setLoginPassword(e.target.value);
                      if (loginPasswordError) setLoginPasswordError(false);
                    }}
                    className="w-full border border-slate-200 bg-slate-200 rounded-lg px-3 py-2 pr-10"
                    placeholder="Ingresar contraseña"
                  />
                  <button
                    type="button"
                    onClick={() => setShowLoginPass((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-800 cursor-pointer"
                    aria-label={
                      showLoginPass
                        ? "Ocultar contraseña"
                        : "Mostrar contraseña"
                    }
                  >
                    {showLoginPass ? (
                      <EyeSlashIcon className="w-5 h-5" />
                    ) : (
                      <EyeIcon className="w-5 h-5" />
                    )}
                  </button>
                  <FieldError
                    show={loginPasswordError}
                    message="Contraseña incorrecta"
                  />
                </div>

                <small className="text-center">
                  <Link href="/portfolio/ecommerce/forgot-password">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </small>
                <button
                  type="submit"
                  disabled={loginButtonDisabled}
                  className={submitButtonClass(loginButtonDisabled)}
                >
                  Ingresar
                </button>
              </form>
            </div>
            <Link href="/portfolio/ecommerce" className="text-center">
              Terminos y condiciones de Uso
            </Link>
          </section>
        </div>

        {/* ---------- MENSAJE REGISTRARSE ---------- */}
        <div
          id="mensaje-registrarse"
          className={`bg-primary-color text-white ${panelClass(displayMode === "login", "right")}`}
        >
          <section className="px-3 xl:px-0 py-9 max-w-[420px] h-full min-h-screen mx-auto relative flex flex-col gap-6 justify-center items-center">
            <h2 className="text-center font-heading text-5xl uppercase">
              Hola Nuevo usuario
            </h2>
            <p className="text-xl">Si aun no eres parte de este mundo</p>
            <button
              id="boton-registrarse"
              onClick={() => switchTo("register")}
              className="hover:bg-white border-2 border-white rounded px-9 py-2 text-white hover:text-black uppercase cursor-pointer transition-colors duration-200"
            >
              Registrate
            </button>
          </section>
        </div>

        {/* ---------- MENSAJE INGRESAR ---------- */}
        <div
          id="mensaje-ingresar"
          className={`bg-primary-color text-white ${panelClass(displayMode === "register", "left")}`}
        >
          <section className="px-3 xl:px-0 py-9 max-w-[420px] h-full min-h-screen mx-auto relative flex flex-col gap-6 justify-center items-center">
            <h2 className="text-center font-heading text-5xl uppercase">
              Usuario
            </h2>
            <p className="text-xl">Si ya eres usuario porfavor ingresa</p>
            <button
              id="boton-logearse"
              onClick={() => switchTo("login")}
              className="hover:bg-white border-2 border-white rounded px-9 py-2 text-white hover:text-black uppercase cursor-pointer transition-colors duration-200"
            >
              Ingresar
            </button>
          </section>
        </div>

        {/* ---------- FORM REGISTRARSE ---------- */}
        <div
          id="form-registrarse"
          className={panelClass(displayMode === "register", "right")}
        >
          <section className="px-3 xl:px-0 py-9 max-w-xs h-full min-h-screen mx-auto relative flex flex-col gap-6 justify-between">
            <div className="justify-center items-center flex">
              <img
                src="/logo-apaisado.svg"
                alt="Logotipo"
                className="w-full max-w-20 h-auto object-contain"
              />
            </div>
            <div>
              <h2 className="text-center font-heading text-4xl uppercase text-slate-900 mb-9">
                Registrarse
              </h2>
              <form
                onSubmit={handleRegisterSubmit}
                className="flex flex-col gap-6"
              >
                <input
                  type="text"
                  id="register-name"
                  name="register-name"
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  className="w-full border border-slate-200 bg-slate-200 rounded-lg px-3 py-2"
                  placeholder="Ingresar nombre"
                />
                <div className="relative">
                  <input
                    type="email"
                    id="register-email"
                    name="register-email"
                    value={regEmail}
                    onChange={(e) => {
                      setRegEmail(e.target.value);
                      if (regEmailError) setRegEmailError(false);
                    }}
                    className="w-full border border-slate-200 bg-slate-200 rounded-lg px-3 py-2"
                    placeholder="Ingresar email"
                  />
                  <FieldError
                    show={regEmailError}
                    message="Correo ya existente"
                  />
                </div>

                {/* Password con toggle + validador de seguridad */}
                <div>
                  <div className="relative">
                    <input
                      type={showRegPass ? "text" : "password"}
                      id="register-password"
                      name="register-password"
                      value={regPassword}
                      onChange={(e) => setRegPassword(e.target.value)}
                      className="w-full border border-slate-200 bg-slate-200 rounded-lg px-3 py-2 pr-10"
                      placeholder="Ingresar contraseña"
                    />
                    <button
                      type="button"
                      onClick={() => setShowRegPass((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-800 cursor-pointer"
                      aria-label={
                        showRegPass
                          ? "Ocultar contraseña"
                          : "Mostrar contraseña"
                      }
                    >
                      {showRegPass ? (
                        <EyeSlashIcon className="w-5 h-5" />
                      ) : (
                        <EyeIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Barra de seguridad */}
                  {regPassword.length > 0 && (
                    <div className="mt-2">
                      <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ease-out ${strength.color}`}
                          style={{ width: strength.width }}
                        />
                      </div>
                      <p className={`text-xs mt-1 ${strength.textColor}`}>
                        {strength.label}
                      </p>
                    </div>
                  )}
                </div>

                {/* Confirmar password con su propio toggle */}
                <div>
                  <div className="relative">
                    <input
                      type={showRegConfirmPass ? "text" : "password"}
                      id="register-confirm-password"
                      name="register-confirm-password"
                      value={regConfirmPassword}
                      onChange={(e) => setRegConfirmPassword(e.target.value)}
                      className="w-full border border-slate-200 bg-slate-200 rounded-lg px-3 py-2 pr-10"
                      placeholder="Confirmar contraseña"
                    />
                    <button
                      type="button"
                      onClick={() => setShowRegConfirmPass((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-800 cursor-pointer"
                      aria-label={
                        showRegConfirmPass
                          ? "Ocultar contraseña"
                          : "Mostrar contraseña"
                      }
                    >
                      {showRegConfirmPass ? (
                        <EyeSlashIcon className="w-5 h-5" />
                      ) : (
                        <EyeIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {passwordsMismatch && (
                    <p className="text-xs text-red-500 mt-1">
                      Las contraseñas no coinciden
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={registerButtonDisabled}
                  className={submitButtonClass(registerButtonDisabled)}
                >
                  Ingresar
                </button>
              </form>
            </div>
            <Link href="/portfolio/ecommerce" className="text-center">
              Terminos y condiciones de Uso
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
