"use client";

import { useState } from "react";
import { allGifts, CATEGORIES, type Category } from "@/lib/gifts";
import { GiftCard } from "./GiftCard";

type Filter = Category | "Todos";
const filters: Filter[] = ["Todos", ...CATEGORIES];

export function GiftGallery() {
  const [active, setActive] = useState<Filter>("Todos");
  const shown =
    active === "Todos"
      ? allGifts
      : allGifts.filter((g) => g.category === active);

  return (
    <div>
      {/* Filtros por categoria */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {filters.map((f) => {
          const on = f === active;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold tracking-wide transition-all ${
                on
                  ? "border-navy bg-navy text-ivory"
                  : "border-navy/20 text-navy/70 hover:border-navy/50 hover:text-navy"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Grade de presentes */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((gift) => (
          <GiftCard key={gift.id} gift={gift} />
        ))}
      </div>
    </div>
  );
}
