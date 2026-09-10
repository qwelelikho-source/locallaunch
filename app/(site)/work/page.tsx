import type { Metadata } from "next";
import Portfolio from "@/components/portfolio";
import Cta from "@/components/cta";

export const metadata: Metadata = {
  title: "Our Work — LocalLaunch",
};

export default function WorkPage() {
  return (
    <>
      <section className="bg-ll-bg pt-16 pb-10">
        <div className="container-content">
          <h1 className="font-display max-w-xl text-4xl font-semibold text-white">
            See what your business could look like.
          </h1>
          <p className="mt-4 max-w-lg text-ll-text-secondary">
            These are concept projects built to show the quality and style
            you can expect — real client work will be added here as it goes
            live.
          </p>
        </div>
      </section>
      <Portfolio />
      <Cta />
    </>
  );
}
