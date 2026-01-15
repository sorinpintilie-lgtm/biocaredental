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
          <p className="min-w-0 flex-1 text-[13px] font-normal leading-none text-[#1F2933] sm:flex-none sm:text-sm">
            {/* Mobile: keep it short so it fits on a single line */}
            <span className="block sm:hidden">
              <span className="grid w-full min-w-0 grid-cols-[1fr_auto_1fr] items-center gap-2 text-[12px]">
                <span className="min-w-0 truncate text-left">
                  Concept demo
                </span>
                <span className="whitespace-nowrap text-center">
                  Dezvoltat de sky.ro
                </span>
                <span className="whitespace-nowrap text-right">
                  <a
                    href="tel:+40720088880"
                    className="underline underline-offset-2 decoration-[#1F2933]/50 hover:decoration-[#1F2933]"
                  >
                    +4 0720 088 880
                  </a>
                </span>
              </span>
            </span>

            {/* Desktop/tablet: full disclaimer + contact (single line, consistent spacing) */}
            <span className="hidden min-w-0 items-center whitespace-nowrap sm:flex">
              <span className="min-w-0 truncate">Concept demo</span>
              <span className="mx-2 opacity-70" aria-hidden>
                •
              </span>
              <span className="opacity-90">Conținut orientativ</span>
              <span className="mx-2 opacity-70" aria-hidden>
                •
              </span>
              <span className="opacity-90">Dezvoltat de sky.ro</span>
              <span className="mx-2 opacity-70" aria-hidden>
                •
              </span>
              <a
                href="mailto:dan.trifan@sky.ro"
                className="underline underline-offset-2 decoration-[#1F2933]/50 hover:decoration-[#1F2933]"
              >
                dan.trifan@sky.ro
              </a>
              <span className="mx-2 opacity-70" aria-hidden>
                •
              </span>
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
            className="hidden shrink-0 rounded-md bg-[#2F80ED] px-3 py-1.5 text-xs font-normal text-white transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F80ED]/40 sm:inline-flex"
          >
            Contact
          </a>
        </div>
      </div>
    </aside>
  );
}

