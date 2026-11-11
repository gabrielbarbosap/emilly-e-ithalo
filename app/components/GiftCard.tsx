import { type Gift, formatBRL } from "@/lib/gifts";
import { PresentButton } from "./PresentButton";

export function GiftCard({ gift }: { gift: Gift }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-ivory transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(11,26,57,0.35)]">
      {/* Placeholder visual elegante (sem foto ainda) */}
      <div className="relative flex h-44 items-center justify-center bg-navy">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, rgba(198,161,91,0.35), transparent 60%)",
          }}
        />
        <span className="relative font-display text-xl italic text-gold-soft">
          {gift.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-normal text-navy">
          {gift.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
          {gift.note}
        </p>
        <div className="mt-6 flex items-center justify-between">
          <span className="font-display text-2xl text-navy">
            {formatBRL(gift.price)}
          </span>
          <PresentButton gift={gift} />
        </div>
      </div>
    </article>
  );
}
