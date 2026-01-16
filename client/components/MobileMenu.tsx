'use client';

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Security', href: '/#security' },
  { label: 'Process', href: '/#process' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const navigate = useNavigate();
  const location = useLocation();

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavigate = (href: string) => {
    onClose();
    
    // Check if it's a hash link
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (path === '' || path === '/') {
        // Same page
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Different page with hash
        navigate(path);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(href);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Menu */}
      <div className="fixed inset-0 z-50 flex pointer-events-none">
        <div className="ml-auto w-64 h-screen bg-devnsecure-black border-l border-[#26262C] flex flex-col pointer-events-auto overflow-y-auto">
          {/* Close Button */}
          <div className="flex items-center justify-between p-6 border-b border-[#26262C]">
            <h2 className="text-lg font-bold text-devnsecure-white">Menu</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-devnsecure-teal transition-colors p-2 -mr-2"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-6 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigate(item.href)}
                className="block w-full text-left px-4 py-3 rounded text-devnsecure-white font-semibold uppercase text-sm tracking-wide hover:bg-devnsecure-charcoal/50 transition-all duration-300 border border-transparent hover:border-devnsecure-teal/30"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="p-6 border-t border-[#26262C]">
            <button
              onClick={() => {
                document.dispatchEvent(new CustomEvent('open-consultation'));
                onClose();
              }}
              className="w-full btn-teal py-3 text-sm"
            >
              Start a Secure Build
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
