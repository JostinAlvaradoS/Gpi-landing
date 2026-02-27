"use client"

import Image from "next/image"
import {
  LayoutDashboard,
  CalendarRange,
  ShoppingCart,
  Users,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: CalendarRange, label: "Planificaci\u00f3n", active: false },
  { icon: ShoppingCart, label: "Compras P\u00fablicas", active: false },
  { icon: Users, label: "Talento Humano", active: false },
  { icon: ShieldCheck, label: "Fortalecimiento", active: false },
  { icon: ClipboardCheck, label: "Cumplimiento", active: false },
]

export function ProductSpotlight() {
  const { ref: mockupRef, inView: mockupInView } = useInView()
  const { ref: contentRef, inView: contentInView } = useInView()

  return (
    <section id="gpi" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* App Mockup - slides from left */}
          <div
            ref={mockupRef}
            className={cn(
              "relative opacity-0",
              mockupInView && "animate-slide-from-left opacity-100"
            )}
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-2xl shadow-primary/10">
              {/* Mock title bar */}
              <div className="flex items-center gap-2 border-b border-border bg-[#003B72] px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-400/60" />
                <div className="h-3 w-3 rounded-full bg-[#FFA80D]/60" />
                <div className="h-3 w-3 rounded-full bg-green-400/60" />
                <span className="ml-3 text-xs text-white/70">
                  {"GPI - Gesti\u00f3n P\u00fablica Inteligente"}
                </span>
              </div>
              <div className="flex">
                {/* Sidebar */}
                <div className="hidden w-48 border-r border-border bg-[#003B72]/5 p-3 sm:block">
                  <div className="mb-4 flex items-center gap-2 px-2">
                    <Image
                      src="/images/gpi-app-icon.png"
                      alt="GPI"
                      width={28}
                      height={28}
                      className="h-7 w-7 rounded-md"
                    />
                    <span className="text-xs font-bold text-foreground">
                      GPI
                    </span>
                  </div>
                  <nav className="flex flex-col gap-1">
                    {menuItems.map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs transition-colors ${
                          item.active
                            ? "bg-primary/10 font-medium text-primary"
                            : "text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        <item.icon className="h-3.5 w-3.5" />
                        {item.label}
                      </div>
                    ))}
                  </nav>
                </div>
                {/* Main content area */}
                <div className="flex-1">
                  <Image
                    src="/images/app-dashboard.jpg"
                    alt="Vista del dashboard principal de la aplicaci\u00f3n GPI con m\u00e9tricas y visualizaciones de datos"
                    width={500}
                    height={350}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content - slides from right */}
          <div
            ref={contentRef}
            className={cn(
              "flex flex-col gap-6 opacity-0",
              contentInView && "animate-slide-from-right opacity-100"
            )}
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#FFA80D]/30 bg-[#FFA80D]/5 px-4 py-1.5">
              <span className="text-xs font-semibold text-[#FFA80D]">
                Producto Estrella
              </span>
            </div>

            <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {"GPI: Tu App de Gesti\u00f3n P\u00fablica Inteligente"}
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground">
              {"Una plataforma integral para modernizar la administraci\u00f3n p\u00fablica en Ecuador. Desde la planificaci\u00f3n estrat\u00e9gica hasta el cumplimiento normativo, GPI centraliza todas las herramientas que tu instituci\u00f3n necesita."}
            </p>

            <ul className="flex flex-col gap-3">
              {[
                "Dashboard centralizado con m\u00e9tricas en tiempo real",
                "M\u00f3dulos integrados de planificaci\u00f3n y compras",
                "Gesti\u00f3n completa de talento humano",
                "Reportes autom\u00e1ticos de cumplimiento",
                "Interfaz intuitiva y f\u00e1cil de usar",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFA80D]/10">
                    <div className="h-2 w-2 rounded-full bg-[#FFA80D]" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
