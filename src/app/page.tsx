import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Stats from "@/components/sections/Stats";
import Features from "@/components/sections/Features";
import ModuleGrid from "@/components/sections/ModuleGrid";
import Industries from "@/components/sections/Industries";
import HowItWorks from "@/components/sections/HowItWorks";
import EthiopianDifferentiators from "@/components/sections/EthiopianDifferentiators";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import DownloadCTA from "@/components/sections/DownloadCTA";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Stats />
        <Features />
        <ModuleGrid />
        <Industries />
        <HowItWorks />
        <EthiopianDifferentiators />
        <Testimonials />
        <Pricing />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
