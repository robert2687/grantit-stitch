import { AppShell } from "@/components/app-shell";
import { Header } from "@/components/header";
import { ProfileIdentity } from "@/components/settings/profile-identity";
import { SecuritySection } from "@/components/settings/security-section";
import { RegionalSettings } from "@/components/settings/regional-settings";

export default function SettingsPage() {
  return (
    <AppShell>
      <Header title="Settings" showSearch={false} />
      <div className="mx-auto max-w-4xl px-8 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="mb-2 font-headline text-5xl font-extrabold tracking-tight text-on-surface">
            Profile Settings
          </h1>
          <p className="text-lg text-on-primary-container">
            Manage your organizational identity, security parameters, and
            regional preferences.
          </p>
        </div>

        {/* Profile Identity Section */}
        <ProfileIdentity />

        {/* Security Section */}
        <SecuritySection />

        {/* Regional Settings Section */}
        <RegionalSettings />

        {/* Action Bar */}
        <div className="flex items-center justify-end gap-6 border-t border-outline-variant/20 pt-6">
          <button className="px-8 py-3 text-sm font-bold text-on-primary-container transition-colors hover:text-on-surface">
            Cancel Changes
          </button>
          <button className="rounded px-10 py-3 bg-primary-container text-sm font-bold text-on-primary shadow-[0_4px_14px_rgba(19,27,46,0.25)] transition-all hover:scale-105 active:scale-95">
            Save Architect Profile
          </button>
        </div>
      </div>
    </AppShell>
  );
}
