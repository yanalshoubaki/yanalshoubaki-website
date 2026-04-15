import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { GithubDark } from "@/components/ui/svgs/githubDark";
import { sendGTMEvent } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  linkTitle?: string;
  linkIcon?: React.ReactNode;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
  linkTitle = "View on GitHub",
  linkIcon = <GithubDark className="h-4 w-4" />,
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden pt-0 transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-3/2 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link
          onClick={(e) => {
            e.stopPropagation();
            sendGTMEvent({
              event: "buttonClicked",
              value: linkTitle,
            });
          }}
          href={link}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm hover:underline"
        >
          {linkIcon}
          {linkTitle}
        </Link>
      </CardFooter>
    </Card>
  );
}
