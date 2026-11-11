"use client";

import { useEffect, useState } from "react";
import type { Gift } from "@/lib/gifts";
import { formatBRL } from "@/lib/gifts";

type Status = "idle" | "sending" | "sent" | "error";

// Formulário em si — montado com key={gift.id} para resetar o estado a cada abertura.
function RecadoForm({ gift, onClose }: { gift: Gift; onClose: () => void }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  // Depois que o recado é enviado, encaminha o convidado para o pagamento.
  useEffect(() => {
    if (status !== "sent") return;
    const t = setTimeout(() => {
      window.location.href = gift.link;
    }, 2200);
    return () => clearTimeout(t);
  }, [status, gift.link]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");

    // Web3Forms (plano grátis) só aceita envio pelo navegador. A access key é
    // pública por design, então pode ficar no client (NEXT_PUBLIC_).
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setError("Envio ainda não configurado (falta a chave do Web3Forms).");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `💌 Recado no site do casamento — de ${data.get("name")}`,
          from_name: "Site do Casamento Emilly & Ithalo",
          name: data.get("name"),
          botcheck: data.get("botcheck") ? true : undefined,
          message: `Presente escolhido: ${gift.name}\n\nRecado:\n${data.get("message") || "(sem recado)"}`,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
      } else {
        setStatus("error");
        setError(json.message || "Não foi possível enviar. Tente de novo.");
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
          Obrigado por fazer parte do nosso começo. Emilly e Ithalo vão ler com
          muito carinho. Agora é só concluir o seu presente.
        </p>
        <a
          href={gift.link}
          className="mt-8 inline-block rounded-full bg-gold px-8 py-3 text-sm font-semibold tracking-wide text-navy transition-colors hover:bg-gold-soft"
        >
          Ir para o pagamento
        </a>
        <p className="mt-4 text-xs text-ink/45">
          Você será redirecionado automaticamente…
        </p>
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
        Se quiser, deixe um recado para Emilly &amp; Ithalo — é opcional, só o
        nome basta. Em seguida, você segue para o pagamento. 💌
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
            Recado <span className="text-ink/40">(opcional)</span>
          </label>
          <textarea
            name="message"
            rows={4}
            maxLength={1000}
            placeholder="Escreva com o coração… (ou deixe em branco)"
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
          {status === "sending" ? "Enviando…" : "Enviar e ir ao pagamento"}
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
