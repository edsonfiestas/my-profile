"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function FeatureEcomerce() {
  return (
    <div className="w-full grid grid-cols-6 gap-6">
      <a
        className="col-span-6 md:col-span-3 lg:col-span-2 group overflow-hidden"
        href=""
      >
        <figure className="relative w-full h-auto">
          <img
            src="/images/ecomerce-ropa-01.jpg"
            alt="Edson"
            className="w-fullh-auto object-cover group-hover:scale-105 transition-all duration-300"
          />
          <div className="absolute w-full text-center text-white font-bold uppercase  bottom-6 left-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-9 h-9 mx-auto mb-3 hidden group-hover:block transition-all duration-300"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="text-2xl group-hover:text-3xl transition-all duration-300">
              Verano 2026
            </h3>
          </div>
        </figure>
      </a>
      <a
        className="col-span-6 md:col-span-3 lg:col-span-2 group overflow-hidden"
        href=""
      >
        <figure className="relative w-full h-auto">
          <img
            src="/images/ecomerce-ropa-02.jpg"
            alt="Edson"
            className="w-fullh-auto object-cover group-hover:scale-105 transition-all duration-300"
          />
          <div className="absolute w-full text-center text-white font-bold uppercase  bottom-6 left-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-9 h-9 mx-auto mb-3 hidden group-hover:block transition-all duration-300"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="text-2xl group-hover:text-3xl transition-all duration-300">
              Otoño 2026
            </h3>
          </div>
        </figure>
      </a>
      <a
        className="col-span-6 md:col-span-3 lg:col-span-2 group overflow-hidden"
        href=""
      >
        <figure className="relative w-full h-auto">
          <img
            src="/images/ecomerce-ropa-03.jpg"
            alt="Edson"
            className="w-fullh-auto object-cover group-hover:scale-105 transition-all duration-300"
          />
          <div className="absolute w-full text-center text-white font-bold uppercase  bottom-6 left-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-9 h-9 mx-auto mb-3 hidden group-hover:block transition-all duration-300"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="text-2xl group-hover:text-3xl transition-all duration-300">
              Invierno 2026
            </h3>
          </div>
        </figure>
      </a>
    </div>
  );
}
