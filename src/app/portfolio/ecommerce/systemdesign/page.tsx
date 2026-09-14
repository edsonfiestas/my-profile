"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import HeaderEcomerce from "@/components/HeaderEcomerce";

export default function SystemDesignPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-ecommerce-tertiary text-slate-300 font-body-ecommerce">
      <HeaderEcomerce />
      <main className="px-3 xl:px-0 py-9 w-full max-w-[1440px] mx-auto relative">
        <h1 className="font-heading-ecommerce text-3xl text-center">
          System Design
        </h1>
        <h2 className="font-subheading-ecommerce text-4xl uppercase mt-12 mb-3">
          Design tokens
        </h2>
        <section className="border border-ecommerce-primary p-6 flex flex-col gap-3 mb-3 relative">
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Colores
          </h3>
          <div className="flex flex-wrap gap-3 items-center mb-9">
            <article className="flex gap-3 items-center">
              <div className="bg-ecommerce-primary block w-6 h-6 border border-white"></div>
              <p>Primario</p>
            </article>
            <article className="flex gap-3 items-center">
              <div className="bg-ecommerce-secondary block w-6 h-6 border border-white"></div>
              <p>Secundario</p>
            </article>
            <article className="flex gap-3 items-center">
              <div className="bg-ecommerce-tertiary block w-6 h-6 border border-white"></div>
              <p>Terciario</p>
            </article>
          </div>
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Tipografias Familias
          </h3>
          <div className="flex flex-col gap-3 mb-9">
            <h4 className="font-heading-ecommerce text-3xl">
              Press Start 2P - Fuente principal
            </h4>
            <h4 className="font-subheading-ecommerce text-5xl">
              Teko - Fuente secundaria
            </h4>
            <h4 className="font-body-ecommerce text-4xl">
              Manrope - Fuente general
            </h4>
          </div>
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Tamaños
          </h3>
          <div className="flex flex-col gap-3 mb-9">
            <h1 className="font-heading-ecommerce text-3xl">
              Fuente principal h1 - 30px
            </h1>
            <h2 className="font-heading-ecommerce text-2xl">
              Fuente principal h2 - 24px
            </h2>
            <h3 className="font-heading-ecommerce text-xl">
              Fuente principal h3 - 20px
            </h3>
          </div>
          <div className="flex flex-col gap-3 mb-9">
            <h2 className="font-subheading-ecommerce text-5xl">
              Fuente secundaria h2 - 48px
            </h2>
            <h3 className="font-subheading-ecommerce text-4xl">
              Fuente secundaria h3 -36px
            </h3>
            <h4 className="font-subheading-ecommerce text-3xl">
              Fuente secundaria h4 - 30px
            </h4>
          </div>
          <p>Resto del contenido tamaña de fuente 16px</p>
        </section>
        <h2 className="font-subheading-ecommerce text-4xl uppercase mt-12 mb-3">
          Botones
        </h2>
        <section className="border border-ecommerce-primary p-6 flex flex-col gap-3 mb-3 relative">
          <h2 className="bg-ecommerce-primary px-6 py-1 font-subheading-ecommerce text-3xl text-ecommerce-tertiary absolute top-0 right-0">
            Primario
          </h2>
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            &lt;button&gt;
          </h3>
          <div className="flex flex-wrap gap-3 items-center">
            <button className="flex gap-2 items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-primary hover:border-ecommerce-primary/0 bg-ecommerce-primary hover:bg-ecommerce-primary/80 h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Button Primary
            </button>
            <button className="flex gap-2 items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-primary/0 bg-ecommerce-primary/30 h-10 px-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Button Primary
            </button>
            <button className="flex gap-2 items-center font-bold text-ecommerce-primary hover:text-ecommerce-tertiary border-4 border-ecommerce-primary hover:bg-ecommerce-primary h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Button Primary
            </button>
            <button className="flex gap-2 items-center font-bold text-ecommerce-primary/30 border-4 border-ecommerce-primary/30 h-10 pl-5 pr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Button Primary
            </button>
            <button className="font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-primary hover:border-ecommerce-primary/0 bg-ecommerce-primary hover:bg-ecommerce-primary/80 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
            <button className="font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-primary/0 bg-ecommerce-primary/30 h-10 px-6">
              Button Primary
            </button>
            <button className="font-bold text-ecommerce-primary hover:text-ecommerce-tertiary border-4 border-ecommerce-primary hover:bg-ecommerce-primary h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
            <button className="font-bold text-ecommerce-primary/30 border-4 border-ecommerce-primary/30 h-10 px-6">
              Button Primary
            </button>
            <button className="font-bold text-xs text-ecommerce-tertiary border-4 border-solid border-ecommerce-primary hover:border-ecommerce-primary/0 bg-ecommerce-primary hover:bg-ecommerce-primary/80 h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
            <button className="text-xs text-ecommerce-primary hover:text-ecommerce-tertiary font-bold border-2 border-ecommerce-primary hover:bg-ecommerce-primary h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
          </div>
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            &lt;a href&gt;
          </h3>
          <div className="flex flex-wrap gap-3 items-center">
            <a
              href=""
              className="flex gap-2 items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-primary hover:border-ecommerce-primary/0 bg-ecommerce-primary hover:bg-ecommerce-primary/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Link Primary
            </a>
            <a
              href=""
              className="flex gap-2 items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-primary/0 bg-ecommerce-primary/30 h-10 px-6 cursor-default"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Link Primary
            </a>
            <a
              href=""
              className="flex gap-2 items-center font-bold text-ecommerce-primary hover:text-ecommerce-tertiary border-4 border-ecommerce-primary hover:bg-ecommerce-primary h-10 px-6 transition-colors duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Link Primary
            </a>
            <a
              href=""
              className="flex gap-2 items-center font-bold text-ecommerce-primary/30 border-4 border-ecommerce-primary/30 h-10 px-6 cursor-default"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-primary hover:border-ecommerce-primary/0 bg-ecommerce-primary hover:bg-ecommerce-primary/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-primary/0 bg-ecommerce-primary/30 h-10 px-6 cursor-default"
            >
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-ecommerce-primary hover:text-ecommerce-tertiary border-4 border-ecommerce-primary hover:bg-ecommerce-primary h-10 px-6 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-ecommerce-primary/30 border-4 border-ecommerce-primary/30 h-10 px-6 cursor-default"
            >
              Link Primary
            </a>
            <a
              href=""
              className="text-ecommerce-primary underline decoration-transparent hover:decoration-current transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-ecommerce-primary hover:border-ecommerce-primary/0 bg-ecommerce-primary hover:bg-ecommerce-primary/80 h-6 px-3 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="text-xs flex items-center font-bold text-ecommerce-primary hover:text-ecommerce-tertiary border-2 border-ecommerce-primary hover:bg-ecommerce-primary h-6 px-3 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
          </div>
        </section>
        <section className="border border-ecommerce-secondary p-6 flex flex-col gap-3 mb-3 relative">
          <h2 className="bg-ecommerce-secondary px-6 py-1 font-subheading-ecommerce text-3xl text-ecommerce-tertiary absolute top-0 right-0">
            Secundario
          </h2>
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            &lt;button&gt;
          </h3>
          <div className="flex flex-wrap gap-3 items-center">
            <button className="flex gap-2 items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-secondary hover:border-ecommerce-secondary/0 bg-ecommerce-secondary hover:bg-ecommerce-secondary/80 h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Button Primary
            </button>
            <button className="flex gap-2 items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-secondary/0 bg-ecommerce-secondary/50 h-10 px-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Button Primary
            </button>
            <button className="flex gap-2 items-center font-bold text-ecommerce-secondary hover:text-ecommerce-tertiary border-4 border-ecommerce-secondary hover:bg-ecommerce-secondary h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Button Primary
            </button>
            <button className="flex gap-2 items-center font-bold text-ecommerce-secondary/50 border-4 border-ecommerce-secondary/50 h-10 pl-5 pr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Button Primary
            </button>
            <button className="font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-secondary hover:border-ecommerce-secondary/0 bg-ecommerce-secondary hover:bg-ecommerce-secondary/80 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
            <button className="font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-secondary/0 bg-ecommerce-secondary/50 h-10 px-6">
              Button Primary
            </button>
            <button className="font-bold text-ecommerce-secondary hover:text-ecommerce-tertiary border-4 border-ecommerce-secondary hover:bg-ecommerce-secondary h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
            <button className="font-bold text-ecommerce-secondary/50 border-4 border-ecommerce-secondary/50 h-10 px-6">
              Button Primary
            </button>
            <button className="font-bold text-xs text-ecommerce-tertiary border-4 border-solid border-ecommerce-secondary hover:border-ecommerce-secondary/0 bg-ecommerce-secondary hover:bg-ecommerce-secondary/80 h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
            <button className="text-xs text-ecommerce-secondary hover:text-ecommerce-tertiary font-bold border-2 border-ecommerce-secondary hover:bg-ecommerce-secondary h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
          </div>
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            &lt;a href&gt;
          </h3>
          <div className="flex flex-wrap gap-3 items-center">
            <a
              href=""
              className="flex gap-2 items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-secondary hover:border-ecommerce-secondary/0 bg-ecommerce-secondary hover:bg-ecommerce-secondary/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Link Primary
            </a>
            <a
              href=""
              className="flex gap-2 items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-secondary/0 bg-ecommerce-secondary/50 h-10 px-6 cursor-default"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Link Primary
            </a>
            <a
              href=""
              className="flex gap-2 items-center font-bold text-ecommerce-secondary hover:text-ecommerce-tertiary border-4 border-ecommerce-secondary hover:bg-ecommerce-secondary h-10 px-6 transition-colors duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Link Primary
            </a>
            <a
              href=""
              className="flex gap-2 items-center font-bold text-ecommerce-secondary/50 border-4 border-ecommerce-secondary/50 h-10 px-6 cursor-default"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-secondary hover:border-ecommerce-secondary/0 bg-ecommerce-secondary hover:bg-ecommerce-secondary/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-secondary/0 bg-ecommerce-secondary/50 h-10 px-6 cursor-default"
            >
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-ecommerce-secondary hover:text-ecommerce-tertiary border-4 border-ecommerce-secondary hover:bg-ecommerce-secondary h-10 px-6 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-ecommerce-secondary/50 border-4 border-ecommerce-secondary/50 h-10 px-6 cursor-default"
            >
              Link Primary
            </a>
            <a
              href=""
              className="text-ecommerce-secondary underline decoration-transparent hover:decoration-current transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-ecommerce-secondary hover:border-ecommerce-secondary/0 bg-ecommerce-secondary hover:bg-ecommerce-secondary/80 h-6 px-3 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="text-xs flex items-center font-bold text-ecommerce-secondary hover:text-ecommerce-tertiary border-2 border-ecommerce-secondary hover:bg-ecommerce-secondary h-6 px-3 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
          </div>
        </section>
        <section className="bg-white border border-white p-6 flex flex-col gap-3 mb-3 relative">
          <h2 className="bg-ecommerce-tertiary px-6 py-1 font-subheading-ecommerce text-3xl text-white absolute top-0 right-0">
            Terciario
          </h2>
          <h3 className="font-subheading-ecommerce text-2xl text-ecommerce-tertiary">
            &lt;button&gt;
          </h3>
          <div className="flex flex-wrap gap-3 items-center">
            <button className="flex gap-2 items-center font-bold text-white border-4 border-solid border-ecommerce-tertiary hover:border-ecommerce-tertiary/0 bg-ecommerce-tertiary hover:bg-ecommerce-tertiary/80 h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Button Primary
            </button>
            <button className="flex gap-2 items-center font-bold text-white/70 border-4 border-solid border-ecommerce-tertiary/0 bg-ecommerce-tertiary/30 h-10 px-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Button Primary
            </button>
            <button className="flex gap-2 items-center font-bold text-ecommerce-tertiary hover:text-white border-4 border-ecommerce-tertiary hover:bg-ecommerce-tertiary h-10 pl-5 pr-6 cursor-pointer transition-colors duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Button Primary
            </button>
            <button className="flex gap-2 items-center font-bold text-ecommerce-tertiary/30 border-4 border-ecommerce-tertiary/30 h-10 pl-5 pr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Button Primary
            </button>
            <button className="font-bold text-white border-4 border-solid border-ecommerce-tertiary hover:border-ecommerce-tertiary/0 bg-ecommerce-tertiary hover:bg-ecommerce-tertiary/80 h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
            <button className="font-bold text-white/70 border-4 border-solid border-ecommerce-tertiary/0 bg-ecommerce-tertiary/30 h-10 px-6">
              Button Primary
            </button>
            <button className="font-bold text-ecommerce-tertiary hover:text-white border-4 border-ecommerce-tertiary hover:bg-ecommerce-tertiary h-10 px-6 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
            <button className="font-bold text-ecommerce-tertiary/30 border-4 border-ecommerce-tertiary/30 h-10 px-6">
              Button Primary
            </button>
            <button className="font-bold text-xs text-white border-4 border-solid border-ecommerce-tertiary hover:border-ecommerce-tertiary/0 bg-ecommerce-tertiary hover:bg-ecommerce-tertiary/80 h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
            <button className="text-xs text-ecommerce-tertiary hover:text-white font-bold border-2 border-ecommerce-tertiary hover:bg-ecommerce-tertiary h-6 px-3 cursor-pointer transition-colors duration-300 ease-in-out">
              Button Primary
            </button>
          </div>
          <h3 className="font-subheading-ecommerce text-2xl text-ecommerce-tertiary">
            &lt;a href&gt;
          </h3>
          <div className="flex flex-wrap gap-3 items-center">
            <a
              href=""
              className="flex gap-2 items-center font-bold text-white border-4 border-solid border-ecommerce-tertiary hover:border-ecommerce-tertiary/0 bg-ecommerce-tertiary hover:bg-ecommerce-tertiary/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Link Primary
            </a>
            <a
              href=""
              className="flex gap-2 items-center font-bold text-white/70 border-4 border-solid border-ecommerce-tertiary/0 bg-ecommerce-tertiary/30 h-10 px-6 cursor-default"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Link Primary
            </a>
            <a
              href=""
              className="flex gap-2 items-center font-bold text-ecommerce-tertiary hover:text-white border-4 border-ecommerce-tertiary hover:bg-ecommerce-tertiary h-10 px-6 transition-colors duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Link Primary
            </a>
            <a
              href=""
              className="flex gap-2 items-center font-bold text-ecommerce-tertiary/30 border-4 border-ecommerce-tertiary/30 h-10 px-6 cursor-default"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-white border-4 border-solid border-ecommerce-tertiary hover:border-ecommerce-tertiary/0 bg-ecommerce-tertiary hover:bg-ecommerce-tertiary/80 h-10 pl-5 pr-6 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-white/70 border-4 border-solid border-ecommerce-tertiary/0 bg-ecommerce-tertiary/30 h-10 px-6 cursor-default"
            >
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-ecommerce-tertiary hover:text-white border-4 border-ecommerce-tertiary hover:bg-ecommerce-tertiary h-10 px-6 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="flex items-center font-bold text-ecommerce-tertiary/30 border-4 border-ecommerce-tertiary/30 h-10 px-6 cursor-default"
            >
              Link Primary
            </a>
            <a
              href=""
              className="text-ecommerce-tertiary underline decoration-transparent hover:decoration-current transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="text-xs flex items-center font-bold text-white border-2 border-solid border-ecommerce-tertiary hover:border-ecommerce-tertiary/0 bg-ecommerce-tertiary hover:bg-ecommerce-tertiary/80 h-6 px-3 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
            <a
              href=""
              className="text-xs flex items-center font-bold text-ecommerce-tertiary hover:text-white border-2 border-ecommerce-tertiary hover:bg-ecommerce-tertiary h-6 px-3 transition-colors duration-300 ease-in-out"
            >
              Link Primary
            </a>
          </div>
        </section>
        <h2 className="font-subheading-ecommerce text-4xl uppercase mb-3 mt-12">
          Mensajes Flotantes
        </h2>
        <section className="border border-white/40 p-6 flex flex-col gap-3 mb-3 relative">
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Base
          </h3>
          <div className="flex flex-wrap gap-3">
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-ecommerce-secondary -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <figure className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-ecommerce-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <article className="grow text-ecommerce-secondary">
                  <h4 className="font-bold mb-0.5">Mensaje de general</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <div className="flex-none">
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-ecommerce-secondary hover:border-ecommerce-secondary/0 bg-ecommerce-secondary hover:bg-ecommerce-secondary/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
                <a
                  href=""
                  className="absolute top-2 right-2 z-10 text-ecommerce-secondary"
                >
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
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Mensaje
          </h3>
          <div className="flex flex-wrap gap-3">
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-ecommerce-secondary -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <figure className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-ecommerce-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <article className="grow text-ecommerce-secondary">
                  <h4 className="font-bold mb-0.5">Mensaje de general</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <a
                  href=""
                  className="absolute top-2 right-2 z-10 text-ecommerce-secondary"
                >
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
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-red-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <figure className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-red-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <article className="grow text-red-500">
                  <h4 className="font-bold mb-0.5">Mensaje de peligro</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <a href="" className="absolute top-2 right-2 z-10 text-red-500">
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
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-yellow-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <figure className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <article className="grow text-yellow-500">
                  <h4 className="font-bold mb-0.5">Mensaje de advertencia</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <a
                  href=""
                  className="absolute top-2 right-2 z-10 text-yellow-500"
                >
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
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-green-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <figure className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <article className="grow text-green-500">
                  <h4 className="font-bold mb-0.5">Mensaje de exito</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <a
                  href=""
                  className="absolute top-2 right-2 z-10 text-green-500"
                >
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
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-ecommerce-secondary -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <article className="grow text-ecommerce-secondary">
                  <h4 className="font-bold mb-0.5">Mensaje de general</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <a
                  href=""
                  className="absolute top-2 right-2 z-10 text-ecommerce-secondary"
                >
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
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-red-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <article className="grow text-red-500">
                  <h4 className="font-bold mb-0.5">Mensaje de peligro</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <a href="" className="absolute top-2 right-2 z-10 text-red-500">
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
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-yellow-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <article className="grow text-yellow-500">
                  <h4 className="font-bold mb-0.5">Mensaje de advertencia</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <a
                  href=""
                  className="absolute top-2 right-2 z-10 text-yellow-500"
                >
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
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-green-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <article className="grow text-green-500">
                  <h4 className="font-bold mb-0.5">Mensaje de exito</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <a
                  href=""
                  className="absolute top-2 right-2 z-10 text-green-500"
                >
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
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <h3 className="font-subheading-ecommerce text-2xl text-white">
            Alerta
          </h3>
          <div className="flex flex-wrap gap-3">
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-ecommerce-secondary -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <figure className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-ecommerce-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <article className="grow text-ecommerce-secondary">
                  <h4 className="font-bold mb-0.5">Mensaje de general</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <div className="flex-none">
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-ecommerce-secondary hover:border-ecommerce-secondary/0 bg-ecommerce-secondary hover:bg-ecommerce-secondary/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-red-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <figure className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-red-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <article className="grow text-red-500">
                  <h4 className="font-bold mb-0.5">Mensaje de peligro</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <div className="flex-none">
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-red-500 hover:border-red-500/0 bg-red-500 hover:bg-red-500/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-yellow-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <figure className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <article className="grow text-yellow-500">
                  <h4 className="font-bold mb-0.5">Mensaje de advertencia</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <div className="flex-none">
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-yellow-500 hover:border-yellow-500/0 bg-yellow-500 hover:bg-yellow-500/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-green-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <figure className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <article className="grow text-green-500">
                  <h4 className="font-bold mb-0.5">Mensaje de exito</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <div className="flex-none">
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-green-500 hover:border-green-500/0 bg-green-500 hover:bg-green-500/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-ecommerce-secondary -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <article className="grow text-ecommerce-secondary">
                  <h4 className="font-bold mb-0.5">Mensaje de general</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <div className="flex-none">
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-ecommerce-secondary hover:border-ecommerce-secondary/0 bg-ecommerce-secondary hover:bg-ecommerce-secondary/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-red-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <article className="grow text-red-500">
                  <h4 className="font-bold mb-0.5">Mensaje de peligro</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <div className="flex-none">
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-red-500 hover:border-red-500/0 bg-red-500 hover:bg-red-500/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-yellow-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <article className="grow text-yellow-500">
                  <h4 className="font-bold mb-0.5">Mensaje de advertencia</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <div className="flex-none">
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-yellow-500 hover:border-yellow-500/0 bg-yellow-500 hover:bg-yellow-500/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-ecommerce-tertiary w-full max-w-md border border-b-4 border-green-500 -absolute">
              <div className="pt-3 pb-4 px-6 flex gap-6 items-center relative">
                <article className="grow text-green-500">
                  <h4 className="font-bold mb-0.5">Mensaje de exito</h4>
                  <p className="leading-4 text-xs">
                    Esta acción podría tener consecuencias, verifica antes de
                    continuar
                  </p>
                </article>
                <div className="flex-none">
                  <a
                    href=""
                    className="text-xs flex items-center font-bold text-ecommerce-tertiary border-2 border-solid border-green-500 hover:border-green-500/0 bg-green-500 hover:bg-green-500/80 h-6 px-3 transition-colors duration-300 ease-in-out"
                  >
                    Aceptar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <h2 className="font-subheading-ecommerce text-4xl uppercase mt-12 mb-3">
          Login
        </h2>
        <section className="border border-white/40 p-6 mb-3 relative">
          <div className="border border-b-4 border-ecommerce-secondary -shadow-[8px_8px_0px_0px_var(--color-ecommerce-secondary)] w-full max-w-md">
            <h2 className="h-full font-subheading-ecommerce text-5xl uppercase pt-6 px-6 pb-3 text-ecommerce-primary flex justify-center items-center gap-3">
              <span>Credenciales</span>
            </h2>
            <h3 className="border-t border-b border-ecommerce-secondary text-xl font-bold text-ecommerce-secondary uppercase text-center pt-2 pb-2">
              Hola denuevo usuario
            </h3>
            <div className="flex flex-col gap-6 p-6">
              <div>
                <label className="flex gap-2 items-center text-ecommerce-secondary uppercase text-xs mb-2">
                  <figure className="h-6 w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 22H4v-4h2v4Zm14 0h-2v-4h2v4ZM8 18H6v-2h2v2Zm10 0h-2v-2h2v2Zm-2-2H8v-2h8v2Zm-1-4H9v-2h6v2Zm-6-2H7V4h2v6Zm8 0h-2V4h2v6Zm-2-6H9V2h6v2Z" />
                    </svg>
                  </figure>
                  Nombre de usuario
                </label>
                <input
                  type="text"
                  name="login-name"
                  id=""
                  className="w-full border border-ecommerce-secondary focus:border-ecommerce-primary focus:outline-none h-10 px-6"
                />
              </div>
              <div>
                <label className="flex gap-2 items-center text-ecommerce-secondary uppercase text-xs mb-2">
                  <figure className="h-6 w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11 8H13V9H23V14H21V18H19V14H17V16H15V14H13V16H11V18H3V16H1V8H3V6H11V8ZM5 14H9V10H5V14Z" />
                    </svg>
                  </figure>
                  Contraseña
                </label>
                <input
                  type="password"
                  name="login-password"
                  id=""
                  className="w-full border border-ecommerce-secondary focus:border-ecommerce-primary focus:outline-none h-10 px-6"
                />
              </div>
              <button
                type="submit"
                className="w-full justify-center flex gap-2 items-center font-bold text-ecommerce-tertiary border-4 border-solid border-ecommerce-primary/0 bg-ecommerce-primary/30 h-10 px-6"
              >
                Ingresar
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
