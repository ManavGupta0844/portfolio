import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manav Gupta - Portfolio",
  description: "Frontend-focused Software Engineer | React, Next.js, React Native",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased transition-colors duration-300">{children}</body>
    </html>
  );
}
