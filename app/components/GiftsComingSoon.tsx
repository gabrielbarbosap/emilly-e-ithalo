import { Ornament } from "./Ornament";

// Estado exibido enquanto a lista de presentes não está liberada (SHOW_GIFTS = false).
export function GiftsComingSoon() {
  return (
    <div className="mx-auto max-w-xl text-center">
      <Ornament className="mb-8" />
      <h2 className="font-display text-4xl font-light text-navy sm:text-5xl">
        Nossa lista está chegando
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-ink/70">
        Estamos escolhendo com carinho cada presente. Em breve você vai poder
        fazer parte do começo da nossa história por aqui.
      </p>
      <p className="mt-8 font-display text-2xl italic text-navy/70">
        Volte logo — com amor, aguardamos você.
      </p>
    </div>
  );
}
