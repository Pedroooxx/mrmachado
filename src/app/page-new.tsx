"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Play, Star, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import WhatsAppButton from "@/components/WhatsAppButton";

const stats = [
  { number: "15+", label: "Anos de Experiência" },
  { number: "500+", label: "Projetos Realizados" },
  { number: "100%", label: "Satisfação Garantida" },
  { number: "24h", label: "Resposta Rápida" }
];

const services = [
  {
    title: "Fachadas Comerciais",
    description: "Projetos que transformam a entrada do seu negócio em um verdadeiro cartão de visitas",
    features: ["ACM Premium", "Iluminação LED", "Projeto 3D", "Instalação Profissional"],
    href: "/servicos/fachadas"
  },
  {
    title: "Letreiros Luminosos",
    description: "Visibilidade garantida 24 horas por dia com tecnologia LED de última geração",
    features: ["LED de Alta Eficiência", "Controle Remoto", "Garantia Estendida", "Manutenção Incluída"],
    href: "/servicos/letreiros"
  },
  {
    title: "Comunicação Veicular",
    description: "Transforme sua frota em uma ferramenta poderosa de marketing móvel",
    features: ["Adesivos Premium", "Design Personalizado", "Proteção UV", "Aplicação Profissional"],
    href: "/servicos/veiculos"
  },
  {
    title: "Sinalização Corporativa",
    description: "Sistemas completos de identificação e wayfinding para empresas",
    features: ["Materiais Nobres", "Identidade Única", "Durabilidade", "Projeto Completo"],
    href: "/servicos/placas"
  }
];

const benefits = [
  {
    title: "Experiência Comprovada",
    description: "Mais de 15 anos criando soluções visuais que geram resultados reais para nossos clientes.",
    icon: "⭐"
  },
  {
    title: "Tecnologia Avançada",
    description: "Utilizamos os melhores materiais e tecnologias disponíveis no mercado para garantir qualidade.",
    icon: "🚀"
  },
  {
    title: "Atendimento Personalizado",
    description: "Cada projeto é único. Desenvolvemos soluções sob medida para suas necessidades específicas.",
    icon: "💎"
  }
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-7xl lg:text-9xl font-extralight text-gray-900 mb-8 tracking-tight leading-none">
              Comunicação
              <br />
              <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Visual
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Transformamos ideias em experiências visuais marcantes. 
              Sua marca merece se destacar no mundo.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <WhatsAppButton
                message="Olá! Gostaria de iniciar um projeto de comunicação visual."
                source="hero-main"
                className="bg-black hover:bg-gray-800 text-white px-12 py-5 rounded-full text-lg font-medium transition-all duration-300 inline-flex items-center justify-center group"
              >
                Iniciar Projeto
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </WhatsAppButton>
              
              <button className="border border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 px-12 py-5 rounded-full text-lg font-medium transition-all duration-300 inline-flex items-center justify-center">
                <Play className="mr-3 h-5 w-5" />
                Ver Nosso Trabalho
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 font-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-6xl lg:text-7xl font-extralight text-gray-900 mb-8 tracking-tight">
              Serviços
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light">
              Oferecemos soluções completas em comunicação visual, 
              desde o conceito até a implementação final.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-3xl p-12 hover:bg-gray-100 transition-all duration-500 group-hover:shadow-2xl">
                  <h3 className="text-3xl font-light text-gray-900 mb-6">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-10">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <WhatsAppButton
                    message={`Olá! Tenho interesse em ${service.title}. Gostaria de mais informações.`}
                    source={`home-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="w-full bg-black hover:bg-gray-800 text-white py-4 px-8 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center group"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </WhatsAppButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Why Choose Us */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-24">
            <h2 className="text-6xl lg:text-7xl font-extralight text-gray-900 mb-8 tracking-tight">
              Por que nos escolher?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-5xl lg:text-6xl font-extralight mb-8 tracking-tight">
            Pronto para transformar
            <br />
            <span className="font-bold">sua marca?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto">
            Vamos conversar sobre como podemos elevar sua comunicação visual 
            para o próximo nível.
          </p>

          <WhatsAppButton
            message="Olá! Quero transformar a comunicação visual da minha empresa. Vamos conversar?"
            source="cta-final"
            className="bg-white text-black hover:bg-gray-100 px-12 py-5 rounded-full text-lg font-medium transition-all duration-300 inline-flex items-center justify-center group"
          >
            Vamos Começar
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </WhatsAppButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}