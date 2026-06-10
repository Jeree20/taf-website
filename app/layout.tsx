import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tumaini African Foundation | Home of Transformation",
  description:
    "A duly registered Community Based Organisation in Kayole Soweto, Nairobi. Empowering youth through sports, education, mentorship, and community outreach. We empower to empower.",
  keywords: [
    "Tumaini African Foundation",
    "TAF",
    "Kayole Soweto",
    "Nairobi",
    "Youth Empowerment",
    "Football Academy Kenya",
    "Community Organisation Kenya",
  ],
  openGraph: {
    title: "Tumaini African Foundation | Home of Transformation",
    description:
      "Transforming lives in Kayole Soweto through youth empowerment, sports, education, and community outreach.",
    locale: "en_KE",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-gold-taf focus:text-maroon-deep focus:font-semibold focus:rounded focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
