"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import LpPlusHeader from "@/components/lpPlusHeader";

export default function LpPro() {
  return (
    <div className="w-full h-full min-h-screen bg-[#B0A9A9] font-sans relative text-lg text-white">
      <LpPlusHeader />
      <div className="w-full max-w-[1440px] mx-auto ">
        <Link
          href="https://lp-plus.vercel.app/"
          className="bg-[#F54518] h-12 pl-6 pr-5 rounded text-white inline-flex gap-2 items-center justify-center"
          target="_blank"
        >
          <span className="font-mono uppercase">Portfolio Edson</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </Link>
        <div className="flex items-center justify-center gap-6">
          <h2 className="font-heading text-[400px] font-bold text-shadow-[#948D8A]/20 text-shadow-lg">
            Edson
          </h2>
          <h3 className="font-heading text-[200px] text-shadow-[#948D8A]/20 text-shadow-lg">
            Fiestas
          </h3>
        </div>
      </div>
    </div>
  );
}
