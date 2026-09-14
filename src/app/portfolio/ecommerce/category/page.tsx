"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import HeaderEcomerce from "@/components/HeaderEcomerce";
import FooterEcomerce from "@/components/FooterEcomerce";

export default function EcomerceCategoryPage() {
  return (
    <div className="flex flex-col h-screen w-full text-slate-600">
      <HeaderEcomerce />
      <section className="w-full bg-ecommerce-secondary/40">
        <div className="px-3 xl:px-0 py-9 w-full max-w-[1440px] mx-auto relative">
          <h2 className="text-center text-5xl uppercase text-slate-600 mb-3 font-heading">
            Polos (manga corta)
          </h2>
          <p className="text-center text-xl uppercase text-slate-600">
            Fieles a nuestra herencia. Siempre innovando. No te pierdas las
            novedades.
          </p>
        </div>
      </section>
      <section className="w-full">
        <div className="px-3 xl:px-0 py-9 w-full max-w-[1440px] mx-auto relative flex justify-between gap-6">
          <ul className="flex gap-3 items-center">
            <li>
              <Link href="/portfolio/ecommerce" className="font-bold">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Polos (manga corta)</li>
          </ul>
          <a href="" className="flex gap-2 items-center">
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
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            <span>Filtros</span>
          </a>
        </div>
      </section>
      <main className="w-full">
        <div className="px-3 xl:px-0 py-9 w-full max-w-[1440px] mx-auto relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-9 gap-y-16">
          <div className="w-full">
            <div className="flex flex-col gap-3">
              <figure className="relative w-full h-auto overflow-hidden rounded-lg group">
                <img
                  alt="Polo urban solo"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  draggable="false"
                  src="/images/ecomerce11.jpg"
                />
              </figure>
              <div className="flex flex-col gap-1">
                <a href="" className="text-xl font-bold uppercase">
                  Polo urban solo
                </a>
                <div className="flex flexRow gap-3 items-center">
                  <ul className="flex flexRow gap-0.5 items-center">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-slate-300"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                  <p>(30)</p>
                </div>
                <div className="flex flexRow gap-3 items-center">
                  <p>S/ 129.00</p>
                  <span>PEN</span>
                </div>
                <div className="flex flexRow gap-3 items-center pt-3">
                  <a
                    href=""
                    className="bg-blue-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bg-yellow-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bgRed-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bg-green-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-3">
              <figure className="relative w-full h-auto overflow-hidden rounded-lg group">
                <img
                  alt="Polo urban solo"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  draggable="false"
                  src="/images/ecomerce11.jpg"
                />
              </figure>
              <div className="flex flex-col gap-2">
                <a href="" className="text-xl font-bold uppercase">
                  Polo urban solo
                </a>
                <div className="flex flexRow gap-3 items-center">
                  <ul className="flex flexRow gap-0.5 items-center">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-slate-300"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                  <p>(30)</p>
                </div>
                <div className="flex flexRow gap-3 items-center">
                  <p>S/ 129.00</p>
                  <span>PEN</span>
                </div>
                <div className="flex flexRow gap-3 items-center pt-3">
                  <a
                    href=""
                    className="bg-blue-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bg-yellow-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bgRed-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bg-green-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-3">
              <figure className="relative w-full h-auto overflow-hidden rounded-lg group">
                <img
                  alt="Polo urban solo"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  draggable="false"
                  src="/images/ecomerce11.jpg"
                />
              </figure>
              <div className="flex flex-col gap-2">
                <a href="" className="text-xl font-bold uppercase">
                  Polo urban solo
                </a>
                <div className="flex flexRow gap-3 items-center">
                  <ul className="flex flexRow gap-0.5 items-center">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-slate-300"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                  <p>(30)</p>
                </div>
                <div className="flex flexRow gap-3 items-center">
                  <p>S/ 129.00</p>
                  <span>PEN</span>
                </div>
                <div className="flex flexRow gap-3 items-center pt-3">
                  <a
                    href=""
                    className="bg-blue-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bg-yellow-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bgRed-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bg-green-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-3">
              <figure className="relative w-full h-auto overflow-hidden rounded-lg group">
                <img
                  alt="Polo urban solo"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  draggable="false"
                  src="/images/ecomerce11.jpg"
                />
              </figure>
              <div className="flex flex-col gap-2">
                <a href="" className="text-xl font-bold uppercase">
                  Polo urban solo
                </a>
                <div className="flex flexRow gap-3 items-center">
                  <ul className="flex flexRow gap-0.5 items-center">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-slate-300"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                  <p>(30)</p>
                </div>
                <div className="flex flexRow gap-3 items-center">
                  <p>S/ 129.00</p>
                  <span>PEN</span>
                </div>
                <div className="flex flexRow gap-3 items-center pt-3">
                  <a
                    href=""
                    className="bg-blue-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bg-yellow-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bgRed-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bg-green-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-3">
              <figure className="relative w-full h-auto overflow-hidden rounded-lg group">
                <img
                  alt="Polo urban solo"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  draggable="false"
                  src="/images/ecomerce11.jpg"
                />
              </figure>
              <div className="flex flex-col gap-2">
                <a href="" className="text-xl font-bold uppercase">
                  Polo urban solo
                </a>
                <div className="flex flexRow gap-3 items-center">
                  <ul className="flex flexRow gap-0.5 items-center">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-slate-300"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                  <p>(30)</p>
                </div>
                <div className="flex flexRow gap-3 items-center">
                  <p>S/ 129.00</p>
                  <span>PEN</span>
                </div>
                <div className="flex flexRow gap-3 items-center pt-3">
                  <a
                    href=""
                    className="bg-blue-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bg-yellow-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bgRed-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bg-green-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-3">
              <figure className="relative w-full h-auto overflow-hidden rounded-lg group">
                <img
                  alt="Polo urban solo"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  draggable="false"
                  src="/images/ecomerce11.jpg"
                />
              </figure>
              <div className="flex flex-col gap-2">
                <a href="" className="text-xl font-bold uppercase">
                  Polo urban solo
                </a>
                <div className="flex flexRow gap-3 items-center">
                  <ul className="flex flexRow gap-0.5 items-center">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-slate-300"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                  <p>(30)</p>
                </div>
                <div className="flex flexRow gap-3 items-center">
                  <p>S/ 129.00</p>
                  <span>PEN</span>
                </div>
                <div className="flex flexRow gap-3 items-center pt-3">
                  <a
                    href=""
                    className="bg-blue-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bg-yellow-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bgRed-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bg-green-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-3">
              <figure className="relative w-full h-auto overflow-hidden rounded-lg group">
                <img
                  alt="Polo urban solo"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  draggable="false"
                  src="/images/ecomerce11.jpg"
                />
              </figure>
              <div className="flex flex-col gap-2">
                <a href="" className="text-xl font-bold uppercase">
                  Polo urban solo
                </a>
                <div className="flex flexRow gap-3 items-center">
                  <ul className="flex flexRow gap-0.5 items-center">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-slate-300"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                  <p>(30)</p>
                </div>
                <div className="flex flexRow gap-3 items-center">
                  <p>S/ 129.00</p>
                  <span>PEN</span>
                </div>
                <div className="flex flexRow gap-3 items-center pt-3">
                  <a
                    href=""
                    className="bg-blue-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bg-yellow-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bgRed-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bg-green-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-3">
              <figure className="relative w-full h-auto overflow-hidden rounded-lg group">
                <img
                  alt="Polo urban solo"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  draggable="false"
                  src="/images/ecomerce11.jpg"
                />
              </figure>
              <div className="flex flex-col gap-2">
                <a href="" className="text-xl font-bold uppercase">
                  Polo urban solo
                </a>
                <div className="flex flexRow gap-3 items-center">
                  <ul className="flex flexRow gap-0.5 items-center">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-slate-300"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                  <p>(30)</p>
                </div>
                <div className="flex flexRow gap-3 items-center">
                  <p>S/ 129.00</p>
                  <span>PEN</span>
                </div>
                <div className="flex flexRow gap-3 items-center pt-3">
                  <a
                    href=""
                    className="bg-blue-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bg-yellow-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bgRed-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bg-green-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-3">
              <figure className="relative w-full h-auto overflow-hidden rounded-lg group">
                <img
                  alt="Polo urban solo"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  draggable="false"
                  src="/images/ecomerce11.jpg"
                />
              </figure>
              <div className="flex flex-col gap-2">
                <a href="" className="text-xl font-bold uppercase">
                  Polo urban solo
                </a>
                <div className="flex flexRow gap-3 items-center">
                  <ul className="flex flexRow gap-0.5 items-center">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-slate-300"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                  <p>(30)</p>
                </div>
                <div className="flex flexRow gap-3 items-center">
                  <p>S/ 129.00</p>
                  <span>PEN</span>
                </div>
                <div className="flex flexRow gap-3 items-center pt-3">
                  <a
                    href=""
                    className="bg-blue-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bg-yellow-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bgRed-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bg-green-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-3">
              <figure className="relative w-full h-auto overflow-hidden rounded-lg group">
                <img
                  alt="Polo urban solo"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  draggable="false"
                  src="/images/ecomerce11.jpg"
                />
              </figure>
              <div className="flex flex-col gap-2">
                <a href="" className="text-xl font-bold uppercase">
                  Polo urban solo
                </a>
                <div className="flex flexRow gap-3 items-center">
                  <ul className="flex flexRow gap-0.5 items-center">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-slate-300"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                  <p>(30)</p>
                </div>
                <div className="flex flexRow gap-3 items-center">
                  <p>S/ 129.00</p>
                  <span>PEN</span>
                </div>
                <div className="flex flexRow gap-3 items-center pt-3">
                  <a
                    href=""
                    className="bg-blue-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bg-yellow-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bgRed-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                  <a
                    href=""
                    className="bg-green-500 rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer"
                  >
                    &nbsp;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterEcomerce />
    </div>
  );
}
