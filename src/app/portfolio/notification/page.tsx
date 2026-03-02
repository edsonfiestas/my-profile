"use client";

import { useState, useMemo, useRef, useEffect } from "react";

/* ─── Types ─── */
type Filter = "todos" | "no-leidos" | "leidos";
type NavKey = "recibido" | "enviados" | "borradores" | "eliminados";
type Category = "sistema" | "mensaje" | "alerta" | "actualización";

type Notification = {
  id: number;
  sender: string;
  subject: string;
  preview: string;
  date: string;
  time: string;
  read: boolean;
  category: Category;
};

/* ─── Data ─── */
const ALL_NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    sender: "Sistema",
    subject: "Inicio de sesión desde nuevo dispositivo",
    preview:
      "Se detectó acceso desde Chrome en Windows 11 – Lima, PE. Si no fuiste tú, cambia tu contraseña.",
    date: "01/03/2025",
    time: "09:15",
    read: false,
    category: "alerta",
  },
  {
    id: 2,
    sender: "Soporte Técnico",
    subject: "Ticket #4821 resuelto",
    preview:
      "Tu solicitud ha sido resuelta satisfactoriamente por el agente Luis Mendoza.",
    date: "01/03/2025",
    time: "10:30",
    read: false,
    category: "mensaje",
  },
  {
    id: 3,
    sender: "Marketing",
    subject: "Nueva campaña de email disponible",
    preview:
      "Se publicó la campaña 'Marzo 2025'. Puedes revisarla en el panel de campañas.",
    date: "01/03/2025",
    time: "11:00",
    read: true,
    category: "actualización",
  },
  {
    id: 4,
    sender: "RR.HH.",
    subject: "Recordatorio: evaluación trimestral",
    preview:
      "Tu evaluación de desempeño Q1 vence el próximo viernes 07/03/2025.",
    date: "28/02/2025",
    time: "08:45",
    read: false,
    category: "alerta",
  },
  {
    id: 5,
    sender: "Administrador",
    subject: "Mantenimiento programado el sábado",
    preview:
      "El sistema estará en mantenimiento el sábado 08/03 de 02:00 a 04:00 AM.",
    date: "28/02/2025",
    time: "14:20",
    read: true,
    category: "sistema",
  },
  {
    id: 6,
    sender: "Facturación",
    subject: "Factura #2024-089 generada",
    preview:
      "Se generó tu factura mensual por S/. 299.00. Disponible en el portal de pagos.",
    date: "27/02/2025",
    time: "16:05",
    read: true,
    category: "mensaje",
  },
  {
    id: 7,
    sender: "Sistema",
    subject: "Respaldo automático completado",
    preview:
      "El backup de la base de datos finalizó sin errores. Tamaño: 2.4 GB.",
    date: "27/02/2025",
    time: "03:00",
    read: true,
    category: "sistema",
  },
  {
    id: 8,
    sender: "Ana Torres",
    subject: "Revisión de diseño pendiente",
    preview:
      "Tienes una revisión de diseño pendiente para el proyecto Narunaru Personal Page.",
    date: "26/02/2025",
    time: "09:30",
    read: false,
    category: "mensaje",
  },
  {
    id: 9,
    sender: "DevOps",
    subject: "Deploy exitoso — versión 2.4.1",
    preview:
      "El pipeline CI/CD finalizó correctamente. v2.4.1 en producción desde las 17:45.",
    date: "26/02/2025",
    time: "17:45",
    read: true,
    category: "actualización",
  },
  {
    id: 10,
    sender: "Sistema",
    subject: "Almacenamiento al 80% de capacidad",
    preview:
      "Tu espacio en disco está al 80%. Considera eliminar archivos temporales o ampliar el plan.",
    date: "25/02/2025",
    time: "12:00",
    read: false,
    category: "alerta",
  },
  {
    id: 11,
    sender: "Carlos Rivera",
    subject: "Nuevo comentario en tarea #34",
    preview:
      "Carlos comentó: '¿Podemos revisar los colores del header antes del miércoles?'",
    date: "25/02/2025",
    time: "10:15",
    read: false,
    category: "mensaje",
  },
  {
    id: 12,
    sender: "Administrador",
    subject: "Nuevo usuario registrado",
    preview:
      "juan.perez@mail.com se registró en la plataforma y espera aprobación.",
    date: "24/02/2025",
    time: "08:00",
    read: true,
    category: "sistema",
  },
  {
    id: 13,
    sender: "Marketing",
    subject: "Reporte semanal listo",
    preview:
      "El reporte de métricas de la semana 08 ya está disponible en el panel de analytics.",
    date: "24/02/2025",
    time: "09:00",
    read: true,
    category: "actualización",
  },
  {
    id: 14,
    sender: "Sistema",
    subject: "Tu contraseña vence en 7 días",
    preview: "Por seguridad, actualiza tu contraseña antes del 02/03/2025.",
    date: "23/02/2025",
    time: "11:30",
    read: false,
    category: "alerta",
  },
  {
    id: 15,
    sender: "Soporte Técnico",
    subject: "Ticket #4799 asignado a un agente",
    preview:
      "Tu ticket está siendo atendido por María López. Tiempo estimado: 24 h.",
    date: "23/02/2025",
    time: "13:20",
    read: true,
    category: "mensaje",
  },
  {
    id: 16,
    sender: "Facturación",
    subject: "Pago recibido correctamente",
    preview: "Recibimos tu pago de S/. 299.00 para el plan Pro. Gracias.",
    date: "22/02/2025",
    time: "15:00",
    read: true,
    category: "mensaje",
  },
  {
    id: 17,
    sender: "DevOps",
    subject: "Alerta: latencia elevada en us-east-1",
    preview:
      "Se detectó latencia >2s en el servidor us-east-1 durante 10 minutos. Ya resuelto.",
    date: "22/02/2025",
    time: "02:30",
    read: true,
    category: "alerta",
  },
  {
    id: 18,
    sender: "Sistema",
    subject: "Nueva versión disponible — v3.0.0",
    preview:
      "La versión 3.0.0 incluye mejoras de rendimiento y el nuevo módulo de reportes.",
    date: "21/02/2025",
    time: "10:00",
    read: false,
    category: "actualización",
  },
  {
    id: 19,
    sender: "RR.HH.",
    subject: "Encuesta de clima laboral abierta",
    preview:
      "Completa la encuesta anónima antes del viernes. Solo toma 5 minutos.",
    date: "21/02/2025",
    time: "09:00",
    read: true,
    category: "mensaje",
  },
  {
    id: 20,
    sender: "Ana Torres",
    subject: "Mockups del proyecto aprobados",
    preview:
      "El cliente aprobó todos los mockups de Narunaru. ¡Podemos pasar a desarrollo!",
    date: "20/02/2025",
    time: "16:30",
    read: true,
    category: "actualización",
  },
  {
    id: 21,
    sender: "Sistema",
    subject: "Error 502 en integración de pagos",
    preview:
      "Se detectó un fallo en la integración con el gateway de pagos. Revisar logs.",
    date: "20/02/2025",
    time: "08:15",
    read: false,
    category: "alerta",
  },
  {
    id: 22,
    sender: "Carlos Rivera",
    subject: "Reunión de equipo reprogramada",
    preview:
      "La reunión se movió al martes 25/02 a las 10:00 AM. Enlace Meet en el calendario.",
    date: "19/02/2025",
    time: "14:00",
    read: true,
    category: "mensaje",
  },
  {
    id: 23,
    sender: "Administrador",
    subject: "Permisos de reportes actualizados",
    preview:
      "Se otorgaron permisos de lectura y exportación al módulo de reportes financieros.",
    date: "19/02/2025",
    time: "11:00",
    read: true,
    category: "sistema",
  },
  {
    id: 24,
    sender: "Marketing",
    subject: "A/B test concluido — variante B ganó",
    preview:
      "Variante B de la landing page obtuvo +12% en conversión. Se aplicará como versión principal.",
    date: "18/02/2025",
    time: "17:00",
    read: false,
    category: "actualización",
  },
  {
    id: 25,
    sender: "Sistema",
    subject: "Sesión iniciada desde Lima, PE",
    preview:
      "Nuevo acceso detectado el 18/02 a las 07:30 desde Lima. Verifica si fuiste tú.",
    date: "18/02/2025",
    time: "07:30",
    read: false,
    category: "alerta",
  },
];

