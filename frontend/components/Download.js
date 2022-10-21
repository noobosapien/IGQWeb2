import Image from 'next/image';
import React from 'react';
import LogoChrome from '../public/logo-chrome.svg';
import LogoFirefox from '../public/logo-firefox.svg';
import LogoOpera from '../public/logo-opera.svg';

export default function Download() {
  return (
    <>
      <section>
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Download the extension
          </h2>

          <p className="max-w-lg mx-auto text-center text-grayishBlue">
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div
          className="relative flex flex-col items-center 
        max-w-5xl mx-auto space-y-10 px-10 
        md:px-6 md:space-y-0 md:space-x-7 md:flex-row"
        >
          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
            <div className="flex justify-center">
              <Image src={LogoChrome} layout="intrinsic" />
            </div>

            <h5 className="pt-6 text-xl font-bold">Add to Chrome</h5>
            <p className="text-gray-400">Minimum version: 62</p>
            <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
              <a
                href="#"
                className="p-3 text-sm font-semibold text-white bg-softBlue border-2 rounded shadow-md border-softBlue md:text-base hover:bg-white hover:text-softBlue"
              >
                Add & Install Extension
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8">
              <div className="flex justify-center">
                <Image src={LogoFirefox} layout="intrinsic" />
              </div>

              <h5 className="pt-6 text-xl font-bold">Add to Firefox</h5>
              <p className="text-gray-400">Minimum version: 52</p>
              <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                <a
                  href="#"
                  className="p-3 text-sm font-semibold text-white bg-softBlue border-2 rounded shadow-md border-softBlue md:text-base hover:bg-white hover:text-softBlue"
                >
                  Add & Install Extension
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-16">
              <div className="flex justify-center">
                <Image src={LogoOpera} layout="intrinsic" />
              </div>

              <h5 className="pt-6 text-xl font-bold">Add to Opera</h5>
              <p className="text-gray-400">Minimum version: 42</p>
              <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                <a
                  href="#"
                  className="p-3 text-sm font-semibold text-white bg-softBlue border-2 rounded shadow-md border-softBlue md:text-base hover:bg-white hover:text-softBlue"
                >
                  Add & Install Extension
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
