import type { Metadata } from "next";
import FfNavbar from "./_components/ff-navbar";
import FfHero from "./_components/ff-hero";
import FfServices from "./_components/ff-services";
import FfAreas from "./_components/ff-areas";
import FfTestimonial from "./_components/ff-testimonial";
import FfQuoteForm from "./_components/ff-quote-form";
import FfFooter from "./_components/ff-footer";

export const metadata: Metadata = {
  title: "Plumbing Website Concept",
  description:
    "A modern plumbing business website concept designed by LocalLaunch with services, WhatsApp contact and quote functionality.",
};

export default function FixFlowPage() {
  return (
    <>
      <FfNavbar />
      <FfHero />
      <FfServices />
      <FfAreas />
      <FfTestimonial />
      <FfQuoteForm />
      <FfFooter />
    </>
  );
}
