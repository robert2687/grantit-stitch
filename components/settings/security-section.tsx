export function SecuritySection() {
  return (
    <section className="ambient-shadow mb-8 rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-10">
      <div className="mb-8">
        <h2 className="mb-1 font-headline text-xl font-bold tracking-tight">
          Security Protocols
        </h2>
        <p className="text-sm font-medium uppercase tracking-widest text-on-primary-container">
          Access Control
        </p>
      </div>
      <div className="space-y-8">
        {/* Password Management */}
        <div className="flex items-center justify-between rounded-lg bg-surface p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-container/10">
              <span className="material-symbols-outlined text-secondary">
                lock_open
              </span>
            </div>
            <div>
              <p className="font-bold">Password Management</p>
              <p className="text-xs text-on-primary-container">
                Last updated 14 days ago
              </p>
            </div>
          </div>
          <button className="rounded border border-outline-variant px-4 py-2 text-xs font-bold transition-colors hover:bg-surface-container-highest">
            UPDATE PASSWORD
          </button>
        </div>

        {/* Two-Factor Authentication */}
        <div className="flex items-center justify-between rounded-lg bg-surface p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-tertiary-container/10">
              <span
                className="material-symbols-outlined text-on-tertiary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
            </div>
            <div>
              <p className="font-bold">Two-Factor Authentication</p>
              <div className="mt-0.5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-on-tertiary-container"></span>
                <p className="text-[10px] font-bold uppercase tracking-tighter text-on-tertiary-container">
                  Status: Active
                </p>
              </div>
            </div>
          </div>
          <button className="rounded border border-error/20 px-4 py-2 text-xs font-bold text-error transition-colors hover:bg-error-container/20">
            DEACTIVATE
          </button>
        </div>
      </div>
    </section>
  );
}
