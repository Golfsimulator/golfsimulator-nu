import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-golf-green-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-golf-green-950 font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold">Golfsimulator.nu</span>
            </Link>
            <p className="text-green-200 text-sm leading-relaxed">
              Din kompletta guide till golfsimulatorer. Vi hjälper dig hitta rätt simulator för dina behov.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-green-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Hem
                </Link>
              </li>
              <li>
                <Link href="/bygga-golfsimulator" className="hover:text-white transition-colors">
                  Bygga Simulator
                </Link>
              </li>
              <li>
                <Link href="/golfsimulator-kostnad" className="hover:text-white transition-colors">
                  Kostnader
                </Link>
              </li>
              <li>
                <Link href="/bast-i-test-golfsimulator" className="hover:text-white transition-colors">
                  Bäst i Test
                </Link>
              </li>
            </ul>
          </div>

          {/* Populära artiklar */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Populärt</h3>
            <ul className="space-y-2 text-green-200">
              <li>
                <Link href="/trackman-vs-skytrak" className="hover:text-white transition-colors">
                  TrackMan vs SkyTrak
                </Link>
              </li>
              <li>
                <Link href="/golfsimulator-i-garage" className="hover:text-white transition-colors">
                  Installation i garage
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="hover:text-white transition-colors">
                  Om oss
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Behöver du hjälp?</h3>
            <p className="text-green-200 text-sm mb-4">
              Kontakta oss för professionell installation och rådgivning.
            </p>
            <a
              href="https://golfprojekt.se"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-golf-green-950 px-6 py-2 rounded-lg font-semibold hover:bg-green-100 transition-colors duration-300"
            >
              Begär offert →
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200 text-sm">
          <p>&copy; {currentYear} Golfsimulator.nu. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  )
}
