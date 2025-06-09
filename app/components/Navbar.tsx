'use client'; // Required for interactivity
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.JPG"
                alt="Company Logo"
                fill
                sizes="150px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
          <div className="pt-2 pb-4 space-y-2">
            <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="/services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
            <div className="pt-2">
              <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Desktop NavLink component
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-blue-100 transition-colors font-medium relative group"
    >
      {children}
      <span className="absolute left-0 -bottom-1 h-0.5 bg-blue-300 w-0 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
}

// Mobile NavLink component
function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md transition-colors"
    >
      {children}
    </Link>
  );
}