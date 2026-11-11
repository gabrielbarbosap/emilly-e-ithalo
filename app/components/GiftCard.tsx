import { type Gift, formatBRL } from "@/lib/gifts";
import { PresentButton } from "./PresentButton";

export function GiftCard({ gift }: { gift: Gift }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-ivory transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(11,26,57,0.35)]">
      {/* Foto do produto + etiqueta da categoria */}
      <div className="relative h-44 overflow-hidden bg-navy">
        <img
          src={`/presentes/${gift.id}.jpg`}
          alt={gift.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-navy/65 px-3 py-1 text-[11px] font-medium tracking-wide text-gold-soft backdrop-blur-sm">
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
