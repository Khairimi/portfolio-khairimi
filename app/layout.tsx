import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khairi Rahimi — Mobile Computing × Campus Leadership",
  description:
    "Portfolio of Khairi Rahimi Khyril Norrahim — Bachelor of Information Systems (Hons) Mobile Computing (CDCS270) at UiTM Kuala Terengganu, Dean's List 2025, MPP Sesi 2025/2026. Flutter developer, student leader, aspiring Technology Consultant.",
  keywords: ["Khairi Rahimi", "UiTM", "MPP", "Flutter", "Next.js", "Portfolio", "Mobile Computing", "Technology Consultant"],
  authors: [{ name: "Khairi Rahimi Khyril Norrahim" }],
  openGraph: {
    title: "Khairi Rahimi — Bridging Mobile Computing & Campus Leadership",
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
