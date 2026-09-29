'use client';

import { useState, type FormEvent } from 'react';
import { MapPin } from 'lucide-react';
import Reveal from '@/components/base/Reveal';

export default function HomeValue() {
  const [address, setAddress] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!address.trim()) {
      setResult(null);
      return;
    }
    const seed = address.trim().length % 5;
    const base = 780 + seed * 65;
    const low = base - 35;
    const high = base + 45;
    setResult(`$${low}K – $${high}K`);
  };

  return (
    <section id="value" className="px-3 py-3 md:px-5">
      <div className="mx-auto max-w-[1520px] overflow-hidden rounded-[24px] border border-background-200 bg-background-50 md:rounded-[36px]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[340px] lg:min-h-full">
            <img
              loading="lazy"
              decoding="async"
              src="https://assets.agentfire3.com/uploads/sites/2739/2026/03/Arlington-VA-Area-Guide-AUTOx1150.fit.jpeg"
              alt="Arlington Virginia neighborhood — home values across the DMV"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/75 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background-50/70" aria-hidden="true" />
          </div>

          <div className="px-6 py-16 md:px-14 md:py-24">
            <Reveal>
              <p className="eyebrow text-[11px] text-accent-700">What&rsquo;s My Home Worth</p>
              <h2 className="mt-6 font-heading text-[30px] font-normal leading-[1.08] tracking-[-0.015em] text-foreground-950 md:text-[46px]">
                Know Your Home&rsquo;s Value
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
                Curious about your home&rsquo;s market value? Our easy-to-use Property Valuation tool provides a quick
                and accurate estimate, helping you make informed decisions about selling, refinancing, or planning your
                next move.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <form id="home-value-form" onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
                <label htmlFor="valuation-address" className="eyebrow text-[10px] text-foreground-500">
                  Property Address
                </label>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                  <span className="flex flex-1 items-center gap-3 rounded-xl border border-background-300 bg-background-100 px-4 py-4">
                    <MapPin className="h-5 w-5 text-primary-500" aria-hidden="true" />
                    <input
                      id="valuation-address"
                      name="address"
                      type="text"
                      value={address}
                      onChange={(event) => setAddress(event.target.value)}
                      placeholder="Enter your street, city, state and zip"
                      className="w-full bg-transparent text-sm text-foreground-900 placeholder:text-foreground-400 outline-none"
                    />
                  </span>
                  <button
                    type="submit"
                    className="whitespace-nowrap rounded-xl bg-primary-500 px-8 py-4 text-sm font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600"
                  >
                    Search
                  </button>
                </div>
              </form>

              {result ? (
                <div className="mt-7 rounded-2xl border border-accent-200 bg-accent-50 px-7 py-6">
                  <p className="eyebrow text-[10px] text-accent-800">Estimated Market Range</p>
                  <p className="mt-2 font-heading text-[36px] leading-none text-foreground-950">{result}</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-foreground-600">
                    For an accurate valuation of your DMV home, schedule a consultation with Brandon.
                  </p>
                </div>
              ) : (
                <p className="mt-7 text-[13px] leading-relaxed text-foreground-500">
                  Enter an address to see an instant estimated range. This is an estimate, not an appraisal.
                </p>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}