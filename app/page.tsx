"use client";
import { Button } from "@/components/ui/button";
import { Github, Globe, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import ContactForm from "./components/contact-form";
import ProjectCard from "./components/project-card";
import TechStack from "./components/tech-stack";
import Image from "next/image";
import { useTheme } from "next-themes";
import { sendGTMEvent } from "@next/third-parties/google";

export default function Page() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <div className="min-h-screen w-full bg-white dark:bg-[#2E3357] relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, ${
              theme === "dark" ? "#424874" : "#E5E7EB"
            } 1px, transparent 1px),
            linear-gradient(to bottom, ${
              theme === "dark" ? "#424874" : "#E5E7EB"
            } 1px, transparent 1px),
            radial-gradient(circle 500px at 20% 100%, #8890CB, transparent),
            radial-gradient(circle 500px at 100% 80%, #6F77AE, transparent)
          `,
            backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
          }}
        />
        <div className="relative z-10">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
                  href="https://drive.google.com/file/d/1G3Ez31UuI2eZATrdJ6oHIFdHXlh063kA/view?usp=sharing"
                  target="_blank"
                  aria-label="Resume"
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
          </header>

          <main className="container mx-auto px-4 md:px-6">
            <section id="about" className="py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                      Yanal Shoubaki
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                      Building digital experiences with modern technologies.
                      Focused on creating elegant solutions to complex problems.
                    </p>
                  </div>
                  <div className="space-x-4">
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
                        <Github className="h-4 w-4" />
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
                        <Twitter className="h-4 w-4" />
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
                  </div>
                </div>
              </div>
            </section>

            <section id="projects" className="py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                  Projects
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                </div>
              </div>
            </section>

            <section className="py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                  Tech Stack
                </h2>
                <TechStack />
              </div>
            </section>

            <section id="contact" className="py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-2xl">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                    Get in Touch
                  </h2>
                  <ContactForm />
                </div>
              </div>
            </section>
          </main>

          <footer className="border-t">
            <div className="container justify-center mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
              <p className="text-xs text-gray-500 text-center dark:text-gray-400">
                © {new Date().getFullYear()} Yanal Shoubaki. All rights
                reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
