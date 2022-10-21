import Image from 'next/image';
import Illustration from '../public/illustration-hero.svg';

export default function Hero() {
  return (
    <>
      <section>
        <div className="flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
          <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
            <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
              Simple Bookmark Manager
            </h1>

            <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
              A clean and simple interface to organnize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try for
              free.
            </p>

            <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
              <a
                href="#"
                className="p-4 text-sm font-semibold text-white bg-softBlue border-2 rounded shadow-md border-softBlue md:text-base hover:bg-white hover:text-softBlue"
              >
                Get it on Chrome
              </a>

              <a
                href="#"
                className="p-4 text-sm font-semibold text-slate-900 bg-gray-300 border-2 rounded shadow-md border-gray-300 md:text-base hover:bg-white hover:text-gray-600"
              >
                Get it on Firefox
              </a>
            </div>
          </div>

          <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
            <div className="bg-hero"></div>

            <Image
              className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
              src={Illustration}
              width={578}
              height={428}
            />
          </div>
        </div>
      </section>
    </>
  );
}
