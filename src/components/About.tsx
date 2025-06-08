"use client";

import { Award, Users, Target, Clock } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const stats = [
  {
    icon: Clock,
    number: "15+",
    label: "Anos de Experiência",
    description: "Mais de uma década transformando ideias em realidade visual",
  },
  {
    icon: Users,
    number: "500+",
    label: "Clientes Atendidos",
    description: "Empresas que confiam em nosso trabalho e expertise",
  },
  {
    icon: Target,
    number: "1000+",
    label: "Projetos Realizados",
    description: "Soluções únicas para cada necessidade específica",
  },
  {
    icon: Award,
    number: "100%",
    label: "Satisfação Garantida",
    description: "Comprometimento total com a qualidade e resultados",
  },
];

const values = [
  {
    title: "Qualidade Premium",
    description:
      "Utilizamos apenas materiais de primeira linha e tecnologias avançadas para garantir durabilidade e excelência visual.",
  },
  {
    title: "Atendimento Personalizado",
    description:
      "Cada projeto é único. Desenvolvemos soluções customizadas que refletem a identidade e objetivos do seu negócio.",
  },
  {
    title: "Prazos Confiáveis",
    description:
      "Planejamento eficiente e equipe experiente garantem entregas pontuais sem comprometer a qualidade.",
  },
  {
    title: "Suporte Completo",
    description:
      "Acompanhamos todo o processo, desde o projeto inicial até a instalação e manutenção pós-entrega.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-display-large font-light text-gray-900 dark:text-white mb-6 sm:mb-8">
            <span className="font-bold">Sobre Nós</span>
          </h2>
          <p className="text-body-large text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Há mais de 15 anos, a Mr. Machado Comunicação Visual tem sido referência
            em soluções inovadoras e impactantes para empresas em Jaboti e região.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid-responsive-2 mb-16 sm:mb-20 lg:mb-24">
          {/* Story */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 dark:text-white">
              Nossa <span className="font-bold">História</span>
            </h3>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Fundada com a missão de transformar a comunicação visual das empresas,
                a Mr. Machado nasceu da paixão por criar soluções que fazem a diferença
                no sucesso dos nossos clientes.
              </p>
              <p>
                Ao longo dos anos, evoluímos constantemente, incorporando as mais
                modernas tecnologias e tendências do mercado, sempre mantendo nosso
                compromisso com a excelência e inovação.
              </p>
              <p>
                Hoje, somos reconhecidos como líderes regionais em comunicação visual,
                com uma equipe especializada e infraestrutura completa para atender
                projetos de qualquer porte.
              </p>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="order-first lg:order-none">
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-400/20 dark:to-purple-400/20 flex items-center justify-center">
                <div className="text-center">
                  <Award className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400 font-medium">15+ Anos de Excelência</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 dark:bg-gray-800 rounded-2xl sm:rounded-3xl mb-4 sm:mb-6">
                  <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-gray-900 dark:text-white" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {stat.number}
                </div>
                <div className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {stat.label}
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-4 sm:mb-6">
              Nossos <span className="font-bold">Valores</span>
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Princípios que guiam cada projeto e relacionamento que construímos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center md:text-left">
                <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  {value.title}
                </h4>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center card-responsive bg-gray-50 dark:bg-gray-800">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 dark:text-white mb-4 sm:mb-6">
            Pronto para transformar sua{" "}
            <span className="font-bold">comunicação visual</span>?
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Vamos conversar sobre seu projeto e criar soluções que realmente fazem a diferença.
          </p>
          <WhatsAppButton
            message="Olá! Gostaria de conhecer mais sobre a empresa e discutir um projeto."
            source="sobre-cta"
            className="btn-primary bg-black hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-200 dark:text-black"
          >
            Falar com Especialista
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}