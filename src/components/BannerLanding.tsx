"use client";

import React from "react";
import Link from "next/link";

export default function BannerLanding() {
  return (
    <div className="w-full py-3 md:py-12">
      <div className="px-6 xl:px-0 w-full max-w-[1440px] mx-auto relative flex flex-col-reverse md:flex-row gap-6 justify-center items-center">
        <div className="w-full max-w-md h-full flex flex-col gap-6">
          <span className="opacity-0 animate-fade-in-up [animation-delay:0ms] text-xl uppercase bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Hello, I'm
          </span>
          <h1 className="opacity-0 animate-fade-in-up [animation-delay:100ms] text-5xl md:text-6xl font-bold text-white">
            Edson{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Fiestas
            </span>
          </h1>
          <h3 className="opacity-0 animate-fade-in-up [animation-delay:200ms] text-3xl font-light text-slate-300">
            I craft experiences that drive results and leave a lasting
            impression.
          </h3>
          <p className="opacity-0 animate-fade-in-up [animation-delay:300ms] text-slate-400 text-xl">
            I´am a UX/UI Designer helping startups and businesses create digital
            products users love
          </p>
          <div className="opacity-0 animate-fade-in-up [animation-delay:400ms] flex gap-3">
            <Link
              href=""
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xl px-6 py-3 rounded-lg transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
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
        <div className="opacity-0 animate-fade-in-up [animation-delay:250ms] relative">
          <img
            src="/images/faceProfileAlfa.png"
            alt="Edson"
            className="w-xl h-auto object-cover mask-fade-edges"
          />
          <div className="absolute bottom-0 right-0 rounded-lg p-[4px] bg-linear-to-br from-[#2B2D45] to-[#0C0E23]">
            <div className="text-lg rounded-lg py-3 px-6 bg-linear-to-b from-[#1F2138] to-[#0C0E23] text-center">
              <span className="text-5xl font-bold text-white">5+</span>
              <br /> Years of <br /> Experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
