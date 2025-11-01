"use client"

import { useState } from "react"
import Lightbox from "./lightbox"

interface GalleryImage {
  src: string
  alt: string
  title: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
  onImageClick?: (index: number) => void
}

export default function ImageGallery({ images, onImageClick }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleOpen = (index: number) => {
    if (onImageClick) {
      onImageClick(index)
      return
    }
    setSelectedIndex(index)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg border border-border hover:border-ring transition-colors duration-200 cursor-pointer"
            onClick={() => handleOpen(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleOpen(index)
            }}
            role="button"
            tabIndex={0}
            aria-label={`Abrir ${image.title} en vista ampliada`}
          >
            {/* Viewport con proporción fija */}
            <div className="relative aspect-video bg-transparent">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="absolute inset-0 m-auto block max-w-full max-h-full object-contain rounded-sm transition-transform duration-200 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-200 flex items-end p-3 sm:p-4">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="text-sm sm:text-base font-semibold">{image.title}</p>
                <p className="text-xs sm:text-sm text-white/80">Haz clic para ampliar</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && !onImageClick && (
        <Lightbox
          images={images}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNavigate={(i) => setSelectedIndex(i)}
        />
      )}
    </>
  )
}
