import Image from 'next/image';
import React, { createRef, useEffect } from 'react';
import Tab1 from '../public/illustration-features-tab-1.svg';
import Tab2 from '../public/illustration-features-tab-2.svg';
import Tab3 from '../public/illustration-features-tab-3.svg';

export default function Features() {
  const Tab1Ref = createRef();
  const Tab2Ref = createRef();
  const Tab3Ref = createRef();

  const Panel1Ref = createRef();
  const Panel2Ref = createRef();
  const Panel3Ref = createRef();

  const removeTabClasses = (tabRef) => {
    tabRef?.current?.classList?.remove(
      'border-softRed',
      'border-b-4',
      'md:border-b-0'
    );
  };

  const hidePanel = (panelRef) => {
    panelRef?.current?.classList?.add('hidden');
  };

  const showPanel = (tab) => {
    switch (tab) {
      case 1: {
        Panel1Ref?.current?.classList?.remove('hidden');
        break;
      }

      case 2: {
        Panel2Ref?.current?.classList?.remove('hidden');
        break;
      }

      case 3: {
        Panel3Ref?.current?.classList?.remove('hidden');
        break;
      }

      default: {
        break;
      }
    }
  };

  const onTabClick = (tab) => (event) => {
    removeTabClasses(Tab1Ref);
    removeTabClasses(Tab2Ref);
    removeTabClasses(Tab3Ref);

    hidePanel(Panel1Ref);
    hidePanel(Panel2Ref);
    hidePanel(Panel3Ref);

    event.target.classList.add('border-softRed', 'border-b-4');

    showPanel(tab);
  };

  useEffect(() => {
    Tab1Ref.current.addEventListener('click', onTabClick(1));
    Tab2Ref.current.addEventListener('click', onTabClick(2));
    Tab3Ref.current.addEventListener('click', onTabClick(3));
  }, [Tab1Ref, Tab2Ref, Tab3Ref]);

  return (
    <>
      <section>
        <div className="container mx-auto mt-16 px-6 md:mx-0">
          <h2 className="mb-6 text-4xl font-semibold text-center">Features</h2>

          <p className="max-w-md mx-auto text-center text-grayishBlue">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </section>

      <section>
        <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
          <div className="bg-tabs"></div>

          <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space:-x-10 md:flex-row">
            <div
              className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
              data-target="panel-1"
            >
              <div
                className="py-5 border-b-4 border-softRed"
                data-target="panel-1"
                ref={Tab1Ref}
              >
                Simple Bookmarking
              </div>
            </div>

            <div
              className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
              data-target="panel-2"
            >
              <div className="py-5" data-target="panel-2" ref={Tab2Ref}>
                Speedy Searching
              </div>
            </div>

            <div
              className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
              data-target="panel-3"
            >
              <div className="py-5" data-target="panel-3" ref={Tab3Ref}>
                Easy sharing
              </div>
            </div>
          </div>

          <section className="container mx-auto">
            <div
              className="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1"
              ref={Panel1Ref}
            >
              <div className="flex justify-center md:w-1/2">
                <Image
                  src={Tab1}
                  width={536}
                  height={346}
                  className="relativev z-10"
                />
              </div>

              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Bookmark in one click
                </h3>

                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>

                <div className="mx-auto md:mx-0">
                  <a
                    href="#"
                    className="px-6 py-3 text-sm font-semibold text-white bg-softBlue border-2 rounded shadow-md border-softBlue md:text-base hover:bg-white hover:text-softBlue"
                  >
                    More info
                  </a>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-2"
              ref={Panel2Ref}
            >
              <div className="flex justify-center md:w-1/2">
                <Image
                  src={Tab2}
                  width={478}
                  height={418}
                  className="relativev z-10"
                />
              </div>

              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Intelligent search
                </h3>

                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  Our powerful search feature will help yu find saved sites in
                  no time at all. No need trawl through all of your bookmarks.
                </p>

                <div className="mx-auto md:mx-0">
                  <a
                    href="#"
                    className="px-6 py-3 text-sm font-semibold text-white bg-softBlue border-2 rounded shadow-md border-softBlue md:text-base hover:bg-white hover:text-softBlue"
                  >
                    More info
                  </a>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-3"
              ref={Panel3Ref}
            >
              <div className="flex justify-center md:w-1/2">
                <Image
                  src={Tab3}
                  width={440}
                  height={380}
                  className="relative z-10"
                />
              </div>

              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Share your bookmarks
                </h3>

                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  Easily share your bookmarks and collections with others.
                  Create a shareable link that you can send at the click of a
                  button.
                </p>

                <div className="mx-auto md:mx-0">
                  <a
                    href="#"
                    className="px-6 py-3 text-sm font-semibold text-white bg-softBlue border-2 rounded shadow-md border-softBlue md:text-base hover:bg-white hover:text-softBlue"
                  >
                    More info
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
