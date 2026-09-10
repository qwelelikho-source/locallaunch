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
  title: "BuildCore Construction — concept project by LocalLaunch",
  description:
    "A concept construction-company website built by LocalLaunch to demonstrate what a real client site could look like.",
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
