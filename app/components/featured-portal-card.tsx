import { sendGTMEvent } from "@next/third-parties/google";
import type { FeaturedHighlight } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Globe } from "lucide-react";
import Link from "next/link";

const accentStyles: Record<
  FeaturedHighlight["accent"],
  { gradient: string; ring: string }
> = {
  slate: {
    gradient:
      "from-slate-600/90 via-slate-700/80 to-slate-900 dark:from-slate-500/40 dark:via-slate-600/30 dark:to-slate-900/80",
    ring: "ring-slate-400/20",
  },
  indigo: {
    gradient:
      "from-indigo-600/90 via-violet-700/75 to-slate-900 dark:from-indigo-500/45 dark:via-violet-600/35 dark:to-slate-900/80",
    ring: "ring-indigo-400/25",
  },
  emerald: {
    gradient:
      "from-emerald-600/85 via-teal-700/70 to-slate-900 dark:from-emerald-500/40 dark:via-teal-600/30 dark:to-slate-900/80",
    ring: "ring-emerald-400/25",
  },
  amber: {
    gradient:
      "from-amber-600/85 via-orange-700/70 to-slate-900 dark:from-amber-500/38 dark:via-orange-600/28 dark:to-slate-900/80",
    ring: "ring-amber-400/25",
  },
  rose: {
    gradient:
      "from-rose-600/85 via-fuchsia-700/70 to-slate-900 dark:from-rose-500/38 dark:via-fuchsia-600/28 dark:to-slate-900/80",
    ring: "ring-rose-400/25",
  },
};

type FeaturedPortalCardProps = {
  item: FeaturedHighlight;
  className?: string;
};

export default function FeaturedPortalCard({
  item,
  className,
}: FeaturedPortalCardProps) {
  const { gradient, ring } = accentStyles[item.accent];

  return (
    <Link
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-xl border bg-card p-5 shadow-sm transition-all duration-300",
        "hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        ring,
        className,
      )}
      onClick={() =>
        sendGTMEvent({
          event: "buttonClicked",
          value: `Featured: ${item.title}`,
        })
      }
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-linear-to-br opacity-90 transition-opacity group-hover:opacity-100",
          gradient,
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.18),transparent_45%)] dark:bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.08),transparent_50%)]" />
      <div className="relative flex items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold leading-snug text-white drop-shadow-sm">
            {item.title}
          </h3>
          <p className="text-sm leading-relaxed text-white/85">
            {item.description}
          </p>
        </div>
        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-transform group-hover:scale-105">
          <ArrowUpRight className="size-4" aria-hidden />
        </span>
      </div>
      <div className="relative mt-6 flex flex-wrap items-center gap-2 text-xs font-medium text-white/90">
        <Globe className="size-3.5 opacity-90" aria-hidden />
        <span className="rounded-full bg-black/20 px-2 py-0.5 backdrop-blur-sm">
          {item.domain}
        </span>
      </div>
    </Link>
  );
}
