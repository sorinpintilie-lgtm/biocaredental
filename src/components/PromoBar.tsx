"use client";

/**
 * Fixed promo bar rendered at the very top of the viewport.
 *
 * Notes:
 * - Uses global CSS var `--promo-bar-height` for layout offset.
 * - Accounts for iOS safe-area via `env(safe-area-inset-top)`.
 */
export function PromoBar() {
  return (
    <aside
      aria-label="Promo banner"
      className="fixed inset-x-0 top-0 z-[55] border-b border-[color:var(--stroke)] bg-[color:color-mix(in_oklab,var(--background)_82%,transparent)] backdrop-blur"
    >
      {/* Safe-area padding creates space above the fixed bar on iOS */}
      <div className="pt-[env(safe-area-inset-top)]">
        <div className="mx-auto flex h-[var(--promo-bar-height)] max-w-6xl items-center justify-between gap-3 px-4">
          <p className="min-w-0 text-sm font-bold tracking-tight text-[color:var(--foreground)] sm:text-base">
            <span className="block truncate">
              Concept demo • Conținut orientativ • Dezvoltat de sky.ro
            </span>
          </p>

          <a
            href="tel:0720088880"
            className="shrink-0 rounded-full bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent2)] px-3 py-2 text-xs font-extrabold text-white shadow-lg transition hover:shadow-xl"
          >
            Vreau varianta finală!
          </a>
        </div>
      </div>
    </aside>
  );
}

