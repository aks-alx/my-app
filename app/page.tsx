import Header from "@/components/header"
import CourseSection from "@/components/course-section"
import Footer from "@/components/footer"

export const metadata = {
  title: "Evidencias de Cursos - Ingeniería Económica | Alex Javier Betin Uparela",
  description:
    "Galería de evidencias de cursos en Ingeniería Económica: Organización financiera, ahorro y presupuesto, y Mercado de valores.",
}

export default function Home() {
  const courses = [
    {
      id: "organizacion-financiera",
      title: "Organización financiera, ahorro y presupuesto",
      description:
        "Curso especializado en planificación financiera personal, estrategias de ahorro efectivo y elaboración de presupuestos. Se abordaron conceptos fundamentales de finanzas personales, métodos de ahorro y herramientas para la gestión eficiente de recursos económicos.",
      images: [
        {
          src: "/perfil.png",
          alt: "Inicio de sesión y perfil estudiantil",
          title: "Perfil estudiantil",
        },
        {
          src: "/modulo1.png",
          alt: "Inicio del módulo de organización financiera",
          title: "Modulo ahorro y presupuesto",
        },
        {
          src: "/modulo1-content.png",
          alt: "¿Qué es una inversión financiera?",
          title: "Contenido del módulo ",
        },
        {
          src: "/modulo1-preguntas.png",
          alt: "¿Qué es el ahorro?",
          title: "Definición de ahorro",
        },
        {
          src: "/final-modulo1.png",
          alt: "Mensaje de finalización del módulo",
          title: "Finalización del módulo",
        },
        {
          src: "/modulo1-certificacion.png",
          alt: "Metas de ahorro y proyecciones a largo plazo",
          title: "Certificación del curso",
        },
      ],
    },
    {
      id: "mercado-valores",
      title: "Mercado de valores",
      description:
        "Curso sobre inversión en mercados de valores, análisis técnico y fundamental, gestión de carteras, y estrategias de inversión. Se cubrieron tópicos como acciones, bonos, derivados y técnicas de evaluación de riesgo en inversiones.",
      images: [
        {
          src: "/modulo12init.png",
          alt: "Inicio del módulo de mercado de valores",
          title: "Módulo mercado de valores",
        },
        {
          src: "/modulo12-content.png",
          alt: "Contenido del módulo sobre mercado de valores",
          title: "Pilares del mercado de valores",
        },
        {
          src: "/modulo12-answ.png",
          alt: "Cuestiones sobre el mercado de valores",
          title: "Preguntas basicas del mercado de valores",
        },
        {
          src: "/modulo12-fin.png",
          alt: "Finalización del módulo de mercado de valores",
          title: "Final del módulo",
        },
        {
          src: "/modulo12-certi.png",
          alt: "certificación del curso de mercado de valores",
          title: "Certificación del curso",
        },
        {
          src: "/resumen-amboscursos.png",
          alt: "Constancia realización de ambos cursos",
          title: "Constancia de ambos cursos",
        },
      ],
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-background text-foreground">
        {courses.map((course) => (
          <CourseSection key={course.id} course={course} />
        ))}
      </main>
      <Footer />
    </>
  )
}
