import { WEDDING } from "@/lib/site";
import { Ornament } from "./Ornament";

export function SiteFooter() {
  return (
    <footer className="bg-navy px-6 py-20 text-center text-ivory">
      <Ornament className="mb-8" />
      <p className="font-display text-4xl font-light">
        {WEDDING.coupleFirst} <span className="italic text-gold">&amp;</span>{" "}
        {WEDDING.coupleSecond}
      </p>
      <p className="mt-4 text-sm tracking-[0.25em] text-ivory/55">
        {WEDDING.date.toUpperCase()} &nbsp;·&nbsp; {WEDDING.time.toUpperCase()}
      </p>
      <p className="mt-1 text-sm tracking-[0.25em] text-ivory/55">
        {WEDDING.place.toUpperCase()}
      </p>
      <p className="mt-8 text-xs uppercase tracking-[0.35em] text-gold/80">
        {WEDDING.verse}
      </p>
      <p className="mt-8 text-sm text-ivory/45">
        Feito com amor para celebrar o nosso começo.
      </p>
    </footer>
  );
}
