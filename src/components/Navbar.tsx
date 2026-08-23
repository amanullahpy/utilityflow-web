'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { GooglePlayButton } from '@/components/GooglePlayButton';

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-[var(--card-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform">
            <Image
              src="/icon.png"
              alt="UtilityFlow Logo"
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-[var(--ink)]">UtilityFlow</span>
              <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] border border-[var(--primary)]/20">
                100% Offline
              </span>
            </div>
            <p className="text-[11px] text-[var(--muted)] leading-none font-medium hidden sm:block">
              Calculate. Convert. Simplify.
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links - Clean & Professional Text Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-[var(--body)]">
          <Link href="/#features" className="hover:text-[var(--primary)] transition-colors">
            Features
          </Link>
          <Link href="/#demos" className="hover:text-[var(--primary)] transition-colors">
            Live Demos
          </Link>
          <Link href="/#directory" className="hover:text-[var(--primary)] transition-colors">
            Tool Directory
          </Link>
          <Link href="/privacy" className="hover:text-[var(--primary)] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[var(--primary)] transition-colors">
            Terms
          </Link>
        </nav>

        {/* Right Actions & Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl text-[var(--body)] bg-[var(--pearl)] hover:bg-[var(--divider)] transition-colors border border-[var(--card-border)]"
            title={`Current theme: ${theme}. Click to switch.`}
            aria-label="Toggle theme"
          >
            {resolvedTheme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Standard Official Google Play Button */}
          <div className="hidden sm:block">
            <GooglePlayButton variant="compact" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[var(--ink)] hover:bg-[var(--pearl)] transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--card-border)] bg-[var(--card)] px-4 py-4 space-y-3 font-medium text-sm">
          <Link
            href="/#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[var(--ink)] hover:text-[var(--primary)]"
          >
            Features
          </Link>
          <Link
            href="/#demos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[var(--ink)] hover:text-[var(--primary)]"
          >
            Live Demos
          </Link>
          <Link
            href="/#directory"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[var(--ink)] hover:text-[var(--primary)]"
          >
            Tool Directory
          </Link>
          <Link
            href="/privacy"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[var(--primary)] font-semibold"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[var(--ink)] hover:text-[var(--primary)]"
          >
            Terms of Service
          </Link>

          <div className="pt-2">
            <GooglePlayButton className="w-full justify-center" />
          </div>
        </div>
      )}
    </header>
  );
}
