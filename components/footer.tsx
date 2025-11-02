// components/Footer.tsx
// Footer semántico, accesible y sin imágenes

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-border bg-card/70 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8">
        <div className="grid gap-6 sm:grid-cols-2 items-center">
          {/* Bloque informativo */}
          <div className="space-y-1">
            <h2 className="text-sm font-semibold text-foreground tracking-wide">
              Evidencias de Cursos — Ingeniería Económica
            </h2>
            <p className="text-xs text-muted-foreground">
              Proyecto académico de{" "}
              <span className="font-medium text-foreground">
                Alex Javier Betin Uparela
              </span>
            </p>
          </div>

          {/* Contacto y año */}
          <div className="sm:text-right space-y-1">
            <p className="text-xs text-muted-foreground">
              Contacto:{" "}
              <a
                href="mailto:alexbetin203@gmail.com"
                className="text-primary font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                aria-label="Enviar correo a alexbetin203@gmail.com"
              >
                alexbetin203@gmail.com
              </a>
            </p>

            {/* Año estable para SSR: evita desajustes de hidratación */}
            <p className="text-[11px] text-muted-foreground/80">
              <span suppressHydrationWarning>
                © {new Date().getFullYear()}
              </span>{" "}
              Todos los derechos reservados.
            </p>
          </div>
        </div>

        {/* Separador fino y nota legal opcional */}
        <div className="mt-6 pt-6 border-t border-border/60">
          <p className="text-[11px] leading-relaxed text-muted-foreground/80">
            Este sitio muestra evidencias estáticas (imágenes) alojadas en <code>/public</code>.
            No se permite la carga de archivos por parte de visitantes.
          </p>
        </div>
      </div>
    </footer>
  );
}
