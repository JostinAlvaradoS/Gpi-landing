"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/Gpi-landing/images/gpi-app-icon.png"
            alt="GPI Isotipo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-tight text-foreground">
              Gestión Pública Inteligente
            </span>
            <span className="text-xs leading-tight text-muted-foreground">
              www.gestionpublica.ec
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#funcionalidades"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Funcionalidades
          </Link>
          <Link
            href="#beneficios"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Beneficios
          </Link>
          <Link
            href="#precios"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Precios
          </Link>
          <Link
            href="#gpi"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            GPI App
          </Link>
          <Link
            href="#contacto"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contacto
          </Link>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar men\u00fa" : "Abrir men\u00fa"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            <Link href="#funcionalidades" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" onClick={() => setMobileOpen(false)}>
              Funcionalidades
            </Link>
            <Link href="#beneficios" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" onClick={() => setMobileOpen(false)}>
              Beneficios
            </Link>
            <Link href="#precios" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" onClick={() => setMobileOpen(false)}>
              Precios
            </Link>
            <Link href="#gpi" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" onClick={() => setMobileOpen(false)}>
              GPI App
            </Link>
            <Link href="#contacto" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" onClick={() => setMobileOpen(false)}>
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
