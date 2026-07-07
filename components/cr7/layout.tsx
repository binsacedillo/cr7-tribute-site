"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "./constants";

export function Header({ scrolled }: { scrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 border-b border-transparent transition-[background-color,padding,backdrop-filter,border-color,box-shadow] duration-500 ease-out ${
        scrolled
          ? "border-white/10 bg-black/70 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-transparent via-museum-gold/85 to-transparent transition-transform duration-500 ease-out ${
          scrolled ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
        }`}
      />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <a href="#home" onClick={() => setMenuOpen(false)} className="font-display text-3xl tracking-wide text-museum-gold">
          CR7
        </a>
        <div className="hidden items-center gap-7 text-sm uppercase tracking-[0.22em] text-museum-gray md:flex">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="transition hover:text-museum-white">
              {label}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center border border-white/10 bg-black/25 text-museum-gold transition hover:border-museum-gold focus:outline-none focus:ring-2 focus:ring-museum-gold md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      <div
        id="mobile-navigation"
        className={`mx-5 mt-4 border border-museum-gold/20 bg-black/90 backdrop-blur-xl transition md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="grid divide-y divide-white/10">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-sm uppercase tracking-[0.22em] text-museum-gray transition hover:bg-white/5 hover:text-museum-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-museum-gold"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-16 text-center">
      <p className="text-xl text-museum-gray">&quot;Legends retire. Legacies don&apos;t.&quot;</p>
      <p className="mt-8 font-display text-4xl uppercase leading-none text-museum-white sm:text-5xl md:text-6xl">Thank you, Cristiano.</p>
      <p className="mt-4 text-museum-gold">1985 - Forever.</p>
      
      <div className="mt-12 max-w-xl mx-auto border-t border-white/5 pt-6 text-[10px] uppercase font-mono tracking-widest text-museum-gray/30 space-y-2">
        <p>Disclaimer &amp; Privacy Policy</p>
        <p className="normal-case font-sans tracking-normal leading-5">
          This website is a non-commercial tribute project built solely for portfolio demonstration purposes. All copyright, trademarks, and media assets belong to their respective owners. No copyright infringement is intended. No user tracking or personal data collection is performed.
        </p>
      </div>
    </footer>
  );
}
