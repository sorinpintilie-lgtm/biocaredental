"use client";

import { useState } from "react";
import { X } from "lucide-react";

type StickyNoteProps = {
  /** When true, hides the CTA button on small screens (mobile). */
  hideButtonOnMobile?: boolean;
  /** When true, shows a close (dismiss) button. */
  dismissible?: boolean;
};

export function StickyNote({
  hideButtonOnMobile = true,
  dismissible = true,
}: StickyNoteProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <aside
      aria-label="Concept demo note"
      className="fixed right-4 top-4 z-[60] max-w-[320px]"
    >
      <div className="glass noise relative rounded-3xl border border-[color:var(--stroke)] bg-[color:color-mix(in_oklab,#fff_88%,transparent)] p-4 shadow-xl">
        {dismissible ? (
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full text-[color:var(--muted)] transition hover:bg-black/5 hover:text-[color:var(--foreground)]"
            aria-label="Închide"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        ) : null}

        <div className="pr-8">
          <div className="text-xs font-semibold tracking-tight text-[color:var(--muted)]">
            Concept demo • Conținut orientativ • Dezvoltat de sky.ro
          </div>

          <a
            href="tel:0720088880"
            className={`mt-3 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent2)] px-4 py-3 text-sm font-extrabold text-white shadow-lg transition hover:shadow-xl ${
              hideButtonOnMobile ? "hidden sm:inline-flex" : ""
            }`}
          >
            Vreau varianta finală!
          </a>
        </div>
      </div>
    </aside>
  );
}

