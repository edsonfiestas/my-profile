"use client";

import React from "react";
import Link from "next/link";

export default function LPFooter() {
  return (
    <footer className="w-full py-3 md:py-12">
      <div className="px-6 xl:px-0 w-full max-w-[1440px] mx-auto relative">
        <div className="flex w-full">
          <div className="flex-none bg-linear-to-tl from-blue-600 to-purple-500 rounded-l-xl py-6 px-12">
            <div className="flex flex-col w-full max-w-56 gap-3">
              <figure className="w-20 h-20 bg-white/30 rounded-full flex justify-center items-center text-white">
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
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </figure>
              <h3 className="opacity-0 animate-fade-in-up [animation-delay:200ms] text-3xl font-light text-white">
                Let´s Work Together!
              </h3>
              <p className="opacity-0 animate-fade-in-up [animation-delay:300ms] text-slate-200 text-xl">
                Have a project inmins? let´s create something great
              </p>
            </div>
          </div>
          <div className="grow border-y border-slate-700 py-6 px-9">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                id=""
                className="col-span-1 bg-slate-900 border border-slate-700 px-6 py-3 rounded-lg"
              />
              <input
                placeholder="Your Email"
                type="email"
                name=""
                id=""
                className="col-span-1 bg-slate-900 border border-slate-700 px-6 py-3 rounded-lg"
              />
              <div className="col-span-2 bg-slate-900 border border-slate-700 px-6 py-3 rounded-lg">
                <textarea
                  name=""
                  id=""
                  className="w-full"
                  placeholder="Your Message"
                  rows={5}
                ></textarea>
                <div className="flex justify-end mt-3">
                  <Link
                    href=""
                    className="flex items-center -mr-6 -mb-3 gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xl px-6 py-2 rounded-lg transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
                  >
                    <span>Send Message</span>
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
              </div>
            </div>
          </div>
          <div className="flex-none rounded-r-xl py-6 px-12 border-y border-r border-slate-700">
            <div className="flex flex-col gap-6">
              <div className="flex gap-3 items-center">
                <figure className="w-16 h-16 bg-white/10 rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </figure>
                <div className="text-lg">
                  <h3 className="mb-1 text-slate-400">Email</h3>
                  <p>edsonfiestas@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <figure className="w-16 h-16 bg-white/10 rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </figure>
                <div className="text-lg">
                  <h3 className="mb-1 text-slate-400">Telefono</h3>
                  <p>+51 947 887 843</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <figure className="w-16 h-16 bg-white/10 rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </figure>
                <div className="text-lg">
                  <h3 className="mb-1 text-slate-400">Location</h3>
                  <p>Bellavista, Callao, Perú</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
