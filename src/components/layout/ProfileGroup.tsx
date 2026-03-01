import Link from "next/link";

export const ProfileGroup = () => {
  return (
    <aside className="w-full bg-gray-300 border-2 border-gray-300 rounded-xl overflow-hidden">
      <div className="flex flex-col">
        <div className=" overflow-hidden">
          <img
            src="/images/faceProfile.png"
            alt="Edson"
            className="w-full h-auto"
          />
        </div>
        <div className="bg-stone-200 rounded-xl -mt-4">
          <div className="flex flex-row p-4 gap-3 items-center">
            <div className="grow">
              <strong>
                UX/UI <small>(Graphic Design)</small>
              </strong>
              <br />
              <small className="text-gray-500">20 years of experience</small>
            </div>
            <div className="flex-none">
              <Link
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-white hover:bg-black hover:text-white transition-colors rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex-none">
              <Link
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-lime-400 hover:bg-black hover:text-lime-400 transition-colors rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <Link
            href="#"
            className="bg-white hover:bg-gray-950 hover:text-white transition-colors rounded-lg flex flex-row p-4 gap-3 items-center mb-3"
          >
            <strong className="grow">Basic Information</strong>
            <div className="flex-none">
              <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full border border-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block w-5 h-5 text-gray-950"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>
          </Link>
          <Link
            href="#"
            className="bg-white hover:bg-gray-950 hover:text-white transition-colors rounded-lg flex flex-row p-4 gap-3 items-center mb-3"
          >
            <strong className="grow">Job Match</strong>
            <div className="flex-none">
              <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full border border-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block w-5 h-5 text-gray-950"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
};
