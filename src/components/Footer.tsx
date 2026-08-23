'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  WifiOff,
  Globe,
  Heart,
  Lock,
  Calculator,
  Coins,
  RefreshCw,
  Car,
  GraduationCap,
  Code2,
} from 'lucide-react';
import { GooglePlayButton } from '@/components/GooglePlayButton';

export function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--card)] text-[var(--body)] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[var(--divider)]">
          {/* Column 1: App Info & Google Play Badge */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/icon.png"
                  alt="UtilityFlow Logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-lg text-[var(--ink)]">UtilityFlow</span>
            </div>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Your all-in-one, 100% offline utility suite designed to simplify everyday calculations, unit conversions, academic tracking, and developer tools.
            </p>
            <div className="pt-2">
              <GooglePlayButton className="w-full justify-center" />
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--muted)] pt-1">
              <span>Package ID:</span>
              <code className="bg-[var(--parchment)] px-2 py-0.5 rounded text-[var(--primary)] font-semibold">
                com.utilityflow.app
              </code>
            </div>
          </div>

          {/* Column 2: Key Categories */}
          <div>
            <h4 className="font-semibold text-sm text-[var(--ink)] uppercase tracking-wider mb-4">
              Tool Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-[var(--muted)] font-medium">
              <li>
                <Link href="/#directory" className="hover:text-[var(--primary)] transition-colors flex items-center gap-2">
                  <Calculator className="w-3.5 h-3.5 text-blue-500" />
                  <span>Scientific & Basic Calculators</span>
                </Link>
              </li>
              <li>
                <Link href="/#directory" className="hover:text-[var(--primary)] transition-colors flex items-center gap-2">
                  <Coins className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Finance & EMI Loan Tools</span>
                </Link>
              </li>
              <li>
                <Link href="/#directory" className="hover:text-[var(--primary)] transition-colors flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 text-sky-500" />
                  <span>Offline Unit & Currency Converters</span>
                </Link>
              </li>
              <li>
                <Link href="/#directory" className="hover:text-[var(--primary)] transition-colors flex items-center gap-2">
                  <Car className="w-3.5 h-3.5 text-amber-500" />
                  <span>Vehicle Fuel & Trip Calculators</span>
                </Link>
              </li>
              <li>
                <Link href="/#directory" className="hover:text-[var(--primary)] transition-colors flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-purple-500" />
                  <span>GPA & CGPA Academic Manager</span>
                </Link>
              </li>
              <li>
                <Link href="/#directory" className="hover:text-[var(--primary)] transition-colors flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Developer & JSON Formatter</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Play Store & Security */}
          <div>
            <h4 className="font-semibold text-sm text-[var(--ink)] uppercase tracking-wider mb-4">
              Google Play & Privacy
            </h4>
            <ul className="space-y-2.5 text-xs text-[var(--muted)] font-medium">
              <li className="flex items-center gap-2">
                <WifiOff className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100% Offline (No Internet Required)</span>
              </li>
              <li className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-sky-500 shrink-0" />
                <span>Zero Data Collection or Sharing</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>English & Urdu (اردو) RTL Support</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <Link href="/privacy" className="hover:underline font-semibold text-[var(--ink)]">
                  Play Store Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Download & Legal */}
          <div>
            <h4 className="font-semibold text-sm text-[var(--ink)] uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[var(--muted)] font-medium">
              <li>
                <Link href="/privacy" className="hover:text-[var(--primary)] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[var(--primary)] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[var(--primary)] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.utilityflow.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] font-semibold hover:underline flex items-center gap-1 mt-1"
                >
                  <span>Google Play Console Listing</span>
                  <span>→</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <p>© {new Date().getFullYear()} UtilityFlow. Built for Android & Play Store.</p>
          <div className="flex items-center gap-2">
            <span>Designed with precision & local privacy</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
