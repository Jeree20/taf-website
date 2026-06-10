import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { GalleryStats } from "@/components/gallery/GalleryStats";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { GalleryUploadCTA } from "@/components/gallery/GalleryUploadCTA";
import { GalleryCTA } from "@/components/gallery/GalleryCTA";

export const metadata: Metadata = {
  title: "Photo Gallery | Tumaini African Foundation",
  description:
    "Browse the TAF photo gallery — Football Academy matches, library sessions, community outreach, women's programs, and life in Kayole Soweto. Every image tells a story of transformation.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="Photo Gallery"
          title="Scenes from"
          titleEm="Kayole Soweto"
          subtitle="Every photograph in this gallery tells a story of transformation — of a young person choosing football over the streets, a woman building a business, a child discovering the joy of reading."
          breadcrumbs={[{ label: "Gallery" }]}
          backgroundImage="/images/gallery/football-senior-squad.png"
        />
        <GalleryStats />
        <GalleryGrid />
        <GalleryUploadCTA />
        <GalleryCTA />
      </main>
      <Footer />
    </>
  );
}
