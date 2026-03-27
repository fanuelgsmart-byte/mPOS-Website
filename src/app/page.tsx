import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Features from "@/components/sections/Features";
import AndMore from "@/components/sections/AndMore";
import YourBillYourBrand from "@/components/sections/YourBillYourBrand";
import EffortlessCompliance from "@/components/sections/EffortlessCompliance";
import HowItWorks from "@/components/sections/HowItWorks";
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
        <Features />
        <AndMore />
        <YourBillYourBrand />
        <EffortlessCompliance />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
