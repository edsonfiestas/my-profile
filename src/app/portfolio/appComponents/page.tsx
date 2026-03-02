"use client";
import Image from "next/image";

const LibreContent = () => {
  return (
    <>
      <section className="grid grid-cols-12 gap-6">
        <h1 className="text-3xl font-bold col-span-12 mb-3">App Components</h1>
        {/*         <div className=" bg-slate-50 shadow-lg shadow-slate-300 rounded-xl p-6 col-span-9">
          libre 01
        </div>
        <div className=" bg-slate-50 shadow-lg shadow-slate-300 rounded-xl p-6 col-span-3">
          libre 02
        </div> */}
        <div className=" bg-slate-50 shadow-lg shadow-slate-300 rounded-xl p-6 col-span-12 lg:col-span-6 xl:col-span-4 flex">
          <div className="w-full flex flex-col gap-9 justify-between w-full">
            <div className="flex flex-row gap-3">
              <h3 className="text-2xl font-bold">Notifications</h3>
              <a
                href="http://"
                className="flex flex-row gap-1 items-center ml-auto hover:text-blue-600"
              >
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
                Clear
              </a>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 justify-between px-6 py-3 border border-slate-200 rounded-lg">
                <div className="flex flex-col">
                  <div className="flex flex-row gap-3">
                    <h4 className="text-xl font-bold">Upcoming event</h4>
                    <a href="http://" className="ml-auto hover:text-blue-600">
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
                          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                    </a>
                  </div>
                  <small className="text-slate-400">
                    Landing desing meeting | Time: 120 min
                  </small>
                </div>
                <div className="flex flex-row gap-6 items-center">
                  <span className="flex flex-row items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6 text-slate-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                    <h5 className="font-bold">Sat, 10 May</h5>
                  </span>
                  <span className="flex flex-row items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6 text-slate-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>

                    <h5 className="font-bold">11 AM - 11:45 AM</h5>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-between px-6 py-3 border border-slate-200 rounded-lg">
                <div className="flex flex-col">
                  <div className="flex flex-row gap-3">
                    <h4 className="text-xl font-bold">
                      Message | Product design
                    </h4>
                    <a href="http://" className="ml-auto hover:text-blue-600">
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
                          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                    </a>
                  </div>
                  <small className="text-slate-400">
                    Landing desing meeting | Time: 120 min
                  </small>
                </div>
                <div className="flex flex-row gap-6 items-center">
                  <span className="flex flex-row items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6 text-slate-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                    <h5 className="font-bold">Sat, 15 May</h5>
                  </span>
                  <span className="flex flex-row items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6 text-slate-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>

                    <h5 className="font-bold">7:15 AM - 9:45 AM</h5>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-slate-50 shadow-lg shadow-slate-300 rounded-xl p-6 col-span-12 lg:col-span-6 xl:col-span-4 flex">
          <div className="w-full flex flex-col gap-9 justify-between">
            <div className="flex flex-row gap-3">
              <h3 className="text-2xl font-bold">Assignments</h3>
              <a
                href="http://"
                className="flex flex-row gap-1 items-center ml-auto hover:text-blue-600"
              >
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
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
                Edit
              </a>
            </div>
            <div className="flex flex-col gap-4 justify-between px-6">
              <div className="flex flex-row gap-3">
                <h5 className="text-lg font-bold text-blue-400">
                  Medios design
                </h5>
                <h5 className="text-lg font-bold">Logo</h5>
                <a href="http://" className="ml-auto hover:text-blue-600">
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
                      d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </a>
              </div>
              <div className="flex flex-row items-center gap-6">
                <h4 className="text-xl font-bold">
                  Design a packaging concept for a new product
                </h4>
                <span className="text-red-500 bg-red-100 rounded-lg px-4 py-1">
                  High
                </span>
              </div>
              <div className="flex flex-row gap-6 justify-between items-center">
                <a
                  href="http://"
                  className="text-emerald-50 bg-emerald-400 rounded-lg px-4 py-1"
                >
                  Package design
                </a>
                <small className="flex flex-row items-center gap-2">
                  <span>Edson Fiestas</span>
                  <Image
                    src="/images/faceProfile.png"
                    alt="Descripción de la imagen"
                    width={48}
                    height={48}
                    className="inline-block h-6 w-6 rounded-full"
                    priority={true}
                  />
                </small>
              </div>
            </div>
            <a
              href="http://"
              className="w-full flex flex-row items-center gap-3 bg-blue-100 border-2 border-dashed border-slate-300 rounded-lg py-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className=" text-blue-500 h-7 w-7 ml-auto"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="mr-auto font-bold">Add new assignment</span>
            </a>
          </div>
        </div>
        <div className=" bg-slate-50 shadow-lg shadow-slate-300 rounded-xl p-6 col-span-12 lg:col-span-6 xl:col-span-4 flex">
          <div className="w-full flex flex-col gap-6 justify-between">
            <div className="flex flex-row gap-3">
              <h3 className="text-2xl font-bold">May 2025</h3>
              <a
                href="http://"
                className="flex flex-row gap-1 items-center ml-auto hover:text-blue-600"
              >
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
                Clear
              </a>
            </div>
            <div className="flex flex-row gap-3 justify-between">
              <div className="flex flex-col items-center gap-1">
                <h3 className="text-slate-400">Man</h3>
                <div className="font-bold rounded-full w-7 h-7 flex">
                  <span className="m-auto">14</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <h3 className="text-slate-400">Twe</h3>
                <div className="font-bold rounded-full w-7 h-7 flex">
                  <span className="m-auto">15</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <h3 className="text-slate-400">Wea</h3>
                <div className="font-bold rounded-full w-7 h-7 flex">
                  <span className="m-auto">16</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <h3 className="text-slate-400">Th</h3>
                <div className="font-bold rounded-full w-7 h-7 flex">
                  <span className="m-auto">17</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <h3 className="text-slate-400">Fr</h3>
                <div className="font-bold rounded-full w-7 h-7 bg-blue-600 text-blue-100 flex">
                  <span className="m-auto">18</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <h3 className="text-slate-400">Sat</h3>
                <div className="font-bold rounded-full w-7 h-7 flex">
                  <span className="m-auto">19</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <h3 className="text-slate-400">Sun</h3>
                <div className="font-bold rounded-full w-7 h-7 flex">
                  <span className="m-auto">20</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-between">
              <div className="flex flex-row items-center gap-2">
                <h5 className="font-bold flex-none">04:30 - 05:00 PM</h5>
                <div className="grow font-bold line-clamp-1 text-slate-300">
                  ----------------------------------------------------------------------------------
                </div>
              </div>
              <div className="flex flex-row items-center gap-6">
                <figure className="bg-slate-200 rounded-lg p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                    />
                  </svg>
                </figure>
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-bold">Upcoming event</h4>
                  <small className="text-slate-400">
                    12:00 - 12:30 UX/UI design
                  </small>
                </div>
                <a href="http://" className="ml-auto hover:text-blue-600">
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
                      d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-between">
              <div className="flex flex-row items-center gap-2">
                <h5 className="font-bold flex-none">04:30 - 05:00 PM</h5>
                <div className="grow font-bold line-clamp-1 text-slate-300">
                  ----------------------------------------------------------------------------------
                </div>
              </div>
              <div className="flex flex-row items-center gap-6">
                <figure className="bg-slate-200 rounded-lg p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                    />
                  </svg>
                </figure>
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-bold">Upcoming event</h4>
                  <small className="text-slate-400">
                    12:00 - 12:30 UX/UI design
                  </small>
                </div>
                <a href="http://" className="ml-auto hover:text-blue-600">
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
                      d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-slate-50 shadow-lg shadow-slate-300 rounded-xl p-6 col-span-12 lg:col-span-6 flex flex-col justify-between gap-6">
          <div className="w-full flex flex-row gap-6 justify-between items-center">
            <div className="flex flex-row gap-3 items-center">
              <h3 className="text-2xl font-bold">Today tasks</h3>
              <div className="flex -space-x-2 overflow-hidden">
                <Image
                  src="/images/faceProfile.png"
                  alt="Descripción de la imagen"
                  width={48}
                  height={48}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  priority={true}
                />
                <Image
                  src="/images/faceProfile.png"
                  alt="Descripción de la imagen"
                  width={48}
                  height={48}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  priority={true}
                />
                <Image
                  src="/images/faceProfile.png"
                  alt="Descripción de la imagen"
                  width={48}
                  height={48}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  priority={true}
                />
                <Image
                  src="/images/faceProfile.png"
                  alt="Descripción de la imagen"
                  width={48}
                  height={48}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  priority={true}
                />
                <Image
                  src="/images/faceProfile.png"
                  alt="Descripción de la imagen"
                  width={48}
                  height={48}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  priority={true}
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <a
                href="http://"
                className="flex flex-row gap-1 items-center hover:text-blue-600"
              >
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
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
                Edit
              </a>
              <a
                href="http://"
                className="flex flex-row gap-1 items-center hover:text-blue-600"
              >
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
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                Share
              </a>
            </div>
          </div>
          <div className="w-full overflow-x-auto">
            <table className="table-fixed">
              <tbody>
                <tr>
                  <td className="pb-5 pr-5">
                    <h3 className="text-lg font-bold">Conduct research</h3>
                    <small className="flex flex-row text-slate-400 gap-1 items-center">
                      4 May 09:20 AM
                    </small>
                  </td>
                  <td className="pb-5 px-5">
                    <small className="flex flex-row text-slate-400 gap-1 items-center">
                      Duration
                    </small>
                    <h3 className="text-lg font-bold">02 h 45 m</h3>
                  </td>
                  <td className="pb-5 px-6">
                    <div className="flex flex-row gap-2 items-center">
                      <h3 className="text-lg font-bold">10%</h3>
                      <div className="block bg-slate-300 h-1 rounded-full w-24">
                        <div className="block bg-blue-600 h-1 rounded-full w-[10%]"></div>
                      </div>
                    </div>
                  </td>
                  <td className="pb-5 pl-5">
                    <div className="flex flex-row gap-1 items-center">
                      <figure className="text-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                          />
                        </svg>
                      </figure>
                      <strong>4</strong>
                      <figure className="ml-2 text-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                          />
                        </svg>
                      </figure>
                      <strong>16</strong>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-5 pr-5">
                    <h3 className="text-lg font-bold">Schedule a meeting</h3>
                    <small className="flex flex-row text-slate-400 gap-1 items-center">
                      4 May 09:20 AM
                    </small>
                  </td>
                  <td className="p-5">
                    <small className="flex flex-row text-slate-400 gap-1 items-center">
                      Duration
                    </small>
                    <h3 className="text-lg font-bold">02 h 45 m</h3>
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex flex-row gap-2 items-center">
                      <h3 className="text-lg font-bold">90%</h3>
                      <div className="block bg-slate-300 h-1 rounded-full w-24">
                        <div className="block bg-blue-600 h-1 rounded-full w-[90%]"></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 pl-5">
                    <div className="flex flex-row gap-1 items-center">
                      <figure className="text-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                          />
                        </svg>
                      </figure>
                      <strong>4</strong>
                      <figure className="ml-2 text-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                          />
                        </svg>
                      </figure>
                      <strong>16</strong>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="pt-5 pr-5">
                    <h3 className="text-lg font-bold">Send out reminders</h3>
                    <small className="flex flex-row text-slate-400 gap-1 items-center">
                      4 May 09:20 AM
                    </small>
                  </td>
                  <td className="pt-5 px-5">
                    <small className="flex flex-row text-slate-400 gap-1 items-center">
                      Duration
                    </small>
                    <h3 className="text-lg font-bold">02 h 45 m</h3>
                  </td>
                  <td className="pt-5 px-6">
                    <div className="flex flex-row gap-2 items-center">
                      <h3 className="text-lg font-bold">50%</h3>
                      <div className="block bg-slate-300 h-1 rounded-full w-24">
                        <div className="block bg-blue-600 h-1 rounded-full w-[50%]"></div>
                      </div>
                    </div>
                  </td>
                  <td className="pt-5 pl-5">
                    <div className="flex flex-row gap-1 items-center">
                      <figure className="text-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                          />
                        </svg>
                      </figure>
                      <strong>4</strong>
                      <figure className="ml-2 text-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                          />
                        </svg>
                      </figure>
                      <strong>16</strong>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=" bg-blue-600 text-blue-100 shadow-lg shadow-slate-300 rounded-xl p-6 col-span-12 lg:col-span-6 xl:col-span-2 flex flex-col gap-4">
          <figure className="mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-16 w-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>
          </figure>
          <h3 className="text-2xl font-bold">Go premium!</h3>
          <p className="line-clamp-3 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
          </p>
          <a
            href="http://"
            className="bg-slate-900 text-slate-200 h-10 rounded-lg flex items-center mx-auto px-4"
          >
            Ser primium
          </a>
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-4 grid grid-cols-2 gap-6">
          <div className=" bg-slate-50 shadow-lg shadow-slate-300 rounded-xl p-6 flex flex-col justify-between gap-6">
            <div className="flex flex-row gap-2 items-center mx-auto">
              <div className="grid grid-cols-1 grid-rows-1">
                <div className="col-start-1 row-start-1 size-10 rounded-full border-4 border-gray-300"></div>
                <div className="col-start-1 row-start-1 size-10 rounded-full border-4 border-green-500 mask-conic-from-50% mask-conic-to-50%"></div>
              </div>
              <div>
                <small className="text-green-600 uppercase">
                  Entrenamiento
                </small>
                <h3 className="text-lg font-bold">Marketing</h3>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <p className="line-clamp-2 leading-5 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad
              </p>
            </div>
          </div>
          <div className=" bg-slate-50 shadow-lg shadow-slate-300 rounded-xl p-6 flex flex-col justify-between gap-6">
            <div className="flex flex-row gap-2 items-center mx-auto">
              <div className="grid grid-cols-1 grid-rows-1">
                <div className="col-start-1 row-start-1 size-10 rounded-full border-4 border-gray-300"></div>
                <div className="col-start-1 row-start-1 size-10 rounded-full border-4 border-red-500 mask-conic-from-75% mask-conic-to-75%"></div>
              </div>
              <div>
                <small className="text-red-600 uppercase">Tipografia</small>
                <h3 className="text-lg font-bold">Tipografía</h3>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <p className="line-clamp-2 leading-5 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad
              </p>
              <a
                href="http://"
                className="bg-blue-600 text-blue-100 h-7 text-sm rounded-lg flex items-center px-2"
              >
                Check
              </a>
            </div>
          </div>
          <div className=" bg-slate-50 shadow-lg shadow-slate-300 rounded-xl p-6 col-span-2 flex flex-col justify-between gap-6">
            <div className="flex flex-row justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold">Board meeting!</h3>
                <div className="flex flex-row text-slate-400 gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.99 2.243a4.49 4.49 0 0 0-3.398 1.55 4.49 4.49 0 0 0-3.497 1.306 4.491 4.491 0 0 0-1.307 3.498 4.491 4.491 0 0 0-1.548 3.397c0 1.357.6 2.573 1.548 3.397a4.491 4.491 0 0 0 1.307 3.498 4.49 4.49 0 0 0 3.498 1.307 4.49 4.49 0 0 0 3.397 1.549 4.49 4.49 0 0 0 3.397-1.549 4.49 4.49 0 0 0 3.497-1.307 4.491 4.491 0 0 0 1.306-3.497 4.491 4.491 0 0 0 1.55-3.398c0-1.357-.601-2.573-1.549-3.397a4.491 4.491 0 0 0-1.307-3.498 4.49 4.49 0 0 0-3.498-1.307 4.49 4.49 0 0 0-3.396-1.549Zm3.53 7.28a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6Zm-5.78-.905a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm4.5 4.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <small>Fecha de publicación</small>
                </div>
              </div>
              <a
                href="http://"
                className="flex flex-row gap-1 items-center hover:text-blue-600"
              >
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
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
                Edit
              </a>
            </div>
            <div className="flex flex-row items-center gap-3">
              <p className="line-clamp-2 leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad
              </p>
              <a
                href="http://"
                className="bg-slate-300 text-slate-900 h-10 rounded-lg flex items-center px-4"
              >
                Buscando
              </a>
              <a
                href="http://"
                className="bg-blue-600 text-blue-100 h-10 rounded-lg flex items-center px-4"
              >
                Retraso
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LibreContent;
