'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import { useAuth } from '@/context/AuthContext';
import { logoutUser } from '@/utils/session';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loggedIn, registered, setUser, setLoggedIn, setRegistered } = useAuth();

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    setLoggedIn(false);
    setRegistered(false);
    window.location.href = '/';
  };

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
          {loggedIn ? (
            <>
              <span className={`${styles.menuLink} font-semibold`}>Welcome, {user?.name}</span>
              <button onClick={handleLogout} className="text-white underline ml-2">Log Out</button>
            </>
          ) : registered ? (
            <Link href="/signin" className={styles.menuLink}>Sign In</Link>
          ) : (
            <Link href="/signup" className={styles.menuLink}>Sign Up</Link>
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
            {loggedIn ? (
              <>
                <span className={`${styles.menuLink} font-semibold`}>Welcome, {user?.name}</span>
                <button onClick={() => { handleLogout(); handleLinkClick(); }} className="text-white underline ml-2">Log Out</button>
              </>
            ) : registered ? (
              <Link href="/signin" className={styles.menuLink} onClick={handleLinkClick}>Sign In</Link>
            ) : (
              <Link href="/signup" className={styles.menuLink} onClick={handleLinkClick}>Sign Up</Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}











