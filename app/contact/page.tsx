import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactDepartments } from "@/components/contact/ContactDepartments";
import { ContactMap } from "@/components/contact/ContactMap";
import { ContactSocial } from "@/components/contact/ContactSocial";

export const metadata: Metadata = {
  title: "Contact Us | Tumaini African Foundation",
  description:
    "Get in touch with Tumaini African Foundation in Kayole Soweto, Nairobi. Call, WhatsApp, email, or visit us at the Home of Transformation. We respond to all enquiries within 3 business days.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="Get in Touch"
          title="We'd Love to"
          titleEm="Hear from You."
          subtitle="Whether you want to donate, volunteer, partner, or simply learn more about what's happening in Kayole Soweto — our team is here and ready to respond."
          breadcrumbs={[{ label: "Contact" }]}
        />
        <ContactDetails />
        <ContactForm />
        <ContactDepartments />
        <ContactMap />
        <ContactSocial />
      </main>
      <Footer />
    </>
  );
}
