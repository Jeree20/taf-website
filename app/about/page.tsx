import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutTeam } from "@/components/about/AboutTeam";
import { AboutTimeline } from "@/components/about/AboutTimeline";
import { AboutPartners } from "@/components/about/AboutPartners";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | Tumaini African Foundation",
  description:
    "Learn about Tumaini African Foundation — a registered Community Based Organisation in Kayole Soweto, Nairobi. Our story, mission, team, values, and 20-year journey of community transformation.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="About Tumaini African Foundation"
          title="Rooted in Kayole."
          titleEm="Built on Hope."
          subtitle="Tumaini means hope in Kiswahili. Since our founding, we have been a beacon of opportunity and transformation in Kayole Soweto — one young person, one family, one meal at a time."
          breadcrumbs={[{ label: "About Us" }]}
          backgroundImage="/images/gallery/outreach-children-street.png"
        />
        <AboutStory />
        <AboutValues />
        <AboutTimeline />
        <AboutTeam />
        <AboutPartners />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
