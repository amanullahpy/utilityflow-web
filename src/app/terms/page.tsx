import React from 'react';
import Link from 'next/link';
import { FileText, CheckCircle2, AlertTriangle, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | UtilityFlow: Offline Tools',
  description: 'Terms of service and usage conditions for UtilityFlow: Offline Tools (com.utilityflow.app).',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-12 bg-[var(--parchment)] text-[var(--ink)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--primary)] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to UtilityFlow Home</span>
        </Link>

        <div className="squircle-card p-8 sm:p-10 bg-[var(--card)] mb-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-[var(--muted)] font-mono">
            App: UtilityFlow: Offline Tools (com.utilityflow.app) • Effective Date: August 23, 2026
          </p>
        </div>

        <div className="squircle-card p-8 sm:p-10 bg-[var(--card)] space-y-8 text-sm sm:text-base text-[var(--body)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--ink)] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[var(--primary)]" />
              <span>1. Acceptance of Terms</span>
            </h2>
            <p>
              By downloading, installing, or using <strong>UtilityFlow: Offline Tools</strong> (Package ID: <code>com.utilityflow.app</code>), you agree to be bound by these Terms of Service. If you do not agree, please do not use the application.
            </p>
          </section>

          <section className="space-y-3 border-t border-[var(--divider)] pt-6">
            <h2 className="text-xl font-bold text-[var(--ink)] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>2. License & Offline Use</span>
            </h2>
            <p>
              We grant you a non-exclusive, non-transferable, personal license to download and execute UtilityFlow on compatible Android devices. UtilityFlow is provided as a 100% offline application designed for personal productivity, academic calculation, developer utilities, and daily convenience.
            </p>
          </section>

          <section className="space-y-3 border-t border-[var(--divider)] pt-6">
            <h2 className="text-xl font-bold text-[var(--ink)] flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span>3. Mathematical & Calculation Disclaimer</span>
            </h2>
            <p>
              UtilityFlow provides calculators, converters, financial EMI models, GPA formulas, and unit conversion matrices for informational and convenience purposes only. While every algorithm is rigorously verified, UtilityFlow makes no warranties regarding the absolute precision of financial returns, loan schedules, tax calculations, or academic GPA scales. Users should independently verify critical financial or legal computations before making binding decisions.
            </p>
          </section>

          <section className="space-y-3 border-t border-[var(--divider)] pt-6">
            <h2 className="text-xl font-bold text-[var(--ink)]">
              4. Modifications & Updates
            </h2>
            <p>
              We reserve the right to modify or replace these terms at any time. Updates will be reflected on this webpage.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
