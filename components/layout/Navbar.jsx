'use client';

import { useState, useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeContext } from '../../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/education', text: 'Education' },
  { to: '/experience', text: 'Experience' },
  { to: '/projects', text: 'Projects' },
  { to: '/articles', text: 'Articles' }
];

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="fixed w-full backdrop-blur-sm bg-white/70 dark:bg-gray-900/80 z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-semibold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              Tamim Ahasan
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                href={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.to)
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {link.text}
              </Link>
            ))}
            <button
              type="button"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                href={link.to}
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive(link.to)
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setDarkMode(!darkMode);
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300"
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
