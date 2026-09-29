'use client';

import { useState, type FormEvent } from 'react';
import { MapPin } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function ValuationV2() {
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
    <section id="value" className="bg-background-100 px-5 py-6 md:px-10 md:py-8">
      <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[30px] border border-background-300 bg-background-50">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="px-7 py-16 md:px-14 md:py-24">
            <Reveal>
              <Eyebrow index="05">What&rsquo;s My Home Worth</Eyebrow>
              <h2 className="mt-7 font-heading text-[32px] font-normal leading-[1.06] tracking-[-0.02em] text-foreground-950 md:text-[50px]">
                Know Your Home&rsquo;s <em className="italic">Value</em>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
                Curious about your home&rsquo;s market value? Our easy-to-use Property Valuation tool provides a quick
                and accurate estimate, helping you make informed decisions about selling, refinancing, or planning your
                next move.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <form id="home-value-form-v2" onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
                <label
                  htmlFor="valuation-address-v2"
                  className="text-[10px] font-semibold uppercase tracking-[0.24em] text-foreground-500"
                >
                  Property Address
                </label>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                  <span className="flex flex-1 items-center gap-3 rounded-xl border border-background-300 bg-background-100 px-4 py-4">
                    <MapPin className="h-5 w-5 text-foreground-400" aria-hidden="true" />
                    <input
                      id="valuation-address-v2"
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
                <div className="mt-8 rounded-2xl border border-background-300 bg-background-100 px-7 py-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-foreground-500">
                    Estimated Market Range
                  </p>
                  <p className="mt-2 font-heading text-[38px] leading-none text-foreground-950">{result}</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-foreground-600">
                    For an accurate valuation of your DMV home, schedule a consultation with Brandon.
                  </p>
                </div>
              ) : (
                <p className="mt-8 text-[13px] leading-relaxed text-foreground-500">
                  Enter an address to see an instant estimated range. This is an estimate, not an appraisal.
                </p>
              )}
            </Reveal>
          </div>

          <div className="relative min-h-[340px] lg:min-h-full">
            <img
              loading="lazy"
              decoding="async"
              src="https://assets.agentfire3.com/uploads/sites/2739/2026/03/Arlington-VA-Area-Guide-AUTOx1150.fit.jpeg"
              alt="Arlington Virginia neighborhood — home values across the DMV"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/65 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-background-200">
                Instant Estimate
              </p>
              <p className="mt-2 font-heading text-[22px] text-background-50 md:text-[26px]">
                Built for the DMV market
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}