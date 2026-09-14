import type { Metadata } from "next";
import BcNavbar from "./_components/bc-navbar";
import BcHero from "./_components/bc-hero";
import BcServices from "./_components/bc-services";
import BcProjects from "./_components/bc-projects";
import BcProcess from "./_components/bc-process";
import BcTestimonial from "./_components/bc-testimonial";
import BcQuoteForm from "./_components/bc-quote-form";
import BcFooter from "./_components/bc-footer";

export const metadata: Metadata = {
  title: "Construction Company Website Concept",
  description:
    "A modern construction company website concept designed by LocalLaunch with project showcase, quote form and process timeline.",
};

export default function BuildCorePage() {
  return (
    <>
      <BcNavbar />
      <BcHero />
      <BcServices />
      <BcProjects />
      <BcProcess />
      <BcTestimonial />
      <BcQuoteForm />
      <BcFooter />
    </>
  );
}
