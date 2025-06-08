"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

const portfolioItems = [
  {
    id: 1,
    title: "Fachada Moderna",
    subtitle: "Restaurante Premium",
    category: "fachadas",
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=800&fit=crop&crop=center",
    description: "Transformação completa com materiais de primeira linha",
    year: "2024",
    metrics: { area: "120m²", prazo: "15 dias" }
  },
  {
    id: 2,
    title: "Letreiro Luminoso",
    subtitle: "Farmácia Central",
    category: "letreiros",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=800&fit=crop&crop=center",
    description: "Sistema de iluminação LED de alta eficiência",
    year: "2024",
    metrics: { altura: "3m", consumo: "50% menor" }
  },
  {
    id: 3,
    title: "Frota Corporativa",
    subtitle: "Delivery Express",
    category: "veiculos",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=800&fit=crop&crop=center",
    description: "Identidade visual impactante para toda frota",
    year: "2023",
    metrics: { veiculos: "15", alcance: "+200%" }
  },
  {
    id: 4,
    title: "Sinalização Premium",
    subtitle: "Shopping Center",
    category: "placas",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=800&fit=crop&crop=center",
    description: "Sistema completo de wayfinding e identidade",
    year: "2023",
    metrics: { placas: "50+", areas: "3 pisos" }
  }
];

const categories = [
  { id: "all", name: "Todos os Projetos" },
  { id: "fachadas", name: "Fachadas" },
  { id: "letreiros", name: "Letreiros" },
  { id: "veiculos", name: "Veículos" },
  { id: "placas", name: "Sinalização" }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-6xl lg:text-8xl font-extralight text-gray-900 mb-8 tracking-tight">
            Portfolio
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Cada projeto é uma história única. Exploramos possibilidades, 
            quebramos limites e criamos soluções que transformam negócios.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-20">
          <div className="bg-gray-50 rounded-full p-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-black text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project */}
        {filteredItems.length > 0 && (
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100">
                  <Image 
                    src={filteredItems[0].image} 
                    alt={filteredItems[0].title}
                    width={800}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                  {filteredItems[0].year}
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-5xl font-light text-gray-900 mb-4 leading-tight">
                    {filteredItems[0].title}
                  </h3>
                  <p className="text-xl text-blue-600 mb-6 font-medium">
                    {filteredItems[0].subtitle}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    {filteredItems[0].description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(filteredItems[0].metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-gray-50 rounded-2xl">
                      <div className="text-2xl font-bold text-gray-900">{value}</div>
                      <div className="text-sm text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <WhatsAppButton
                  message={`Olá! Vi o projeto "${filteredItems[0].title}" e gostaria de algo similar.`}
                  source="portfolio-featured"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center group"
                >
                  Quero um projeto assim
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </WhatsAppButton>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        {filteredItems.length > 1 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.slice(1).map((item, index) => (
              <div 
                key={item.id} 
                className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100 mb-6">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    {item.year}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-light text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <WhatsAppButton
                    message={`Olá! Vi o projeto "${item.title}" no portfolio e gostaria de mais informações.`}
                    source={`portfolio-${item.category}`}
                    className="w-full bg-gray-50 hover:bg-gray-100 text-gray-900 py-3 px-6 rounded-full font-medium transition-colors duration-300 text-center"
                  >
                    Solicitar Orçamento
                  </WhatsAppButton>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-32 py-20 bg-gray-50 rounded-3xl">
          <h3 className="text-4xl font-light text-gray-900 mb-6">
            Transforme sua <span className="font-bold">visão</span> em realidade
          </h3>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto font-light">
            Cada grande projeto começa com uma conversa. 
            Vamos descobrir juntos como elevar sua marca.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              message="Olá! Gostaria de conversar sobre um novo projeto de comunicação visual."
              source="portfolio-cta"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center group"
            >
              Iniciar Projeto
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </WhatsAppButton>
            
            <a 
              href="https://instagram.com/mrmachadocv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 px-10 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center"
            >
              Ver Mais no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}