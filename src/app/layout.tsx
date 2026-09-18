import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sovereign AI Workbench | Air-Gapped On-Premise Agentic Platform",
  description:
    "An air-gapped, privacy-first, on-premises AI Workbench engineered for confidential industrial environments, chemical engineering telemetry, and P&ID automation.",
  keywords: [
    "Sovereign AI",
    "On-Premise AI Workbench",
    "Air-Gapped LLM",
    "Ollama Offline",
    "Industrial AI",
    "ISA-5.1 OCR",
    "P&ID Blueprint QA",
    "Jayaprakash Dey",
  ],
  authors: [{ name: "Jayaprakash Dey" }],
  openGraph: {
    title: "Sovereign AI Workbench | Air-Gapped On-Premise Platform",
    description:
      "Air-gapped, privacy-first AI Workbench for confidential industrial and engineering automation.",
    url: "https://github.com/deyjayprakash123-cloud/sih",
    siteName: "Sovereign AI Workbench",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-zinc-100">{children}</body>
    </html>
  );
}
