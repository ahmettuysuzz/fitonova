"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, X } from "lucide-react"

interface Video {
  id: number
  src: string
  title: string
  description: string
}

const videos: Video[] = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hacamat_ilk_bolum-Q2J2Ekdvjk2zuUAuleTdvWEQdJyndC.mp4",
    title: "Hacamat Tedavisi",
    description: "Hacamat tedavisi uygulama videosu",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hacamat%20video%202-ldaQv15XRVeTwhE0CGxU93BFYIoXi5.mp4",
    title: "Hacamat Tedavisi",
    description: "Hacamat tedavisi uygulama videosu",
  },
]

export default function VideoPage() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Videolarımız</h1>
          <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        {/* Videos Grid */}
        <div className="flex flex-col gap-8 max-w-2xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <video className="w-full h-auto max-h-[400px] object-contain bg-black" preload="metadata">
                <source src={video.src} type="video/mp4" />
                Tarayıcınız video oynatmayı desteklemiyor.
              </video>
              <div className="p-4 border-t border-gray-100">
                <h3 className="text-base font-semibold text-gray-900 mb-1">{video.title}</h3>
                <p className="text-gray-600 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedVideo(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <video
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              controls
              autoPlay
              preload="metadata"
            >
              <source src={selectedVideo.src} type="video/mp4" />
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
          </div>
        </div>
      )}
    </div>
  )
}
