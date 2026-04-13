"use client";

import { useState } from "react";
import Image from "next/image";

export function ProfileIdentity() {
  const [name, setName] = useState("RMD26");
  const [email, setEmail] = useState("architect.lead@sovereign.org");

  return (
    <section className="ambient-shadow mb-8 rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-10">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h2 className="mb-1 font-headline text-xl font-bold tracking-tight">
            Architect Identity
          </h2>
          <p className="text-sm font-medium uppercase tracking-widest text-on-primary-container">
            Personal Information
          </p>
        </div>
        <div className="group relative">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBowBuItHs9UFFAroOo7TBQuIqaBZjGc65ItqwH0WSmcBEPCZei6hKX-a-UGgp34bZ02QxFr8rYvMzzpOuKsupwi1Azcv2DxEDLBVbfNXHE5luHQzxg3YSh-JIkDLnFFeaUz62cWZzxfRaApsAB90zDYHwb1-cWBygspYmV0QxoQfMgUtZ_xgKGFZUkGqpIPjokoDSBAxjo3OWKW1syM4yb7DsHbejie6nwmqpsLLnWWf7bcaxkWNBXszS9DVblwtXcqMzqYGmrLE4"
            alt="User Profile"
            width={96}
            height={96}
            className="rounded-full border-4 border-surface-container-low"
          />
          <button className="absolute bottom-0 right-0 rounded-full bg-primary-container p-2 text-on-primary shadow-lg">
            <span className="material-symbols-outlined text-sm">edit</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-12 gap-y-8">
        <div className="space-y-2">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-on-primary-container">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-b-2 border-outline-variant/20 bg-surface-container-low px-0 py-3 font-semibold text-on-surface outline-none transition-all focus:border-secondary focus:ring-0"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-on-primary-container">
            Lead Role
          </label>
          <input
            type="text"
            value="Lead Architect"
            readOnly
            className="w-full cursor-not-allowed border-b-2 border-outline-variant/10 bg-surface-container-low/50 px-0 py-3 font-semibold text-on-primary-container outline-none"
          />
        </div>
        <div className="col-span-2 space-y-2">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-on-primary-container">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b-2 border-outline-variant/20 bg-surface-container-low px-0 py-3 font-semibold text-on-surface outline-none transition-all focus:border-secondary focus:ring-0"
          />
        </div>
      </div>
    </section>
  );
}
