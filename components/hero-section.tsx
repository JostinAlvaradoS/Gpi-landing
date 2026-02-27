"use client"

import { useState } from "react"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const [hovered, setHovered] = useState<"banner" | "laptop" | "phone" | null>(null)

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-fade-in delay-500" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#FFA80D]/5 blur-3xl animate-fade-in delay-700" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 opacity-0 animate-slide-from-left">
              <div className="h-2 w-2 rounded-full bg-[#FFA80D]" />
              <span className="text-xs font-semibold text-primary">
                Plataforma para servidores p&#250;blicos en el Ecuador
              </span>
            </div>

            <h1 className="text-pretty text-4xl font-bold leading-tight tracking-tight text-foreground opacity-0 animate-slide-from-left delay-100 md:text-5xl lg:text-6xl">
              Gesti&#243;n P&#250;blica{" "}
              <span className="text-primary">Inteligente</span>
            </h1>

            <p className="max-w-lg text-balance text-lg leading-relaxed text-muted-foreground opacity-0 animate-slide-from-left delay-200">
              La plataforma integral que transforma la administraci&#243;n p&#250;blica en
              Ecuador. Planificaci&#243;n, compras p&#250;blicas, talento humano y
              cumplimiento normativo en un solo lugar.
            </p>

            <div className="flex flex-col gap-2 pt-2 opacity-0 animate-slide-from-left delay-300 sm:flex-row sm:gap-6">
              {[
                "Seguridad certificada",
                "Soporte 24/7",
                "100% ecuatoriano",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FFA80D]" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative h-[460px] w-full max-w-[560px] md:h-[540px] lg:h-[580px]">

              <div className="absolute left-0 top-0 w-[80%] opacity-0 animate-slide-from-right delay-200">
                <div
                  onMouseEnter={() => setHovered("banner")}
                  onMouseLeave={() => setHovered(null)}
                  className={cn(
                    "cursor-pointer overflow-hidden rounded-2xl border border-border/50 bg-card shadow-xl transition-all duration-500 ease-out",
                    hovered === "banner"
                      ? "z-30 rotate-0 scale-110"
                      : hovered !== null
                        ? "z-0 rotate-[-4deg] scale-95 opacity-60"
                        : "z-0 rotate-[-4deg]"
                  )}
                >
                  <Image
                    src="/images/gpi-banner.jpeg"
                    alt="GPI banner con logotipo oficial"
                    width={680}
                    height={200}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="absolute right-0 top-[60px] w-[88%] opacity-0 animate-slide-from-right delay-400">
                <div
                  onMouseEnter={() => setHovered("laptop")}
                  onMouseLeave={() => setHovered(null)}
                  className={cn(
                    "cursor-pointer overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl transition-all duration-500 ease-out",
                    hovered === "laptop"
                      ? "z-30 rotate-0 scale-110"
                      : hovered !== null
                        ? "z-10 rotate-[3deg] scale-95 opacity-60"
                        : "z-10 rotate-[3deg]"
                  )}
                >
                  <Image
                    src="/images/gpi-laptop-dashboard.jpeg"
                    alt="Dashboard de GPI con sus diferentes modulos"
                    width={680}
                    height={450}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="absolute bottom-0 left-[5%] w-[65%] opacity-0 animate-slide-from-right delay-600">
                <div
                  onMouseEnter={() => setHovered("phone")}
                  onMouseLeave={() => setHovered(null)}
                  className={cn(
                    "cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-out",
                    hovered === "phone"
                      ? "z-30 rotate-0 scale-110"
                      : hovered !== null
                        ? "z-20 rotate-[-3deg] scale-95 opacity-60"
                        : "z-20 rotate-[-3deg]"
                  )}
                >
                  <Image
                    src="/images/gpi-phone-hand.png"
                    alt="Smartphone con la app GPI abierta"
                    width={500}
                    height={340}
                    className="h-auto w-full object-contain"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
