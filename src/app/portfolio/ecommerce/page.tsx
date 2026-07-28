"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import HeaderEcomerce from "@/components/HeaderEcomerce";
import FooterEcomerce from "@/components/FooterEcomerce";
import FeatureEcomerce from "@/components/FeatureEcomerce";
import CarruselEcomerce from "@/components/CarruselEcomerce";

export default function EcomercePage() {
  return (
    <div className="flex flex-col w-full text-slate-600">
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
      <section className="w-full">
        <div className="px-3 xl:px-0 py-9 w-full max-w-[1440px] mx-auto relative">
          <h2 className="text-center text-2xl font-bold uppercase text-slate-900 mb-9">
            Productos destacados
          </h2>
          <FeatureEcomerce />
        </div>
      </section>
      <section className="w-full">
        <div className="px-3 xl:px-0 py-9 w-full max-w-[1440px] mx-auto relative">
          <h2 className="text-center text-2xl font-bold uppercase text-slate-900 mb-9">
            Disfruta de lo bueno
          </h2>
          <CarruselEcomerce />
        </div>
      </section>
      <section className="relative w-full h-[70vh] overflow-hidden">
        {/* Video de fondo */}
        <iframe
          src="https://www.youtube.com/embed/K4BZkUbbhvI?autoplay=1&mute=1&loop=1&playlist=K4BZkUbbhvI&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute top-1/2 left-1/2 w-[177.77vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Fashion Week
          </h2>
          <p className="text-white text-lg md:text-xl mb-6 max-w-2xl">
            Lo ultimo en moda
          </p>

          <a
            href="/tienda"
            className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
          >
            Comprar ahora
          </a>
        </div>
      </section>
      <section className="w-full">
        <div className="px-3 xl:px-0 py-9 w-full max-w-[1440px] mx-auto relative">
          <h2 className="text-center text-2xl font-bold uppercase text-slate-900 mb-9">
            Novedades
          </h2>
          <FeatureEcomerce />
        </div>
      </section>
      <section className="w-full">
        <div className="px-3 xl:px-0 py-9 w-full max-w-[1440px] mx-auto relative">
          <h2 className="text-center text-2xl font-bold uppercase text-slate-900 mb-9">
            Productos destacados
          </h2>
          <CarruselEcomerce />
        </div>
      </section>
      <FooterEcomerce />
    </div>
  );
}
