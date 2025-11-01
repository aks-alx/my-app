"use client"

import { useState } from "react"
import ImageGallery from "./image-gallery"
import Lightbox from "./lightbox"

interface Image {
  src: string
  alt: string
  title: string
}

interface Course {
  id: string
  title: string
  description: string
  images: Image[]
}

export default function CourseSection({ course }: { course: Course }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section
      id={course.id}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b border-border last:border-b-0"
    >
      <article className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{course.title}</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">{course.description}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground">Galería de Evidencias</h3>
          <ImageGallery images={course.images} onImageClick={setSelectedImage} />
        </div>
      </article>

      {selectedImage !== null && (
        <Lightbox
          images={course.images}
          currentIndex={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNavigate={setSelectedImage}
        />
      )}
    </section>
  )
}
