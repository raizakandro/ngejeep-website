'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="gradient-teal text-white sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl md:text-3xl font-bold">
          ✦ Ngejeep
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-amber-400 transition-colors">
            Beranda
          </Link>
          <Link href="#packages" className="hover:text-amber-400 transition-colors">
            Paket
          </Link>
          <Link href="#contact" className="hover:text-amber-400 transition-colors">
            Kontak
          </Link>
          <Link href="/privacy" className="hover:text-amber-400 transition-colors">
            Privasi
          </Link>
          <Link href="/terms" className="hover:text-amber-400 transition-colors">
            Syarat & Ketentuan
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-teal-700 px-6 py-4 space-y-3">
          <Link href="/" className="block hover:text-amber-400 transition-colors py-2">
            Beranda
          </Link>
          <Link href="#packages" className="block hover:text-amber-400 transition-colors py-2">
            Paket
          </Link>
          <Link href="#contact" className="block hover:text-amber-400 transition-colors py-2">
            Kontak
          </Link>
          <Link href="/privacy" className="block hover:text-amber-400 transition-colors py-2">
            Privasi
          </Link>
          <Link href="/terms" className="block hover:text-amber-400 transition-colors py-2">
            Syarat & Ketentuan
          </Link>
        </div>
      )}
    </header>
  );
}