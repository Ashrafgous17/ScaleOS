import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://scaleos.com"), // change later
  title: "ScaleOS — Growth Operating System for SaaS",
  description:
    "Install a Growth Operating System in your SaaS — from traffic to recurring revenue.",
  openGraph: {
    title: "ScaleOS — Growth Operating System for SaaS",
    description:
      "From first click → free trial → paid user → retention → expansion.",
    type: "website",
    url: "https://scaleos.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleOS — Growth Operating System for SaaS",
    description:
      "Install a Growth Operating System in your SaaS — from traffic to recurring revenue.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
