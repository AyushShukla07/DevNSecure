'use client';

import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';
  const isProjectsPage = location.pathname === '/projects';

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-devnsecure-black/95 backdrop-blur-sm border-b border-[#26262C]">
        <nav className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 md:gap-4 flex-shrink-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fdaf81e0a6f2c49548b7ed14d4b7cae10%2Fa08330a3516b467485251fab9ebea3fa?format=webp&width=800"
              alt="DevNSecure"
              className="w-12 h-12 md:w-14 md:h-14"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className={`btn-text ${!isServicesPage && !isProjectsPage ? 'text-devnsecure-teal' : ''}`}>
              Home
            </a>
            <a href="/#security" className="btn-text">
              Security
            </a>
            <a href="/#process" className="btn-text">
              Process
            </a>
            <a
              href="/services"
              className={`btn-text ${isServicesPage ? 'text-devnsecure-teal' : ''}`}
            >
              Services
            </a>
            <a
              href="/projects"
              className={`btn-text ${isProjectsPage ? 'text-devnsecure-teal' : ''}`}
            >
              Projects
            </a>
          </div>

          {/* Desktop CTA Button */}
          <button
            className="hidden md:block btn-teal py-2 px-5 text-sm flex-shrink-0"
            onClick={() => {
              document.dispatchEvent(new CustomEvent('open-consultation'));
            }}
          >
            Start Build
          </button>

          {/* Mobile: Start Build Button */}
          <button
            className="md:hidden btn-teal py-2 px-4 text-xs flex-shrink-0"
            onClick={() => {
              document.dispatchEvent(new CustomEvent('open-consultation'));
            }}
          >
            Start Build
          </button>

          {/* Mobile: Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden flex-shrink-0 text-gray-400 hover:text-devnsecure-teal transition-colors p-2 -mr-2"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
