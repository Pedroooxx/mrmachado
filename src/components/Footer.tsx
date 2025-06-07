import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Mr. Machado</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas em comunicação visual há mais de 15 anos. Transformamos ideias em soluções visuais que fazem seu negócio se destacar em Jaboti e região.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">Jaboti, Paraná</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <a href="tel:+5543998088888" className="text-gray-300 hover:text-white transition-colors">
                  (43) 99808-8888
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <a href="mailto:contato@mrmachado.com.br" className="text-gray-300 hover:text-white transition-colors">
                  contato@mrmachado.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              <li>
                <WhatsAppButton
                  message="Olá! Gostaria de saber mais sobre Fachadas."
                  source="footer-fachadas"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Fachadas
                </WhatsAppButton>
              </li>
              <li>
                <WhatsAppButton
                  message="Olá! Gostaria de saber mais sobre Letreiros Luminosos."
                  source="footer-letreiros"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Letreiros Luminosos
                </WhatsAppButton>
              </li>
              <li>
                <WhatsAppButton
                  message="Olá! Gostaria de saber mais sobre Placas e Banners."
                  source="footer-placas"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Placas e Banners
                </WhatsAppButton>
              </li>
              <li>
                <WhatsAppButton
                  message="Olá! Gostaria de saber mais sobre Adesivos."
                  source="footer-adesivos"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Adesivos
                </WhatsAppButton>
              </li>
              <li>
                <WhatsAppButton
                  message="Olá! Gostaria de saber mais sobre Personalização de Veículos."
                  source="footer-veiculos"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Veículos
                </WhatsAppButton>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Acesso Rápido</h4>
            <div className="space-y-4">
              <WhatsAppButton
                message="Olá! Gostaria de solicitar um orçamento."
                source="footer-orcamento"
                className="bg-green-600 hover:bg-green-700 text-white w-full py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Orçamento Rápido
              </WhatsAppButton>

              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/mrmachadocv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 p-3 rounded-lg transition-all duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gray-800 rounded-2xl p-6">
            <div className="text-center">
              <p className="text-lg text-gray-300 italic mb-4">
                "Excelente trabalho! Fizeram a fachada da minha loja e o resultado superou minhas expectativas. Recomendo muito!"
              </p>
              <p className="text-yellow-400 font-semibold">
                - Maria Silva, Proprietária da Boutique Elegance
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Mr. Machado Comunicação Visual. Todos os direitos reservados.
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              Desenvolvido com ❤️ em Jaboti, PR
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <WhatsAppButton
          message="Olá! Vim através do site e gostaria de mais informações."
          source="botao-flutuante"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
        </WhatsAppButton>
      </div>
    </footer>
  );
}