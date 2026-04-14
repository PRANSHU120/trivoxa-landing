'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#06031A]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500 via-violet-500 to-purple-600 text-lg font-bold text-white transition-all hover:scale-105">
            T
          </div>
          <span className="hidden bg-gradient-to-r from-fuchsia-400 via-violet-300 to-purple-400 bg-clip-text text-lg font-bold text-transparent sm:inline">
            TRIVOXA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <button className="rounded-lg border border-white/20 px-5 py-2 text-sm font-semibold text-white transition-all hover:border-fuchsia-400/50 hover:bg-white/5">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 transition-colors hover:bg-white/10 md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#06031A]/90 backdrop-blur-sm md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="py-2 font-medium text-gray-400 transition-colors hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <button className="mt-2 w-full rounded-lg bg-gradient-to-r from-fuchsia-500 via-violet-500 to-purple-600 py-2 text-sm font-semibold text-white">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}