import Image from "next/image";

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${scrollPos ? 'transition bg-white' : 'transition bg-transparent'} container mx-auto fixed h-11 flex items-center justify-center z-10`}>
      <div className="container flex flex-wrap items-center justify-between mx-auto px-3">
        <a href="" className="flex items-center">
          <Image src="/logo.png" className="h-6 mr-3" alt="Mosque Al-Noor Logo" width="32" height="32" />
          <span className={`${scrollPos ? 'text-green-900' : 'text-white'} self-center text-xl font-semibold whitespace-nowrap`}>Masjid Al-Noor</span>
        </a>

        <button type="button" className={`${scrollPos ? 'text-gray' : 'text-white'} inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden`}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
          </svg>
        </button>

        <div className="hidden absolute top-12 w-full md:block md:w-auto">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <a href="" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Home</a>
            </li>
            <li>
              <a href="" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">About</a>
            </li>
            <li>
              <a href="" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Services</a>
            </li>
            <li>
              <a href="" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Announcements</a>
            </li>
            <li>
              <a href="" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Events</a>
            </li>
            <li>
              <a href="" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</a>
            </li>
          </ul>          
        </div>
      </div>
    </nav>
  )
}