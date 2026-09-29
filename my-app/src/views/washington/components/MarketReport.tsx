'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowRight, Check, FileText } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { marketReport } from '@/mocks/washingtonData';
import { Eyebrow } from '@/views/home-v2/components/shared';

interface MarketReportData {
  title: string;
  text: string;
  formId: string;
  submitAddr: string;
  areaName: string;
  coverLabel: string;
  logo: string;
  coverImage: string;
  disclaimer: string;
}

interface MarketReportProps {
  data?: MarketReportData;
}

export default function MarketReport({ data = marketReport }: MarketReportProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    // Named `formData` so it does not shadow the `data` prop, which carries submitAddr.
    const formData = new FormData(form);

    const honeypot = String(formData.get('website_alt') ?? '').trim();
    if (honeypot) {
      setStatus('success');
      return;
    }

    setStatus('loading');
    setFormError('');

    formData.delete('website_alt');
    const body = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === 'string' && value.trim() !== '') body.append(key, value);
    });

    try {
      const response = await fetch(data.submitAddr, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      const responseText = await response.text();
      let parsed: { code?: string; meta?: { message?: string; detail?: string }; message?: string } | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }
      const serverMsg = parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText;
      const isSpam = typeof serverMsg === 'string' && serverMsg.toLowerCase().includes('spam');
      const ok = response.ok && parsed?.code === 'OK' && !isSpam;

      if (!ok) {
        setStatus('error');
        setFormError(serverMsg || 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setFormError('Network error. Please try again in a moment.');
    }
  };

  return (
    <section id="market-report" className="bg-foreground-950 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <Eyebrow tone="light" index="03">
              Market Report
            </Eyebrow>
            <h2 className="mt-7 font-heading text-[32px] font-normal leading-[1.06] tracking-[-0.02em] text-background-50 md:text-[46px]">
              {data.title}
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-background-200/85 md:text-[16px]">
              {data.text}
            </p>

            <div className="mt-10 max-w-xl">
              {status === 'success' ? (
                <div className="flex items-start gap-4 rounded-[22px] border border-background-50/15 bg-background-50/[0.06] p-7">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-500 text-background-50">
                    <Check className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-heading text-[22px] text-background-50">You&rsquo;re all set.</p>
                    <p className="mt-2 text-[14px] leading-relaxed text-background-200/85">
                      Thanks — the {data.areaName} market report is on its way to your inbox.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  id={data.formId}
                  data-readdy-form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 rounded-[22px] border border-background-50/15 bg-background-50/[0.05] p-7"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-background-200/80">
                        First Name
                      </span>
                      <input
                        type="text"
                        name="first_name"
                        required
                        placeholder="First name"
                        className="rounded-xl border border-background-50/20 bg-foreground-950/40 px-4 py-3 text-[14px] text-background-50 placeholder:text-background-200/50 focus:border-background-50/50 focus:outline-none"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-background-200/80">
                        Last Name
                      </span>
                      <input
                        type="text"
                        name="last_name"
                        required
                        placeholder="Last name"
                        className="rounded-xl border border-background-50/20 bg-foreground-950/40 px-4 py-3 text-[14px] text-background-50 placeholder:text-background-200/50 focus:border-background-50/50 focus:outline-none"
                      />
                    </label>
                  </div>
                  <label className="flex flex-col gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-background-200/80">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@email.com"
                      className="rounded-xl border border-background-50/20 bg-foreground-950/40 px-4 py-3 text-[14px] text-background-50 placeholder:text-background-200/50 focus:border-background-50/50 focus:outline-none"
                    />
                  </label>

                  <input
                    className="wa-hp"
                    type="text"
                    name="website_alt"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    readOnly
                  />

                  <label className="flex items-start gap-3 text-[12.5px] leading-relaxed text-background-200/80">
                    <input
                      type="checkbox"
                      name="consent"
                      value="yes"
                      required
                      className="mt-0.5 h-4 w-4 shrink-0 accent-primary-500"
                    />
                    <span>{data.disclaimer}</span>
                  </label>

                  {status === 'error' && formError ? (
                    <p className="rounded-xl border border-primary-500/40 bg-primary-500/10 px-4 py-3 text-[13px] text-primary-200">
                      {formError}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-shimmer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-7 py-4 text-[13px] font-semibold tracking-wide text-background-50 transition-colors duration-300 hover:bg-primary-600 disabled:opacity-70"
                  >
                    {status === 'loading' ? 'Sending…' : 'Get My Market Report'}
                    {status === 'loading' ? null : <ArrowRight className="h-4 w-4" aria-hidden="true" />}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[26px] border border-background-50/15">
              <img
              loading="lazy"
              decoding="async"
                src={data.coverImage}
                alt={`${data.areaName} market report cover`}
                title="Washington DC Market Report"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/95 via-foreground-950/35 to-foreground-950/30" aria-hidden="true" />
              <div className="absolute inset-0 flex flex-col justify-between p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-background-50/30 text-background-50">
                  <FileText className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-heading text-[34px] leading-none text-background-50">{data.areaName}</p>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-background-200/90">
                    {data.coverLabel}
                  </p>
                  <span className="mt-5 block h-px w-16 bg-gradient-to-r from-primary-500 to-accent-500" aria-hidden="true" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}