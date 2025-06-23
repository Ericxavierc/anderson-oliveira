
'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const faqs = [
  {
    question: 'Quanto custa para abrir uma empresa?',
    answer: 'Os custos variam conforme o tipo de empresa e localização. Para uma empresa simples na Bahia, o investimento médio é de R$ 500,00 em taxas + honorários profissionais a partir de R$ 350,00. Para MEI, o registro é gratuito.'
  },
  {
    question: 'Qual tipo de empresa devo abrir?',
    answer: 'Depende do seu plano de negócio, faturamento previsto e atividade. Oferecemos consultoria gratuita para identificar o melhor tipo: MEI, ME, LTDA, EIRELI ou SA, sempre considerando a tributação mais vantajosa.'
  },
  {
    question: 'É obrigatório ter contador?',
    answer: 'Para MEI não é obrigatório, mas é recomendado para orientações. Para demais tipos de empresa, o contador é obrigatório para atender as obrigações fiscais mensais junto aos órgãos Federal, Estadual e Municipal.'
  },
  {
    question: 'Quanto tempo demora para abrir uma empresa?',
    answer: 'O prazo médio é de 15 a 30 dias, dependendo da agilidade na entrega dos documentos e análise dos órgãos competentes. Acompanhamos todo o processo para garantir máxima agilidade.'
  },
  {
    question: 'Que documentos preciso para abrir uma empresa?',
    answer: 'Principais documentos: IPTU do endereço da sede, RG e CPF dos sócios, comprovante de endereço dos sócios, definição da atividade (CNAE) e nome fantasia. Para sócios estrangeiros, documentos adicionais são necessários.'
  },
  {
    question: 'Preciso de certificado digital?',
    answer: 'Não é obrigatório inicialmente, mas é altamente recomendado para acessar serviços digitais, emitir notas fiscais e cumprir obrigações online. Oferecemos emissão e suporte completo.'
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/5571988226503?text=Olá! Tenho algumas dúvidas sobre abertura de empresa.', '_blank')
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dúvidas
              <span className="block text-navy-600">Frequentes</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-navy-600 to-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas principais dúvidas sobre abertura de empresa e nossos serviços
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-navy-100 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-navy-50 transition-colors duration-300"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-navy-600 transform transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6 animate-fade-in">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-navy-100 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-navy-975 mb-4">
                Não encontrou sua dúvida?
              </h3>
              <p className="text-navy-700 mb-6">
                Entre em contato conosco pelo WhatsApp e receba atendimento personalizado!
              </p>
              <button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"/>
                </svg>
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
