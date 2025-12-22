import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bheem Singh | Software Engineer I",
  description:
    "Personal portfolio of Bheem Singh, Software Engineer I from Mohali, India, specializing in MERN stack, Node.js backends, Nest.js, Laravel, and Python.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Bheem Singh | Software Engineer I",
    description:
      "Software Engineer with 5 years of experience building scalable MERN and Node.js applications, dashboards, and automation systems.",
    type: "website",
    url: "https://example.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased main-gradient-bg`}
      >
        <ThemeProvider>
          <div className="page-shell min-h-screen text-slate-100">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
