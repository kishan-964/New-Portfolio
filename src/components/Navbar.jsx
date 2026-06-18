import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border animate-fadeInDown">
      <div className="max-w-7xl mx-auto px-responsive">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold transform group-hover:scale-110 transition-smooth">
              K
            </div>
            <span className="font-bold text-base sm:text-lg md:text-xl text-foreground hidden xs:inline">Kishan</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm relative group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex gap-4">
            <a
              href="#contact"
              className="px-6 py-2 bg-linear-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-smooth transform hover:scale-105 font-medium whitespace-nowrap"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-smooth"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 animate-fadeIn" />
            ) : (
              <Menu className="w-6 h-6 animate-fadeIn" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 animate-slideInFromLeft">
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-smooth font-medium text-sm sm:text-base"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-3 bg-linear-to-r from-primary to-secondary text-white rounded-lg text-center font-medium hover:shadow-lg transition-smooth text-sm sm:text-base"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
