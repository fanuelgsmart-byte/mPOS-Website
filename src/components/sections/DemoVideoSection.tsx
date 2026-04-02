"use client";

import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export default function DemoVideoSection() {
  return (
    <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            See Meleket in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please click on the YouTube video below to watch a quick demo of how our platform can transform your business.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/nN6UOquAZlY?autoplay=1"
            thumbnailSrc="https://img.youtube.com/vi/nN6UOquAZlY/maxresdefault.jpg"
            thumbnailAlt="Meleket Demo Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/nN6UOquAZlY?autoplay=1"
            thumbnailSrc="https://img.youtube.com/vi/nN6UOquAZlY/maxresdefault.jpg"
            thumbnailAlt="Meleket Demo Video"
          />
        </div>
      </div>
    </section>
  );
}
