"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { Gift } from "@/lib/gifts";
import { RecadoModal } from "./RecadoModal";
import { onOpenRecado } from "./recadoBus";

// Montado uma vez no layout: escuta o pedido de abrir o recado e renderiza o modal.
export function RecadoProvider({ children }: { children: ReactNode }) {
  const [gift, setGift] = useState<Gift | null>(null);

  useEffect(() => onOpenRecado(setGift), []);

  return (
    <>
      {children}
      <RecadoModal gift={gift} onClose={() => setGift(null)} />
    </>
  );
}