const ITEMS_PER_PAGE = 10;

const CATEGORY_STYLES: Record<Category, string> = {
  sistema: "bg-slate-100 text-slate-600",
  mensaje: "bg-blue-100 text-blue-700",
  alerta: "bg-red-100 text-red-600",
  actualización: "bg-emerald-100 text-emerald-700",
};

const NAV_ITEMS: { key: NavKey; label: string; path: string }[] = [
  {
    key: "recibido",
    label: "Recibido",
    path: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75",
  },
  {
    key: "enviados",
    label: "Enviados",
    path: "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5",
  },
  {
    key: "borradores",
    label: "Borradores",
    path: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
  },
  {
    key: "eliminados",
    label: "Eliminados",
    path: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0",
  },
];

/* ─── Helpers ─── */
function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function getAvatarColor(name: string) {
  const palette = [
    "bg-blue-500",
    "bg-violet-500",
    "bg-emerald-500",
    "bg-amber-500",
    "bg-rose-500",
    "bg-teal-500",
    "bg-pink-500",
    "bg-indigo-500",
  ];
  let h = 0;
  for (const c of name) h = (h + c.charCodeAt(0)) % palette.length;
  return palette[h];
}

/* ═══ Component ═══ */
export default function NotificationContent() {
  const [activeNav, setActiveNav] = useState<NavKey>("recibido");
  const [filter, setFilter] = useState<Filter>("todos");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [showSugg, setShowSugg] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  /* Close suggestions on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node))
        setShowSugg(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Autocomplete suggestions (max 5) */
  const suggestions = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return ALL_NOTIFICATIONS.filter(
      (n) =>
        n.subject.toLowerCase().includes(q) ||
        n.preview.toLowerCase().includes(q) ||
        n.sender.toLowerCase().includes(q),
    ).slice(0, 5);
  }, [search]);

  /* Filtered + paginated list */
  const filtered = useMemo(() => {
    let list = ALL_NOTIFICATIONS;
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (n) =>
          n.subject.toLowerCase().includes(q) ||
          n.preview.toLowerCase().includes(q) ||
          n.sender.toLowerCase().includes(q),
      );
    }
    if (filter === "leidos") list = list.filter((n) => n.read);
    if (filter === "no-leidos") list = list.filter((n) => !n.read);
    return list;
  }, [filter, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const startIdx = (page - 1) * ITEMS_PER_PAGE;
  const endIdx = Math.min(startIdx + ITEMS_PER_PAGE, filtered.length);
  const paginated = filtered.slice(startIdx, endIdx);
  const unreadCount = ALL_NOTIFICATIONS.filter((n) => !n.read).length;

  const changeFilter = (f: Filter) => {
    setFilter(f);
    setPage(1);
  };

  return (
    <div className="w-full min-h-screen bg-slate-100 p-3 sm:p-5">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-800">
        Notificaciones
      </h1>

      <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* ─── Sidebar ─── */}
        <aside className="bg-white shadow-sm rounded-2xl p-4 flex flex-col gap-4 w-full md:w-56 shrink-0">
          {/* Redactar */}
          <button className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 active:scale-95 text-white py-2.5 px-4 rounded-xl font-medium transition duration-200 w-full cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
            Redactar
          </button>

          {/* Nav */}
          <nav className="flex flex-row md:flex-col gap-1 overflow-x-auto">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveNav(item.key)}
                className={`flex items-center gap-2.5 py-2.5 px-3 rounded-xl text-sm font-medium transition duration-200 whitespace-nowrap w-full text-left cursor-pointer ${
                  activeNav === item.key
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={item.path}
                  />
                </svg>
                <span className="hidden sm:inline">{item.label}</span>
                {item.key === "recibido" && unreadCount > 0 && (
                  <span className="ml-auto text-xs bg-blue-500 text-white rounded-full px-2 py-0.5 font-semibold hidden md:inline-flex">
                    {unreadCount}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </aside>

        {/* ─── Main panel ─── */}
        <div className="bg-white shadow-sm rounded-2xl flex flex-col flex-1 overflow-hidden w-full">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 border-b border-slate-100">
            {/* Autocomplete search */}
            <div className="relative flex-1" ref={searchRef}>
              <div className="flex items-center border border-slate-200 rounded-xl px-3 gap-2 bg-slate-50 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-slate-400 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 15.803 7.5 7.5 0 0 0 15.803 15.803Z"
                  />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setShowSugg(true);
                    setPage(1);
                  }}
                  onFocus={() => setShowSugg(true)}
                  placeholder="Buscar notificaciones..."
                  className="h-10 bg-transparent flex-1 text-sm focus:outline-none text-slate-700 placeholder:text-slate-400 min-w-0"
                />
                {search && (
                  <button
                    onClick={() => {
                      setSearch("");
                      setPage(1);
                    }}
                    className="text-slate-400 hover:text-slate-600 transition shrink-0 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {/* Suggestions dropdown */}
              {showSugg && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-20 overflow-hidden">
                  {suggestions.map((s) => (
                    <button
                      key={s.id}
                      onMouseDown={() => {
                        setSearch(s.subject);
                        setShowSugg(false);
                        setPage(1);
                      }}
                      className="w-full text-left px-4 py-2.5 hover:bg-slate-50 flex flex-col gap-0.5 border-b border-slate-50 last:border-0 cursor-pointer"
                    >
                      <span className="text-sm font-medium text-slate-800 truncate">
                        {s.subject}
                      </span>
                      <span className="text-xs text-slate-400 truncate">
                        {s.preview}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Filter tabs */}
            <div className="flex items-center bg-slate-100 rounded-xl p-1 gap-0.5 shrink-0">
              {(["todos", "no-leidos", "leidos"] as Filter[]).map((f) => (
                <button
                  key={f}
                  onClick={() => changeFilter(f)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition duration-200 cursor-pointer ${
                    filter === f
                      ? "bg-white text-slate-800 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {f === "no-leidos"
                    ? "No leídos"
                    : f === "leidos"
                      ? "Leídos"
                      : "Todos"}
                </button>
              ))}
            </div>

            {/* Pagination controls */}
            <div className="flex items-center gap-1 shrink-0 text-sm text-slate-500">
              <span className="text-xs whitespace-nowrap">
                {filtered.length === 0 ? "0" : `${startIdx + 1}–${endIdx}`} de{" "}
                {filtered.length}
              </span>
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="p-1 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition"
                aria-label="Página anterior"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
                className="p-1 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition"
                aria-label="Página siguiente"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* ─── Notification rows ─── */}
          <div className="flex flex-col divide-y divide-slate-100">
            {paginated.length === 0 ? (
              <div className="py-16 text-center text-slate-400 text-sm">
                No hay notificaciones para mostrar.
              </div>
            ) : (
              paginated.map((n) => (
                <div
                  key={n.id}
                  className={`flex items-center gap-3 px-4 py-3.5 cursor-pointer transition duration-150 hover:bg-slate-50 ${
                    !n.read
                      ? "border-l-[3px] border-blue-500"
                      : "border-l-[3px] border-transparent"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 ${getAvatarColor(n.sender)}`}
                  >
                    {getInitials(n.sender)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <span
                        className={`text-sm truncate max-w-[140px] sm:max-w-none ${!n.read ? "font-semibold text-slate-900" : "text-slate-500"}`}
                      >
                        {n.sender}
                      </span>
                      <span
                        className={`text-xs px-1.5 py-0.5 rounded-md shrink-0 ${CATEGORY_STYLES[n.category]}`}
                      >
                        {n.category}
                      </span>
                    </div>
                    <p className="text-sm truncate">
                      <span
                        className={
                          !n.read
                            ? "font-medium text-slate-800"
                            : "text-slate-600"
                        }
                      >
                        {n.subject}
                      </span>
                      <span className="text-slate-400 hidden sm:inline">
                        {" "}
                        — {n.preview}
                      </span>
                    </p>
                  </div>

                  {/* Date / time / dot */}
                  <div className="flex flex-col items-end gap-1 shrink-0 ml-2">
                    <span className="text-xs text-slate-400 whitespace-nowrap">
                      {n.date}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-slate-400">{n.time}</span>
                      {!n.read && (
                        <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer pagination */}
          {filtered.length > 0 && (
            <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100 text-xs text-slate-400">
              <span>
                Página {page} de {totalPages}
              </span>
              <div className="flex gap-1">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition"
                >
                  Anterior
                </button>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page >= totalPages}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition"
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
