import type { Metadata } from "next";
import FfNavbar from "./_components/ff-navbar";
import FfHero from "./_components/ff-hero";
import FfServices from "./_components/ff-services";
import FfAreas from "./_components/ff-areas";
import FfTestimonial from "./_components/ff-testimonial";
import FfQuoteForm from "./_components/ff-quote-form";
import FfFooter from "./_components/ff-footer";

export const metadata: Metadata = {
  title: "FixFlow Plumbing — concept project by LocalLaunch",
  description:
    "A concept plumbing-company website built by LocalLaunch to demonstrate what a real client site could look like.",
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
