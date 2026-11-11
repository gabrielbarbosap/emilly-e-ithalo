import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { Ornament } from "./components/Ornament";
import { GiftCard } from "./components/GiftCard";
import { GiftsComingSoon } from "./components/GiftsComingSoon";
import { Reveal } from "./components/Reveal";
import { featuredGifts } from "@/lib/gifts";
import { WEDDING, SHOW_GIFTS } from "@/lib/site";

const steps = [
  {
    n: "01",
    title: "Escolha um presente",
    text: "Dos pequenos gestos aos sonhos grandes — cada item carrega um pedacinho da nossa nova vida.",
  },
  {
    n: "02",
    title: "Presenteie com segurança",
    text: "O pagamento é feito direto pela InfinitePay, de forma simples e protegida. Leva menos de um minuto.",
  },
  {
    n: "03",
    title: "O carinho chega até nós",
    text: "O valor vai direto pra nossa conta e vira o começo do nosso lar. A gente recebe cada gesto com o coração cheio.",
  },
];

export default function Home() {
  return (
    <main id="inicio" className="overflow-hidden">
      <SiteHeader />

      {/* ───────────── HERO ───────────── */}
      <section className="relative flex min-h-screen items-center justify-center bg-navy text-ivory">
        {/* Brilho quente ao fundo — conforto */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmax] w-[70vmax] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(198,161,91,0.22) 0%, rgba(29,58,107,0.12) 40%, transparent 70%)",
            animation: "glow 9s ease-in-out infinite",
          }}
          aria-hidden
        />
        {/* Textura sutil de grão */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-screen"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
          aria-hidden
        />

        {/* Moldura fina de convite — começa abaixo do menu fixo pra não cobri-lo */}
        <div className="pointer-events-none absolute bottom-4 left-4 right-4 top-24 border border-gold/25 sm:bottom-6 sm:left-6 sm:right-6 sm:top-28 md:bottom-8 md:left-8 md:right-8" />
        <div className="pointer-events-none absolute bottom-5 left-5 right-5 top-[6.5rem] border border-gold/10 sm:bottom-7 sm:left-7 sm:right-7 sm:top-[7.5rem] md:bottom-9 md:left-9 md:right-9" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <p
            className="animate-fade text-xs font-semibold uppercase tracking-[0.5em] text-gold-soft"
            style={{ animationDelay: "0.1s" }}
          >
            {WEDDING.verse}
          </p>

          <div className="animate-rise mt-8" style={{ animationDelay: "0.25s" }}>
            <Ornament />
          </div>

          <h1
            className="animate-rise mt-8 font-display text-6xl font-light leading-[0.95] sm:text-7xl md:text-8xl"
            style={{ animationDelay: "0.4s" }}
          >
            {WEDDING.coupleFirst}
            <span className="mx-3 italic text-gold">&amp;</span>
            {WEDDING.coupleSecond}
          </h1>

          <p
            className="animate-rise mx-auto mt-8 max-w-2xl font-display text-xl font-light italic leading-relaxed text-ivory/85 sm:text-2xl"
            style={{ animationDelay: "0.6s" }}
          >
            “Para que todos vejam, e saibam, e considerem, e juntamente entendam
            que a mão do Senhor fez isto, e o Santo de Israel o criou.”
          </p>

          <div
            className="animate-rise mt-11 flex justify-center"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="/presentes"
              className="rounded-full bg-gold px-10 py-3.5 text-sm font-semibold tracking-wide text-navy transition-all hover:bg-gold-soft hover:shadow-[0_8px_30px_rgba(198,161,91,0.35)]"
            >
              Escolher um presente
            </a>
          </div>

          <div
            className="animate-fade mt-14 space-y-1.5 text-sm tracking-[0.25em] text-ivory/55"
            style={{ animationDelay: "1s" }}
          >
            <p>
              {WEDDING.date.toUpperCase()} &nbsp;·&nbsp; {WEDDING.time.toUpperCase()}
            </p>
            <p>{WEDDING.place.toUpperCase()}</p>
          </div>
        </div>
      </section>

      {/* ───────────── COMO FUNCIONA ───────────── */}
      <section
        id="como-funciona"
        className="relative bg-navy px-6 py-28 text-ivory md:py-36"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl">
          <div className="text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
                Simples assim
              </p>
              <h2 className="mt-5 font-display text-4xl font-light sm:text-5xl">
                Como presentear
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 140}>
                <div className="group relative h-full rounded-2xl border border-gold/15 bg-navy-700/40 p-8 transition-colors hover:border-gold/40">
                  <span className="font-display text-5xl font-light text-gold/80">
                    {s.n}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-normal">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-ivory/70">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-14 text-center text-sm text-ivory/55">
              Pagamento processado com segurança pela{" "}
              <span className="text-gold-soft">InfinitePay</span>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───────────── VITRINE DE PRESENTES ───────────── */}
      <section id="presentes" className="bg-cream px-6 py-28 md:py-36">
        <div className="mx-auto max-w-6xl">
          {SHOW_GIFTS ? (
            <>
              <div className="text-center">
                <Reveal>
                  <Ornament className="mb-10" />
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
                    Presenteie com carinho
                  </p>
                  <h2 className="mt-6 font-display text-4xl font-light text-navy sm:text-5xl">
                    Nossa lista de presentes
                  </h2>
                </Reveal>
              </div>

              <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featuredGifts.map((gift, i) => (
                  <Reveal key={gift.id} delay={(i % 3) * 120}>
                    <GiftCard gift={gift} />
                  </Reveal>
                ))}
              </div>

              <Reveal delay={160}>
                <div className="mt-16 text-center">
                  <a
                    href="/presentes"
                    className="inline-block rounded-full bg-navy px-10 py-4 text-sm font-semibold tracking-wide text-ivory transition-all hover:bg-navy-700 hover:shadow-[0_12px_40px_-12px_rgba(11,26,57,0.6)]"
                  >
                    Ver a lista completa
                  </a>
                </div>
              </Reveal>
            </>
          ) : (
            <Reveal>
              <GiftsComingSoon />
            </Reveal>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
