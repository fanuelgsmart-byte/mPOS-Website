import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";

import Features from "@/components/sections/Features";
import AndMore from "@/components/sections/AndMore";
import YourBillYourBrand from "@/components/sections/YourBillYourBrand";
import EffortlessCompliance from "@/components/sections/EffortlessCompliance";
import OurBlogs from "@/components/sections/OurBlogs";
import GetStartedCTA from "@/components/sections/GetStartedCTA";
import DownloadCTA from "@/components/sections/DownloadCTA";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex-1">
        <Hero />

        <Features />
        <AndMore />
        <YourBillYourBrand />
        <EffortlessCompliance />
        <OurBlogs />
        <GetStartedCTA />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
