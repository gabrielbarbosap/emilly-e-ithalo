import { type Gift, formatBRL } from "@/lib/gifts";

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
          {gift.link ? (
            <a
              href={gift.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-navy px-5 py-2 text-xs font-semibold tracking-wide text-ivory transition-colors group-hover:bg-gold group-hover:text-navy"
            >
              Presentear
            </a>
          ) : (
            <span
              className="cursor-default rounded-full border border-navy/15 px-5 py-2 text-xs font-semibold tracking-wide text-ink/40"
              title="Link de pagamento em breve"
            >
              Em breve
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
