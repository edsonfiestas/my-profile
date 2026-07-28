"use client";

import React from "react";
import Link from "next/link";

export default function LPProjects() {
  return (
    <div className="w-full py-12">
      <div className="px-6 xl:px-0 w-full max-w-[1440px] mx-auto relative grid grid-cols-4 gap-12">
        <div className="title-fade-up col-span-4 flex flex-col gap-1">
          <span className="opacity-0 animate-fade-in-up [animation-delay:0ms] text-xl uppercase bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            My Work
          </span>
          <h3 className="opacity-0 animate-fade-in-up [animation-delay:200ms] text-3xl font-light text-slate-300">
            Projects I've Worked On
          </h3>
        </div>
        <div className="box-fade-up col-span-4 md:col-span-2 lg:col-span-1 flex flex-col gap-3">
          <Link
            href="/portfolio/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-700 rounded-xl overflow-hidden aspect-square cursor-pointer group block"
          >
            <figure>
              <img
                src="/images/portfolio001.jpg"
                alt="Project 4"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </figure>
          </Link>
          <div>
            <span className="inline-block text-slate-400 rounded border border-slate-500 px-3 py-1">
              Dashboard
            </span>
          </div>
          <Link
            href="/portfolio/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-xl"
          >
            Analytics Dashboard
          </Link>
          <p className="text-slate-400">UI/UX Design</p>
        </div>
        <div className="box-fade-up col-span-4 md:col-span-2 lg:col-span-1 flex flex-col gap-3">
          <Link
            href="/portfolio/landingPage"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-700 rounded-xl overflow-hidden aspect-square cursor-pointer group block"
          >
            <figure>
              <img
                src="/images/portfolio002.jpg"
                alt="Project 4"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </figure>
          </Link>
          <div>
            <span className="inline-block text-slate-400 rounded border border-slate-500 px-3 py-1">
              Website
            </span>
          </div>
          <Link
            href="/portfolio/landingPage"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-xl"
          >
            Landing Page
          </Link>
          <p className="text-slate-400">UI/UX Design</p>
        </div>
        <div className="box-fade-up col-span-4 md:col-span-2 lg:col-span-1 flex flex-col gap-3">
          <Link
            href="/portfolio/appComponents"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-700 rounded-xl overflow-hidden aspect-square cursor-pointer group block"
          >
            <figure>
              <img
                src="/images/portfolio003.jpg"
                alt="Project 4"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </figure>
          </Link>
          <div>
            <span className="inline-block text-slate-400 rounded border border-slate-500 px-3 py-2">
              Dashboard Elements
            </span>
          </div>
          <Link
            href="/portfolio/appComponents"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-xl"
          >
            Components Library
          </Link>
          <p className="text-slate-400">UI/UX Design</p>
        </div>
        <div className="box-fade-up col-span-4 md:col-span-2 lg:col-span-1 flex flex-col gap-3">
          <Link
            href="/portfolio/ecommerce"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-700 rounded-xl overflow-hidden aspect-square cursor-pointer group block"
          >
            <figure>
              <img
                src="/images/portfolio004.jpg"
                alt="Project 4"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </figure>
          </Link>
          <div>
            <span className="inline-block text-slate-400 rounded border border-slate-500 px-3 py-2">
              Website
            </span>
          </div>
          <Link
            href="/portfolio/ecommerce"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-xl"
          >
            Ecommerce Website
          </Link>
          <p className="text-slate-400">UI/UX Design</p>
        </div>
      </div>
    </div>
  );
}
