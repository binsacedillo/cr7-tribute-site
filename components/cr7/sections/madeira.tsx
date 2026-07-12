"use client";

import { SectionTitle } from "../ui";
import { madeiraMilestones } from "@/data/site";
import type { OpenModal } from "../types";

export function MadeiraSection({ openModal }: { openModal: OpenModal }) {
  return (
    <section id="madeira" className="relative flex min-h-screen items-center px-5 pt-28 pb-12 overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none select-none"
        style={{
          backgroundImage: "linear-gradient(180deg, rgba(9,9,9,1) 0%, rgba(9,9,9,0.3) 50%, rgba(9,9,9,1) 100%), url('/images/madeira.jpg')",
        }}
      />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center lg:gap-12">
        <SectionTitle
          kicker="Chapter One"
          title="The Boy from Madeira"
          text="Before the records and stadium lights, there was a boy from Funchal carrying a family's hope and an impossible appetite for work."
        />
        <div className="border border-museum-gold/25 bg-museum-panel p-5 shadow-gold flex flex-col w-full sm:p-6">
          {madeiraMilestones.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => openModal({ kind: "milestone", item })}
              className="group flex w-full items-start text-left gap-5 border-b border-white/10 py-5 last:border-0 hover:bg-white/5 transition px-4 -mx-4 focus:outline-none focus:ring-1 focus:ring-museum-gold cursor-pointer"
            >
              <span className="font-display text-5xl text-museum-gold transition group-hover:scale-105">{item.number}</span>
              <div className="pt-2">
                <p className="text-xl text-museum-white group-hover:text-museum-gold transition">{item.title}</p>
                <p className="mt-1 text-xs text-museum-gray group-hover:text-museum-white transition">Read exhibit story</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
