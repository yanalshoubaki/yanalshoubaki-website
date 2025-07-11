import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type React from "react"; // Import React
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yanal Shoubaki",
  description: "Software engineer portfolio showcasing projects and skills",
  keywords: [
    "Yanal Shoubaki",
    "Software Engineer",
    "Portfolio",
    "Web Development",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Software Projects",
  ],
  authors: [
    {
      name: "Yanal Shoubaki",
      url: "https://yanalshoubaki.com",
    },
  ],
  creator: "Yanal Shoubaki",
  openGraph: {
    title: "Yanal Shoubaki",
    description: "Software engineer portfolio showcasing projects and skills",
    url: "https://yanalshoubaki.com",
    siteName: "Yanal Shoubaki",
    images: [
      {
        url: "https://yanalshoubaki.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yanal Shoubaki - Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification=PLLsssM8MG",
  },
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
    <html lang="en" suppressHydrationWarning className="light">
      <GoogleTagManager gtmId="GTM-P4ZZZGL7" />

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
      <GoogleAnalytics gaId="G-W82MWK6EGC" />
    </html>
  );
}
