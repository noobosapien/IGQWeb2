import { Head } from 'next/document';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Logo1 from '../public/logo-bookmark.svg';
import Logo2 from '../public/logo-bookmark-footer.svg';
import FB from '../public/icon-facebook.svg';
import Twitter from '../public/icon-twitter.svg';

export default function Layout({ children }) {
  const [open, setOpen] = useState(true);
  const [openClass, setOpenClass] = useState({});
  const [hamTop, setHamTop] = useState({});
  const [hamMiddle, setHamMiddle] = useState({});
  const [hamBot, setHamBot] = useState({});

  useEffect(() => {
    if (open) {
      setOpenClass({
        transform: 'rotate(90deg)',
        transform: 'translateY(0px)',
      });

      setHamTop({
        transform: 'rotate(45deg) translateY(6px) translateX(6px)',
        background: '#fff',
      });

      setHamMiddle({
        display: 'none',
      });

      setHamBot({
        transform: 'rotate(-45deg) translateY(6px) translateX(-6px)',
        background: '#fff',
      });
    } else {
      setOpenClass({});
      setHamTop({});
      setHamMiddle({});
      setHamBot({});
    }
  }, [open]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="container relative mx-auto p-6">
        <div className="flex items-center justify-between space-x-20 my-6">
          <div className="z-30">
            <Image src={open ? Logo2 : Logo1} layout="intrinsic" alt="logo" />
          </div>

          <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
            <a href="#features" className="tracking-widest hover:text-softRed">
              Features
            </a>
          </div>
          <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
            <a href="#download" className="tracking-widest hover:text-softRed">
              Download
            </a>
          </div>
          <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
            <a href="#faq" className="tracking-widest hover:text-softRed">
              FAQ
            </a>

            <a className="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white">
              Login
            </a>
          </div>

          <button
            className="z-30 block md:hidden focus:outline-none"
            style={{
              cursor: 'pointer',
              width: '24px',
              height: '24px',
              transition: 'all 0.25s',
              position: 'relative',
            }}
            onClick={handleClick}
          >
            <span
              style={{
                content: '',
                position: 'absolute',
                width: '24px',
                height: '3px',
                top: 0,
                left: 0,
                background: '#000',
                transform: 'rotate(0)',
                transition: 'all 0.5s',
                ...openClass,
                ...hamTop,
              }}
            ></span>
            <span
              style={{
                content: '',
                position: 'absolute',
                width: '24px',
                height: '3px',
                top: 0,
                left: 0,
                background: '#000',
                transform: 'rotate(0)',
                transition: 'all 0.5s',
                transform: 'translateY(7px)',
                ...openClass,
                ...hamMiddle,
              }}
            ></span>
            <span
              style={{
                content: '',
                position: 'absolute',
                width: '24px',
                height: '3px',
                top: 0,
                left: 0,
                background: '#000',
                transform: 'rotate(0)',
                transition: 'all 0.5s',
                transform: 'translateY(14px)',
                background: '#000',
                ...openClass,
                ...hamBot,
              }}
            ></span>
          </button>
        </div>

        <div
          className={`fixed inset-0 z-20 flex flex-col  
        items-center sef-end w-full ${!open ? 'hidden' : ''}
        h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest 
        text-white uppercase divide-y divide-gray-500 opacity-90 
        bg-veryDarkBlue`}
        >
          <div className="w-full py-3 text-center">
            <a className="block hover:text-softRed" href="#">
              Features
            </a>
          </div>

          <div className="w-full py-3 text-center">
            <a className="block hover:text-softRed" href="#">
              Download
            </a>
          </div>

          <div className="w-full py-3 text-center">
            <a className="block hover:text-softRed" href="#">
              FAQ
            </a>
          </div>

          <div className="w-full py-3 text-center">
            <a className="block hover:text-softRed" href="#">
              Login
            </a>
          </div>
        </div>
      </nav>

      {children}

      <footer className="py-16 bg-veryDarkBlue">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
            <Image alt="footer logo" layout="intrinsic" src={Logo2} />
            <a href="/" className="uppercase hover:text-softRed">
              Features
            </a>
            <a href="/" className="uppercase hover:text-softRed">
              Download
            </a>
            <a href="/" className="uppercase hover:text-softRed">
              FAQ
            </a>
          </div>

          <div className="flex space-x-10">
            <a href="#">
              <Image
                layout="intrinsic"
                className="h-6 ficon"
                alt="facebook"
                src={FB}
              />
            </a>

            <a href="#">
              <Image
                layout="intrinsic"
                className="h-6 ficon"
                alt="twitter"
                src={Twitter}
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
