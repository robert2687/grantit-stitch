"use client";

import { useState } from "react";

export function RegionalSettings() {
  const [language, setLanguage] = useState("en-gb");
  const [timezone, setTimezone] = useState("gmt-0");

  return (
    <section className="ambient-shadow mb-12 rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-10">
      <div className="mb-8">
        <h2 className="mb-1 font-headline text-xl font-bold tracking-tight">
          Global Context
        </h2>
        <p className="text-sm font-medium uppercase tracking-widest text-on-primary-container">
          Localization Preferences
        </p>
      </div>
      <div className="grid grid-cols-2 gap-12">
        <div className="space-y-4">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-on-primary-container">
            System Language
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full cursor-pointer appearance-none border-b-2 border-outline-variant/20 bg-surface-container-low px-0 py-3 font-semibold text-on-surface outline-none transition-all focus:border-secondary"
          >
            <option value="en-gb">English (United Kingdom)</option>
            <option value="en-us">English (United States)</option>
            <option value="de">Deutsch (Standard)</option>
            <option value="fr">Francais (Paris)</option>
          </select>
        </div>
        <div className="space-y-4">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-on-primary-container">
            Active Timezone
          </label>
          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="w-full cursor-pointer appearance-none border-b-2 border-outline-variant/20 bg-surface-container-low px-0 py-3 font-semibold text-on-surface outline-none transition-all focus:border-secondary"
          >
            <option value="gmt-0">(GMT+00:00) London, United Kingdom</option>
            <option value="gmt-5">(GMT-05:00) New York, USA</option>
            <option value="gmt+1">(GMT+01:00) Berlin, Germany</option>
            <option value="gmt+9">(GMT+09:00) Tokyo, Japan</option>
          </select>
        </div>
      </div>
    </section>
  );
}
