export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50 backdrop-blur-md shadow-inner">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Izquierda: texto principal */}
        <div className="text-center sm:text-left">
          <h2 className="text-sm font-semibold text-foreground tracking-wide">
            Evidencias de Cursos – Ingeniería Económica
          </h2>
          <p className="text-xs text-muted-foreground mt-1">
            Proyecto académico desarrollado por{" "}
            <span className="font-medium text-foreground">Alex Javier Betin Uparela</span>
          </p>
        </div>

        {/* Derecha: contacto */}
        <div className="text-center sm:text-right">
          <p className="text-xs text-muted-foreground">
            Contacto:{" "}
            <a
              href="mailto:alexbetin203@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              alexbetin203@gmail.com
            </a>
          </p>
          <p className="text-[11px] text-muted-foreground/80 mt-1">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
