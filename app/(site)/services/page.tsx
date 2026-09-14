import type { Metadata } from "next";
import Services from "@/components/services";
import Cta from "@/components/cta";

export const metadata: Metadata = {
  title: "Website Design & Development Services",
  description:
    "Professional website design, mobile-first development, local SEO and WhatsApp integration for local businesses in Cape Town.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ll-bg pt-16 pb-10">
        <div className="container-content">
          <h1 className="font-display max-w-xl text-4xl font-semibold text-white">
            Everything your business needs to get online.
          </h1>
          <p className="mt-4 max-w-lg text-ll-text-secondary">
            From your first page to ongoing care, here&rsquo;s what&rsquo;s
            included when you work with LocalLaunch.
          </p>
        </div>
      </section>
      <Services showHeading={false} />
      <Cta />
    </>
  );
}
