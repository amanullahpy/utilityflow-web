import React from 'react';

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
        {/* Play Store Vector Icon */}
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M325.8 243.7L85.2 8.7C79.8 4.2 72.8 1.5 64.9 1.5C36 1.5 13 24.5 13 53.4V458.6C13 487.5 36 510.5 64.9 510.5C72.8 510.5 79.8 507.8 85.3 503.3L325.8 268.3C332.9 261.2 332.9 250.8 325.8 243.7Z"
            fill="#00E676"
          />
          <path
            d="M325.8 243.7L411.3 158.2L120.3 8.7L325.8 243.7Z"
            fill="#00B0FF"
          />
          <path
            d="M411.3 353.8L325.8 268.3L120.3 503.3L411.3 353.8Z"
            fill="#FF3D00"
          />
          <path
            d="M485.4 227.1L424.8 191.7L343.3 256L424.8 320.3L485.4 284.9C497.8 277.6 505.7 264.4 505.7 256C505.7 247.6 497.8 234.4 485.4 227.1Z"
            fill="#FFC107"
          />
        </svg>

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

  // Exact btn-google Play Store Button Style (30px icon, exact GET IT ON padding and layout)
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.utilityflow.app"
      target="_blank"
      rel="noopener noreferrer"
      title="Google Play"
      className={`inline-flex items-center gap-3.5 h-[52px] px-5 rounded-lg bg-[#111] hover:bg-[#333] border border-black text-white font-sans transition-colors active:scale-95 shrink-0 ${className}`}
    >
      {/* 30px Official Google Play Icon SVG */}
      <svg className="w-[30px] h-[30px] shrink-0" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M325.8 243.7L85.2 8.7C79.8 4.2 72.8 1.5 64.9 1.5C36 1.5 13 24.5 13 53.4V458.6C13 487.5 36 510.5 64.9 510.5C72.8 510.5 79.8 507.8 85.3 503.3L325.8 268.3C332.9 261.2 332.9 250.8 325.8 243.7Z"
          fill="#00E676"
        />
        <path
          d="M325.8 243.7L411.3 158.2L120.3 8.7L325.8 243.7Z"
          fill="#00B0FF"
        />
        <path
          d="M411.3 353.8L325.8 268.3L120.3 503.3L411.3 353.8Z"
          fill="#FF3D00"
        />
        <path
          d="M485.4 227.1L424.8 191.7L343.3 256L424.8 320.3L485.4 284.9C497.8 277.6 505.7 264.4 505.7 256C505.7 247.6 497.8 234.4 485.4 227.1Z"
          fill="#FFC107"
        />
      </svg>

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
