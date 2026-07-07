"use client";

import { X } from "lucide-react";
import type { ModalState } from "./types";

export function DetailModal({ modal, onClose }: { modal: ModalState; onClose: () => void }) {
  if (!modal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-5 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-2xl border border-museum-gold/40 bg-museum-black p-7 shadow-gold">
        <button onClick={onClose} className="absolute right-4 top-4 text-museum-gray transition hover:text-museum-white" aria-label="Close modal">
          <X size={24} />
        </button>
        {modal.kind === "club" ? (
          <>
            <p className="text-sm uppercase tracking-[0.3em] text-museum-gold">{modal.item.years}</p>
            <h2 className="mt-4 font-display text-6xl uppercase">{modal.item.name}</h2>
            <p className="mt-4 text-museum-gray">{modal.item.country}</p>
            <p className="mt-6 text-3xl text-museum-white">{modal.item.goals} goals</p>
            <h3 className="mt-8 font-semibold text-museum-gold">Trophies</h3>
            <p className="mt-3 leading-7 text-museum-gray">{modal.item.trophies.length ? modal.item.trophies.join(", ") : "A chapter defined more by return than silverware."}</p>
            <h3 className="mt-8 font-semibold text-museum-gold">Moments</h3>
            <p className="mt-3 leading-7 text-museum-gray">{modal.item.moments.join(" | ")}</p>
          </>
        ) : (
          <>
            <p className="text-sm uppercase tracking-[0.3em] text-museum-gold">{modal.item.year}</p>
            <h2 className="mt-4 font-display text-6xl uppercase">{modal.item.title}</h2>
            <p className="mt-6 leading-8 text-museum-gray">{modal.item.context}</p>
            <p className="mt-8 text-2xl text-museum-gold">{modal.item.stat}</p>
          </>
        )}
      </div>
    </div>
  );
}
