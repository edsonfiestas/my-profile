"use client";

import React from "react";
import Link from "next/link";

export default function LPHeader() {
  return (
    <header className="w-full py-6 hidden md:block fixed top-0 left-0 right-0 z-50 bg-[#0A0D20]/50 backdrop-blur-sm">
      <div className="px-3 xl:px-0 w-full max-w-[1440px] mx-auto relative ">
        <nav className="flex justify-center gap-6 font-bold text-xl">
          <Link
            href="#home"
            className="px-6 py-2 rounded-lg border-2 border-[#0A0D20]/0 hover:border-white/80 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="#services"
            className="px-6 py-2 rounded-lg border-2 border-[#0A0D20]/0 hover:border-white/80 transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="#projects"
            className="px-6 py-2 rounded-lg border-2 border-[#0A0D20]/0 hover:border-white/80 transition-colors duration-300"
          >
            Portfolio
          </Link>
          <Link
            href="#footer"
            className="px-6 py-2 rounded-lg border-2 border-[#0A0D20]/0 hover:border-white/80 transition-colors duration-300"
          >
            Contact
          </Link>
          <div className="opacity-0 animate-fade-in-up [animation-delay:400ms] flex gap-3">
            <Link
              href="#page-end"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xl px-6 py-2 rounded-lg transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
            >
              <span>Let´s Task</span>
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
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
