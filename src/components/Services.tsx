"use client";

import { Building, Lightbulb, FileImage, Palette, Truck, Users } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const services = [
  {
    icon: Building,
    title: "Fachadas",
    description: "Fachadas completas para empresas, lojas e comércios. Materiais de qualidade e design exclusivo.",
    features: ["ACM", "Acrílico", "Vidro temperado", "LED"],
    color: "blue"
  },
  {
    icon: Lightbulb,
    title: "Letreiros Luminosos",
    description: "Letreiros com iluminação LED para máxima visibilidade dia e noite.",
    features: ["LED interno", "Neon flex", "Backlight", "Programável"],
    color: "yellow"
  },
  {
    icon: FileImage,
    title: "Placas e Banners",
    description: "Sinalização completa para seu negócio com materiais resistentes às intempéries.",
    features: ["Lona", "Vinil", "ACM", "PVC"],
    color: "green"
  },
  {
    icon: Palette,
    title: "Adesivos",
    description: "Adesivos personalizados para veículos, vitrines e decoração.",
    features: ["Recorte eletrônico", "Impressão digital", "Vinil automotivo", "Envelopamento"],
    color: "purple"
  },
  {
    icon: Truck,
    title: "Veículos",
    description: "Personalização completa de veículos para sua empresa com alta qualidade.",
    features: ["Plotagem", "Envelopamento", "Adesivação", "Frota"],
    color: "red"
  },
  {
    icon: Users,
    title: "Projetos Especiais",
    description: "Soluções personalizadas para eventos, inaugurações e projetos únicos.",
    features: ["Eventos", "Stands", "Totens", "Displays"],
    color: "indigo"
  }
];

const colorClasses = {
  blue: "bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white",
  yellow: "bg-yellow-100 text-yellow-700 group-hover:bg-yellow-500 group-hover:text-white",
  green: "bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white",
  purple: "bg-purple-100 text-purple-700 group-hover:bg-purple-600 group-hover:text-white",
  red: "bg-red-100 text-red-700 group-hover:bg-red-600 group-hover:text-white",
  indigo: "bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white"
};

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-blue-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em comunicação visual para destacar sua marca e atrair mais clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-xl ${colorClasses[service.color as keyof typeof colorClasses]} flex items-center justify-center mb-6 transition-all duration-300`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <WhatsAppButton
                  message={`Olá! Gostaria de saber mais sobre ${service.title}.`}
                  source={`servicos-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                >
                  Solicitar Orçamento
                </WhatsAppButton>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Não encontrou o que precisa?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Criamos soluções personalizadas para cada necessidade. Entre em contato e vamos conversar!
          </p>
          <WhatsAppButton
            message="Olá! Preciso de uma solução personalizada em comunicação visual."
            source="servicos-personalizado"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center"
          >
            Falar com Especialista
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}