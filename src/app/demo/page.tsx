"use client"

import HeroVideoDialog from "@/components/magicui/hero-video-dialog"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col py-10 px-4 md:px-8">
      <div className="w-full max-w-5xl space-y-8 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            See Meleket in Action
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Please click on the YouTube video below to watch a quick demo of how our platform can transform your business.
          </p>
        </div>
        
        <div className="relative">
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
    </div>
  )
}
