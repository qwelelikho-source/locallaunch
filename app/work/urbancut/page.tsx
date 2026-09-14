import type { Metadata } from "next";
import UcNavbar from "./_components/uc-navbar";
import UcHero from "./_components/uc-hero";
import UcServices from "./_components/uc-services";
import UcGallery from "./_components/uc-gallery";
import UcTestimonial from "./_components/uc-testimonial";
import UcBookingForm from "./_components/uc-booking-form";
import UcFooter from "./_components/uc-footer";

export const metadata: Metadata = {
  title: "Barbershop Website Concept",
  description:
    "A modern barbershop website concept designed by LocalLaunch with online booking, price list and style gallery.",
};

export default function UrbanCutPage() {
  return (
    <>
      <UcNavbar />
      <UcHero />
      <UcServices />
      <UcGallery />
      <UcTestimonial />
      <UcBookingForm />
      <UcFooter />
    </>
  );
}
