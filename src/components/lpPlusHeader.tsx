"use client";

import Link from "next/link";

export default function LpPlusHeader() {
  return (
    <header className="w-full max-w-[1440px] mx-auto flex justify-between gap-6 items-center py-6">
      <div>
        <h2 className="font-heading text-4xl leading-none">Edson Fiestas</h2>
        <h3 className="font-mono text-lg text-[#F54518] uppercase leading-none">
          Graphic Designer
        </h3>
      </div>
      <nav className="font-mono uppercase flex items-center gap-6">
        <Link
          href="https://lp-plus.vercel.app/"
          className="border-b-white/0 border-b-2 hover:border-white h-12 px-3 text-white inline-flex gap-3 items-center justify-center relative transition-colors duration-300 group"
          target="_blank"
        >
          Home
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
        </Link>
        <Link
          href="https://lp-plus.vercel.app/"
          className="border-b-white/0 border-b-2 hover:border-white h-12 px-3 text-white inline-flex gap-3 items-center justify-center relative transition-colors duration-300 group"
          target="_blank"
        >
          Speaking
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
        </Link>
        <Link
          href="https://lp-plus.vercel.app/"
          className="border-b-white/0 border-b-2 hover:border-white h-12 px-3 text-white inline-flex gap-3 items-center justify-center relative transition-colors duration-300 group"
          target="_blank"
        >
          About
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
        </Link>
        <Link
          href="https://lp-plus.vercel.app/"
          className="border-b-white/0 border-b-2 hover:border-white h-12 px-3 text-white inline-flex gap-3 items-center justify-center relative transition-colors duration-300 group"
          target="_blank"
        >
          Media
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
        </Link>
        <Link
          href="https://lp-plus.vercel.app/"
          className="border-b-white/0 border-b-2 hover:border-white h-12 px-3 text-white inline-flex gap-3 items-center justify-center relative transition-colors duration-300 group"
          target="_blank"
        >
          Book
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
        </Link>
        <Link
          href="https://lp-plus.vercel.app/"
          className="border-b-white/0 border-b-2 hover:border-white h-12 px-3 text-white inline-flex gap-3 items-center justify-center relative transition-colors duration-300 group"
          target="_blank"
        >
          Contact
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
        </Link>
      </nav>
      <Link
        href="https://lp-plus.vercel.app/"
        className="bg-[#F54518] h-12 pl-6 pr-5 rounded text-white inline-flex gap-3 items-center justify-center"
        target="_blank"
      >
        <span className="font-mono uppercase">Book Edson</span>
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
    </header>
  );
}
