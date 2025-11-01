"use client";

import { useState } from "react";
import Lightbox from "./lightbox"; // tu mismo lightbox

export default function Header() {
  const [open, setOpen] = useState(false);

  // La imagen del login que quieres mostrar en el header
  const headerImage = {
    src: "/login.png", // asegúrate que está en /public/login.png
    alt: "Pantalla de inicio de sesión del curso",
    title: "Login plataforma del curso",
  };

  return (
    <header className="bg-card text-card-foreground border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          {/* Texto a la izquierda (tu bloque) */}
          <div className="space-y-4 flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-balance">Evidencias de Cursos</h1>
            <p className="text-lg text-muted-foreground">Ingeniería Económica</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">Nombre:</span>
                <span>Alex Javier Betin Uparela</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">Email:</span>
                <a
                  href="mailto:alexbetin203@gmail.com"
                  className="text-primary hover:underline focus:outline-2 focus:outline-offset-2 focus:outline-ring"
                >
                  alexbetin203@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Miniatura 16:9 a la derecha (igual estilo que tu galería) */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group outline-none w-full sm:w-[70%] md:w-[55%] lg:w-[45%]"
            aria-label="Ver imagen ampliada"
          >
            <div className="relative aspect-video bg-transparent rounded-lg overflow-hidden border border-border shadow-sm">
              <img
                src={headerImage.src}
                alt={headerImage.alt}
                className="absolute inset-0 m-auto block max-w-full max-h-full object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                loading="eager"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-2">
              {headerImage.title}
            </p>
          </button>
        </div>
      </div>

      {/* Usa tu mismo Lightbox pasándole solo una imagen */}
      {open && (
        <Lightbox
          images={[headerImage]}
          currentIndex={0}
          onClose={() => setOpen(false)}
          onNavigate={() => {}}
          // si aplicas el ajuste de abajo, las flechas se ocultarán al ser 1 imagen
        />
      )}
    </header>
  );
}
