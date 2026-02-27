import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });

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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
