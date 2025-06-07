import { Award, Clock, MapPin, Users, Zap, Heart } from "lucide-react";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

const features = [
  {
    icon: Award,
    title: "Qualidade Garantida",
    description: "Materiais premium e acabamento impecável em todos os projetos."
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description: "Cumprimos prazos e respeitamos o tempo do nosso cliente."
  },
  {
    icon: Zap,
    title: "Inovação",
    description: "Sempre atualizados com as últimas tendências e tecnologias."
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cada cliente é único e merece nossa atenção total."
  }
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Sobre a <span className="text-blue-600">Mr. Machado</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Há mais de 15 anos transformando ideias em comunicação visual de impacto. Somos uma empresa familiar de Jaboti, Paraná, que cresceu junto com a cidade e seus empreendedores.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa missão é fazer seu negócio se destacar através de soluções visuais criativas, duráveis e que realmente funcionam. Cada projeto é pensado estrategicamente para atrair mais clientes e fortalecer sua marca.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Nossa Localização</h3>
                  <p className="text-gray-600">Jaboti, Paraná - Atendemos toda a região</p>
                </div>
              </div>
              <WhatsAppButton
                message="Olá! Gostaria de saber mais sobre a empresa e solicitar uma visita."
                source="sobre-localizacao"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
              >
                Solicitar Visita
              </WhatsAppButton>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Main Image */}            <div className="relative z-10 bg-white p-4 rounded-2xl shadow-2xl">
              <Image 
                src="/api/placeholder/500/400" 
                alt="Equipe Mr. Machado"
                width={500}
                height={400}
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-yellow-400 p-6 rounded-2xl shadow-lg z-20 transform rotate-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm font-semibold text-gray-800">Anos</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-green-500 p-6 rounded-2xl shadow-lg z-20 transform -rotate-6">
              <div className="text-center text-white">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm font-semibold">Projetos</div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-yellow-200 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nossos Valores</h3>
            <p className="text-lg text-gray-600">O que nos move todos os dias</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Parceria</h4>
              <p className="text-gray-600">
                Acreditamos em relacionamentos de longo prazo. Seu sucesso é o nosso sucesso.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Excelência</h4>
              <p className="text-gray-600">
                Buscamos sempre superar expectativas com qualidade superior em cada detalhe.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Paixão</h4>
              <p className="text-gray-600">
                Fazemos o que amamos e amamos o que fazemos. Isso faz toda a diferença.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}