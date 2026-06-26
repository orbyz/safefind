import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://safefind.vercel.app"),

  title: {
    default: "SafeFind | Búsqueda de personas - Venezuela",
    template: "%s | SafeFind",
  },

  description:
    "SafeFind es una plataforma ciudadana para buscar, reportar y compartir información sobre personas desaparecidas durante emergencias en Venezuela.",

  keywords: [
    "SafeFind",
    "Venezuela",
    "terremoto Venezuela",
    "personas desaparecidas",
    "buscar personas",
    "familiares desaparecidos",
    "emergencias",
    "rescate",
    "protección civil",
  ],

  authors: [
    {
      name: "Jonathan Olbes - OrByZ Studio",
    },
  ],

  creator: "OrByZ Studio",

  publisher: "OrByZ Studio",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "SafeFind | Búsqueda de personas",
    description:
      "Ayudando a reunir familias durante situaciones de emergencia.",

    url: "https://safefind.vercel.app",

    siteName: "SafeFind",

    locale: "es_ES",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "SafeFind",

    description:
      "Plataforma ciudadana para localizar personas durante emergencias.",

    creator: "@orbyzstudio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased">
        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
