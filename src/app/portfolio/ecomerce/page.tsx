"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import HeaderEcomerce from "@/components/HeaderEcomerce";

export default function EcomercePage() {
  return (
    <div className="flex flex-col h-screen w-full text-slate-600">
      <HeaderEcomerce />
      {/* BBANNER INICIO*/}
      <section className="bg-[#D1AE8E] flex relative overflow-auto">
        <figure className="w-full md:w-2/3 shrink-0">
          <img
            src="/images/ecomerce-banner.jpg"
            alt="Camiseta Básica Algodón"
            className="w-full h-80 md:h-auto object-cover"
          />
        </figure>
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl mb-2 md:mb-4 text-white transition-[font-size] duration-300 ease-in-out text-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            Aprovecha esta gran oferta
          </h1>
          <p className="text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-12 text-white transition-[font-size] duration-300 ease-in-out text-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            Solo por tiempo limitado
          </p>
          <button className="px-10 py-4 text-white button-primary-color font-semibold text-lg md:text-xl uppercase tracking-wider rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg shadow-stone-600 hover:scale-105 cursor-pointer">
            Comprar Ahora
          </button>
        </div>
        {/* <figure className="w-1/2 shrink-0">
          <img
            src="/images/ecomerce-banner02.jpg"
            alt="Camiseta Básica Algodón"
            className="w-full h-auto object-cover"
          />
        </figure> */}
      </section>
      {/* BBANNER FIN*/}
      <footer>footer</footer>
    </div>
  );
}
