"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/index";

const sections = [
  {
    id: "methodology",
    name: "Technical Methodology",
    icon: "settings_input_component",
    status: "editing",
  },
  {
    id: "timeline",
    name: "Timeline & Execution",
    icon: "calendar_today",
    status: "complete",
  },
  {
    id: "budget",
    name: "Budget Justification",
    icon: "payments",
    status: "complete",
  },
  {
    id: "team",
    name: "Team & Governance",
    icon: "groups",
    status: "draft",
  },
];

export function SectionNav() {
  const [activeSection, setActiveSection] = useState("methodology");
  const progress = 64;

  return (
    <section className="flex w-80 flex-col gap-8 overflow-y-auto border-r-0 bg-surface-container-low p-8">
      {/* Progress */}
      <div>
        <div className="mb-4 flex items-end justify-between">
          <h3 className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            Section Progress
          </h3>
          <span className="font-headline text-2xl font-extrabold text-primary-container">
            {progress}%
          </span>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-surface-container-highest">
          <div
            className="h-full bg-primary-container transition-all duration-1000"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-2">
        <h3 className="font-label mb-4 text-[10px] uppercase tracking-[0.15em] text-outline">
          Proposal Sections
        </h3>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={cn(
              "group flex w-full items-center justify-between rounded-lg p-4 text-left transition-colors",
              activeSection === section.id
                ? "border-l-4 border-primary-container bg-surface-container-highest"
                : "hover:bg-surface-container-high"
            )}
          >
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "material-symbols-outlined",
                  activeSection === section.id
                    ? "text-primary-container"
                    : "text-on-surface-variant opacity-60"
                )}
              >
                {section.icon}
              </span>
              <span
                className={cn(
                  "text-sm",
                  activeSection === section.id
                    ? "font-semibold text-primary-container"
                    : "font-medium text-on-surface-variant"
                )}
              >
                {section.name}
              </span>
            </div>
            {section.status === "editing" && (
              <span className="material-symbols-outlined text-xs text-primary-container">
                edit
              </span>
            )}
            {section.status === "complete" && (
              <span className="material-symbols-outlined text-xs text-on-tertiary-container">
                check_circle
              </span>
            )}
            {section.status === "draft" && (
              <span className="text-[10px] font-bold text-outline">DRAFT</span>
            )}
          </button>
        ))}
      </div>

      {/* AI Context Card */}
      <div className="mt-auto rounded-xl border border-tertiary-container/5 bg-tertiary-container/5 p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-on-tertiary-container">
            bolt
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-on-tertiary-container">
            Architect Intelligence
          </span>
        </div>
        <p className="text-xs leading-relaxed text-on-primary-fixed-variant">
          AI suggestions are calibrated to the{" "}
          <span className="font-bold">Global Infrastructure Fund 2024</span>{" "}
          criteria.
        </p>
      </div>
    </section>
  );
}
