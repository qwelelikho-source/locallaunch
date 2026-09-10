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
