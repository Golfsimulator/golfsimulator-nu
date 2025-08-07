import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Golfsimulator.nu - Din guide till den perfekta golfsimulatorn',
  description: 'Komplett guide för golfsimulatorer. Jämförelser, installationsguider och expertråd för att hitta rätt golfsimulator för dig.',
  keywords: 'golfsimulator, TrackMan, SkyTrak, golfbås, installation, jämförelse',
  openGraph: {
    title: 'Golfsimulator.nu - Din guide till den perfekta golfsimulatorn',
    description: 'Komplett guide för golfsimulatorer. Jämförelser, installationsguider och expertråd.',
    url: 'https://golfsimulator.nu',
    siteName: 'Golfsimulator.nu',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Golfsimulator.nu - Din guide till den perfekta golfsimulatorn',
    description: 'Komplett guide för golfsimulatorer. Jämförelser, installationsguider och expertråd.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <head>
        <link
          rel="canonical"
          href="https://golfsimulator.nu"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} min-h-screen bg-gray-50`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
