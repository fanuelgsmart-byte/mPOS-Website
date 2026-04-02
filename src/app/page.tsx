import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AppAccessBanner from "@/components/sections/AppAccessBanner";

const Features = dynamic(() => import("@/components/sections/Features"), { ssr: true });
const AndMore = dynamic(() => import("@/components/sections/AndMore"), { ssr: true });
const YourBillYourBrand = dynamic(() => import("@/components/sections/YourBillYourBrand"), { ssr: true });
const EffortlessCompliance = dynamic(() => import("@/components/sections/EffortlessCompliance"), { ssr: true });
const DemoVideoSection = dynamic(() => import("@/components/sections/DemoVideoSection"), { ssr: true });
import { CardScannerWrapper } from "@/components/card-scanner/card-scanner-wrapper";
const GetStartedCTA = dynamic(() => import("@/components/sections/GetStartedCTA"), { ssr: true });

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="relative z-20 -mt-14 md:-mt-16 lg:-mt-[58px] mb-[-52px] md:mb-[-58px] lg:mb-[-64px]">
          <AppAccessBanner />
        </div>
        <Features />
        <AndMore />
        <YourBillYourBrand />
        <EffortlessCompliance />
        <DemoVideoSection />
        <CardScannerWrapper />
        <GetStartedCTA />
      </main>
      <Footer />
    </div>
  );
}
