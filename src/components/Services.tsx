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
  return (
    <section id="servicos" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-light text-gray-900 mb-8">
            <span className="font-bold">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Soluções visuais que elevam sua marca a um novo patamar de excelência.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-8 ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl">
                    <Icon className="h-8 w-8 text-gray-900" />
                  </div>
                  
                  <div>
                    <h3 className="text-4xl font-light text-gray-900 mb-6">
                      <span className="font-bold">{service.title}</span>
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <WhatsAppButton
                    message={`Olá! Gostaria de saber mais sobre ${service.title}.`}
                    source={`servicos-${service.title.toLowerCase()}`}
                    className="group bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center"
                  >
                    Saber Mais
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </WhatsAppButton>
                </div>

                {/* Visual */}
                <div className={`${!isEven ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <Icon className="h-24 w-24 text-gray-400" />
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