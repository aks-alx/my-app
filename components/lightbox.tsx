"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface LightboxImage {
  src: string
  alt: string
  title: string
}

interface LightboxProps {
  images: LightboxImage[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Enfocar el diálogo cuando se abre
    dialogRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + images.length) % images.length)
      } else if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % images.length)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex, images.length, onClose, onNavigate])

  const currentImage = images[currentIndex]

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 z-40 backdrop-blur-sm"
        onClick={onClose}
        role="presentation"
        aria-label="Cerrar galería"
      />

      {/* Modal */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-title"
        className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 focus:outline-none"
        tabIndex={-1}
      >
  {/* Contenedor de imagen */}
  {/* Dar una altura fija (80vh) y aumentar el max-width para que la imagen sea más grande */}
  <div className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center">
          <Image
            src={currentImage.src || "/placeholder.svg"}
            alt={currentImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 85vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Información y controles */}
        <div className="mt-4 text-center text-white max-w-4xl">
          <h2 id="lightbox-title" className="text-lg sm:text-xl font-semibold mb-2">
            {currentImage.title}
          </h2>
          <p className="text-sm sm:text-base text-white/80 mb-4">
            {currentIndex + 1} de {images.length}
          </p>

          {/* Controles de navegación */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white"
              aria-label="Imagen anterior"
              type="button"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white"
              aria-label="Cerrar galería (Esc)"
              type="button"
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            <button
              onClick={() => onNavigate((currentIndex + 1) % images.length)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white"
              aria-label="Siguiente imagen"
              type="button"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Instrucciones de navegación */}
          <div className="mt-4 text-xs sm:text-sm text-white/60 space-y-1">
            <p>← Flecha izquierda para anterior</p>
            <p>Flecha derecha para siguiente →</p>
            <p>Esc para cerrar</p>
          </div>
        </div>
      </div>
    </>
  )
}
