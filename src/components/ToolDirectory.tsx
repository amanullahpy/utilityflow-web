'use client';

import React, { useState } from 'react';
import {
  Search,
  Wrench,
  ChevronRight,
  Calculator,
  RefreshCw,
  Coins,
  Car,
  GraduationCap,
  Code2,
  Clock,
  FileText,
  Shield,
  Dices,
  Palette,
  Shapes,
  Binary,
  Activity,
  ShoppingBag,
} from 'lucide-react';

interface ToolCategoryItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  tools: string[];
}

const CATEGORIES: ToolCategoryItem[] = [
  {
    id: 'calculators',
    name: 'Calculators',
    icon: <Calculator className="w-5 h-5 text-blue-500" />,
    tools: [
      'Basic Calculator',
      'Scientific Calculator',
      'Percentage & Change',
      'Fraction & Mixed Numbers',
      'Ratio & Proportion',
      'Stats (Mean, Median, Mode)',
      'Quadratic & Linear Equations',
      'Matrix Calculator',
    ],
  },
  {
    id: 'converters',
    name: 'Unit Converters',
    icon: <RefreshCw className="w-5 h-5 text-sky-500" />,
    tools: [
      'Length, Weight & Temp',
      'Area, Speed & Volume',
      'Offline Currency Rates',
      'Pressure & Energy',
      'Power & Torque',
      'Fuel Economy Converter',
    ],
  },
  {
    id: 'finance',
    name: 'Finance & Money',
    icon: <Coins className="w-5 h-5 text-emerald-500" />,
    tools: [
      'EMI Loan Calculator',
      'SIP Investment Returns',
      'Simple & Compound Interest',
      'Salary & Net Worth',
      'Debt-to-Income (DTI)',
      'Tax & Tip Splitter',
      'Mortgage Affordability',
    ],
  },
  {
    id: 'vehicle',
    name: 'Vehicle & Mobility',
    icon: <Car className="w-5 h-5 text-amber-500" />,
    tools: [
      'Fuel Cost Estimator',
      'Vehicle Mileage Calc',
      'EV Charging Cost',
      'Trip Cost Splitter',
      'Road Trip Planner',
      'Vehicle Maintenance Cost',
    ],
  },
  {
    id: 'academic',
    name: 'Academic & Education',
    icon: <GraduationCap className="w-5 h-5 text-purple-500" />,
    tools: [
      'Semester GPA & CGPA',
      'Percentage to Grade',
      'Course Credit Tracker',
      'Attendance Calculator',
    ],
  },
  {
    id: 'developer',
    name: 'Developer Tools',
    icon: <Code2 className="w-5 h-5 text-cyan-500" />,
    tools: [
      'JSON Formatter & Minifier',
      'Base64 Encoder/Decoder',
      'Regex Pattern Tester',
      'URL Encoder/Decoder',
      'CSS Box Shadow & Color Code',
    ],
  },
  {
    id: 'time',
    name: 'Time & Date',
    icon: <Clock className="w-5 h-5 text-rose-500" />,
    tools: [
      'Age Calculator',
      'Date Difference',
      'Unix Timestamp Converter',
      'Work Days & Hours',
      'Timezone Difference',
    ],
  },
  {
    id: 'text',
    name: 'Text Utilities',
    icon: <FileText className="w-5 h-5 text-indigo-500" />,
    tools: [
      'Word & Character Counter',
      'Case Converter (Upper, Lower, Title)',
      'Text Diff Checker',
      'Clean Whitespace',
    ],
  },
  {
    id: 'security',
    name: 'Security & Cryptography',
    icon: <Shield className="w-5 h-5 text-emerald-600" />,
    tools: [
      'Strong Password Generator',
      'MD5 & SHA-256 Hash Generator',
      'Secret Key Generator',
    ],
  },
  {
    id: 'random',
    name: 'Random & Decision',
    icon: <Dices className="w-5 h-5 text-fuchsia-500" />,
    tools: [
      'Random Number Generator',
      'Dice Roller',
      'Coin Flipper',
      'List Item Picker',
    ],
  },
  {
    id: 'color',
    name: 'Color Utilities',
    icon: <Palette className="w-5 h-5 text-violet-500" />,
    tools: [
      'HEX, RGB & HSL Converter',
      'Color Palette Generator',
      'Color Contrast Checker',
    ],
  },
  {
    id: 'geometry',
    name: 'Geometry & Shapes',
    icon: <Shapes className="w-5 h-5 text-blue-600" />,
    tools: [
      '2D Area & Perimeter',
      '3D Volume & Surface Area',
      'Pythagorean Theorem',
      'Coordinate Distance',
    ],
  },
  {
    id: 'number',
    name: 'Number Systems',
    icon: <Binary className="w-5 h-5 text-slate-500" />,
    tools: [
      'Binary, Octal, Hex & Decimal',
      'Roman Numeral Converter',
      'Prime Factorization',
    ],
  },
  {
    id: 'health',
    name: 'Health & Fitness',
    icon: <Activity className="w-5 h-5 text-red-500" />,
    tools: [
      'Body Mass Index (BMI)',
      'BMR Calorie Calculator',
      'Body Fat Percentage',
      'Ideal Weight',
    ],
  },
  {
    id: 'everyday',
    name: 'Everyday Tools',
    icon: <ShoppingBag className="w-5 h-5 text-amber-600" />,
    tools: [
      'Discount Calculator',
      'Tip & Bill Splitter',
      'Unit Price Comparison',
      'Sales Tax',
    ],
  },
];

export function ToolDirectory() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = CATEGORIES.filter((cat) => {
    const matchesCatName = cat.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTools = cat.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCatName || matchesTools;
  });

  return (
    <section id="directory" className="py-20 bg-[var(--parchment)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--card)] border border-[var(--card-border)] text-[var(--primary)] text-xs font-semibold shadow-sm">
            <Wrench className="w-4 h-4 text-[var(--primary)]" />
            <span>Complete Utility Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] tracking-tight">
            19 Categories. 100+ Offline Utilities.
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted)]">
            Explore every single tool packaged inside UtilityFlow for Android.
          </p>

          {/* Instant Search Bar */}
          <div className="pt-4 max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--muted)]">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search tools (e.g. EMI, GPA, Currency, JSON)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3.5 rounded-2xl bg-[var(--card)] border border-[var(--card-border)] text-sm font-medium text-[var(--ink)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--primary)] shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="squircle-card p-6 flex flex-col justify-between space-y-4 hover:border-[var(--primary)] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[var(--parchment)] border border-[var(--card-border)]">
                      {cat.icon}
                    </div>
                    <h3 className="font-bold text-base text-[var(--ink)]">{cat.name}</h3>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[var(--parchment)] text-[var(--muted)] border border-[var(--card-border)]">
                    {cat.tools.length} Tools
                  </span>
                </div>

                <ul className="space-y-1.5 text-xs text-[var(--body)] pt-2 border-t border-[var(--divider)]">
                  {cat.tools.map((t, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-[var(--primary)] shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-[var(--divider)] flex justify-between items-center text-xs font-semibold text-[var(--primary)]">
                <span>UtilityFlow Mobile Suite</span>
                <span>100% Offline</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
