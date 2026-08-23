import React from 'react';

export function JsonLd() {
  const schemaApp = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'UtilityFlow: Offline Tools',
    operatingSystem: 'ANDROID',
    applicationCategory: 'UtilitiesApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1250',
    },
    description:
      'UtilityFlow is an all-in-one 100% offline Android utility suite featuring scientific calculators, unit & currency converters, GPA manager, loan EMI tools, and dual English & Urdu RTL support.',
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.utilityflow.app',
    softwareVersion: '1.0.0',
    fileSize: '12MB',
    permissions: 'Camera for QR scanner',
  };

  const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is UtilityFlow 100% offline?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, UtilityFlow operates 100% locally on your Android device without requiring internet access or user account registration.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does UtilityFlow collect any personal data?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, UtilityFlow collects zero personal data, location data, or analytics trackers. All calculations stay on your device sandbox.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does UtilityFlow support Urdu language?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, UtilityFlow features full Urdu language support with native Right-to-Left (RTL) layout adaptation.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />
    </>
  );
}
