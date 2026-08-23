'use client';

import React, { useState } from 'react';
import { Sparkles, Calculator, ArrowRightLeft, GraduationCap, Code2, Check, Copy } from 'lucide-react';

export function InteractiveDemos() {
  const [activeTab, setActiveTab] = useState<'emi' | 'converter' | 'gpa' | 'json'>('emi');

  // 1. EMI State
  const [amount, setAmount] = useState<number>(25000);
  const [rate, setRate] = useState<number>(8.5);
  const [years, setYears] = useState<number>(5);

  const calculateEmi = () => {
    const p = amount;
    const r = rate / 12 / 100;
    const n = years * 12;
    if (r === 0 || n === 0) return { emi: 0, totalInterest: 0, totalPayment: 0 };
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - p;
    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
    };
  };

  const emiResult = calculateEmi();

  // 2. Converter State
  const [convCategory, setConvCategory] = useState<'length' | 'weight' | 'temp'>('length');
  const [convVal, setConvVal] = useState<number>(100);
  const [convFrom, setConvFrom] = useState<string>('m');
  const [convTo, setConvTo] = useState<string>('ft');

  const convertUnits = () => {
    if (isNaN(convVal)) return 0;
    if (convCategory === 'length') {
      // Base: meters
      const toMeters: Record<string, number> = { m: 1, km: 1000, cm: 0.01, mm: 0.001, ft: 0.3048, in: 0.0254, mi: 1609.34 };
      const meters = convVal * (toMeters[convFrom] || 1);
      return meters / (toMeters[convTo] || 1);
    } else if (convCategory === 'weight') {
      // Base: kg
      const toKg: Record<string, number> = { kg: 1, g: 0.001, mg: 0.000001, lb: 0.453592, oz: 0.0283495 };
      const kg = convVal * (toKg[convFrom] || 1);
      return kg / (toKg[convTo] || 1);
    } else {
      // Temp
      if (convFrom === convTo) return convVal;
      if (convFrom === 'C' && convTo === 'F') return (convVal * 9) / 5 + 32;
      if (convFrom === 'F' && convTo === 'C') return ((convVal - 32) * 5) / 9;
      if (convFrom === 'C' && convTo === 'K') return convVal + 273.15;
      if (convFrom === 'K' && convTo === 'C') return convVal - 273.15;
    }
    return convVal;
  };

  // 3. GPA State
  const [courses, setCourses] = useState([
    { name: 'Mathematics', credits: 3, gradePoint: 4.0 },
    { name: 'Computer Science', credits: 4, gradePoint: 3.7 },
    { name: 'Physics', credits: 3, gradePoint: 3.3 },
  ]);

  const calculateGpa = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    courses.forEach((c) => {
      totalCredits += c.credits;
      totalPoints += c.credits * c.gradePoint;
    });
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
  };

  // 4. Developer JSON State
  const [jsonInput, setJsonInput] = useState<string>('{"app":"UtilityFlow","status":"offline","tools":100}');
  const [jsonOutput, setJsonOutput] = useState<string>('{\n  "app": "UtilityFlow",\n  "status": "offline",\n  "tools": 100\n}');
  const [copied, setCopied] = useState<boolean>(false);

  const formatJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonOutput(JSON.stringify(parsed, null, 2));
    } catch {
      setJsonOutput('Error: Invalid JSON syntax');
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonOutput(JSON.stringify(parsed));
    } catch {
      setJsonOutput('Error: Invalid JSON syntax');
    }
  };

  const encodeBase64 = () => {
    try {
      setJsonOutput(btoa(jsonInput));
    } catch {
      setJsonOutput('Error: Encoding failed');
    }
  };

  const decodeBase64 = () => {
    try {
      setJsonOutput(atob(jsonInput));
    } catch {
      setJsonOutput('Error: Invalid Base64 string');
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demos" className="py-20 bg-[var(--canvas)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Web Preview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] tracking-tight">
            Try UtilityFlow Tools Live
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted)]">
            Experience the exact zero-latency, offline calculation algorithms built inside the mobile app directly on your browser.
          </p>
        </div>

        {/* Demo Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('emi')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'emi'
                ? 'bg-[var(--primary)] text-white shadow-md'
                : 'bg-[var(--parchment)] text-[var(--body)] hover:bg-[var(--pearl)] border border-[var(--card-border)]'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Loan EMI</span>
          </button>

          <button
            onClick={() => setActiveTab('converter')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'converter'
                ? 'bg-[var(--primary)] text-white shadow-md'
                : 'bg-[var(--parchment)] text-[var(--body)] hover:bg-[var(--pearl)] border border-[var(--card-border)]'
            }`}
          >
            <ArrowRightLeft className="w-4 h-4" />
            <span>Unit Converter</span>
          </button>

          <button
            onClick={() => setActiveTab('gpa')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'gpa'
                ? 'bg-[var(--primary)] text-white shadow-md'
                : 'bg-[var(--parchment)] text-[var(--body)] hover:bg-[var(--pearl)] border border-[var(--card-border)]'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>GPA Calculator</span>
          </button>

          <button
            onClick={() => setActiveTab('json')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'json'
                ? 'bg-[var(--primary)] text-white shadow-md'
                : 'bg-[var(--parchment)] text-[var(--body)] hover:bg-[var(--pearl)] border border-[var(--card-border)]'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>JSON Formatter</span>
          </button>
        </div>

        {/* Demo Widget Container */}
        <div className="max-w-4xl mx-auto squircle-card p-6 sm:p-8 bg-[var(--card)]">
          {/* 1. EMI CALCULATOR DEMO */}
          {activeTab === 'emi' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[var(--divider)] pb-4">
                <div>
                  <h3 className="font-bold text-lg text-[var(--ink)]">Loan EMI & Interest Calculator</h3>
                  <p className="text-xs text-[var(--muted)]">Calculate monthly installments & loan interest</p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--primary-light)] text-[var(--primary)] font-semibold">
                  Finance Category
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-xs font-medium mb-1.5">
                      <span>Loan Amount:</span>
                      <span className="font-bold text-[var(--primary)]">${amount.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="1000"
                      max="200000"
                      step="1000"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full accent-[var(--primary)] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-medium mb-1.5">
                      <span>Interest Rate (% per annum):</span>
                      <span className="font-bold text-[var(--primary)]">{rate}%</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="25"
                      step="0.5"
                      value={rate}
                      onChange={(e) => setRate(Number(e.target.value))}
                      className="w-full accent-[var(--primary)] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-medium mb-1.5">
                      <span>Tenure:</span>
                      <span className="font-bold text-[var(--primary)]">{years} Years ({years * 12} Months)</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="1"
                      value={years}
                      onChange={(e) => setYears(Number(e.target.value))}
                      className="w-full accent-[var(--primary)] cursor-pointer"
                    />
                  </div>
                </div>

                {/* Result Card */}
                <div className="p-6 rounded-2xl bg-[var(--parchment)] border border-[var(--card-border)] space-y-4 text-center">
                  <div>
                    <span className="text-xs font-semibold uppercase text-[var(--muted)] tracking-wider">
                      Monthly EMI Payable
                    </span>
                    <p className="text-3xl sm:text-4xl font-extrabold text-[var(--primary)] mt-1">
                      ${emiResult.emi.toLocaleString()}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[var(--divider)] text-left">
                    <div>
                      <span className="text-[11px] text-[var(--muted)]">Total Interest:</span>
                      <p className="font-bold text-sm text-[var(--ink)]">${emiResult.totalInterest.toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="text-[11px] text-[var(--muted)]">Total Amount:</span>
                      <p className="font-bold text-sm text-[var(--ink)]">${emiResult.totalPayment.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. UNIT CONVERTER DEMO */}
          {activeTab === 'converter' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[var(--divider)] pb-4">
                <div>
                  <h3 className="font-bold text-lg text-[var(--ink)]">Offline Unit Converter</h3>
                  <p className="text-xs text-[var(--muted)]">Instant conversion across length, weight & temperature</p>
                </div>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => { setConvCategory('length'); setConvFrom('m'); setConvTo('ft'); }}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-lg ${convCategory === 'length' ? 'bg-[var(--primary)] text-white' : 'bg-[var(--parchment)] text-[var(--body)]'}`}
                  >
                    Length
                  </button>
                  <button
                    onClick={() => { setConvCategory('weight'); setConvFrom('kg'); setConvTo('lb'); }}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-lg ${convCategory === 'weight' ? 'bg-[var(--primary)] text-white' : 'bg-[var(--parchment)] text-[var(--body)]'}`}
                  >
                    Weight
                  </button>
                  <button
                    onClick={() => { setConvCategory('temp'); setConvFrom('C'); setConvTo('F'); }}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-lg ${convCategory === 'temp' ? 'bg-[var(--primary)] text-white' : 'bg-[var(--parchment)] text-[var(--body)]'}`}
                  >
                    Temp
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                {/* Value Input */}
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-xs font-medium text-[var(--muted)]">Input Value:</label>
                  <input
                    type="number"
                    value={convVal}
                    onChange={(e) => setConvVal(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--parchment)] border border-[var(--card-border)] font-bold text-base text-[var(--ink)] focus:outline-none focus:border-[var(--primary)]"
                  />
                  <select
                    value={convFrom}
                    onChange={(e) => setConvFrom(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--parchment)] border border-[var(--card-border)] text-xs font-medium text-[var(--ink)]"
                  >
                    {convCategory === 'length' && (
                      <>
                        <option value="m">Meters (m)</option>
                        <option value="km">Kilometers (km)</option>
                        <option value="cm">Centimeters (cm)</option>
                        <option value="ft">Feet (ft)</option>
                        <option value="in">Inches (in)</option>
                        <option value="mi">Miles (mi)</option>
                      </>
                    )}
                    {convCategory === 'weight' && (
                      <>
                        <option value="kg">Kilograms (kg)</option>
                        <option value="g">Grams (g)</option>
                        <option value="lb">Pounds (lb)</option>
                        <option value="oz">Ounces (oz)</option>
                      </>
                    )}
                    {convCategory === 'temp' && (
                      <>
                        <option value="C">Celsius (°C)</option>
                        <option value="F">Fahrenheit (°F)</option>
                        <option value="K">Kelvin (K)</option>
                      </>
                    )}
                  </select>
                </div>

                {/* Arrow */}
                <div className="flex justify-center text-[var(--primary)]">
                  <ArrowRightLeft className="w-6 h-6 rotate-90 md:rotate-0" />
                </div>

                {/* Output Display */}
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-xs font-medium text-[var(--muted)]">Converted Output:</label>
                  <div className="w-full px-4 py-2.5 rounded-xl bg-[var(--primary-light)] border border-[var(--primary)]/30 font-extrabold text-base text-[var(--primary)]">
                    {convertUnits().toFixed(4)}
                  </div>
                  <select
                    value={convTo}
                    onChange={(e) => setConvTo(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--parchment)] border border-[var(--card-border)] text-xs font-medium text-[var(--ink)]"
                  >
                    {convCategory === 'length' && (
                      <>
                        <option value="m">Meters (m)</option>
                        <option value="km">Kilometers (km)</option>
                        <option value="cm">Centimeters (cm)</option>
                        <option value="ft">Feet (ft)</option>
                        <option value="in">Inches (in)</option>
                        <option value="mi">Miles (mi)</option>
                      </>
                    )}
                    {convCategory === 'weight' && (
                      <>
                        <option value="kg">Kilograms (kg)</option>
                        <option value="g">Grams (g)</option>
                        <option value="lb">Pounds (lb)</option>
                        <option value="oz">Ounces (oz)</option>
                      </>
                    )}
                    {convCategory === 'temp' && (
                      <>
                        <option value="C">Celsius (°C)</option>
                        <option value="F">Fahrenheit (°F)</option>
                        <option value="K">Kelvin (K)</option>
                      </>
                    )}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* 3. GPA CALCULATOR DEMO */}
          {activeTab === 'gpa' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[var(--divider)] pb-4">
                <div>
                  <h3 className="font-bold text-lg text-[var(--ink)]">Academic GPA Manager</h3>
                  <p className="text-xs text-[var(--muted)]">Calculate semester GPA based on course credit hours & grades</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium text-[var(--muted)] block">Calculated GPA:</span>
                  <span className="text-2xl font-extrabold text-[var(--primary)]">{calculateGpa()} / 4.00</span>
                </div>
              </div>

              <div className="space-y-3">
                {courses.map((course, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[var(--parchment)] border border-[var(--card-border)] text-xs">
                    <span className="font-semibold text-[var(--ink)] w-32 truncate">{course.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--muted)]">Credits:</span>
                      <select
                        value={course.credits}
                        onChange={(e) => {
                          const updated = [...courses];
                          updated[idx].credits = Number(e.target.value);
                          setCourses(updated);
                        }}
                        className="px-2 py-1 rounded bg-[var(--card)] border border-[var(--card-border)] font-medium"
                      >
                        <option value={1}>1 Cr</option>
                        <option value={2}>2 Cr</option>
                        <option value={3}>3 Cr</option>
                        <option value={4}>4 Cr</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--muted)]">Grade:</span>
                      <select
                        value={course.gradePoint}
                        onChange={(e) => {
                          const updated = [...courses];
                          updated[idx].gradePoint = Number(e.target.value);
                          setCourses(updated);
                        }}
                        className="px-2 py-1 rounded bg-[var(--card)] border border-[var(--card-border)] font-bold text-[var(--primary)]"
                      >
                        <option value={4.0}>A (4.0)</option>
                        <option value={3.7}>A- (3.7)</option>
                        <option value={3.3}>B+ (3.3)</option>
                        <option value={3.0}>B (3.0)</option>
                        <option value={2.7}>B- (2.7)</option>
                        <option value={2.0}>C (2.0)</option>
                        <option value={0.0}>F (0.0)</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. DEVELOPER JSON & BASE64 DEMO */}
          {activeTab === 'json' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[var(--divider)] pb-4">
                <div>
                  <h3 className="font-bold text-lg text-[var(--ink)]">Developer JSON & Base64 Tool</h3>
                  <p className="text-xs text-[var(--muted)]">Format, minify, and encode developer payloads 100% locally</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[var(--ink)]">Input payload:</label>
                  <textarea
                    rows={6}
                    value={jsonInput}
                    onChange={(e) => setJsonInput(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[var(--parchment)] border border-[var(--card-border)] font-mono text-xs text-[var(--ink)] focus:outline-none focus:border-[var(--primary)]"
                  />
                  <div className="flex flex-wrap gap-2 pt-1">
                    <button
                      onClick={formatJson}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--primary)] text-white"
                    >
                      Format JSON
                    </button>
                    <button
                      onClick={minifyJson}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--parchment)] text-[var(--body)] border border-[var(--card-border)]"
                    >
                      Minify
                    </button>
                    <button
                      onClick={encodeBase64}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--parchment)] text-[var(--body)] border border-[var(--card-border)]"
                    >
                      Encode Base64
                    </button>
                    <button
                      onClick={decodeBase64}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--parchment)] text-[var(--body)] border border-[var(--card-border)]"
                    >
                      Decode Base64
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-[var(--ink)]">Formatted Output:</label>
                    <button
                      onClick={() => copyToClipboard(jsonOutput)}
                      className="flex items-center gap-1 text-[11px] font-semibold text-[var(--primary)] hover:underline"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="w-full h-44 p-3 rounded-xl bg-[var(--parchment)] border border-[var(--card-border)] font-mono text-xs text-[var(--ink)] overflow-auto">
                    {jsonOutput}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
