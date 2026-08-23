import React from 'react';
import Image from 'next/image';

interface GooglePlayButtonProps {
  className?: string;
  variant?: 'compact' | 'hero' | 'footer';
}

export function GooglePlayButton({ className = '', variant = 'hero' }: GooglePlayButtonProps) {
  if (variant === 'compact') {
    return (
      <a
        href="https://play.google.com/store/apps/details?id=com.utilityflow.app"
        target="_blank"
        rel="noopener noreferrer"
        title="Google Play"
        className={`inline-flex items-center gap-2.5 h-10 px-3.5 rounded-lg bg-[#111] hover:bg-[#333] border border-black text-white font-sans transition-colors active:scale-95 shrink-0 ${className}`}
      >
        {/* Exact Play Store Launcher Icon */}
        <div className="relative w-5 h-5 shrink-0">
          <Image
            src="/playstore-icon.png"
            alt="Google Play Icon"
            fill
            sizes="20px"
            className="object-contain"
          />
        </div>

        <div className="text-left leading-none">
          <div className="text-[8px] font-normal uppercase tracking-wider text-zinc-300 mb-0.5">
            GET IT ON
          </div>
          <div className="text-xs font-semibold tracking-tight text-white">
            Google Play
          </div>
        </div>
      </a>
    );
  }

  // Exact btn-google specifications (30px launcher icon, exact padding, zero overlap)
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.utilityflow.app"
      target="_blank"
      rel="noopener noreferrer"
      title="Google Play"
      className={`inline-flex items-center gap-3.5 h-[52px] px-5 rounded-lg bg-[#111] hover:bg-[#333] border border-black text-white font-sans transition-colors active:scale-95 shrink-0 ${className}`}
    >
      {/* Exact 30px Play Store Launcher Icon */}
      <div className="relative w-[30px] h-[30px] shrink-0">
        <Image
          src="/playstore-icon.png"
          alt="Google Play Icon"
          fill
          sizes="30px"
          className="object-contain"
        />
      </div>

      <div className="text-left leading-none">
        <div className="text-[10px] font-normal uppercase tracking-wider text-zinc-300 mb-1">
          GET IT ON
        </div>
        <div className="text-[17px] font-semibold tracking-tight text-white">
          Google Play
        </div>
      </div>
    </a>
  );
}
