import type { Metadata } from "next";
import CcNavbar from "./_components/cc-navbar";
import CcHero from "./_components/cc-hero";
import CcServices from "./_components/cc-services";
import CcGallery from "./_components/cc-gallery";
import CcTestimonial from "./_components/cc-testimonial";
import CcQuoteForm from "./_components/cc-quote-form";
import CcFooter from "./_components/cc-footer";

export const metadata: Metadata = {
  title: "CapeClean — concept project by LocalLaunch",
  description:
    "A concept cleaning-company website built by LocalLaunch to demonstrate what a real client site could look like.",
};

export default function CapeCleanPage() {
  return (
    <>
      <CcNavbar />
      <CcHero />
      <CcServices />
      <CcGallery />
      <CcTestimonial />
      <CcQuoteForm />
      <CcFooter />
    </>
  );
}
