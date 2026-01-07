import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: {
    default: "Bheem Singh | Software Engineer I | MERN Stack Developer",
    template: "%s | Bheem Singh",
  },
  description:
    "Software Engineer with 5 years of experience specializing in MERN stack, Node.js backends, Nest.js, Laravel, and Python. Building scalable, secure, and high-performance web applications from Mohali, India.",
  keywords: [
    "Bheem Singh",
    "Software Engineer",
    "MERN Stack Developer",
    "Node.js Developer",
    "Backend Developer",
    "Nest.js",
    "Laravel",
    "Python Developer",
    "Full Stack Developer",
    "React Developer",
    "MongoDB",
    "MySQL",
    "Portfolio",
    "Mohali",
    "India",
  ],
  authors: [{ name: "Bheem Singh" }],
  creator: "Bheem Singh",
  metadataBase: new URL("https://bheem-singh-pailoss.github.io/bheem-portfolio"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bheem Singh | Software Engineer I | MERN Stack Developer",
    description:
      "Software Engineer with 5 years of experience building scalable MERN and Node.js applications, dashboards, and automation systems. Specializing in backend development, REST APIs, and full-stack solutions.",
    url: "https://bheem-singh-pailoss.github.io/bheem-portfolio",
    siteName: "Bheem Singh Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bheem Singh - Software Engineer I",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bheem Singh | Software Engineer I",
    description:
      "Software Engineer with 5 years of experience in MERN stack, Node.js, Nest.js, Laravel, and Python.",
    creator: "@bheemsingh",
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
    google: "your-google-verification-code",
  },
  other: {
    "theme-color": "#22c55e",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bheem Singh",
    jobTitle: "Software Engineer I",
    description:
      "Software Engineer with 5 years of experience specializing in MERN stack, Node.js backends, Nest.js, Laravel, and Python.",
    url: "https://bheem-singh-pailoss.github.io/bheem-portfolio",
    image: "https://bheem-singh-pailoss.github.io/bheem-portfolio/og-image.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mohali",
      addressRegion: "Punjab",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/Bheem-Singh-Pailoss",
      "https://linkedin.com/in/bheem-singh-88300a194",
    ],
    knowsAbout: [
      "MERN Stack",
      "Node.js",
      "React.js",
      "Nest.js",
      "Laravel",
      "Python",
      "MongoDB",
      "MySQL",
      "REST APIs",
      "Backend Development",
      "Full Stack Development",
    ],
    email: "mnegi0876@gmail.com",
    worksFor: {
      "@type": "Organization",
      name: "Bronze Byte IT Solutions",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased main-gradient-bg`}
      >
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
        <ThemeProvider>
          <div className="page-shell min-h-screen text-slate-900 dark:text-slate-100">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
