import type { Metadata } from 'next'
import { Inter, Philosopher } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import PageLoader from '@/components/PageLoader'
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
        <PageLoader />
        <AuthProvider>
          <Navbar />
          <SmoothScroll>
            <main className="w-full">{children}</main>
            <Footer />
            <Image
              src="/bg-strip.webp"
              alt=""
              width={3120}
              height={5800}
              className="absolute inset-0 top-136 z-[9] h-full"
            />
          </SmoothScroll>
        </AuthProvider>
      </body>
    </html>
  )
}
