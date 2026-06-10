import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { VolunteerWhy } from "@/components/volunteer/VolunteerWhy";
import { VolunteerRoles } from "@/components/volunteer/VolunteerRoles";
import { VolunteerProcess } from "@/components/volunteer/VolunteerProcess";
import { VolunteerTestimonials } from "@/components/volunteer/VolunteerTestimonials";
import { VolunteerFAQ } from "@/components/volunteer/VolunteerFAQ";
import { VolunteerForm } from "@/components/volunteer/VolunteerForm";
import { VolunteerCTA } from "@/components/volunteer/VolunteerCTA";

export const metadata: Metadata = {
  title: "Volunteer | Tumaini African Foundation",
  description:
    "Volunteer with Tumaini African Foundation in Kayole Soweto, Nairobi. Coach football, mentor youth, tutor students, manage communications, or support outreach. Local and international volunteers welcome.",
};

export default function VolunteerPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="Get Involved"
          title="Your Skills Can"
          titleEm="Change Kayole."
          subtitle="Tumaini African Foundation welcomes volunteers from every background — local Nairobi residents, Kenyan diaspora, and international supporters alike. There is a role here for every skill and every season of life."
          breadcrumbs={[{ label: "Volunteer" }]}
          backgroundImage="/images/gallery/outreach-volunteers-serving.png"
        />
        <VolunteerWhy />
        <VolunteerRoles />
        <VolunteerProcess />
        <VolunteerTestimonials />
        <VolunteerFAQ />
        <VolunteerForm />
        <VolunteerCTA />
      </main>
      <Footer />
    </>
  );
}
