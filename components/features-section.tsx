"use client"

import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  ClipboardCheck,
  BarChart3,
  Bell,
} from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: LayoutDashboard,
    title: "Dashboard Integral",
    description:
      "Visualiza el estado de todos tus procesos de contrataci\u00f3n en un panel centralizado con m\u00e9tricas en tiempo real.",
  },
  {
    icon: ShoppingCart,
    title: "Monitoreo de Contrataciones",
    description:
      "Sigue fases preparatoria, precontractual y ejecuci\u00f3n con progresos en tiempo real, como en la matriz SICAF.",
  },
  {
    icon: Users,
    title: "Talento Humano",
    description:
      "Gestiona responsables, roles y permisos para cada proceso. Asigna tareas y monitorea cumplimiento.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance LOSNCP",
    description:
      "Verifica autom\u00e1ticamente el cumplimiento de la Ley Org\u00e1nica del Sistema Nacional de Contrataci\u00f3n P\u00fablica.",
  },
  {
    icon: BarChart3,
    title: "Reportes Avanzados",
    description:
      "Genera reportes de efectividad, progreso total (1.92%) y an\u00e1lisis por fases con colores indicativos.",
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description:
      "Recibe notificaciones autom\u00e1ticas sobre plazos cr\u00edticos, cambios normativos y riesgos de incumplimiento.",
  },
]

function FeatureCard({ feature, delay }: { feature: typeof features[number]; delay: string }) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={cn(
        "group relative rounded-2xl border border-border bg-background p-8 opacity-0 transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
        inView && `animate-scale-in opacity-100 ${delay}`
      )}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 transition-colors duration-300 group-hover:bg-primary/10">
        <feature.icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-3 text-xl font-semibold text-foreground">
        {feature.title}
      </h3>
      <p className="leading-relaxed text-muted-foreground">
        {feature.description}
      </p>
    </div>
  )
}

const staggerDelays = ["", "delay-100", "delay-200", "delay-300", "delay-400", "delay-500"]

export function FeaturesSection() {
  const { ref: headerRef, inView: headerInView } = useInView()

  return (
    <section id="funcionalidades" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div
          ref={headerRef}
          className={cn(
            "mx-auto mb-16 max-w-2xl text-center opacity-0",
            headerInView && "animate-fade-up opacity-100"
          )}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#FFA80D]">
            Funcionalidades
          </p>
          <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Todo lo que necesitas en una sola plataforma
          </h2>
          <p className="mt-4 text-balance text-lg leading-relaxed text-muted-foreground">
            {"Herramientas especializadas para modernizar y optimizar la gesti\u00f3n p\u00fablica en Ecuador."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} delay={staggerDelays[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}
