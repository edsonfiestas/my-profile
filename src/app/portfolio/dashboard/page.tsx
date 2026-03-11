"use client";

import Sidebar from "@/components/Sidebar";
import Image from "next/image";

const DashboardContent = () => {
  return (
    <>
      <div className="min-h-screen flex-1 overflow-hidden flex gap-4 p-4 bg-slate-300">
        <Sidebar />
        <section className="flex-1 overflow-hidden h-[calc(100vh-(--spacing(8)))] flex flex-col gap-6">
          <div className="overflow-hidden bg-white rounded-2xl p-8 flex flex-col gap-10">
            <div className=" grid grid-cols-6 gap-6">
              <h1 className="col-span-6 font-bold text-2xl">Dashboard</h1>
              <div className="col-span-2 flex flex-col gap-6">
                <div className="flex-1 border border-slate-300 rounded-xl p-6">
                  uno
                </div>
                <div className="flex-1 border border-slate-300 rounded-xl p-6">
                  dos
                </div>
              </div>
              <div className="col-span-2 flex">
                <section className="w-full flex flex-col border border-slate-300 rounded-xl overflow-hidden">
                  <div className="flex justify-between gap-6 items-center border-b border-slate-300 p-4">
                    <h4 className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                        />
                      </svg>
                      <strong>Laboratory</strong>
                    </h4>
                    <button className="flex text-sm hover:bg-slate-200 items-center border border-slate-300 gap-2 px-2 py-1 rounded-lg cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <span>Add note</span>
                    </button>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex gap-4 border-b border-slate-300 pb-4 mb-4">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-slate-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col">
                          <h4 className="font-bold mb-1">
                            Text inputs for Design System
                          </h4>
                          <p className="line-clamp-1 mb-3">
                            Search for inspirations to provide a rich company
                            reservation
                          </p>
                          <div className="flex items-center gap-6 justify-between">
                            <div className="flex items-center gap-2">
                              <span className="py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-xs">
                                Today
                              </span>
                              <span className="py-1 px-3 rounded-full bg-sky-100 text-sky-800 text-xs">
                                To-do
                              </span>
                            </div>
                            <small className="flex gap-1 items-center text-slate-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                />
                              </svg>
                              Aug 22
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 border-b border-slate-300 pb-4 mb-4">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-green-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col">
                          <h4 className="font-bold mb-1">
                            Text inputs for Design System
                          </h4>
                          <p className="line-clamp-1 mb-3">
                            Search for inspirations to provide a rich company
                            reservation
                          </p>
                          <div className="flex items-center gap-6 justify-between">
                            <div className="flex items-center gap-2">
                              <span className="py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-xs">
                                Today
                              </span>
                              <span className="py-1 px-3 rounded-full bg-sky-100 text-sky-800 text-xs">
                                To-do
                              </span>
                            </div>
                            <small className="flex gap-1 items-center text-slate-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                />
                              </svg>
                              Aug 22
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 border-b border-slate-300 pb-4 mb-4">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-slate-300"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col">
                          <h4 className="font-bold mb-1">
                            Text inputs for Design System
                          </h4>
                          <p className="line-clamp-1 mb-3">
                            Search for inspirations to provide a rich company
                            reservation
                          </p>
                          <div className="flex items-center gap-6 justify-between">
                            <div className="flex items-center gap-2">
                              <span className="py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-xs">
                                Today
                              </span>
                              <span className="py-1 px-3 rounded-full bg-sky-100 text-sky-800 text-xs">
                                To-do
                              </span>
                            </div>
                            <small className="flex gap-1 items-center text-slate-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                />
                              </svg>
                              Aug 22
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-slate-300"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col">
                          <h4 className="font-bold mb-1">
                            Text inputs for Design System
                          </h4>
                          <p className="line-clamp-1 mb-3">
                            Search for inspirations to provide a rich company
                            reservation
                          </p>
                          <div className="flex items-center gap-6 justify-between">
                            <div className="flex items-center gap-2">
                              <span className="py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-xs">
                                Today
                              </span>
                              <span className="py-1 px-3 rounded-full bg-sky-100 text-sky-800 text-xs">
                                To-do
                              </span>
                            </div>
                            <small className="flex gap-1 items-center text-slate-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                />
                              </svg>
                              Aug 22
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-span-2 flex">
                <section className="w-full flex flex-col border border-slate-300 rounded-xl overflow-hidden">
                  <div className="flex justify-between gap-6 items-center border-b border-slate-300 p-4">
                    <h4 className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                      <strong>Employee Spotlight</strong>
                    </h4>
                    <button className="flex text-sm hover:bg-slate-200 items-center border border-slate-300 gap-2 px-2 py-1 rounded-lg cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                        />
                      </svg>
                      <span>Share</span>
                    </button>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="bg-slate-100 flex gap-2 rounded-lg p-2 mb-6">
                      <button className="w-1/3 hover:bg-slate-200 rounded h-10 cursor-pointer">
                        Overview
                      </button>
                      <button className="w-1/3 bg-slate-200 rounded h-10 cursor-pointer">
                        Comments
                      </button>
                      <button className="w-1/3 hover:bg-slate-200 rounded h-10 cursor-pointer">
                        Rewards
                      </button>
                    </div>
                    <div className="flex gap-4 border-b border-slate-300 pb-4 mb-4">
                      <Image
                        src="/images/faceProfile.png"
                        alt="Descripción de la imagen"
                        width={48}
                        height={48}
                        className="inline-block border border-slate-400 h-10 w-10 rounded-full"
                        priority={true}
                      />
                      <div className="flex-1">
                        <div className="flex flex-col">
                          <h4 className="font-bold mb-1">
                            Text inputs for Design System
                          </h4>
                          <p className="line-clamp-1">
                            Search for inspirations to provide a rich company
                            reservation
                          </p>
                        </div>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-slate-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex gap-4 border-b border-slate-300 pb-4 mb-4">
                      <Image
                        src="/images/faceProfile.png"
                        alt="Descripción de la imagen"
                        width={48}
                        height={48}
                        className="inline-block border border-slate-400 h-10 w-10 rounded-full"
                        priority={true}
                      />
                      <div className="flex-1">
                        <div className="flex flex-col">
                          <h4 className="font-bold mb-1">
                            Text inputs for Design System
                          </h4>
                          <p className="line-clamp-1">
                            Search for inspirations to provide a rich company
                            reservation
                          </p>
                        </div>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-slate-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex gap-4 border-b border-slate-300 pb-4 mb-4">
                      <Image
                        src="/images/faceProfile.png"
                        alt="Descripción de la imagen"
                        width={48}
                        height={48}
                        className="inline-block border border-slate-400 h-10 w-10 rounded-full"
                        priority={true}
                      />
                      <div className="flex-1">
                        <div className="flex flex-col">
                          <h4 className="font-bold mb-1">
                            Text inputs for Design System
                          </h4>
                          <p className="line-clamp-1">
                            Search for inspirations to provide a rich company
                            reservation
                          </p>
                        </div>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-red-600"
                        >
                          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex gap-4 pb-4">
                      <Image
                        src="/images/faceProfile.png"
                        alt="Descripción de la imagen"
                        width={48}
                        height={48}
                        className="inline-block border border-slate-400 h-10 w-10 rounded-full"
                        priority={true}
                      />
                      <div className="flex-1">
                        <div className="flex flex-col">
                          <h4 className="font-bold mb-1">
                            Text inputs for Design System
                          </h4>
                          <p className="line-clamp-1">
                            Search for inspirations to provide a rich company
                            reservation
                          </p>
                        </div>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-red-600"
                        >
                          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <button className="w-full flex text-sm hover:bg-slate-200 items-center border border-slate-300 gap-2 px-2 py-1 rounded-lg cursor-pointer h-10 justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <span>Comment</span>
                    </button>
                  </div>
                </section>
              </div>
              <div className="col-span-2 flex">
                <div className="w-full border border-slate-300 rounded-xl p-6">
                  cinco
                </div>
              </div>
              <div className="col-span-2 flex">
                <div className="w-full border border-slate-300 rounded-xl p-6">
                  seis
                </div>
              </div>
              <div className="col-span-2 flex">
                <div className="w-full border border-slate-300 rounded-xl p-6">
                  siete
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DashboardContent;
