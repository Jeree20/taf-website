import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { DonateWhy } from "@/components/donate/DonateWhy";
import { DonateGivingLevels } from "@/components/donate/DonateGivingLevels";
import { DonateMpesa } from "@/components/donate/DonateMpesa";
import { DonateInternational } from "@/components/donate/DonateInternational";
import { DonateImpactCalculator } from "@/components/donate/DonateImpactCalculator";
import { DonateTestimonial } from "@/components/donate/DonateTestimonial";
import { DonateFAQ } from "@/components/donate/DonateFAQ";
import { DonateFinalCTA } from "@/components/donate/DonateFinalCTA";

export const metadata: Metadata = {
  title: "Donate | Tumaini African Foundation",
  description:
    "Support Tumaini African Foundation — donate via M-Pesa, bank transfer, or international card. Every shilling transforms a young life in Kayole Soweto, Nairobi.",
};

export default function DonatePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="Support Our Work"
          title="Your Gift Changes"
          titleEm="Lives in Kayole."
          subtitle="A duly registered CBO with the Government of Kenya. Every contribution — however large or small — goes directly into programs that transform youth, families, and the whole Kayole Soweto community."
          breadcrumbs={[{ label: "Donate" }]}
          backgroundImage="/images/gallery/outreach-feeding-program.png"
        />
        <DonateWhy />
        <DonateGivingLevels />
        <DonateMpesa />
        <DonateInternational />
        <DonateImpactCalculator />
        <DonateTestimonial />
        <DonateFAQ />
        <DonateFinalCTA />
      </main>
      <Footer />
    </>
  );
}
