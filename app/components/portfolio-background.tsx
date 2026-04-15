"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import type { CSSProperties } from "react";

/**
 * Full-viewport decorative layers: mesh gradient, floating orbs, grid, grain.
 * pointer-events-none; keep content in a sibling with z-10.
 */
export function PortfolioBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      {/* Base wash */}
      <div
        className={cn(
          "absolute inset-0 transition-colors duration-700",
          isDark
            ? "bg-[#1a1d2e]"
            : "bg-[#f4f6fb]",
        )}
      />

      {/* Soft mesh / aurora bands */}
      <div
        className={cn(
          "absolute inset-0 opacity-90 transition-opacity duration-700",
          isDark
            ? "bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(120,119,198,0.35),transparent_55%),radial-gradient(ellipse_90%_60%_at_100%_50%,rgba(79,70,229,0.2),transparent_50%),radial-gradient(ellipse_80%_50%_at_0%_100%,rgba(56,189,248,0.12),transparent_45%)]"
            : "bg-[radial-gradient(ellipse_100%_70%_at_50%_-10%,rgba(136,144,203,0.45),transparent_55%),radial-gradient(ellipse_80%_50%_at_100%_30%,rgba(99,102,241,0.18),transparent_50%),radial-gradient(ellipse_70%_45%_at_0%_90%,rgba(56,189,248,0.14),transparent_45%)]",
        )}
      />

      {/* Floating orbs */}
      <div
        className={cn(
          "portfolio-orb absolute -left-[20%] top-[10%] h-[min(520px,55vw)] w-[min(520px,55vw)] rounded-full blur-3xl",
          isDark ? "bg-violet-600/35" : "bg-indigo-400/40",
        )}
      />
      <div
        className={cn(
          "portfolio-orb portfolio-orb-delay absolute -right-[15%] top-[35%] h-[min(420px,48vw)] w-[min(420px,48vw)] rounded-full blur-3xl",
          isDark ? "bg-cyan-500/20" : "bg-sky-400/35",
        )}
      />
      <div
        className={cn(
          "portfolio-orb portfolio-orb-delay-2 absolute bottom-[-10%] left-[25%] h-[min(480px,50vw)] w-[min(480px,50vw)] rounded-full blur-3xl",
          isDark ? "bg-fuchsia-600/25" : "bg-violet-400/30",
        )}
      />

      {/* Structural grid */}
      <div
        className={cn(
          "absolute inset-0 bg-size-[48px_48px,48px_48px] opacity-[0.45] dark:opacity-[0.35]",
          "bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)]",
        )}
        style={
          {
            "--grid-line": isDark ? "rgba(148,163,184,0.12)" : "rgba(148,163,184,0.35)",
          } as CSSProperties
        }
      />

      {/* Diagonal shimmer (very subtle) */}
      <div
        className={cn(
          "portfolio-shimmer absolute -inset-full opacity-[0.06] dark:opacity-[0.09]",
          "bg-[linear-gradient(115deg,transparent_40%,rgba(255,255,255,0.5)_50%,transparent_60%)]",
        )}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.4] mix-blend-overlay dark:opacity-[0.28] dark:mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Bottom vignette for depth */}
      <div
        className={cn(
          "absolute inset-0",
          isDark
            ? "bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(0,0,0,0.35),transparent)]"
            : "bg-[radial-gradient(ellipse_90%_55%_at_50%_100%,rgba(255,255,255,0.5),transparent)]",
        )}
      />
    </div>
  );
}
