import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type React from "react"; // Import React

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yanal Shoubaki",
  description: "Software engineer portfolio showcasing projects and skills",
  icons: [
    {
      url: "/logo-dark.svg",
      sizes: "32x32",
      type: "image/svg+xml",
      media: "(prefers-color-scheme: light)",
    },
    {
      url: "/logo-light.svg",
      sizes: "32x32",
      type: "image/svg+xml",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  facebook: {
    admins: "yanalshoubaki",
  },
  twitter: {
    site: "@yanalshoubaki",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
