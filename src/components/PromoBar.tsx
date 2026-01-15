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
      className="fixed inset-x-0 top-0 z-[55] border-b border-black/10 bg-[#F2B94B]"
    >
      {/* Safe-area padding creates space above the fixed bar on iOS */}
      <div className="pt-[env(safe-area-inset-top)]">
        <div className="mx-auto flex h-[var(--promo-bar-height)] max-w-6xl items-center justify-between gap-3 px-4">
          <p className="min-w-0 text-[13px] font-normal leading-none text-[#1F2933] sm:text-sm">
            {/* Mobile: keep it short so it fits on a single line */}
            <span className="block truncate sm:hidden">
              Concept demo{" "}Dezvoltat de sky.ro{" "}
              <a
                href="tel:+40720088880"
                className="underline underline-offset-2 decoration-[#1F2933]/50 hover:decoration-[#1F2933]"
              >
                +4 0720 088 880
              </a>
            </span>

            {/* Desktop/tablet: full disclaimer + contact */}
            <span className="hidden truncate sm:block">
              Concept demo • Conținut orientativ • Dezvoltat de sky.ro •{" "}
              <a
                href="mailto:dan.trifan@sky.ro"
                className="underline underline-offset-2 decoration-[#1F2933]/50 hover:decoration-[#1F2933]"
              >
                dan.trifan@sky.ro
              </a>
              {" "}•{" "}
              <a
                href="tel:+40720088880"
                className="underline underline-offset-2 decoration-[#1F2933]/50 hover:decoration-[#1F2933]"
              >
                +4 0720 088 880
              </a>
            </span>
          </p>

          <a
            href="mailto:dan.trifan@sky.ro"
            className="hidden shrink-0 rounded-md border border-[#2F80ED]/55 px-3 py-1.5 text-xs font-normal text-[#2F80ED] transition hover:bg-[#2F80ED]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F80ED]/40 sm:inline-flex"
          >
            Contact
          </a>
        </div>
      </div>
    </aside>
  );
}

