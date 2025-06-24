'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = (): void => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <Image src="/logo.png" width={50} height={50} alt="Logo of the Company" />

      {/* Desktop Menu */}
      <ul className={styles.desktopMenu}>
        <li><Link className={styles.menuLink} href="/">Home</Link></li>
        <li><Link className={styles.menuLink} href="/projects">Projects</Link></li>
        <li><Link className={styles.menuLink} href="/about">About</Link></li>
        <li><Link className={styles.menuLink} href="/calculators">Calculators</Link></li>
        <li><Link className={styles.menuLink} href="/contact">Contact</Link></li>
        <li><Link className={styles.menuLink} href="/profile">Profile</Link></li>
      </ul>

      {/* Mobile Burger Icon */}
      <button
        className={styles.burgerIcon}
        onClick={handleToggle}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className={styles.mobileMenu}>
          <li><Link className={styles.menuLink} href="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link className={styles.menuLink} href="/projects" onClick={handleLinkClick}>Projects</Link></li>
          <li><Link className={styles.menuLink} href="/about" onClick={handleLinkClick}>About</Link></li>
          <li><Link className={styles.menuLink} href="/calculators" onClick={handleLinkClick}>Calculators</Link></li>
          <li><Link className={styles.menuLink} href="/contact" onClick={handleLinkClick}>Contact</Link></li>
          <li><Link className={styles.menuLink} href="/profile" onClick={handleLinkClick}>Profile</Link></li>
        </ul>
      )}
    </nav>
  );
}


