import type { Gift } from "@/lib/gifts";

// Mini "event bus" para abrir o modal de recado de qualquer lugar, sem depender
// de React Context cruzar a fronteira server/client. O host escuta, o botão dispara.
const EVENT = "recado:open";

export function openRecado(gift: Gift) {
  window.dispatchEvent(new CustomEvent<Gift>(EVENT, { detail: gift }));
}

export function onOpenRecado(handler: (gift: Gift) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<Gift>).detail);
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
