'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  WifiOff,
  Globe,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Zap,
  Lock,
  Languages,
} from 'lucide-react';
import { GooglePlayButton } from '@/components/GooglePlayButton';

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[var(--parchment)] via-[var(--canvas)] to-[var(--parchment)]">
      {/* Dynamic Animated Glow Spheres */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--primary)]/15 via-sky-500/5 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Top Floating Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--card)] border border-[var(--card-border)] shadow-sm text-xs font-semibold text-[var(--body)]">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[var(--primary)] font-bold">UtilityFlow 1.0.0</span>
            <span className="text-[var(--muted)]">•</span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              100% Offline Android Suite
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--ink)] tracking-tight leading-[1.15]">
            Calculate. Convert. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[var(--primary)] via-sky-500 to-indigo-600 bg-clip-text text-transparent">
              Simplify. 100% Offline.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[var(--body)] leading-relaxed">
            UtilityFlow combines scientific calculators, currency & unit converters, GPA manager, loan EMI tools, vehicle trip planners, developer utilities, and security tools in one lightweight, private Android app.
          </p>

          {/* Key Trust Highlights */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-medium">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[var(--card)] border border-[var(--card-border)] text-emerald-600 dark:text-emerald-400 shadow-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero Data Collection</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[var(--card)] border border-[var(--card-border)] text-sky-600 dark:text-sky-400 shadow-sm">
              <WifiOff className="w-4 h-4" />
              <span>100% Offline Engine</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[var(--card)] border border-[var(--card-border)] text-indigo-600 dark:text-indigo-400 shadow-sm">
              <Globe className="w-4 h-4" />
              <span>English & Urdu (اردو) RTL</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[var(--card)] border border-[var(--card-border)] text-[var(--primary)] shadow-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>19 Tool Categories</span>
            </div>
          </div>

          {/* CTA Buttons - Standard Google Play Button Prominently Placed */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <GooglePlayButton className="w-full sm:w-auto" />

            <Link
              href="#demos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-2xl text-[var(--ink)] bg-[var(--card)] hover:bg-[var(--pearl)] transition-all border border-[var(--card-border)] shadow-sm hover:border-[var(--primary)] min-h-[52px]"
            >
              <Sparkles className="w-5 h-5 text-[var(--primary)]" />
              <span>Try Live Demos</span>
            </Link>

            <Link
              href="/privacy"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-2xl text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 transition-all border border-emerald-200 dark:border-emerald-800 min-h-[52px]"
            >
              <ShieldCheck className="w-4.5 h-4.5" />
              <span>Privacy Policy</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Visual Graphics Showcase Banner - displaying UtilityFlow banner */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="squircle-card p-3 sm:p-5 overflow-hidden glass-panel">
            <div className="relative aspect-[1024/500] w-full rounded-xl overflow-hidden shadow-2xl border border-[var(--card-border)]">
              <Image
                src="/feature-graphic.svg"
                alt="UtilityFlow Official Feature Graphic Banner"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Showcase Cards Grid */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="p-4 rounded-xl bg-[var(--parchment)] border border-[var(--card-border)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--primary)] uppercase tracking-wider">
                  <Zap className="w-4 h-4 text-[var(--primary)]" />
                  <span>Fast & Lightweight</span>
                </div>
                <h3 className="font-bold text-sm text-[var(--ink)]">Optimized Bundle Size</h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  Only ~12MB–15MB on Play Store via Android App Bundle dynamic delivery. Instant startup with zero loading delays.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--parchment)] border border-[var(--card-border)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  <Lock className="w-4 h-4 text-emerald-500" />
                  <span>Safe & Private</span>
                </div>
                <h3 className="font-bold text-sm text-[var(--ink)]">Zero Data Collection</h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  All inputs, formulas, and history remain strictly on your phone inside encrypted AsyncStorage. Zero tracking.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--parchment)] border border-[var(--card-border)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  <Languages className="w-4 h-4 text-indigo-500" />
                  <span>Dual Language</span>
                </div>
                <h3 className="font-bold text-sm text-[var(--ink)]">English & Urdu RTL</h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  Native i18n support with complete Right-to-Left layout adaptation for seamless Urdu usability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
