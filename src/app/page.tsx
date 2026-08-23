import React from 'react';
import { Hero } from '@/components/Hero';
import { PrivacyHighlights } from '@/components/PrivacyHighlights';
import { InteractiveDemos } from '@/components/InteractiveDemos';
import { ToolDirectory } from '@/components/ToolDirectory';
import { Faq } from '@/components/Faq';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PrivacyHighlights />
      <InteractiveDemos />
      <ToolDirectory />
      <Faq />
    </>
  );
}
