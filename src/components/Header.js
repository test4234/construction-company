"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import siteConfig from "../data/siteConfig";

export default function Header() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ✅ NEW NAV ITEMS – ENERGY CLIENT */
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  /* LOCK SCROLL */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  /* SCROLL EFFECT */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? "rgba(248,247,245,0.85)"
          : "var(--bg-section)",
        borderColor: "var(--border-default)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 md:h-20 flex items-center">

          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative h-20 w-25 md:h-24 md:w-25">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.companyName}
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex ml-auto items-center gap-2">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                  style={{
                    color: active
                      ? "var(--color-primary)"
                      : "var(--text-muted)",
                    backgroundColor: active
                      ? "rgba(255,106,0,0.08)"
                      : "transparent",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg"
              style={{
                background: "var(--gradient-primary)",
                color: "var(--text-on-primary)",
              }}
            >
              Get Quote
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={toggleMenu}
            className="md:hidden ml-auto flex items-center justify-center w-10 h-10 rounded-lg"
            style={{
              backgroundColor: "var(--bg-page)",
              border: `1px solid var(--border-default)`,
            }}
            aria-label="Toggle Menu"
          >
            <span
              className="text-xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            borderColor: "var(--border-default)",
            backgroundColor: "var(--bg-section)",
          }}
        >
          <nav className="flex flex-col px-6 py-6 gap-2">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="px-4 py-3 rounded-lg text-base font-semibold transition-all"
                  style={{
                    color: active
                      ? "var(--color-primary)"
                      : "var(--text-muted)",
                    backgroundColor: active
                      ? "rgba(255,106,0,0.08)"
                      : "transparent",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-4 w-full text-center px-4 py-3 rounded-xl font-bold shadow-md"
              style={{
                background: "var(--gradient-primary)",
                color: "var(--text-on-primary)",
              }}
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}