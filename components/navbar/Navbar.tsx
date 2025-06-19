'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white w-full h-[100px] px-6 md:px-32 flex justify-between items-center relative z-50">
      <a href="#">
        <Image src="/logo.png" width={40} height={40} alt="Logo of the Company" />
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-[30px]">
        <li><Link className="tracking-widest font-normal" href="/">Home</Link></li>
        <li><Link className="tracking-widest font-normal" href="/projects">Projects</Link></li>
        <li><Link className="tracking-widest font-normal" href="/landing">Landing</Link></li>
        <li><Link className="tracking-widest font-normal" href="/about">About</Link></li>
      </ul>

      {/* Mobile Burger Icon */}
      <button
        className="md:hidden text-black cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-[100px] left-0 w-full bg-white flex flex-col items-center gap-6 py-6 shadow-md md:hidden">
            <li>
                <Link className="tracking-widest font-normal" href="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
                <Link className="tracking-widest font-normal" href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            </li>
            <li>
                <Link className="tracking-widest font-normal" href="/landing" onClick={() => setIsOpen(false)}>Landing</Link>
            </li>
            <li>
                <Link className="tracking-widest font-normal" href="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
        </ul>
      )}
    </nav>
  );
}
