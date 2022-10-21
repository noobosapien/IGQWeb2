import React from 'react';

export default function FAQ() {
  return (
    <>
      <section>
        <div className="container mx-auto ">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="max-w-lg px-6 mx-auto text-center text-grayishBlue">
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-6 mb-32">
          <div className="max-w-2xl m-8 mx-auto overflow-hidden">
            <div className="py-1 border-b outline-none group" tabIndex={1}>
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                <div className="transition duration-500 ease group-hover:text-red-500">
                  What is Bookmark?
                </div>

                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={12}
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justify text-gray-400">
                  Bookmark FAQ 1
                </p>
              </div>
            </div>

            <div className="py-1 border-b outline-none group" tabIndex={2}>
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                <div className="transition duration-500 ease group-hover:text-red-500">
                  How can I request a new browser?
                </div>

                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={12}
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justify text-gray-400">
                  Bookmark FAQ 2
                </p>
              </div>
            </div>

            <div className="py-1 border-b outline-none group" tabIndex={3}>
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                <div className="transition duration-500 ease group-hover:text-red-500">
                  Is there a mobile app?
                </div>

                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={12}
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justify text-gray-400">
                  Bookmark FAQ 3
                </p>
              </div>
            </div>

            <div className="py-1 border-b outline-none group" tabIndex={4}>
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                <div className="transition duration-500 ease group-hover:text-red-500">
                  What about other chromium browsers?
                </div>

                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={12}
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justify text-gray-400">
                  Bookmark FAQ 4
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
