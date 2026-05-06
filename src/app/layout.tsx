import type { Metadata } from 'next'
import { Inter, Philosopher } from 'next/font/google'
import Shader from '@/components/Shader'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { AuthProvider } from '@/app/context/AuthContext'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const philosopher = Philosopher({
  variable: '--font-philosopher',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Cross MU Online',
  description: 'Cross MU Online',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${philosopher.variable} h-full antialiased`}>
      <head>
        {/* video */}
        <link rel="preload" href="/home/character.webm" as="video" type="video/webm" />
        {/* top 5 heaviest images */}
        <link rel="preload" href="/bg-scales.webp" as="image" type="image/webp" />
        <link rel="preload" href="/bg-texture.webp" as="image" type="image/webp" />
        <link rel="preload" href="/logo-emblem.webp" as="image" type="image/webp" />
        <link rel="preload" href="/home/hero.webp" as="image" type="image/webp" />
        <link rel="preload" href="/nav-bg.webp" as="image" type="image/webp" />
      </head>
      <body className="relative flex min-h-full w-full flex-col">
        <AuthProvider>
          <Navbar />
          {/* Base background image */}
          <Shader />
          <main className="w-full">{children}</main>
          <Footer />
          <Image
            src="/bg-stripped.webp"
            alt=""
            width={3120}
            height={5800}
            className="stripped absolute top-0 right-0 -left-440 z-[9] mx-auto h-full max-w-none md:top-136 md:left-0"
          />
        </AuthProvider>
      </body>
    </html>
  )
}
