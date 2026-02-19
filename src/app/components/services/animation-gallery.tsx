"use client";

import { useState } from "react";
import DiamondIcon from "../../../../public/logos/diamond.svg";
import Image from "next/image";

interface AnimationVideo {
  id: number;
  title: string;
  description: string;
  videoPath: string;
  thumbnail?: string;
}

interface AnimationGalleryProps {
  videos: AnimationVideo[];
}

export default function AnimationGallery({ videos }: AnimationGalleryProps) {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image src={DiamondIcon} alt="diamond" loading="lazy" />
            <p className="text-[20px] font-normal uppercase tracking-wide text-[#A10000]">
              Animation Showcase
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Watch Our Animations
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of architectural animations and walkthroughs
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative overflow-hidden rounded-2xl bg-black shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            >
              <div className="relative aspect-video w-full">
                <video
                  className="h-full w-full object-cover"
                  controls
                  preload="metadata"
                  onClick={() => setSelectedVideo(video.id)}
                >
                  <source src={video.videoPath} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 transition-all duration-300">
                <h3 className="text-xl font-bold text-white">
                  {video.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300 line-clamp-2">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full Screen Modal (Optional) */}
        {selectedVideo !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative max-w-6xl w-full">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-4xl font-bold"
              >
                ×
              </button>
              <video
                className="w-full rounded-lg"
                controls
                autoPlay
                onClick={(e) => e.stopPropagation()}
              >
                <source
                  src={
                    videos.find((v) => v.id === selectedVideo)?.videoPath || ""
                  }
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
