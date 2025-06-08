"use client";

import { Building, Lightbulb, Truck, ArrowRight } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const services = [
  {
    icon: Building,
    title: "Fachadas",
    description: "Design arquitetônico que transforma espaços comerciais em marcos visuais únicos.",
    features: ["ACM Premium", "LED Inteligente", "Design 3D", "Garantia Total"],
  },
  {
    icon: Lightbulb,
    title: "Letreiros Luminosos",
    description: "Iluminação estratégica que garante visibilidade 24h com eficiência energética.",
    features: ["Tecnologia LED", "Controle Remoto", "Baixo Consumo", "Durabilidade"],
  },
  {
    icon: Truck,
    title: "Veículos",
    description: "Transforme sua frota em mídia móvel de alto impacto visual e publicitário.",
    features: ["Envelopamento", "Plotagem", "Adesivação", "Proteção UV"],
  }
];

export default function Services() {
  return (    <section id="servicos" className="py-16 sm:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-gray-900 dark:text-white mb-4 sm:mb-6 lg:mb-8">
            <span className="font-bold">Serviços</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
            Soluções visuais que elevam sua marca a um novo patamar de excelência.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-6 sm:space-y-8 ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 dark:bg-gray-800 rounded-xl sm:rounded-2xl">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-gray-900 dark:text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 dark:text-white mb-4 sm:mb-6">
                      <span className="font-bold">{service.title}</span>
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light mb-6 sm:mb-8">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <WhatsAppButton
                    message={`Olá! Gostaria de saber mais sobre ${service.title}.`}
                    source={`servicos-${service.title.toLowerCase()}`}
                    className="group bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center text-sm sm:text-base"
                  >
                    Saber Mais
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </WhatsAppButton>
                </div>

                {/* Visual */}
                <div className={`order-first lg:order-none ${!isEven ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl sm:rounded-3xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-400/20 dark:to-purple-400/20 flex items-center justify-center">
                      <Icon className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 text-gray-400 dark:text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}