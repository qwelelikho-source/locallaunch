import type { Metadata } from "next";
import Pricing from "@/components/pricing";
import Cta from "@/components/cta";

export const metadata: Metadata = {
  title: "Pricing — LocalLaunch",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-ll-bg pt-16 pb-10">
        <div className="container-content">
          <h1 className="font-display max-w-xl text-4xl font-semibold text-white">
            Affordable, professional development.
          </h1>
          <p className="mt-4 max-w-lg text-ll-text-secondary">
            No hidden costs. You know exactly what you&rsquo;re paying for
            before we start.
          </p>
        </div>
      </section>
      <Pricing />
      <Cta />
    </>
  );
}
