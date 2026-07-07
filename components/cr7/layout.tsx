import { navItems } from "./constants";

export function Header({ scrolled }: { scrolled: boolean }) {
  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 border-b border-transparent transition-[background-color,padding,backdrop-filter,border-color,box-shadow] duration-500 ease-out ${
        scrolled
          ? "border-white/10 bg-black/70 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <a href="#home" className="font-display text-3xl tracking-wide text-museum-gold">
          CR7
        </a>
        <div className="hidden items-center gap-7 text-sm uppercase tracking-[0.22em] text-museum-gray md:flex">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="transition hover:text-museum-white">
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-16 text-center">
      <p className="text-xl text-museum-gray">&quot;Legends retire. Legacies don&apos;t.&quot;</p>
      <p className="mt-8 font-display text-6xl uppercase text-museum-white">Thank you, Cristiano.</p>
      <p className="mt-4 text-museum-gold">1985 - Forever.</p>
    </footer>
  );
}
