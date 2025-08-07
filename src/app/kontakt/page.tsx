'use client'
import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-golf-green-950 mb-6">
            Kontakta oss
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Har du frågor om golfsimulatorer eller behöver hjälp med installation? 
            Vi finns här för att hjälpa dig hitta rätt lösning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-golf-green-950 mb-6">
              Skicka ett meddelande
            </h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-green-600 text-5xl mb-4">✓</div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Tack för ditt meddelande!
                </h3>
                <p className="text-green-700">
                  Vi återkommer till dig så snart som möjligt.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Namn *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golf-green-500 focus:border-transparent outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-post *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golf-green-500 focus:border-transparent outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Ämne *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golf-green-500 focus:border-transparent outline-none transition-colors"
                  >
                    <option value="">Välj ämne</option>
                    <option value="installation">Installation och uppbyggnad</option>
                    <option value="products">Produktfrågor</option>
                    <option value="pricing">Priser och offert</option>
                    <option value="technical">Teknisk support</option>
                    <option value="other">Övrigt</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Meddelande *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Beskriv ditt projekt eller dina frågor..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golf-green-500 focus:border-transparent outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cta-button text-center"
                >
                  Skicka meddelande
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-golf-green-950 mb-6">
                Kontaktinformation
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <FiMail className="h-6 w-6 text-golf-green-700 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">E-post</h3>
                    <a href="mailto:info@golfprojekt.se" className="text-golf-green-700 hover:text-golf-green-900">
                      info@golfprojekt.se
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiPhone className="h-6 w-6 text-golf-green-700 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                    <a href="tel:+46123456789" className="text-golf-green-700 hover:text-golf-green-900">
                      +46 12 345 67 89
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiMapPin className="h-6 w-6 text-golf-green-700 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adress</h3>
                    <p className="text-gray-600">
                      Golfprojekt AB<br />
                      Golfgatan 123<br />
                      123 45 Stockholm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-golf-green-950 text-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">
                Professionell installation
              </h3>
              <p className="text-green-200 mb-6 leading-relaxed">
                Vi erbjuder kompletta lösningar från planering till färdig installation. 
                Besök vår huvudsajt för mer information om våra tjänster.
              </p>
              <a
                href="https://golfprojekt.se"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-golf-green-950 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors duration-300"
              >
                Besök Golfprojekt.se →
              </a>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-golf-green-950 mb-6">
                Vanliga frågor
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Hur lång tid tar en installation?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    En typisk installation tar 2-5 dagar beroende på komplexitet och förberedelser.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Erbjuder ni service efter installation?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Ja, vi erbjuder både garanti och löpande service för alla våra installationer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
