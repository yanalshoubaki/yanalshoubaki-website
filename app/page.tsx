"use client";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import ExperienceTimeline from "./components/experience-timeline";
import FeaturedPortalCard from "./components/featured-portal-card";
import { PortfolioBackground } from "./components/portfolio-background";
import ProjectCard from "./components/project-card";
import { Reveal } from "./components/reveal";
import TechStack from "./components/tech-stack";
import Image from "next/image";
import { useTheme } from "next-themes";
import { sendGTMEvent } from "@next/third-parties/google";
import { GithubLight } from "@/components/ui/svgs/githubLight";
import { Linkedin } from "@/components/ui/svgs/linkedin";
import { X } from "@/components/ui/svgs/x";
import { contact, experience, featuredHighlights } from "@/lib/portfolio-data";

const headerEase = [0.22, 1, 0.36, 1] as const;

export default function Page() {
  const { theme } = useTheme();
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen bg-background">
      <PortfolioBackground />
      <div className="relative z-10">
        <motion.header
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.5,
            ease: headerEase,
          }}
          className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/55"
        >
          <div className="container flex h-14 items-center mx-auto">
            <div className="mr-4 flex">
              <Link
                className="mr-6 flex items-center space-x-2 cursor-pointer"
                href="/"
              >
                {theme == "dark" ? (
                  <Image
                    src="/logo-light.svg"
                    alt="Logo"
                    width={32}
                    height={32}
                  />
                ) : (
                  <Image
                    src="/logo-dark.svg"
                    alt="Logo"
                    width={32}
                    height={32}
                  />
                )}
              </Link>
              <nav className="hidden md:flex items-center  space-x-6 text-sm font-medium">
                <Link
                  href="#about"
                  className="transition-colors hover:text-foreground/80  cursor-pointer"
                >
                  About
                </Link>
                <Link
                  href="#experience"
                  className="transition-colors hover:text-foreground/80  cursor-pointer"
                >
                  Experience
                </Link>
                <Link
                  href="#highlights"
                  className="transition-colors hover:text-foreground/80  cursor-pointer"
                >
                  Highlights
                </Link>
                <Link
                  href="#projects"
                  className="transition-colors hover:text-foreground/80  cursor-pointer"
                >
                  Projects
                </Link>
                <Link
                  href="#contact"
                  className="transition-colors hover:text-foreground/80  cursor-pointer"
                >
                  Contact
                </Link>
              </nav>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Link
                href="/YanalCV.pdf"
                target="_blank"
                aria-label="Open resume PDF"
                onClick={(e) => {
                  e.stopPropagation();
                  sendGTMEvent({
                    event: "buttonClicked",
                    value: "View Resume",
                  });
                }}
              >
                <Button variant="outline" className="cursor-pointer">
                  Resume
                </Button>
              </Link>
            </div>
          </div>
        </motion.header>

        <main className="container mx-auto px-4 md:px-6">
          <section id="about" className="py-12 md:py-24 lg:py-32">
            <Reveal variant="fade-up" className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-6 text-center">
                <div className="w-full space-y-6">
                  <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                    Software engineer
                  </p>
                  <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                      Yanal Shoubaki
                    </h1>
                    <p className="mx-auto max-w-[720px] text-balance text-gray-500 md:text-xl dark:text-gray-400">
                      I&apos;m a software engineer building with{" "}
                      <span className="bg-linear-to-r from-[#5c6299] to-[#8890CB] bg-clip-text font-semibold text-transparent dark:from-[#a5acd8] dark:to-[#c9cef0]">
                        React.js, Next.js, Node.js, NestJS, and Laravel
                      </span>
                      — from product UI and dashboards to APIs, services, and
                      full-stack delivery.
                    </p>
                  </div>
                  <div className="mx-auto flex max-w-xl flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground sm:text-sm">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/70 px-3 py-1 backdrop-blur-sm">
                      <MapPin className="size-3.5" aria-hidden />
                      Amman, Jordan
                    </span>
                    <span className="rounded-full border border-border/60 bg-background/70 px-3 py-1 backdrop-blur-sm">
                      3+ years shipping production web
                    </span>
                    <span className="rounded-full border border-border/60 bg-background/70 px-3 py-1 backdrop-blur-sm">
                      B.Sc. Network Engineering · BAU
                    </span>
                  </div>
                </div>
                <Reveal
                  variant="fade"
                  delayMs={120}
                  className="flex flex-wrap justify-center gap-2"
                >
                  <Link
                    href="https://github.com/yanalshoubaki"
                    target="_blank"
                    onClick={(e) => {
                      e.stopPropagation();
                      sendGTMEvent({
                        event: "buttonClicked",
                        value: "View Github",
                      });
                    }}
                  >
                    <Button variant="outline" size="icon">
                      <GithubLight className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/yanalshoubaki/"
                    target="_blank"
                    onClick={(e) => {
                      e.stopPropagation();
                      sendGTMEvent({
                        event: "buttonClicked",
                        value: "View LinkedIn",
                      });
                    }}
                  >
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link
                    href="https://x.com/itsyanal"
                    target="_blank"
                    onClick={(e) => {
                      e.stopPropagation();
                      sendGTMEvent({
                        event: "buttonClicked",
                        value: "View Twitter",
                      });
                    }}
                  >
                    <Button variant="outline" size="icon">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                  <Link
                    href="mailto:me@yanalshoubaki.com"
                    onClick={(e) => {
                      e.stopPropagation();
                      sendGTMEvent({
                        event: "buttonClicked",
                        value: "Email Yanal",
                      });
                    }}
                  >
                    <Button variant="outline" size="icon">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </Reveal>
              </div>
            </Reveal>
          </section>

          <section
            id="experience"
            className="border-y border-border/50 bg-muted/25 py-12 backdrop-blur-[2px] md:py-24 lg:py-32 dark:bg-muted/15"
          >
            <Reveal
              variant="scale"
              className="container space-y-10 px-4 md:px-6"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Experience
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                  A concise path from backend foundations to senior frontend
                  ownership — support dashboards, client delivery, and public
                  sector launches.
                </p>
              </div>
              <ExperienceTimeline items={experience} />
            </Reveal>
          </section>

          <section id="highlights" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <Reveal variant="slide-left" className="space-y-10">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Professional highlights
                  </h2>
                  <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                    Selected live products and portals I contributed to — click
                    through to explore the real experience.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {featuredHighlights.map((item, index) => (
                    <Reveal
                      key={item.href}
                      variant="fade-up"
                      delayMs={index * 70}
                      className={index === 0 ? "md:col-span-2" : undefined}
                    >
                      <FeaturedPortalCard
                        item={item}
                        className={index === 0 ? "min-h-[220px]" : undefined}
                      />
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          <section id="projects" className="py-12 md:py-24 lg:py-32">
            <Reveal
              variant="slide-right"
              className="container space-y-12 px-4 md:px-6"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Projects &amp; labs
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                  Personal and demo work you can try end-to-end — APIs, admin
                  tools, and front-end craft.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Reveal variant="fade-up" delayMs={0}>
                  <ProjectCard
                    title="Loqui"
                    description="Connect with friends in a more meaningful way. Share moments, exchange messages, and build relationships on a platform designed for genuine connections."
                    image="/projects/loqui/banner.png"
                    link="https://loqui.yanalshoubaki.com"
                    linkIcon={<Globe className="size-4" />}
                    linkTitle="Visit website"
                    tags={[
                      "Laravel",
                      "React.js",
                      "Typescript",
                      "TailwindCSS",
                      "next.js",
                      "shadcn-ui",
                      "postgresql",
                      "docker",
                      "redis",
                    ]}
                  />
                </Reveal>
                <Reveal variant="fade-up" delayMs={90}>
                  <ProjectCard
                    title="Shifa crm"
                    description="The Healthcare Customer Relations Management “CRM” website, named
                'SHIFA', is designed to facilitate the management of patient care within
                healthcare centers. It provides a comprehensive platform for healthcare
                professionals, administrators, and center staff to efficiently handle patient
                appointments, medical records, prescriptions, and user management, In order to
                improve accessibility to patient information and update it rapidly and with high
                accuracy from anywhere."
                    image="/projects/shifa/banner.png"
                    link="https://shifa-crm.yanalshoubaki.com/admin/login"
                    linkIcon={<Globe className="size-4" />}
                    linkTitle="Visit website"
                    tags={["Laravel", "TailwindCSS", "mysql", "filament"]}
                  />
                </Reveal>
                <Reveal variant="fade-up" delayMs={180}>
                  <ProjectCard
                    title="Cinema App"
                    description="A modern cinema application that allows users to browse movies, view details, and manage bookings. Built with a focus on performance and user experience."
                    image="/projects/cinema/banner.png"
                    link="https://cinema.yanalshoubaki.com"
                    linkIcon={<Globe className="size-4" />}
                    linkTitle="Visit website"
                    tags={["React.js", "Typescript", "TailwindCSS", "Rest API"]}
                  />
                </Reveal>
              </div>
            </Reveal>
          </section>

          <section className="border-t border-border/50 bg-muted/20 py-12 backdrop-blur-[2px] md:py-24 lg:py-32 dark:bg-muted/10">
            <Reveal
              variant="scale"
              className="container space-y-12 px-4 md:px-6"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Tech stack
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                  The tools behind the work — from Laravel APIs to Next.js on
                  the edge.
                </p>
              </div>
              <TechStack />
            </Reveal>
          </section>

          <section id="contact" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <Reveal variant="fade-up" className="mx-auto max-w-2xl space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Contact
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    Open to collaborations, frontend consulting, or a friendly
                    hello.
                  </p>
                </div>
                <div className="mx-auto max-w-md space-y-3 rounded-2xl border border-border/60 bg-muted/20 p-6 dark:bg-muted/10 sm:p-8">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 rounded-xl border border-transparent px-2 py-2.5 text-sm transition-colors hover:border-border/60 hover:bg-background/60"
                    onClick={(e) => {
                      e.stopPropagation();
                      sendGTMEvent({
                        event: "buttonClicked",
                        value: "Contact email",
                      });
                    }}
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border/60 bg-background/80">
                      <Mail
                        className="size-4 text-muted-foreground"
                        aria-hidden
                      />
                    </span>
                    <span className="min-w-0 break-all font-medium text-foreground">
                      {contact.email}
                    </span>
                  </a>
                  <a
                    href={`tel:${contact.phoneE164}`}
                    className="flex items-center gap-3 rounded-xl border border-transparent px-2 py-2.5 text-sm transition-colors hover:border-border/60 hover:bg-background/60"
                    onClick={(e) => {
                      e.stopPropagation();
                      sendGTMEvent({
                        event: "buttonClicked",
                        value: "Contact phone",
                      });
                    }}
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border/60 bg-background/80">
                      <Phone
                        className="size-4 text-muted-foreground"
                        aria-hidden
                      />
                    </span>
                    <span className="font-medium text-foreground">
                      {contact.phoneLabel}
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>
          </section>
        </main>

        <footer className="border-t border-border/50 bg-background/40 backdrop-blur-sm">
          <Reveal
            variant="fade"
            className="container justify-center mx-auto flex flex-col gap-2 px-4 py-6 sm:flex-row md:px-6"
          >
            <p className="text-xs text-center text-muted-foreground">
              © {new Date().getFullYear()} Yanal Shoubaki. All rights reserved.
            </p>
          </Reveal>
        </footer>
      </div>
    </div>
  );
}
