'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [registered, setRegistered] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true); 

  const handleToggle = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = (): void => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = '/'; 
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = sessionStorage.getItem('user');
      const loginStatus = sessionStorage.getItem('isLoggedIn');
      setRegistered(!!user);
      setLoggedIn(loginStatus === 'true');
      setLoading(false);
    }
  }, []);

  return (
    <nav className={styles.navbar}>
      <Link href="/" className="all-[unset]">
        <Image src="/logo.png" width={50} height={50} alt="Logo of the Company" />
      </Link>

      {/* Desktop Menu */}
      <ul className={styles.desktopMenu}>
        <li><Link href="/" className={styles.menuLink}>Home</Link></li>
        <li><Link href="/projects" className={styles.menuLink}>Projects</Link></li>
        <li><Link href="/about" className={styles.menuLink}>About</Link></li>

        {/* Dropdown */}
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
          {!loading && (
            loggedIn ? (
              <>
                <Link href="/profile" className={styles.menuLink}>Profile</Link>
                <button onClick={handleLogout} className="text-white underline">Log Out</button>
              </>
            ) : registered ? (
              <Link href="/login" className={styles.menuLink}>Log In</Link>
            ) : (
              <Link href="/register" className={styles.menuLink}>Sign In</Link>
            )
          )}
        </li>
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
          <li><Link href="/" className={styles.menuLink} onClick={handleLinkClick}>Home</Link></li>
          <li><Link href="/projects" className={styles.menuLink} onClick={handleLinkClick}>Projects</Link></li>
          <li><Link href="/about" className={styles.menuLink} onClick={handleLinkClick}>About</Link></li>
          <li><Link href="/calculators#building-cost" className={styles.menuLink} onClick={handleLinkClick}>Building Cost Calculator</Link></li>
          <li><Link href="/calculators#loan" className={styles.menuLink} onClick={handleLinkClick}>Loan Calculator</Link></li>
          <li><Link href="/contact" className={styles.menuLink} onClick={handleLinkClick}>Contact</Link></li>
          <li>
            {!loading && (
              loggedIn ? (
                <>
                  <Link href="/profile" className={styles.menuLink} onClick={handleLinkClick}>Profile</Link>
                  <button onClick={() => { handleLogout(); handleLinkClick(); }} className="text-white underline">Log Out</button>
                </>
              ) : registered ? (
                <Link href="/login" className={styles.menuLink} onClick={handleLinkClick}>Log In</Link>
              ) : (
                <Link href="/register" className={styles.menuLink} onClick={handleLinkClick}>Sign In</Link>
              )
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}






