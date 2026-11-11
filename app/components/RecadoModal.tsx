"use client";

import { useEffect, useState } from "react";
import type { Gift } from "@/lib/gifts";
import { formatBRL } from "@/lib/gifts";

type Status = "idle" | "sending" | "sent" | "error";

// Formulário em si — montado com key={gift.id} para resetar o estado a cada abertura.
function RecadoForm({ gift, onClose }: { gift: Gift; onClose: () => void }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/recado", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gift: gift.name,
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          botcheck: data.get("botcheck"),
        }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("sent");
      } else {
        setStatus("error");
        setError(json.error || "Não foi possível enviar. Tente de novo.");
      }
    } catch {
      setStatus("error");
      setError("Sem conexão. Tente de novo.");
    }
  }

  if (status === "sent") {
    return (
      <div className="px-8 py-12 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-3xl">
          💛
        </div>
        <h2 className="mt-6 font-display text-3xl font-light text-navy">
          Recado enviado!
        </h2>
        <p className="mt-3 text-ink/70">
          Obrigado por fazer parte do nosso começo. Ithalo e Emilly vão ler com
          muito carinho.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-8 rounded-full bg-navy px-8 py-3 text-sm font-semibold tracking-wide text-ivory transition-colors hover:bg-navy-700"
        >
          Fechar
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="px-8 pb-8 pt-7">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
        Obrigado por presentear
      </p>
      <h2 className="mt-3 font-display text-3xl font-light leading-tight text-navy">
        {gift.name}
        <span className="ml-2 text-xl text-ink/45">{formatBRL(gift.price)}</span>
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-ink/70">
        O pagamento abriu em outra aba. Enquanto isso, deixe um recado para
        Ithalo &amp; Emilly — ele vai direto para o e-mail do casal. 💌
      </p>

      {/* Honeypot anti-spam (escondido) */}
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy">
            Seu nome
          </label>
          <input
            name="name"
            required
            maxLength={80}
            placeholder="Como você se chama?"
            className="w-full rounded-xl border border-navy/15 bg-ivory px-4 py-2.5 text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-gold"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy">
            Seu e-mail <span className="text-ink/40">(opcional)</span>
          </label>
          <input
            name="email"
            type="email"
            maxLength={120}
            placeholder="pra caso queiram te responder"
            className="w-full rounded-xl border border-navy/15 bg-ivory px-4 py-2.5 text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-gold"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy">
            Recado
          </label>
          <textarea
            name="message"
            required
            rows={4}
            maxLength={1000}
            placeholder="Escreva com o coração…"
            className="w-full resize-none rounded-xl border border-navy/15 bg-ivory px-4 py-2.5 text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-gold"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-700">
          {error}
        </p>
      )}

      <div className="mt-6 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="rounded-full px-5 py-2.5 text-sm font-medium text-ink/60 transition-colors hover:text-ink"
        >
          Agora não
        </button>
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-gold px-7 py-2.5 text-sm font-semibold tracking-wide text-navy transition-all hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Enviando…" : "Enviar recado"}
        </button>
      </div>
    </form>
  );
}

export function RecadoModal({
  gift,
  onClose,
}: {
  gift: Gift | null;
  onClose: () => void;
}) {
  // Fecha com Esc e trava o scroll do fundo enquanto o modal está aberto.
  useEffect(() => {
    if (!gift) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [gift, onClose]);

  if (!gift) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-ivory shadow-2xl ring-1 ring-gold/20">
        <RecadoForm key={gift.id} gift={gift} onClose={onClose} />
      </div>
    </div>
  );
}
