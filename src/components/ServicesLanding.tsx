"use client";

import React from "react";
import Link from "next/link";

export default function ServicesLanding() {
  return (
    <div className="w-full border-t border-slate-800 py-12">
      <div className="px-3 xl:px-0 w-full max-w-[1440px] mx-auto relative grid grid-cols-4 gap-12">
        <div className="col-span-4 flex flex-col gap-1">
          <span className="opacity-0 animate-fade-in-up [animation-delay:0ms] text-xl uppercase bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            What i do
          </span>
          <h3 className="opacity-0 animate-fade-in-up [animation-delay:200ms] text-3xl font-light text-slate-300">
            Services I Offer
          </h3>
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-1">
          <div className="rounded-lg p-[4px] bg-linear-to-br from-[#29233F] to-[#211B37]">
            <div className="flex flex-col justify-center gap-6 text-lg rounded-lg px-6 py-9 bg-linear-to-tl from-[#211B37]/75 to-[#18162F]/75 text-center">
              <figure className="h-20 w-20 mb-3 mx-auto rounded-full flex justify-center items-center bg-linear-to-tl from-purple-800 to-purple-600 text-slate-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  />
                </svg>
              </figure>
              <span className="text-2xl font-bold text-white">
                UI/UX Design
              </span>
              <p className="text-xl text-slate-400">
                I design intuitive interfaces and user-centered experiences,
                from wireframes and prototypes in Figma to scalable design
                systems ready for development.
              </p>
              <Link
                href=""
                className="flex items-center gap-2 mx-auto text-cyan-600 text-xl transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
              >
                <span>View my work</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-1">
          <div className="rounded-lg p-[4px] bg-linear-to-br from-[#29233F] to-[#211B37]">
            <div className="flex flex-col justify-center gap-6 text-lg rounded-lg px-6 py-9 bg-linear-to-tl from-[#211B37]/75 to-[#18162F]/75 text-center">
              <figure className="h-20 w-20 mb-3 mx-auto rounded-full flex justify-center items-center bg-linear-to-tl from-blue-800 to-blue-600 text-slate-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
              </figure>
              <span className="text-2xl font-bold text-white">
                Web Development
              </span>
              <p className="text-xl text-slate-400">
                I build fast, responsive websites and web apps with React,
                Next.js, and Tailwind CSS — clean code that scales from concept
                to production.
              </p>
              <Link
                href=""
                className="flex items-center gap-2 mx-auto text-cyan-600 text-xl transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
              >
                <span>View my work</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-1">
          <div className="rounded-lg p-[4px] bg-linear-to-br from-[#29233F] to-[#211B37]">
            <div className="flex flex-col justify-center gap-6 text-lg rounded-lg px-6 py-9 bg-linear-to-tl from-[#211B37]/75 to-[#18162F]/75 text-center">
              <figure className="h-20 w-20 mb-3 mx-auto rounded-full flex justify-center items-center bg-linear-to-tl from-purple-800 to-purple-600 text-slate-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </figure>
              <span className="text-2xl font-bold text-white">
                Mobile Design
              </span>
              <p className="text-xl text-slate-400">
                I design mobile-first interfaces that feel native and intuitive,
                adapting seamlessly across screen sizes without losing clarity
                or purpose.
              </p>
              <Link
                href=""
                className="flex items-center gap-2 mx-auto text-cyan-600 text-xl transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
              >
                <span>View my work</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-1">
          <div className="rounded-lg p-[4px] bg-linear-to-br from-[#29233F] to-[#211B37]">
            <div className="flex flex-col justify-center gap-6 text-lg rounded-lg px-6 py-9 bg-linear-to-tl from-[#211B37]/75 to-[#18162F]/75 text-center">
              <figure className="h-20 w-20 mb-3 mx-auto rounded-full flex justify-center items-center bg-linear-to-tl from-blue-800 to-blue-600 text-slate-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                    clipRule="evenodd"
                  />
                  <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                </svg>
              </figure>
              <span className="text-2xl font-bold text-white">
                Design Systems & Components
              </span>
              <p className="text-xl text-slate-400">
                I build reusable component libraries and design systems that
                keep design and code consistent, speeding up delivery without
                sacrificing quality.
              </p>
              <Link
                href=""
                className="flex items-center gap-2 mx-auto text-cyan-600 text-xl transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
              >
                <span>View my work</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
