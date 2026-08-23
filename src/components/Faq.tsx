'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Settings } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const FAQS: FaqItem[] = [
  {
    question: 'Is UtilityFlow really 100% offline?',
    answer: 'Yes! UtilityFlow works entirely on your phone without requiring an active internet connection. All formulas, converter matrices, GPA models, and text formatting algorithms run locally on device.',
  },
  {
    question: 'Does UtilityFlow collect or sell my personal data?',
    answer: 'No. UtilityFlow collects zero personal data, location data, device identifiers, or analytics. Everything you calculate, format, or save stays 100% private inside your device sandbox.',
  },
  {
    question: 'How do I switch the language to Urdu (اردو)?',
    answer: (
      <span className="flex items-center gap-1.5 flex-wrap">
        Open UtilityFlow on your Android phone, tap Settings <Settings className="w-3.5 h-3.5 inline text-[var(--primary)]" /> in the bottom navigation bar, select Language, and choose Urdu (اردو). The entire app UI, including formulas, labels, and navigation, will adapt instantly to Right-to-Left (RTL) layout.
      </span>
    ),
  },
  {
    question: 'Why does the app request Camera permission?',
    answer: 'Camera permission is requested only when you open the QR Code / Barcode scanner tool. The camera stream is used in real-time to decode barcodes locally on your screen. No video or images are stored or transmitted.',
  },
  {
    question: 'Can I back up or clear my history?',
    answer: 'Yes! You can clear your calculation history or favorite tools at any time directly inside Settings -> Clear Storage & Cache.',
  },
  {
    question: 'Is UtilityFlow free to download on Google Play?',
    answer: 'UtilityFlow is 100% free with zero ads and no hidden subscriptions.',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-[var(--parchment)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--card)] border border-[var(--card-border)] text-[var(--primary)] text-xs font-semibold shadow-sm">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted)]">
            Everything you need to know about UtilityFlow for Android.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="squircle-card overflow-hidden bg-[var(--card)] transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[var(--ink)]"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--primary)] transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[var(--muted)] leading-relaxed border-t border-[var(--divider)] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
