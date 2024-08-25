import styles from "@/styles/navbar.module.css";
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.header} p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <div className="flex items-center">
            <img src="/assets/images/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="text-white text-xl font-semibold">XelaRelam</span>
          </div>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/">
            <p className="text-white hover:text-gray-300">Home</p>
          </Link>
          <Link href="/about">
            <p className="text-white hover:text-gray-300">About</p>
          </Link>
          <Link href="/contributors">
            <p className="text-white hover:text-gray-300">Contributors</p>
          </Link>
          <Link href="https://discord.gg/FCGn8B58jh"  target="_blank" rel="noopener noreferrer">
            <p className="text-white hover:text-gray-300">Support</p>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none" title='button'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}/>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/">
            <p className="block text-white hover:text-gray-300 mt-2">Home</p>
          </Link>
          <Link href="/about">
            <p className="block text-white hover:text-gray-300 mt-2">About</p>
          </Link>
          <Link href="/contributors">
            <p className="block text-white hover:text-gray-300 mt-2">Contributors</p>
          </Link>
          <Link href="https://discord.gg/FCGn8B58jh" about="_blank" rel="noopener noreferrer">
            <p className="block text-white hover:text-gray-300 mt-2">Support</p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
