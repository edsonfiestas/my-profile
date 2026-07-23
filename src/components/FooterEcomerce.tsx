"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function FooterEcomerce() {
  return (
    <footer>
      <div className="flex flex-col gap-6 px-3 xl:px-0 py-9 w-full max-w-[1440px] mx-auto relative">
        <div className="grid grid-cols-10 gap-x-6 gap-y-16">
          <div className="col-span-10 lg:col-span-4 flex justify-center lg:justify-start items-start">
            <div className="flex flex-col gap-6 w-full max-w-md">
              <h3 className="font-bold uppercase text-slate-900">
                Obten super ofertas y novedades
              </h3>
              <p>
                Regístrate para obtener acceso exclusivo a novedades,
                lanzamientos de edición limitada y buena energía.
              </p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ingresa email"
                className="border border-slate-500 h-12 px-6"
              />
              <button
                className="h-12 button-primary-color text-white"
                type="submit"
              >
                Registrate
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3 col-span-10 sm:col-span-5 md:col-span-3 lg:col-span-2">
            <h3 className="font-bold text-lg uppercase text-slate-900">
              Soporte
            </h3>
            <span>
              <a href="#" className="hover:font-bold">
                Preguntas frecuentes
              </a>
            </span>
            <span>
              <a href="#" className="hover:font-bold">
                Contactanos
              </a>
            </span>
            <span>
              <a href="#" className="hover:font-bold">
                Politicas de devolucion
              </a>
            </span>
            <span>
              <a href="#" className="hover:font-bold">
                Politicas de envio
              </a>
            </span>
            <span>
              <a href="#" className="hover:font-bold">
                Terminos y condiciones
              </a>
            </span>
          </div>
          <div className="flex flex-col gap-3 col-span-10 sm:col-span-5 md:col-span-3 lg:col-span-2">
            <h3 className="font-bold text-lg uppercase text-slate-900">
              Compañia
            </h3>
            <span>
              <a href="#" className="hover:font-bold">
                Sobre nosotros
              </a>
            </span>
            <span>
              <a href="#" className="hover:font-bold">
                Trabaja con nosotros
              </a>
            </span>
            <span>
              <a href="#" className="hover:font-bold">
                Blog
              </a>
            </span>
            <span>
              <a href="#" className="hover:font-bold">
                Prensa
              </a>
            </span>
            <span>
              <a href="#" className="hover:font-bold">
                Politicas de devolucion
              </a>
            </span>
            <span>
              <a href="#" className="hover:font-bold">
                Politicas de envio
              </a>
            </span>
            <span>
              <a href="#" className="hover:font-bold">
                Terminos y condiciones
              </a>
            </span>
          </div>
          <div className="flex flex-col gap-3 col-span-10 sm:col-span-5 md:col-span-3 lg:col-span-2">
            <h3 className="font-bold text-lg uppercase text-slate-900">
              Recursos
            </h3>
            <span>
              <a href="#" className="hover:font-bold">
                Blog
              </a>
            </span>
            <span>
              <a href="#" className="hover:font-bold">
                Prensa
              </a>
            </span>
            <span>
              <a href="#" className="hover:font-bold">
                Politicas de devolucion
              </a>
            </span>
            <span>
              <a href="#" className="hover:font-bold">
                Politicas de envio
              </a>
            </span>
            <span>
              <a href="#" className="hover:font-bold">
                Terminos y condiciones
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between">
          <div className="flex gap-3">
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
              </svg>
            </figure>
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"></path>
              </svg>
            </figure>
            <figure>
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
            </figure>
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path>
              </svg>
            </figure>
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path d="M31.331,8.248c-.368-1.386-1.452-2.477-2.829-2.848-2.496-.673-12.502-.673-12.502-.673,0,0-10.007,0-12.502,.673-1.377,.37-2.461,1.462-2.829,2.848-.669,2.512-.669,7.752-.669,7.752,0,0,0,5.241,.669,7.752,.368,1.386,1.452,2.477,2.829,2.847,2.496,.673,12.502,.673,12.502,.673,0,0,10.007,0,12.502-.673,1.377-.37,2.461-1.462,2.829-2.847,.669-2.512,.669-7.752,.669-7.752,0,0,0-5.24-.669-7.752ZM12.727,20.758V11.242l8.364,4.758-8.364,4.758Z"></path>
              </svg>
            </figure>
          </div>
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
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between">
          <div>
            <p>© 2026, Narunaru Industries.</p>
          </div>
          <div className="flex gap-3 justify-start md:justify-end">
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <g className="nc-icon-wrapper">
                  <rect
                    x="2"
                    y="7"
                    width="28"
                    height="18"
                    rx="3"
                    ry="3"
                    fill="#1434cb"
                    strokeWidth="0"
                  ></rect>
                  <path
                    d="m27,7H5c-1.657,0-3,1.343-3,3v12c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3v-12c0-1.657-1.343-3-3-3Zm2,15c0,1.103-.897,2-2,2H5c-1.103,0-2-.897-2-2v-12c0-1.103.897-2,2-2h22c1.103,0,2,.897,2,2v12Z"
                    strokeWidth="0"
                    opacity=".15"
                  ></path>
                  <path
                    d="m27,8H5c-1.105,0-2,.895-2,2v1c0-1.105.895-2,2-2h22c1.105,0,2,.895,2,2v-1c0-1.105-.895-2-2-2Z"
                    fill="#fff"
                    opacity=".2"
                    strokeWidth="0"
                  ></path>
                  <path
                    d="m13.392,12.624l-2.838,6.77h-1.851l-1.397-5.403c-.085-.332-.158-.454-.416-.595-.421-.229-1.117-.443-1.728-.576l.041-.196h2.98c.38,0,.721.253.808.69l.738,3.918,1.822-4.608h1.84Z"
                    fill="#fff"
                    strokeWidth="0"
                  ></path>
                  <path
                    d="m20.646,17.183c.008-1.787-2.47-1.886-2.453-2.684.005-.243.237-.501.743-.567.251-.032.943-.058,1.727.303l.307-1.436c-.421-.152-.964-.299-1.638-.299-1.732,0-2.95.92-2.959,2.238-.011.975.87,1.518,1.533,1.843.683.332.912.545.909.841-.005.454-.545.655-1.047.663-.881.014-1.392-.238-1.799-.428l-.318,1.484c.41.188,1.165.351,1.947.359,1.841,0,3.044-.909,3.05-2.317"
                    fill="#fff"
                    strokeWidth="0"
                  ></path>
                  <path
                    d="m25.423,12.624h-1.494c-.337,0-.62.195-.746.496l-2.628,6.274h1.839l.365-1.011h2.247l.212,1.011h1.62l-1.415-6.77Zm-2.16,4.372l.922-2.542.53,2.542h-1.452Z"
                    fill="#fff"
                    strokeWidth="0"
                  ></path>
                  <path
                    fill="#fff"
                    strokeWidth="0"
                    d="M15.894 12.624L14.446 19.394 12.695 19.394 14.143 12.624 15.894 12.624z"
                  ></path>
                </g>
              </svg>
            </figure>
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <g className="nc-icon-wrapper">
                  <rect
                    x="2"
                    y="7"
                    width="28"
                    height="18"
                    rx="3"
                    ry="3"
                    fill="#141413"
                    strokeWidth="0"
                  ></rect>
                  <path
                    d="m27,7H5c-1.657,0-3,1.343-3,3v12c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3v-12c0-1.657-1.343-3-3-3Zm2,15c0,1.103-.897,2-2,2H5c-1.103,0-2-.897-2-2v-12c0-1.103.897-2,2-2h22c1.103,0,2,.897,2,2v12Z"
                    strokeWidth="0"
                    opacity=".15"
                  ></path>
                  <path
                    d="m27,8H5c-1.105,0-2,.895-2,2v1c0-1.105.895-2,2-2h22c1.105,0,2,.895,2,2v-1c0-1.105-.895-2-2-2Z"
                    fill="#fff"
                    opacity=".2"
                    strokeWidth="0"
                  ></path>
                  <path
                    fill="#ff5f00"
                    strokeWidth="0"
                    d="M13.597 11.677H18.407V20.32H13.597z"
                  ></path>
                  <path
                    d="m13.902,15.999c0-1.68.779-3.283,2.092-4.322-2.382-1.878-5.849-1.466-7.727.932-1.863,2.382-1.451,5.833.947,7.712,2,1.573,4.795,1.573,6.795,0-1.329-1.038-2.107-2.642-2.107-4.322Z"
                    fill="#eb001b"
                    strokeWidth="0"
                  ></path>
                  <path
                    d="m24.897,15.999c0,3.039-2.459,5.497-5.497,5.497-1.237,0-2.428-.412-3.39-1.176,2.382-1.878,2.795-5.329.916-7.727-.275-.336-.58-.657-.916-.916,2.382-1.878,5.849-1.466,7.712.932.764.962,1.176,2.153,1.176,3.39Z"
                    fill="#f79e1b"
                    strokeWidth="0"
                  ></path>
                </g>
              </svg>
            </figure>
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <g className="nc-icon-wrapper">
                  <rect
                    x="2"
                    y="7"
                    width="28"
                    height="18"
                    rx="3"
                    ry="3"
                    fill="#0f70ce"
                    strokeWidth="0"
                  ></rect>
                  <path
                    d="m27.026,9l-.719,1.965-.708-1.965h-3.885v2.582l-1.136-2.582h-3.119l-3.259,7.409h2.637v6.591h8.097l1.316-1.458,1.322,1.458h2.244c.112-.314.184-.647.184-1v-1.041l-1.58-1.698,1.58-1.655v-7.606c0-.353-.072-.686-.184-1h-2.79Z"
                    fill="#fff"
                    strokeWidth="0"
                  ></path>
                  <path
                    d="m17.679,14.433h2.61l.502,1.148h1.78l-2.531-5.754h-2.039l-2.531,5.754h1.734l.477-1.148Zm1.307-3.135l.775,1.844h-1.535l.761-1.844Z"
                    fill="#0f70ce"
                    strokeWidth="0"
                  ></path>
                  <path
                    fill="#0f70ce"
                    strokeWidth="0"
                    d="M22.542 9.827L25.018 9.827 26.302 13.39 27.604 9.827 30 9.827 30 15.581 28.45 15.581 28.45 11.603 26.977 15.581 25.608 15.581 24.124 11.631 24.124 15.581 22.542 15.581 22.542 9.827z"
                  ></path>
                  <path
                    fill="#0f70ce"
                    strokeWidth="0"
                    d="M19.24 20.82L19.24 19.944 22.484 19.944 22.484 18.624 19.24 18.624 19.24 17.748 22.565 17.748 22.565 16.409 17.664 16.409 17.664 22.173 22.565 22.173 22.565 20.82 19.24 20.82z"
                  ></path>
                  <path
                    fill="#0f70ce"
                    strokeWidth="0"
                    d="M24.638 16.409L26.271 18.234 27.968 16.409 30 16.409 27.283 19.254 30 22.173 27.939 22.173 26.249 20.309 24.567 22.173 22.537 22.173 25.272 19.275 22.537 16.409 24.638 16.409z"
                  ></path>
                  <path
                    d="m27,7H5c-1.657,0-3,1.343-3,3v12c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3v-12c0-1.657-1.343-3-3-3Zm2,15c0,1.103-.897,2-2,2H5c-1.103,0-2-.897-2-2v-12c0-1.103.897-2,2-2h22c1.103,0,2,.897,2,2v12Z"
                    strokeWidth="0"
                    opacity=".15"
                  ></path>
                  <path
                    d="m27,8H5c-1.105,0-2,.895-2,2v1c0-1.105.895-2,2-2h22c1.105,0,2,.895,2,2v-1c0-1.105-.895-2-2-2Z"
                    fill="#fff"
                    opacity=".2"
                    strokeWidth="0"
                  ></path>
                </g>
              </svg>
            </figure>
          </div>
        </div>
      </div>
    </footer>
  );
}
