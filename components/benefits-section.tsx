"use client"

import {
  Zap,
  Eye,
  Lock,
  Quote,
} from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const benefits = [
  {
    icon: Zap,
    title: "Eficiencia Operativa",
    description:
      "Reduce tiempos de gesti\u00f3n hasta un 60% con automatizaci\u00f3n inteligente de procesos gubernamentales.",
  },
  {
    icon: Eye,
    title: "Transparencia Gubernamental",
    description:
      "Garantiza total visibilidad y trazabilidad en todos los procesos de la administraci\u00f3n p\u00fablica.",
  },
  {
    icon: Lock,
    title: "Seguridad de Datos",
    description:
      "Cumple con todas las regulaciones ecuatorianas de protecci\u00f3n de datos y seguridad inform\u00e1tica.",
  },
]

const testimonials = [
  {
    quote:
      "GPI transform\u00f3 completamente nuestra gesti\u00f3n institucional. Los procesos que antes tardaban semanas ahora se completan en d\u00edas.",
    author: "Mar\u00eda Fern\u00e1ndez",
    role: "Directora de Planificaci\u00f3n",
    org: "GAD Provincial",
  },
  {
    quote:
      "La transparencia que ofrece la plataforma nos ha permitido mejorar la confianza ciudadana y optimizar el uso de recursos p\u00fablicos.",
    author: "Carlos Mendoza",
    role: "Coordinador de Compras P\u00fablicas",
    org: "Ministerio Sectorial",
  },
]

function BenefitCard({ benefit, delay }: { benefit: typeof benefits[number]; delay: string }) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center opacity-0 transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
        inView && `animate-fade-up opacity-100 ${delay}`
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
        <benefit.icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">
        {benefit.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {benefit.description}
      </p>
    </div>
  )
}

function TestimonialCard({ testimonial, delay }: { testimonial: typeof testimonials[number]; delay: string }) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={cn(
        "relative rounded-2xl border border-border bg-card p-8 opacity-0",
        inView && `animate-fade-up opacity-100 ${delay}`
      )}
    >
      <Quote className="mb-4 h-8 w-8 text-primary/20" />
      <p className="mb-6 text-lg leading-relaxed text-foreground italic">
        {`\u201c${testimonial.quote}\u201d`}
      </p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <span className="text-sm font-bold text-primary">
            {testimonial.author.split(" ").map((n) => n[0]).join("")}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">
            {testimonial.author}
          </p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role} — {testimonial.org}
          </p>
        </div>
      </div>
    </div>
  )
}

export function BenefitsSection() {
  const { ref: headerRef, inView: headerInView } = useInView()

  return (
    <section id="beneficios" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div
          ref={headerRef}
          className={cn(
            "mx-auto mb-16 max-w-2xl text-center opacity-0",
            headerInView && "animate-fade-up opacity-100"
          )}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#FFA80D]">
            Ventajas
          </p>
          <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Por Qu\u00e9 Elegir GPI"}
          </h2>
          <p className="mt-4 text-balance text-lg leading-relaxed text-muted-foreground">
            {"Construida espec\u00edficamente para las necesidades del sector p\u00fablico ecuatoriano."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {benefits.map((benefit, i) => (
            <BenefitCard key={benefit.title} benefit={benefit} delay={["", "delay-100", "delay-200"][i]} />
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} delay={i === 0 ? "" : "delay-200"} />
          ))}
        </div>
      </div>
    </section>
  )
}
