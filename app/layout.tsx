import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khairi Rahimi — Computer Science × Campus Leadership",
  description:
    "Portfolio of Khairi Rahimi Khyril Norrahim — B.CS (Hons.) Mobile Computing at UiTM Kuala Terengganu, Dean's List 2025, MPP Sesi 2025/2026. Flutter & React developer, data-driven student advocate, aspiring Technology Consultant.",
  keywords: ["Khairi Rahimi", "UiTM", "MPP", "Flutter", "Next.js", "Portfolio", "Mobile Computing", "Technology Consultant"],
  authors: [{ name: "Khairi Rahimi Khyril Norrahim" }],
  openGraph: {
    title: "Khairi Rahimi — Bridging Computer Science & Campus Leadership",
    description: "Developer & student leader portfolio · UiTM Kuala Terengganu · MPP 2025/2026",
    type: "website",
    locale: "en_MY",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0F17",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
