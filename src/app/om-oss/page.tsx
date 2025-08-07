import { FiTarget, FiUsers, FiAward, FiTrendingUp } from 'react-icons/fi'

export const metadata = {
  title: 'Om oss | Golfsimulator.nu - Experter på golfsimulatorer',
  description: 'Lär känna teamet bakom Golfsimulator.nu. Vi är experter på golfsimulatorer med många års erfarenhet av installation och rådgivning.',
}

export default function OmOssPage() {
  const stats = [
    {
      icon: FiUsers,
      number: '500+',
      label: 'Nöjda kunder',
    },
    {
      icon: FiAward,
      number: '10+',
      label: 'Års erfarenhet',
    },
    {
      icon: FiTarget,
      number: '1000+',
      label: 'Installationer',
    },
    {
      icon: FiTrendingUp,
      number: '98%',
      label: 'Kundnöjdhet',
    },
  ]

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-golf-green-950 mb-6">
            Om Golfsimulator.nu
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vi är Sveriges ledande expert på golfsimulatorer och hjälper dig att skapa 
            den perfekta golfupplevelsen hemma eller på kontoret.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-golf-green-950 mb-6">
                Vår historia
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Golfsimulator.nu startades 2014 av en grupp passionerade golfare som såg 
                  behovet av bättre information och rådgivning kring golfsimulatorer i Sverige.
                </p>
                <p>
                  Vi märkte att många kunder hade svårt att navigera bland alla olika alternativ 
                  och tekniska specifikationer. Därför skapade vi denna plattform för att 
                  förmedla objektiv information och expertråd.
                </p>
                <p>
                  Idag är vi stolta över att ha hjälpt hundratals kunder att hitta rätt 
                  golfsimulator och genomföra framgångsrika installationer.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-golf-green-100 to-golf-green-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-golf-green-700 font-medium">Placeholder för teambild</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-50 rounded-lg p-12 mb-20">
          <h2 className="text-3xl font-bold text-golf-green-950 text-center mb-12">
            Våra resultat talar för sig själva
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-golf-green-950 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-golf-green-950 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-golf-green-950 mb-4">
              Vårt uppdrag
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Att göra golfsimulatorer tillgängliga för alla genom tydlig information, 
              expertråd och professionella installationer. Vi tror att alla ska kunna 
              träna och njuta av golf året runt, oavsett väder eller säsong.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-golf-green-950 mb-4">
              Vår vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Att bli Skandinaviens mest betrodda källa för information och tjänster 
              inom golfsimulatorer. Vi strävar efter att vara den självklara partnern 
              när du ska investera i en golfsimulator.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-golf-green-950 text-center mb-12">
            Våra värderingar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-golf-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiTarget className="h-10 w-10 text-golf-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-golf-green-950 mb-4">
                Expertis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Vi har djup kunskap inom golf och teknik. Våra rekommendationer 
                baseras på verklig erfarenhet och testning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-golf-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiUsers className="h-10 w-10 text-golf-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-golf-green-950 mb-4">
                Kundnöjdhet
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Din framgång är vår framgång. Vi jobbar inte bara för att sälja, 
                utan för att du ska få den bästa lösningen för dina behov.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-golf-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiAward className="h-10 w-10 text-golf-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-golf-green-950 mb-4">
                Kvalitet
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Vi jobbar endast med de bästa produkterna och högsta 
                installationsstandarder. Kvalitet går aldrig på kompromiss.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-golf-green-950 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Redo att ta steget?
          </h2>
          <p className="text-xl text-green-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Låt oss hjälpa dig att skapa den perfekta golfupplevelsen. 
            Kontakta oss för en kostnadsfri konsultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://golfprojekt.se"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-golf-green-950 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors duration-300"
            >
              Begär offert på Golfprojekt.se
            </a>
            <a
              href="/kontakt"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-golf-green-950 transition-colors duration-300"
            >
              Kontakta oss
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
