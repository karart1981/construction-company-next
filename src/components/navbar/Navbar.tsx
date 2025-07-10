'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  const { data: session } = useSession();

  return (
    <nav className={styles.navbar}>
      <Link href="/" className="all-[unset]">
        <Image src="/logo.png" width={50} height={50} alt="Logo" />
      </Link>

      {/* Desktop Menu */}
      <ul className={styles.desktopMenu}>
        <li><Link href="/" className={styles.menuLink}>Home</Link></li>
        <li><Link href="/projects" className={styles.menuLink}>Projects</Link></li>
        <li><Link href="/about" className={styles.menuLink}>About</Link></li>
        <li className={styles.dropdownContainer}>
          <div className={`${styles.menuLink} ${styles.dropdownButton}`}>
            Calculators
            <ul className={styles.dropdownMenu}>
              <li><Link href="/calculators#building-cost" className={styles.menuLink}>Building Cost Calculator</Link></li>
              <li><Link href="/calculators#loan" className={styles.menuLink}>Loan Calculator</Link></li>
            </ul>
          </div>
        </li>
        <li><Link href="/contact" className={styles.menuLink}>Contact</Link></li>
        <li>
          {session ? (
            <div className="flex items-center gap-[30px]">
                <Link href="/dashboard" className={styles.menuLink}>Dashboard</Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                  className={`${styles.menuLink} ${styles.buttonLink}`}
                >
                  Logout
                </button>
              </div>
              ) : (
            <div className="flex items-center gap-[30px]">
                <Link href="/login" className={styles.menuLink}>Login</Link>
                <Link href="/register" className={styles.menuLink}>Register</Link>
            </div>
          )}
        </li>
      </ul>

      {/* Mobile Burger Icon */}
      <button className={styles.burgerIcon} onClick={handleToggle} aria-label="Toggle menu">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className={styles.mobileMenu}>
          <li><Link href="/" className={styles.menuLink} onClick={handleLinkClick}>Home</Link></li>
          <li><Link href="/projects" className={styles.menuLink} onClick={handleLinkClick}>Projects</Link></li>
          <li><Link href="/about" className={styles.menuLink} onClick={handleLinkClick}>About</Link></li>
          <li><Link href="/calculators#building-cost" className={styles.menuLink} onClick={handleLinkClick}>Building Cost Calculator</Link></li>
          <li><Link href="/calculators#loan" className={styles.menuLink} onClick={handleLinkClick}>Loan Calculator</Link></li>
          <li><Link href="/contact" className={styles.menuLink} onClick={handleLinkClick}>Contact</Link></li>
          <li>
            {session ? (
              <>
                <Link
                  href="/dashboard"
                  className={styles.menuLink}
                  onClick={handleLinkClick}
                >
                  Dashboard
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick();
                    signOut();
                  }}
                  className={`${styles.menuLink} ${styles.buttonLink}`}
                >
                  Logout
                </button>
              </>
              ) : (
              <>
                  <Link href="/login" className={styles.menuLink} onClick={handleLinkClick}>Login</Link>
                  <Link href="/register" className={styles.menuLink} onClick={handleLinkClick}>Register</Link>
              </>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}











