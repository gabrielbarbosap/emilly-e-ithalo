// Divisor ornamental: linha — losango — linha, em ouro.
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 text-gold ${className}`}
      aria-hidden
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/70" />
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <rect
          x="5"
          y="0.5"
          width="6"
          height="6"
          transform="rotate(45 5 0.5)"
          fill="currentColor"
        />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/70" />
    </div>
  );
}
