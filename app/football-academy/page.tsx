import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { FootballAcademySection } from "@/components/programs/FootballAcademySection";
import { ProgramFootballAcademy } from "@/components/programs/ProgramFootballAcademy";
import { ProgramsCTA } from "@/components/programs/ProgramsCTA";

export const metadata: Metadata = {
  title: "TAF Football Academy | Tumaini African Foundation",
  description:
    "Join TAF Football Academy in Kayole Soweto. Our flagship program develops talent while providing youth with structure, mentorship, and a pathway away from crime and drugs.",
};

export default function FootballAcademyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="Flagship Program"
          title="The TAF Football Academy"
          titleEm="Pride of Kayole Soweto"
          subtitle="More than just football. We develop talent on the pitch while building character, discipline, and hope off it. Multiple squads — seniors, women, youth, and juniors — all united by one mission: transforming lives through the beautiful game."
          breadcrumbs={[
            { label: "Programs", href: "/programs" },
            { label: "Football Academy" },
          ]}
        />
        <FootballAcademySection />
        <ProgramFootballAcademy />
        <ProgramsCTA />
      </main>
      <Footer />
    </>
  );
}
