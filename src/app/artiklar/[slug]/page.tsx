import { notFound } from 'next/navigation'
import { getArticleBySlug, getAllSlugs } from '../../../../lib/articles'
import Link from 'next/link'
import { FiCalendar, FiClock, FiArrowLeft } from 'react-icons/fi'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: 'Artikel hittades inte',
    }
  }

  return {
    title: `${article.title} | Golfsimulator.nu`,
    description: article.description,
    keywords: article.keywords.join(', '),
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      authors: ['Golfsimulator.nu'],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
    },
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <article className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-golf-green-700 hover:text-golf-green-900 font-medium"
          >
            <FiArrowLeft className="mr-2 h-4 w-4" />
            Tillbaka till startsidan
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
            <span className="bg-golf-green-100 text-golf-green-800 px-3 py-1 rounded-full font-medium">
              {article.category}
            </span>
            <div className="flex items-center">
              <FiCalendar className="mr-1 h-4 w-4" />
              {new Date(article.date).toLocaleDateString('sv-SE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center">
              <FiClock className="mr-1 h-4 w-4" />
              {article.readTime}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-golf-green-950 leading-tight mb-6">
            {article.title}
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            {article.description}
          </p>
        </header>

        {/* Article Content */}
        <div
          className="article-content prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-golf-green-50 rounded-lg border border-golf-green-200">
          <h3 className="text-2xl font-bold text-golf-green-950 mb-4">
            Behöver du hjälp med installation?
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Våra experter på Golfprojekt.se hjälper dig med allt från planering till färdig installation. 
            Kontakta oss för en kostnadsfri konsultation och offert.
          </p>
          <a
            href="https://golfprojekt.se"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Begär kostnadsfri offert →
          </a>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-golf-green-950 mb-8">
            Läs även dessa artiklar
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/golfsimulator-kostnad" className="article-card group">
              <div className="p-6">
                <h4 className="font-semibold text-golf-green-950 mb-2 group-hover:text-golf-green-700 transition-colors">
                  Golfsimulator kostnad - Komplett prisguide
                </h4>
                <p className="text-gray-600 text-sm">
                  Allt om kostnader för golfsimulatorer från budget till premium.
                </p>
              </div>
            </Link>
            <Link href="/trackman-vs-skytrak" className="article-card group">
              <div className="p-6">
                <h4 className="font-semibold text-golf-green-950 mb-2 group-hover:text-golf-green-700 transition-colors">
                  TrackMan vs SkyTrak - Vilken är bäst?
                </h4>
                <p className="text-gray-600 text-sm">
                  Detaljerad jämförelse mellan de två populäraste systemen.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

      </div>
    </article>
  )
}
