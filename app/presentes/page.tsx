import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { Ornament } from "../components/Ornament";
import { GiftGallery } from "../components/GiftGallery";
import { GiftsComingSoon } from "../components/GiftsComingSoon";
import { SHOW_GIFTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lista de Presentes — Ithalo & Emilly",
  description:
    "Escolha um presente e ajude Ithalo e Emilly a construir o começo de uma vida juntos.",
};

export default function PresentesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <SiteHeader />

      {/* Cabeçalho da lista */}
      <section className="relative overflow-hidden bg-navy px-6 pb-20 pt-36 text-center text-ivory">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[40vmax] w-[40vmax] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(198,161,91,0.18) 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-2xl">
          <Ornament className="mb-8" />
          {SHOW_GIFTS ? (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
                De R$ 150 até os sonhos maiores
              </p>
              <h1 className="mt-6 font-display text-5xl font-light sm:text-6xl">
                Lista de Presentes
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-ivory/75">
                Cada presente é um gesto de amor que vira o começo do nosso lar.
                Escolha o que fizer sentido pra você — o carinho é o que importa.
              </p>
            </>
          ) : (
            <>
              <h1 className="mt-6 font-display text-5xl font-light sm:text-6xl">
                Lista de Presentes
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-ivory/75">
                Em breve, bem aqui.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Galeria com filtro, ou estado "em breve" */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          {SHOW_GIFTS ? (
            <>
              <GiftGallery />
              <p className="mt-16 text-center text-sm text-ink/50">
                O pagamento é feito com segurança pela InfinitePay.
              </p>
            </>
          ) : (
            <GiftsComingSoon />
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
