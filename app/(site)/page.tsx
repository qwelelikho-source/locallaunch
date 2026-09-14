import type { Metadata } from "next";
import Hero from "@/components/hero";
import TrustStats from "@/components/trust-stats";
import Problem from "@/components/problem";
import Services from "@/components/services";
import Industries from "@/components/industries";
import Portfolio from "@/components/portfolio";
import Pricing from "@/components/pricing";
import Process from "@/components/process";
import WhyUs from "@/components/why-us";
import Cta from "@/components/cta";

export const metadata: Metadata = {
  title: "Website Design for Local Businesses in Cape Town",
  description:
    "LocalLaunch creates modern, mobile-friendly websites for Cape Town businesses. Get a professional website designed to help customers find and contact your business.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <Problem />
      <Services />
      <Industries />
      <Portfolio />
      <Pricing />
      <Process />
      <WhyUs />
      <Cta />
    </>
  );
}
