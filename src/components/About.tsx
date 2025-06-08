import { Award, Users, Heart } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

export default function About() {
  return (
    <section id="sobre" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl lg:text-7xl font-light mb-8 text-gray-900">
                Sobre a <span className="font-bold">Mr. Machado</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Há mais de 15 anos transformando ideias em comunicação visual de impacto.
                Somos uma empresa familiar de Jaboti, Paraná, que cresceu junto com a cidade
                e seus empreendedores.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed font-light">
                Nossa missão é fazer seu negócio se destacar através de soluções visuais
                criativas, duráveis e que realmente funcionam.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 py-12 border-t border-gray-200">
              <div className="text-center">
                <div className="text-4xl font-light text-gray-900 mb-2">15+</div>
                <div className="text-sm text-gray-500 font-medium">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-gray-900 mb-2">500+</div>
                <div className="text-sm text-gray-500 font-medium">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-gray-900 mb-2">100%</div>
                <div className="text-sm text-gray-500 font-medium">Satisfação</div>
              </div>
            </div>

            <WhatsAppButton
              message="Olá! Gostaria de saber mais sobre a empresa e solicitar uma visita."
              source="sobre-empresa"
              className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              Conhecer Mais
            </WhatsAppButton>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-6xl font-light text-gray-400">MR</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-32">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-light text-gray-900 mb-8">
              Nossos <span className="font-bold">Valores</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-gray-600" />
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">Parceria</h4>
              <p className="text-gray-600 font-light">
                Relacionamentos de longo prazo. Seu sucesso é o nosso sucesso.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-gray-600" />
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">Excelência</h4>
              <p className="text-gray-600 font-light">
                Superamos expectativas com qualidade superior em cada detalhe.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-gray-600" />
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">Paixão</h4>
              <p className="text-gray-600 font-light">
                Fazemos o que amamos e isso faz toda a diferença.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}