"use client";

import { Car, Star, CheckCircle, ArrowRight, Palette, Shield, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function VeiculosPage() {
  const handleWhatsApp = () => {
    const message = "Olá! Vim da página de Adesivação de Veículos do site e gostaria de mais informações sobre este serviço.";
    const phone = "5543998088888";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const services = [
    {
      icon: Palette,
      title: "Envelopamento Completo",
      description: "Transformação total do visual do seu veículo"
    },
    {
      icon: Shield,
      title: "Adesivos Promocionais",
      description: "Divulgue sua marca rodando pela cidade"
    },
    {
      icon: Wrench,
      title: "Plotagem Profissional",
      description: "Aplicação técnica garantindo durabilidade"
    }
  ];

  const benefits = [
    "Mídia móvel 24 horas por dia",
    "Proteção da pintura original",
    "Material resistente a intempéries",
    "Instalação profissional",
    "Garantia de qualidade",
    "Remoção sem danos"
  ];

  const projects = [
    { 
      name: "Frota Empresa XYZ", 
      description: "10 veículos com identidade visual completa",
      type: "Frota Comercial" 
    },
    { 
      name: "Food Truck Gourmet", 
      description: "Envelopamento artístico chamativo",
      type: "Food Truck" 
    },
    { 
      name: "Delivery Express", 
      description: "Adesivação promocional para delivery",
      type: "Delivery" 
    },
    { 
      name: "Consultório Móvel", 
      description: "Plotagem profissional para saúde",
      type: "Serviços" 
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Car className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Especialidade</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Adesivação de Veículos
              </h1>
              <p className="text-xl text-red-100 mb-8">
                Transforme seu veículo em uma poderosa ferramenta de marketing. 
                Nossa adesivação profissional garante visibilidade e proteção.
              </p>
              <button
                onClick={handleWhatsApp}
                className="bg-yellow-400 text-red-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center space-x-2"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 h-32 rounded-lg flex items-center justify-center">
                  <Car className="w-12 h-12 text-white" />
                </div>
                <div className="bg-white/20 h-32 rounded-lg flex items-center justify-center">
                  <Palette className="w-12 h-12 text-white" />
                </div>
                <div className="bg-white/20 h-32 rounded-lg col-span-2 flex items-center justify-center">
                  <span className="text-white font-semibold">Antes e Depois</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nossos Serviços de Adesivação
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas para todos os tipos de veículos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                  <IconComponent className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <button
                    onClick={handleWhatsApp}
                    className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    Saber Mais
                  </button>
                </div>
              );
            })}
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Vantagens da Adesivação
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Projetos de Adesivação Realizados
            </h2>
            <p className="text-xl text-gray-600">
              Veja alguns dos nossos trabalhos em adesivação de veículos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-red-100 to-red-200 h-48 flex items-center justify-center">
                  <Car className="w-16 h-16 text-red-600" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center text-yellow-500 mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="ml-2 text-gray-600 text-sm">Cliente satisfeito</span>
                  </div>
                  <button
                    onClick={handleWhatsApp}
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    Fazer Projeto Similar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nosso Processo
            </h2>
            <p className="text-xl text-gray-600">
              Acompanhe como funciona nosso processo de adesivação
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consulta", desc: "Análise do veículo e suas necessidades" },
              { step: "2", title: "Design", desc: "Criação do projeto visual personalizado" },
              { step: "3", title: "Produção", desc: "Impressão em materiais premium" },
              { step: "4", title: "Aplicação", desc: "Instalação profissional garantida" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Transforme seu Veículo em Mídia Móvel
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Entre em contato agora e receba um orçamento personalizado para adesivação do seu veículo
          </p>
          <button
            onClick={handleWhatsApp}
            className="bg-yellow-400 text-red-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-lg"
          >
            Solicitar Orçamento Grátis
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}