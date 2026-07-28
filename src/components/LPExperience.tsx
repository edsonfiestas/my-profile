"use client";

import React from "react";
import Link from "next/link";

export default function LPExperience() {
  return (
    <div className="w-full py-12">
      <div className="bg-linear-to-l from-blue-600 to-purple-600 text-white rounded-xl py-6 w-full max-w-[1440px] mx-auto relative grid grid-cols-4">
        <div className="box-fade-up col-span-4 md:col-span-2 lg:col-span-1 px-12 border-r border-white/70">
          <div className="flex gap-6 items-center">
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-20 w-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                />
              </svg>
            </figure>
            <div className="flex flex-col">
              <h3 className="text-4xl font-bold">80+</h3>
              <p className="text-lg">Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="box-fade-up col-span-4 md:col-span-2 lg:col-span-1 px-12 border-r border-white/70">
          <div className="flex gap-6 items-center">
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-20 w-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                />
              </svg>
            </figure>
            <div className="flex flex-col">
              <h3 className="text-4xl font-bold">120+</h3>
              <p className="text-lg">Projects Completed</p>
            </div>
          </div>
        </div>
        <div className="box-fade-up col-span-4 md:col-span-2 lg:col-span-1 px-12 border-r border-white/70">
          <div className="flex gap-6 items-center">
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-20 w-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h6.75V15H4.5v-4.5ZM3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z"
                />
              </svg>
            </figure>
            <div className="flex flex-col">
              <h3 className="text-4xl font-bold">5+</h3>
              <p className="text-lg">Years Experience</p>
            </div>
          </div>
        </div>
        <div className="box-fade-up col-span-4 md:col-span-2 lg:col-span-1 px-12">
          <div className="flex gap-6 items-center">
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-20 w-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                />
              </svg>
            </figure>
            <div className="flex flex-col">
              <h3 className="text-4xl font-bold">15+</h3>
              <p className="text-lg">Awards Receiwed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
