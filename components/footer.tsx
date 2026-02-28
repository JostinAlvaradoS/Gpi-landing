"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function Footer() {
  const { ref: ctaRef, inView: ctaInView } = useInView()

  return (
    <footer id="contacto" className="border-t border-border bg-[#003B72] text-white">
      {/* CTA Banner */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div
          ref={ctaRef}
          className="flex flex-col items-center gap-6 py-16 text-center lg:py-20"
        >
          <h2 className="text-pretty text-3xl font-bold tracking-tight text-white md:text-4xl">
            <span
              className={cn(
                "inline-block opacity-0",
                ctaInView && "animate-typewriter opacity-100"
              )}
            >
              &#218;nete a la revoluci&#243;n GovTech
            </span>
          </h2>
          <p
            className={cn(
              "max-w-lg text-balance text-lg leading-relaxed text-white/70 opacity-0",
              ctaInView && "animate-fade-up opacity-100 delay-600"
            )}
          >
            Moderniza tu instituci&#243;n p&#250;blica con la plataforma de gesti&#243;n m&#225;s avanzada de Ecuador.
          </p>
          <div
            className={cn(
              "opacity-0",
              ctaInView && "animate-fade-up opacity-100 delay-800"
            )}
          >
            <Button size="lg" className="bg-[#FFA80D] font-semibold text-[#003B72] hover:bg-[#FFA80D]/90" asChild>
              <Link href="#">Contactar Ventas</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-2.5">
                <Image
                  src="/images/gpi-app-icon.png"
                  alt="GPI"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-lg"
                />
                <span className="text-sm font-bold text-white">Gesti&#243;n P&#250;blica Inteligente</span>
              </Link>
              <p className="text-sm leading-relaxed text-white/60">
                Transformando la gesti&#243;n p&#250;blica en Ecuador con tecnolog&#237;a inteligente.
              </p>
              <p className="text-sm font-medium text-[#FFA80D]">
                www.gestionpublica.ec
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">Plataforma</h4>
              <nav className="flex flex-col gap-2.5">
                <Link href="#funcionalidades" className="text-sm text-white/60 transition-colors hover:text-white">
                  Funcionalidades
                </Link>
                <Link href="#beneficios" className="text-sm text-white/60 transition-colors hover:text-white">
                  Beneficios
                </Link>
                <Link href="#gpi" className="text-sm text-white/60 transition-colors hover:text-white">
                  GPI App
                </Link>
                <Link href="#precios" className="text-sm text-white/60 transition-colors hover:text-white">
                  Precios
                </Link>
              </nav>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">Empresa</h4>
              <nav className="flex flex-col gap-2.5">
                <Link href="#" className="text-sm text-white/60 transition-colors hover:text-white">
                  Sobre Nosotros
                </Link>
                <Link href="#" className="text-sm text-white/60 transition-colors hover:text-white">
                  Blog
                </Link>
                <Link href="#" className="text-sm text-white/60 transition-colors hover:text-white">
                  Carreras
                </Link>
                <Link href="#contacto" className="text-sm text-white/60 transition-colors hover:text-white">
                  Contacto
                </Link>
              </nav>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">Legal</h4>
              <nav className="flex flex-col gap-2.5">
                <Link href="#" className="text-sm text-white/60 transition-colors hover:text-white">
                  Pol&#237;tica de Privacidad
                </Link>
                <Link href="#" className="text-sm text-white/60 transition-colors hover:text-white">
                  T&#233;rminos de Servicio
                </Link>
                <Link href="#" className="text-sm text-white/60 transition-colors hover:text-white">
                  Seguridad
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row lg:px-8">
          <p className="text-xs text-white/50">
            &#169; 2026 Gesti&#243;n P&#250;blica Ecuador. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-white/50 transition-colors hover:text-white" aria-label="Twitter">
              <TwitterIcon className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-white/50 transition-colors hover:text-white" aria-label="Facebook">
              <FacebookIcon className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-white/50 transition-colors hover:text-white" aria-label="LinkedIn">
              <LinkedInIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
