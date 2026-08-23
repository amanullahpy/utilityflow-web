'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Database, Camera, Smartphone, ArrowRight } from 'lucide-react';

export function PrivacyHighlights() {
  return (
    <section className="py-20 bg-[var(--canvas)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="squircle-card p-8 sm:p-12 glass-panel relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Google Play Console Verified</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] tracking-tight">
                Designed for Complete Privacy & Security
              </h2>

              <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                Unlike cloud-based tools that send your financial calculations, private text, or documents to remote servers, UtilityFlow operates 100% locally on your device.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 border border-emerald-200 dark:border-emerald-800 shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[var(--ink)]">Zero Data Collection</h4>
                    <p className="text-xs text-[var(--muted)]">
                      We do not track analytics, collect device identifiers, or upload user inputs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-sky-600 border border-sky-200 dark:border-sky-800 shrink-0">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[var(--ink)]">Local AsyncStorage Protection</h4>
                    <p className="text-xs text-[var(--muted)]">
                      Favorites, history, and app preferences are stored exclusively on your phone's sandbox storage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 border border-indigo-200 dark:border-indigo-800 shrink-0">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[var(--ink)]">Transparent Device Permissions</h4>
                    <p className="text-xs text-[var(--muted)]">
                      Camera permission is strictly requested when using the QR/Barcode scanner. No images leave your device.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20"
                >
                  <span>Read Full Play Store Privacy Policy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--parchment)] border border-[var(--card-border)] space-y-6">
              <div className="flex items-center gap-3 border-b border-[var(--divider)] pb-4">
                <Smartphone className="w-6 h-6 text-[var(--primary)]" />
                <div>
                  <h3 className="font-bold text-base text-[var(--ink)]">Google Play Data Safety Summary</h3>
                  <p className="text-xs font-mono text-[var(--muted)]">com.utilityflow.app</p>
                </div>
              </div>

              <table className="w-full text-xs text-left">
                <tbody>
                  <tr className="border-b border-[var(--divider)]">
                    <td className="py-2.5 font-medium text-[var(--muted)]">Data Collected:</td>
                    <td className="py-2.5 font-bold text-emerald-600">None (0 bytes)</td>
                  </tr>
                  <tr className="border-b border-[var(--divider)]">
                    <td className="py-2.5 font-medium text-[var(--muted)]">Data Shared:</td>
                    <td className="py-2.5 font-bold text-emerald-600">None</td>
                  </tr>
                  <tr className="border-b border-[var(--divider)]">
                    <td className="py-2.5 font-medium text-[var(--muted)]">Encryption in Transit:</td>
                    <td className="py-2.5 font-bold text-[var(--ink)]">N/A (100% Offline)</td>
                  </tr>
                  <tr className="border-b border-[var(--divider)]">
                    <td className="py-2.5 font-medium text-[var(--muted)]">Target Age:</td>
                    <td className="py-2.5 font-bold text-[var(--ink)]">13+ (General Audience)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-medium text-[var(--muted)]">Third-Party Ads:</td>
                    <td className="py-2.5 font-bold text-emerald-600">No Ads</td>
                  </tr>
                </tbody>
              </table>

              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-medium flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>Fully compliant with Google Play Store Policies and COPPA/GDPR safety guidelines.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
