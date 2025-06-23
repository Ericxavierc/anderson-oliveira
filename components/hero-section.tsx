
'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-975 via-navy-950 to-navy-900 overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/anderson-photo.jpg')] bg-cover bg-center parallax"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`text-center lg:text-left ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="block">Luz</span>
              <span className="block text-yellow-400">Contabilidade</span>
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-4">
              Anderson Oliveira
            </p>
            <p className="text-lg text-navy-200 mb-8 max-w-2xl">
              Contador profissional especialista em abertura de empresa e regularização fiscal. 
              Transforme seu sonho em realidade com quem entende do assunto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-whatsapp-500 hover:bg-whatsapp-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={scrollToContact}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Iniciar Conversa
              </Button>
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-975 px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Nossos Serviços
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-navy-600 rounded-full blur opacity-75"></div>
              <div className="relative bg-white rounded-full p-2 shadow-2xl">
                <div className="aspect-square w-80 h-80 md:w-96 md:h-96 relative rounded-full overflow-hidden">
                  <Image
                    src="/anderson-photo.jpg"
                    alt="Anderson Oliveira - Contador Especialista"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
