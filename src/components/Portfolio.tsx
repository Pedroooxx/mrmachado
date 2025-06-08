"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Play, ExternalLink, Eye } from "lucide-react";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Fachada Moderna ACM",
    category: "Fachadas",
    description: "Projeto completo de fachada com ACM premium e iluminação LED",
    image: "https://placehold.co/800x600/e2e8f0/64748b?text=Fachada+ACM",
    features: ["ACM Premium", "LED Strip", "Design Moderno"],
  },
  {
    id: 2,
    title: "Letreiro Luminoso 3D",
    category: "Letreiros",
    description: "Letreiro corporativo com letras caixas iluminadas",
    image: "https://placehold.co/800x600/e2e8f0/64748b?text=Letreiro+3D",
    features: ["Letras Caixas", "LED RGB", "Controle Remoto"],
  },
  {
    id: 3,
    title: "Envelopamento de Frota",
    category: "Veículos",
    description: "Adesivação completa de veículos comerciais",
    image: "https://placehold.co/800x600/e2e8f0/64748b?text=Envelopamento",
    features: ["Vinil Premium", "Laminação", "Garantia 5 anos"],
  },
  {
    id: 4,
    title: "Totem Digital",
    category: "Digital",
    description: "Totem interativo com tela LED para comunicação visual",
    image: "https://placehold.co/800x600/e2e8f0/64748b?text=Totem+Digital",
    features: ["Tela LED", "Sistema Android", "Gestão Remota"],
  },
  {
    id: 5,
    title: "Sinalização Corporativa",
    category: "Sinalização",
    description: "Sistema completo de sinalização interna e externa",
    image: "https://placehold.co/800x600/e2e8f0/64748b?text=Sinalizacao",
    features: ["Placas ACM", "Wayfinding", "Acessibilidade"],
  },
  {
    id: 6,
    title: "Banner Digital LED",
    category: "Digital",
    description: "Painel LED de alta resolução para propaganda externa",
    image: "https://placehold.co/800x600/e2e8f0/64748b?text=Banner+LED",
    features: ["Full HD", "Controle WiFi", "Agenda Automática"],
  },
];

const categories = ["Todos", "Fachadas", "Letreiros", "Veículos", "Digital", "Sinalização"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredItems = selectedCategory === "Todos" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-responsive">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-display-large font-light text-gray-900 dark:text-white mb-4 sm:mb-6 lg:mb-8">
            <span className="font-bold">Portfolio</span>
          </h2>
          <p className="text-body-large text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
            Conheça alguns dos nossos projetos mais marcantes e inovadores.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                selectedCategory === category
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-white text-gray-700 hover:bg-gray-900 hover:text-white border border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:border-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 dark:bg-gray-700/90 dark:text-gray-100 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {item.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <WhatsAppButton
                  message={`Olá! Vi o projeto "${item.title}" no portfolio e gostaria de saber mais.`}
                  source={`portfolio-${item.id}`}
                  className="w-full bg-black hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-200 dark:text-black py-3 rounded-full font-medium transition-colors text-sm sm:text-base"
                >
                  Solicitar Orçamento
                </WhatsAppButton>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 dark:text-white mb-4 sm:mb-6">
            Tem um projeto em mente?
          </h3>
          <WhatsAppButton
            message="Olá! Tenho um projeto de comunicação visual e gostaria de conversar."
            source="portfolio-cta"
            className="btn-primary mx-auto bg-black hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-200 dark:text-black" // Added dark mode classes, assuming btn-primary might not cover it or needs override
          >
            Vamos Conversar
          </WhatsAppButton>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 dark:bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-colors dark:bg-gray-700/90 dark:text-gray-100 dark:hover:bg-gray-600"
              >
                ×
              </button>
              <div className="aspect-[16/9] relative">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                  {selectedItem.category}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                {selectedItem.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedItem.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {selectedItem.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 px-4 py-2 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <WhatsAppButton
                message={`Olá! Vi o projeto "${selectedItem.title}" no portfolio e gostaria de saber mais.`}
                source={`portfolio-modal-${selectedItem.id}`}
                className="w-full btn-primary bg-black hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-200 dark:text-black" // Added dark mode classes
              >
                Solicitar Orçamento Similar
              </WhatsAppButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}