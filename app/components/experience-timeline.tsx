import { Card, CardContent } from "@/components/ui/card";
import type { ExperienceItem } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Briefcase } from "lucide-react";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
};

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="relative mx-auto max-w-3xl ps-2">
      <div
        className="absolute inset-s-[15px] top-2 bottom-2 w-px bg-border"
        aria-hidden
      />
      <ul className="space-y-8">
        {items.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative ps-10">
            <span
              className={cn(
                "absolute inset-s-0 top-1 flex size-8 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-sm",
                job.current && "border-primary/40 text-primary",
              )}
            >
              <Briefcase className="size-4" aria-hidden />
            </span>
            <Card
              className={cn(
                "overflow-hidden border transition-shadow hover:shadow-md",
                job.current && "ring-1 ring-primary/20",
              )}
            >
              <CardContent className="space-y-3 p-5 pt-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold leading-tight">
                    {job.role}
                  </h3>
                  {job.current ? (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      Current
                    </span>
                  ) : null}
                </div>
                <p className="text-sm text-muted-foreground">
                  {job.company} · {job.location} · {job.period}
                </p>
                <ul className="list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
                  {job.points.map((point) => (
                    <li key={point} className="marker:text-primary/60">
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
