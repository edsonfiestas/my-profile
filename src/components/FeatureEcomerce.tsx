"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function FeatureEcomerce() {
  return (
    <div className="w-full grid grid-cols-6 gap-6">
      <a
        className="col-span-6 md:col-span-3 lg:col-span-2 group border-4 border-slate-400 hover:border-ecommerce-secondary transition-all duration-300 p-6"
        href=""
      >
        <div className="flex flex-col gap-6">
          <figure className="relative w-full h-auto overflow-hidden">
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
            </div>
          </figure>
          <h3 className="text-3xl font-subheading-ecommerce text-slate-400 group-hover:text-ecommerce-secondary transition-all duration-300">
            Verano 2026
          </h3>
        </div>
      </a>
      <a
        className="col-span-6 md:col-span-3 lg:col-span-2 group border-4 border-slate-400 hover:border-ecommerce-secondary transition-all duration-300 p-6"
        href=""
      >
        <div className="flex flex-col gap-6">
          <figure className="relative w-full h-auto overflow-hidden">
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
            </div>
          </figure>
          <h3 className="text-3xl font-subheading-ecommerce text-slate-400 group-hover:text-ecommerce-secondary transition-all duration-300">
            Verano 2026
          </h3>
        </div>
      </a>
      <a
        className="col-span-6 md:col-span-3 lg:col-span-2 group border-4 border-slate-400 hover:border-ecommerce-secondary transition-all duration-300 p-6"
        href=""
      >
        <div className="flex flex-col gap-6">
          <figure className="relative w-full h-auto overflow-hidden">
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
            </div>
          </figure>
          <h3 className="text-3xl font-subheading-ecommerce text-slate-400 group-hover:text-ecommerce-secondary transition-all duration-300">
            Verano 2026
          </h3>
        </div>
      </a>
    </div>
  );
}
