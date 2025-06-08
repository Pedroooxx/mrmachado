"use client";

import { useState } from "react";
import { ExternalLink, Eye } from "lucide-react";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

const portfolioItems = [
  {
    id: 1,
    title: "Fachada Moderna Restaurante",
    category: "fachadas",
    image: "/api/placeholder/400/300",
    description: "Fachada completa com ACM e iluminação LED para restaurante em Jaboti.",
    tags: ["ACM", "LED", "Restaurante"]
  },
  {
    id: 2,
    title: "Letreiro Farmácia Central",
    category: "letreiros",
    image: "/api/placeholder/400/300",
    description: "Letreiro luminoso com cruz farmacêutica e nome da empresa.",
    tags: ["LED", "Farmácia", "Cruz"]
  },
  {
    id: 3,
    title: "Frota Delivery Pizzaria",
    category: "veiculos",
    image: "/api/placeholder/400/300",
    description: "Adesivação completa de frota para delivery de pizzaria local.",
    tags: ["Adesivação", "Delivery", "Frota"]
  },
  {
    id: 4,
    title: "Loja de Roupas Fashion",
    category: "fachadas",
    image: "/api/placeholder/400/300",
    description: "Fachada elegante para loja de roupas femininas com detalhes em acrílico.",
    tags: ["Acrílico", "Moda", "Elegante"]
  },
  {
    id: 5,
    title: "Banners Promocionais",
    category: "placas",
    image: "/api/placeholder/400/300",
    description: "Série de banners para campanha promocional de supermercado.",
    tags: ["Banner", "Promoção", "Supermercado"]
  },
  {
    id: 6,
    title: "Stand Feira Agropecuária",
    category: "especiais",
    image: "/api/placeholder/400/300",
    description: "Stand completo para feira agropecuária com design atrativo.",
    tags: ["Stand", "Feira", "Agropecuária"]
  }
];

const categories = [
  { id: "all", name: "Todos", count: portfolioItems.length },
  { id: "fachadas", name: "Fachadas", count: portfolioItems.filter(item => item.category === "fachadas").length },
  { id: "letreiros", name: "Letreiros", count: portfolioItems.filter(item => item.category === "letreiros").length },
  { id: "veiculos", name: "Veículos", count: portfolioItems.filter(item => item.category === "veiculos").length },
  { id: "placas", name: "Placas", count: portfolioItems.filter(item => item.category === "placas").length },
  { id: "especiais", name: "Especiais", count: portfolioItems.filter(item => item.category === "especiais").length }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nosso <span className="text-blue-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confira alguns dos nossos trabalhos realizados em Jaboti e região. Cada projeto é único e desenvolvido com muito carinho.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">              <div className="relative overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <button 
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
                      onClick={() => setSelectedItem(item)}
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <WhatsAppButton
                  message={`Olá! Vi o projeto "${item.title}" no portfolio e gostaria de algo similar.`}
                  source={`portfolio-${item.category}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Quero Igual
                </WhatsAppButton>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Gostou do que viu?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Temos muito mais trabalhos para mostrar! Siga nosso Instagram e veja nossos projetos mais recentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://instagram.com/mrmachadocv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
              >
                Ver no Instagram
              </a>
              <WhatsAppButton
                message="Olá! Vi o portfolio e gostaria de conversar sobre um projeto."
                source="portfolio-geral"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                Falar Conosco
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}