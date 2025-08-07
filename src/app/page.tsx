import Link from 'next/link'
import { FiArrowRight, FiStar, FiTarget, FiTrendingUp } from 'react-icons/fi'

export const metadata = {
  title: 'Golfsimulator.nu - Din kompletta guide till golfsimulatorer',
  description: 'Allt du behöver veta om golfsimulatorer. Jämförelser, installationsguider, kostnader och expertråd för att hitta rätt simulator.',
}

const featuredArticles = [
  {
    title: 'Komplett guide: Bygga din egen golfsimulator',
    excerpt: 'Steg-för-steg guide för att bygga den perfekta golfsimulatorn hemma. Från planering till färdig installation.',
    href: '/bygga-golfsimulator',
    icon: FiTarget,
    category: 'Installation',
  },
  {
    title: 'Golfsimulator kostnad: Komplett prisguide 2024',
    excerpt: 'Allt om kostnader för golfsimulatorer - från budget-alternativ till premium-system. Jämför priser och funktioner.',
    href: '/golfsimulator-kostnad',
    icon: FiTrendingUp,
    category: 'Priser',
  },
  {
    title: 'TrackMan vs SkyTrak: Vilken är bäst?',
    excerpt: 'Detaljerad jämförelse mellan TrackMan och SkyTrak. Vi testar noggrannhet, funktioner och prisvärdhet.',
    href: '/trackman-vs-skytrak',
    icon: FiStar,
    category: 'Jämförelse',
  },
]

const latestArticles = [
  {
    title: 'Bäst i test: Golfsimulatorer 2024',
    excerpt: 'Våra experter har testat årets bästa golfsimulatorer. Se vilka som kommer på topp.',
    href: '/bast-i-test-golfsimulator',
    date: '2024-01-15',
  },
  {
    title: 'Installation av golfsimulator i garage',
    excerpt: 'Praktisk guide för att installera golfsimulator i ditt garage. Tips och tricks från proffsen.',
    href: '/golfsimulator-i-garage',
    date: '2024-01-10',
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-golf-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-golf-green-950 mb-6">
              Din guide till den perfekta
              <span className="block text-golf-green-700">golfsimulatorn</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Vi hjälper dig hitta rätt golfsimulator för dina behov och budget. 
              Jämförelser, installationsguider och expertråd - allt på ett ställe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/bygga-golfsimulator"
                className="cta-button text-center"
              >
                Kom igång med din simulator
              </Link>
              <Link
                href="/bast-i-test-golfsimulator"
                className="inline-block border-2 border-golf-green-950 text-golf-green-950 px-8 py-3 rounded-lg font-semibold hover:bg-golf-green-950 hover:text-white transition-colors duration-300 text-center"
              >
                Se bäst i test
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-golf-green-950 mb-4">
              Populära guider
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Våra mest lästa artiklar med allt du behöver veta om golfsimulatorer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => {
              const IconComponent = article.icon
              return (
                <Link
                  key={article.href}
                  href={article.href}
                  className="article-card group"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-golf-green-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="h-6 w-6 text-golf-green-700" />
                      </div>
                      <span className="text-sm font-medium text-golf-green-600 uppercase tracking-wide">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-golf-green-950 mb-3 group-hover:text-golf-green-700 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-golf-green-700 font-medium">
                      Läs mer
                      <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-golf-green-950">
              Senaste artiklarna
            </h2>
            <Link
              href="/artiklar"
              className="text-golf-green-700 hover:text-golf-green-900 font-medium flex items-center"
            >
              Visa alla
              <FiArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="article-card group"
              >
                <div className="h-48 bg-gradient-to-br from-golf-green-100 to-golf-green-200"></div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {new Date(article.date).toLocaleDateString('sv-SE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h3 className="text-xl font-semibold text-golf-green-950 mb-3 group-hover:text-golf-green-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-golf-green-700 font-medium">
                    Läs artikel
                    <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-golf-green-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Redo att bygga din golfsimulator?
          </h2>
          <p className="text-xl text-green-200 mb-8 leading-relaxed">
            Kontakta oss för professionell installation och rådgivning. 
            Vi hjälper dig från planering till färdig simulator.
          </p>
          <a
            href="https://golfprojekt.se"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-golf-green-950 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-100 transition-colors duration-300"
          >
            Begär kostnadsfri offert →
          </a>
        </div>
      </section>
    </div>
  )
}
