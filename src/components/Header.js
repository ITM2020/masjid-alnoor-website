import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrollPos, setScrollPos] = useState(0);
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  }

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
    <nav className={`${scrollPos || showNav ? 'bg-white' : 'bg-transparent'} container mx-auto fixed h-16 flex items-center justify-center z-10 p-1`}>
      <div className="container flex flex-wrap items-center justify-between mx-auto px-3">
        <Link href="/" className="flex items-center">
          <Image src="/img/logo.png" className="h-10 w-10 mr-3" alt="Mosque Al-Noor Logo" width="32" height="32" />
          <span className={`${scrollPos || showNav ? 'text-green-900' : 'text-white'} self-center text-2xl font-title whitespace-nowrap`}>Masjid Al-Noor</span>
        </Link>

        <button type="button" className={`${scrollPos || showNav ? 'text-gray' : 'text-white'} inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden`} onClick={toggleNav}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
          </svg>
        </button>

        <div className={`${showNav ? '' : 'hidden'} absolute left-0 right-0 top-11 md:inline md:top-0 md:static md:h-fit md:bg-transparent`}>
          <ul className="flex flex-col p-4 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:m-0 md:text-md md:font-medium md:border-0 md:bg-transparent md:p-2">
            <li>
              <Link href="/" className={`font-body block py-2 pl-3 text-gray-700 rounded hover:bg-gray-100 md:p-0 md:${scrollPos ? 'text-gray-700': 'text-white'}`}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={`font-body block py-2 pl-3 text-gray-700 rounded hover:bg-gray-100 md:p-0 md:${scrollPos ? 'text-gray-700': 'text-white'}`}>About</Link>
            </li>
            <li>
              <Link href="/services" className={`font-body block py-2 pl-3 text-gray-700 rounded hover:bg-gray-100 md:p-0 md:${scrollPos ? 'text-gray-700': 'text-white'}`}>Services</Link>
            </li>
            <li>
              <Link href="/announcements" className={`font-body block py-2 pl-3 text-gray-700 rounded hover:bg-gray-100 md:p-0 md:${scrollPos ? 'text-gray-700': 'text-white'}`}>Announcements</Link>
            </li>
            <li>
              <Link href="events" className={`font-body block py-2 pl-3 text-gray-700 rounded hover:bg-gray-100 md:p-0 md:${scrollPos ? 'text-gray-700': 'text-white'}`}>Events</Link>
            </li>
            <li>
              <Link href="contact" className={`font-body block py-2 pl-3 text-gray-700 rounded hover:bg-gray-100 md:p-0 md:${scrollPos ? 'text-gray-700': 'text-white'}`}>Contact</Link>
            </li>
          </ul>          
        </div>
      </div>
    </nav>
  )
}