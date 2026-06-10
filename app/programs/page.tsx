import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { ProgramsOverview } from "@/components/programs/ProgramsOverview";
import { ProgramFootballAcademy } from "@/components/programs/ProgramFootballAcademy";
import { ProgramSportsDept } from "@/components/programs/ProgramSportsDept";
import { ProgramEducation } from "@/components/programs/ProgramEducation";
import { ProgramMentorship } from "@/components/programs/ProgramMentorship";
import { ProgramWomen } from "@/components/programs/ProgramWomen";
import { ProgramOutreach } from "@/components/programs/ProgramOutreach";
import { ProgramsImpact } from "@/components/programs/ProgramsImpact";
import { ProgramsCTA } from "@/components/programs/ProgramsCTA";

export const metadata: Metadata = {
  title: "Our Programs | Tumaini African Foundation",
  description:
    "Explore all TAF programs — Football Academy, Chess, Table Tennis, Darts, Education & Library, Mentorship, Women's Empowerment, and Community Outreach in Kayole Soweto, Nairobi.",
};

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="TAF Programs"
          title="Seven Pillars of"
          titleEm="Transformation"
          subtitle="Every program at Tumaini African Foundation is designed to meet a real need in Kayole Soweto — developing talent, building character, expanding knowledge, and lifting entire families."
          breadcrumbs={[{ label: "Programs" }]}
        />
        <ProgramsOverview />
        <ProgramFootballAcademy />
        <ProgramSportsDept />
        <ProgramEducation />
        <ProgramMentorship />
        <ProgramWomen />
        <ProgramOutreach />
        <ProgramsImpact />
        <ProgramsCTA />
      </main>
      <Footer />
    </>
  );
}
