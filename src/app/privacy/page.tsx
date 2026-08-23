import React from 'react';
import Link from 'next/link';
import { ShieldCheck, WifiOff, Lock, Camera, Database, FileText, Mail, ArrowLeft, FolderDown } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | UtilityFlow: Offline Tools (com.utilityflow.app)',
  description: 'Official Google Play Store compliant Privacy Policy for UtilityFlow: Offline Tools (com.utilityflow.app). 100% offline, zero data collection.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-12 bg-[var(--parchment)] text-[var(--ink)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--primary)] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to UtilityFlow Home</span>
        </Link>

        {/* Header Card */}
        <div className="squircle-card p-8 sm:p-10 bg-[var(--card)] mb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Google Play Console Policy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] tracking-tight">
            Privacy Policy
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--muted)] font-mono">
            <span><strong>App Name:</strong> UtilityFlow: Offline Tools</span>
            <span><strong>Package ID:</strong> com.utilityflow.app</span>
            <span><strong>Effective Date:</strong> August 23, 2026</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="squircle-card p-8 sm:p-10 bg-[var(--card)] space-y-8 text-sm sm:text-base text-[var(--body)] leading-relaxed">
          {/* Section 1: Overview */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--ink)] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[var(--primary)]" />
              <span>1. Overview & Commitment to Privacy</span>
            </h2>
            <p>
              UtilityFlow (referred to as "the App", "we", "us", or "our") is designed with a strict <strong>privacy-first, 100% offline-first architecture</strong>. This Privacy Policy informs users of our policies regarding the collection, use, and disclosure of Personal Data when you use our Android application (Package ID: <code>com.utilityflow.app</code>).
            </p>
            <p>
              We believe your calculations, financial inputs, academic scores, and developer payloads belong solely to you. Therefore, <strong>UtilityFlow does NOT collect, store, or transmit any personal information to external servers or third parties.</strong>
            </p>
          </section>

          {/* Section 2: Zero Data Collection */}
          <section className="space-y-3 border-t border-[var(--divider)] pt-6">
            <h2 className="text-xl font-bold text-[var(--ink)] flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-500" />
              <span>2. Zero Data Collection & Sharing</span>
            </h2>
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 font-medium flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 shrink-0 text-emerald-600" />
              <span><strong>Google Play Data Safety Declaration:</strong> Under Google Play requirements, UtilityFlow declares <strong>"No User Data Collected"</strong> and <strong>"No User Data Shared"</strong>.</span>
            </div>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[var(--muted)]">
              <li><strong>No Personal Information:</strong> We do not collect names, email addresses, phone numbers, or demographic information.</li>
              <li><strong>No Device Identifiers:</strong> We do not log IMEI numbers, IP addresses, MAC addresses, or advertising IDs.</li>
              <li><strong>No Analytics or Telemetry:</strong> We do not use Firebase Analytics, Mixpanel, Google Analytics, or crash monitoring trackers.</li>
              <li><strong>No Location Data:</strong> We do not track or request GPS or network location coordinates.</li>
            </ul>
          </section>

          {/* Section 3: On-Device Local Storage */}
          <section className="space-y-3 border-t border-[var(--divider)] pt-6">
            <h2 className="text-xl font-bold text-[var(--ink)] flex items-center gap-2">
              <Database className="w-5 h-5 text-sky-500" />
              <span>3. On-Device Local Storage (AsyncStorage)</span>
            </h2>
            <p>
              All application data created while using UtilityFlow (such as favorite tools, recent calculation history, language preferences, and theme choices) is stored exclusively on your device using React Native local sandbox storage (<code>AsyncStorage</code>).
            </p>
            <p className="text-xs text-[var(--muted)]">
              This data remains strictly on your local hardware and can be completely wiped at any time by clearing the application cache in Android Settings or using the "Clear Storage" option inside the app settings.
            </p>
          </section>

          {/* Section 4: Device Permissions */}
          <section className="space-y-3 border-t border-[var(--divider)] pt-6">
            <h2 className="text-xl font-bold text-[var(--ink)] flex items-center gap-2">
              <Camera className="w-5 h-5 text-indigo-500" />
              <span>4. Device Permission Disclosures</span>
            </h2>
            <p>
              UtilityFlow requests optional device permissions only when necessary for specific offline utility features:
            </p>
            <div className="space-y-3 pt-1">
              <div className="p-3.5 rounded-xl bg-[var(--parchment)] border border-[var(--card-border)] text-xs sm:text-sm">
                <div className="flex items-center gap-2 font-bold text-[var(--ink)]">
                  <Camera className="w-4 h-4 text-indigo-500" />
                  <span>Camera Permission (CAMERA):</span>
                </div>
                <p className="text-[var(--muted)] mt-1">
                  Required exclusively when using the QR Code & Barcode Scanner tool to scan optical codes in real-time. The camera feed is processed in memory locally. Zero photos, frames, or video recordings are saved or transmitted.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--parchment)] border border-[var(--card-border)] text-xs sm:text-sm">
                <div className="flex items-center gap-2 font-bold text-[var(--ink)]">
                  <FolderDown className="w-4 h-4 text-sky-500" />
                  <span>Storage Permission (WRITE_EXTERNAL_STORAGE):</span>
                </div>
                <p className="text-[var(--muted)] mt-1">
                  Requested only when you explicitly export or save a generated barcode, QR image, or text record to your device gallery or downloads folder.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Third-Party Services & Advertising */}
          <section className="space-y-3 border-t border-[var(--divider)] pt-6">
            <h2 className="text-xl font-bold text-[var(--ink)] flex items-center gap-2">
              <WifiOff className="w-5 h-5 text-amber-500" />
              <span>5. Third-Party Services & Advertising</span>
            </h2>
            <p>
              UtilityFlow does <strong>NOT integrate any third-party SDKs, ad networks (such as Google AdMob), or behavioral tracking scripts</strong>. The application functions 100% offline without communicating with external ad servers.
            </p>
          </section>

          {/* Section 6: Children's Privacy */}
          <section className="space-y-3 border-t border-[var(--divider)] pt-6">
            <h2 className="text-xl font-bold text-[var(--ink)]">
              6. Children's Privacy (COPPA & GDPR Compliance)
            </h2>
            <p>
              Our application is designed for a general audience aged 13 and above. Because UtilityFlow collects zero personal data from any user, it is fully compliant with the Children's Online Privacy Protection Act (COPPA) and General Data Protection Regulation (GDPR).
            </p>
          </section>

          {/* Section 7: Updates & Contact */}
          <section className="space-y-3 border-t border-[var(--divider)] pt-6">
            <h2 className="text-xl font-bold text-[var(--ink)] flex items-center gap-2">
              <Mail className="w-5 h-5 text-[var(--primary)]" />
              <span>7. Contact Information & Support</span>
            </h2>
            <p>
              If you have any questions or suggestions regarding this Privacy Policy or UtilityFlow, please contact the developer:
            </p>
            <div className="p-4 rounded-xl bg-[var(--parchment)] border border-[var(--card-border)] text-xs font-mono space-y-1">
              <p><strong>App Developer:</strong> UtilityFlow Engineering Team</p>
              <p><strong>Package ID:</strong> com.utilityflow.app</p>
              <p><strong>Contact Email:</strong> <a href="mailto:m.amanullah0830@gmail.com" className="text-[var(--primary)] underline">m.amanullah0830@gmail.com</a></p>
              <p><strong>Google Play Listing:</strong> UtilityFlow: Offline Tools</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
