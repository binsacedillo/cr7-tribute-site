"use client";

import { X } from "lucide-react";
import type { ModalState } from "./types";

export function DetailModal({ modal, onClose }: { modal: ModalState; onClose: () => void }) {
  if (!modal) return null;

  const momentImage = modal.kind === "moment" ? modal.item.image : undefined;
  const momentImageAlign = modal.kind === "moment" ? modal.item.imageAlign : undefined;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-4 backdrop-blur-sm sm:px-5" role="dialog" aria-modal="true">
      <div className={`relative w-full max-h-[calc(100dvh-2rem)] overflow-y-auto border border-museum-gold/40 bg-museum-black p-5 shadow-gold transition-all duration-300 md:p-7 ${
        modal.kind === "club" ? "max-w-4xl" : modal.kind === "moment" ? "max-w-5xl" : "max-w-2xl"
      }`}>
        <button onClick={onClose} className="absolute right-4 top-4 text-museum-gray transition hover:text-museum-white z-20" aria-label="Close modal">
          <X size={24} />
        </button>
        {modal.kind === "club" ? (
          <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] -mx-5 -mt-5 -mb-5 md:-mx-7 md:-mt-7 md:-mb-7">
            {/* Left Side: Portrait Image Banner */}
            <div className="relative h-72 md:h-auto min-h-[320px] md:min-h-[460px] overflow-hidden border-b md:border-b-0 md:border-r border-museum-gold/30">
              {modal.item.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={modal.item.image}
                  alt={modal.item.name}
                  className={`h-full w-full object-cover ${modal.item.imageAlign || "object-center"}`}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-black/40 text-museum-gray font-mono text-xs uppercase tracking-widest">
                  No Exhibit Image
                </div>
              )}
              {/* Fade Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-museum-black via-transparent to-transparent opacity-90 z-10" />
            </div>
            {/* Right Side: Details Content */}
            <div className="p-5 md:p-7 md:pl-0 md:pr-10 md:py-10 flex flex-col justify-center overflow-y-auto md:max-h-[500px]">
              <p className="text-sm uppercase tracking-[0.3em] text-museum-gold">{modal.item.years}</p>
              <h2 className="mt-4 font-display text-4xl uppercase leading-none text-museum-white md:text-5xl">{modal.item.name}</h2>
              <p className="mt-3 text-sm text-museum-gray">{modal.item.country}</p>
              <p className="mt-5 text-3xl font-semibold text-museum-white">{modal.item.goals} goals</p>
              
              <h3 className="mt-6 font-semibold text-museum-gold uppercase tracking-wider text-xs">Trophies</h3>
              <p className="mt-2 text-sm leading-6 text-museum-gray">{modal.item.trophies.length ? modal.item.trophies.join(", ") : "A chapter defined more by return than silverware."}</p>
              
              <h3 className="mt-6 font-semibold text-museum-gold uppercase tracking-wider text-xs">Moments</h3>
              <p className="mt-2 text-sm leading-6 text-museum-gray">{modal.item.moments.join(" | ")}</p>
            </div>
          </div>
        ) : modal.kind === "milestone" ? (
          <>
            <p className="text-sm uppercase tracking-[0.3em] text-museum-gold">Chapter One | Milestone {modal.item.number}</p>
            <h2 className="mt-4 font-display text-4xl uppercase leading-none text-museum-white md:text-5xl">{modal.item.title}</h2>
            <div className="mt-6 space-y-4 text-sm leading-6 text-museum-gray overflow-y-auto max-h-[300px] pr-2">
              {modal.item.story.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            {modal.item.quote && (
              <div className="mt-8 border-l-2 border-museum-gold pl-4 italic text-museum-white text-sm">
                &quot;{modal.item.quote}&quot;
              </div>
            )}
          </>
        ) : (
          <div className="-mx-5 -mt-5 -mb-5 grid overflow-hidden md:-mx-7 md:-mt-7 md:-mb-7 md:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[320px] md:min-h-[560px] border-b border-museum-gold/25 md:border-b-0 md:border-r">
              {momentImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={momentImage}
                  alt={modal.item.title}
                  className={`h-full w-full object-cover ${momentImageAlign || "object-center"}`}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-black/60 text-xs uppercase tracking-[0.35em] text-museum-gray">
                  No Exhibit Image
                </div>
              )}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.2)_45%,rgba(0,0,0,0.92)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-museum-gold">{modal.item.year}</p>
                <h2 className="mt-3 max-w-[10ch] font-display text-4xl md:text-7xl uppercase leading-[0.9] text-museum-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)]">
                  {modal.item.title}
                </h2>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8 p-5 md:p-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-museum-gold/80">Chapter Five | Iconic Moments</p>
                <p className="mt-4 text-base leading-8 text-museum-gray md:text-lg">
                  {modal.item.context}
                </p>
                <div className="mt-6 border-l border-museum-gold/40 pl-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-museum-gray">Why it matters</p>
                  <p className="mt-2 text-sm leading-7 text-museum-white">
                    {modal.item.stat}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 text-xs uppercase tracking-[0.28em] text-museum-gray">
                <div className="border border-white/10 bg-white/5 px-4 py-3">{`${modal.item.year} | ${modal.item.stat}`}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
