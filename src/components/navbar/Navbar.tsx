'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = (): void => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white w-full h-[100px] px-6 md:px-10 flex justify-between items-center relative z-50">
        <Image src="/logo.png" width={50} height={50} alt="Logo of the Company" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-[30px]">
        <li><Link className="tracking-widest font-normal" href="/">Home</Link></li>
        <li><Link className="tracking-widest font-normal" href="/projects">Projects</Link></li>
        <li><Link className="tracking-widest font-normal" href="/about">About</Link></li>
        <li><Link className="tracking-widest font-normal" href="/calculator">Calculator</Link></li>
        <li><Link className="tracking-widest font-normal" href="/contact">Contact</Link></li>
        <li><Link className="tracking-widest font-normal" href="/profile">Profile</Link></li>
      </ul>

      {/* Mobile Burger Icon */}
      <button
        className="md:hidden text-black cursor-pointer"
        onClick={handleToggle}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-[100px] left-0 w-full bg-white flex flex-col items-center gap-6 py-6 shadow-md md:hidden">
          <li><Link className="tracking-widest font-normal" href="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link className="tracking-widest font-normal" href="/projects" onClick={handleLinkClick}>Projects</Link></li>
          <li><Link className="tracking-widest font-normal" href="/about" onClick={handleLinkClick}>About</Link></li>
          <li><Link className="tracking-widest font-normal" href="/calculator" onClick={handleLinkClick}>Calculator</Link></li>
          <li><Link className="tracking-widest font-normal" href="/contact" onClick={handleLinkClick}>Contact</Link></li>
          <li><Link className="tracking-widest font-normal" href="/profile" onClick={handleLinkClick}>Profile</Link></li>
        </ul>
      )}
    </nav>
  );
}

