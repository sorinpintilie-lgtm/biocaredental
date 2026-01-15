"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  phone: string;
}

export function Header({ phone }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.header
        style={{
          opacity: headerOpacity,
          backdropFilter: `blur(${headerBlur}px)`,
        }}
        className={`fixed left-0 right-0 top-[calc(var(--promo-bar-height)+env(safe-area-inset-top))] z-50 transition-all duration-300 ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="border-b border-white/10 bg-white/70 shadow-lg backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            {/* Logo */}
            <a href="#top" className="flex items-center">
              <Image
                src="/layer_1.webp"
                alt="BioCare Dental"
                width={120}
                height={120}
                className="h-auto w-[120px] object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 md:flex">
              <a
                href="#servicii"
                className="rounded-full px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-white/50 hover:text-[color:var(--accent)]"
              >
                Servicii
              </a>
              <a
                href="#despre"
                className="rounded-full px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-white/50 hover:text-[color:var(--accent)]"
              >
                Despre
              </a>
              <a
                href="#contact"
                className="rounded-full px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-white/50 hover:text-[color:var(--accent)]"
              >
                Contact
              </a>
            </nav>

            {/* Desktop CTA Button */}
            <motion.a
              whileTap={{ scale: 0.95 }}
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="hidden items-center justify-center rounded-full bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent2)] px-5 py-2.5 text-sm font-bold text-white shadow-lg transition hover:shadow-xl md:inline-flex"
            >
              Sună acum
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent2)] text-white shadow-lg md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 z-[70] h-full w-[280px] bg-white shadow-2xl md:hidden"
            >
              <div className="flex h-full flex-col">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 p-4">
                  <Image
                    src="/layer_1.webp"
                    alt="BioCare Dental"
                    width={80}
                    height={80}
                    className="h-auto w-[80px] object-contain"
                  />
                  <button
                    onClick={closeMobileMenu}
                    className="grid h-10 w-10 place-items-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-2 p-4">
                  <a
                    href="#servicii"
                    onClick={closeMobileMenu}
                    className="rounded-2xl px-4 py-3 text-base font-semibold text-gray-900 transition hover:bg-gradient-to-r hover:from-[color:var(--accent)]/10 hover:to-[color:var(--accent2)]/10"
                  >
                    Servicii
                  </a>
                  <a
                    href="#despre"
                    onClick={closeMobileMenu}
                    className="rounded-2xl px-4 py-3 text-base font-semibold text-gray-900 transition hover:bg-gradient-to-r hover:from-[color:var(--accent)]/10 hover:to-[color:var(--accent2)]/10"
                  >
                    Despre
                  </a>
                  <a
                    href="#contact"
                    onClick={closeMobileMenu}
                    className="rounded-2xl px-4 py-3 text-base font-semibold text-gray-900 transition hover:bg-gradient-to-r hover:from-[color:var(--accent)]/10 hover:to-[color:var(--accent2)]/10"
                  >
                    Contact
                  </a>
                </nav>

                {/* CTA Button */}
                <div className="mt-auto p-4">
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center rounded-2xl bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent2)] px-6 py-4 text-base font-bold text-white shadow-lg"
                  >
                    Sună acum
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
