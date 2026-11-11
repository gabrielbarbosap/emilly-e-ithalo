"use client";

import type { Gift } from "@/lib/gifts";
import { openRecado } from "./recadoBus";

// Botão "Presentear": abre o modal de recado. O envio do recado é que encaminha
// para o pagamento da InfinitePay. Sem link ainda = "Em breve".
export function PresentButton({ gift }: { gift: Gift }) {
  if (!gift.link) {
    return (
      <span
        className="cursor-default rounded-full border border-navy/15 px-5 py-2 text-xs font-semibold tracking-wide text-ink/40"
        title="Link de pagamento em breve"
      >
        Em breve
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => openRecado(gift)}
      className="rounded-full bg-navy px-5 py-2 text-xs font-semibold tracking-wide text-ivory transition-colors group-hover:bg-gold group-hover:text-navy"
    >
      Presentear
    </button>
  );
}
