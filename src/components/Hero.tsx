"use client";

import { useState, useEffect } from "react";
import { MessageCircle, ArrowRight, Star } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (    <section className="relative min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-black/5 dark:bg-black/10"></div>
      </div>
        {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Content */}
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                <div className="flex items-center justify-center space-x-1 sm:space-x-2 text-yellow-400">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                  ))}
                  <span className="text-xs sm:text-sm ml-2 text-gray-600 dark:text-gray-400">+500 clientes satisfeitos</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light leading-tight text-gray-900 dark:text-white">
                  Sua <span className="font-bold">Comunicação Visual</span><br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>em <span className="text-blue-600 dark:text-blue-400 font-bold">Destaque</span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto font-light px-4 sm:px-0">
                  Transformamos suas ideias em soluções visuais impactantes. 
                  Especialistas em fachadas, letreiros, placas e muito mais em Jaboti, Paraná.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 px-4 sm:px-0">
                <WhatsAppButton 
                  message="Olá! Vim através do site e gostaria de um orçamento para comunicação visual."
                  source="hero"
                  className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center group text-sm sm:text-base"
                >
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Solicitar Orçamento
                </WhatsAppButton>
                
                <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 px-8 sm:px-12 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center group text-sm sm:text-base">
                  Ver Portfolio
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto px-4 sm:px-0">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 dark:text-white mb-1 sm:mb-2">15+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 dark:text-white mb-1 sm:mb-2">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Projetos Realizados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 dark:text-white mb-1 sm:mb-2">100%</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}