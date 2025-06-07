"use client";

import { useState, useEffect } from "react";
import { ChevronRight, Star, Award, Users, Clock, MessageCircle, ArrowRight } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Comunicação Visual que Impacta",
      subtitle: "Transformamos sua marca em experiências visuais memoráveis",
      cta: "Conheça Nossos Serviços"
    },
    {
      title: "Fachadas que Destacam seu Negócio",
      subtitle: "Criamos identidade visual que atrai e converte clientes",
      cta: "Ver Portfólio"
    },
    {
      title: "Qualidade e Inovação em Jaboti-PR",
      subtitle: "Mais de 1000 projetos realizados com excelência",
      cta: "Solicitar Orçamento"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleWhatsApp = (source: string) => {
    const message = `Olá! Vim do site na seção ${source} e gostaria de mais informações.`;
    const phone = "5543998088888";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-yellow-400">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current" />
                ))}
                <span className="text-sm ml-2">+500 clientes satisfeitos</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Sua <span className="text-yellow-400">Comunicação Visual</span> em Destaque
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                Transformamos suas ideias em soluções visuais impactantes. Especialistas em fachadas, letreiros, placas e muito mais em Jaboti, Paraná.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton 
                message="Olá! Vim através do site e gostaria de um orçamento para comunicação visual."
                source="hero"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar Orçamento
              </WhatsAppButton>
              
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                Ver Portfolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">15+</div>
                <div className="text-sm text-blue-200">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-blue-200">Projetos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">100%</div>
                <div className="text-sm text-blue-200">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-xl p-6 text-gray-900">
                <h3 className="text-2xl font-bold mb-4">Mr. Machado</h3>
                <p className="text-gray-600 mb-6">Comunicação Visual de qualidade que faz a diferença para o seu negócio.</p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span>Fachadas Personalizadas</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span>Letreiros Luminosos</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span>Placas e Banners</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span>Adesivos Personalizados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}