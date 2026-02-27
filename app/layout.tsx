import React, { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Gestión Pública Ecuador | GPI - Gestión Pública Inteligente',
  description: 'Plataforma integral de gestión pública inteligente para Ecuador. Planificación, compras públicas, talento humano y cumplimiento normativo. Moderniza la administración pública con GPI.',
  keywords: ['gestión pública Ecuador', 'app GPI', 'gobierno digital Ecuador', 'compras públicas', 'talento humano', 'planificación gubernamental'],
  authors: [{ name: 'Gestión Pública Ecuador' }],
  openGraph: {
    title: 'Gestión Pública Ecuador | GPI',
    description: 'Transforma la gestión pública con inteligencia. La app estrella para eficiencia gubernamental en Ecuador.',
    url: 'https://www.gestionpublica.ec',
    siteName: 'Gestión Pública Ecuador',
    locale: 'es_EC',
    type: 'website',
  },
  icons: {
    icon: '/Gpi-landing/images/gpi-app-icon.png',
    apple: '/Gpi-landing/images/gpi-app-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#003B72',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
