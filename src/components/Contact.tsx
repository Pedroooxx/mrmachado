"use client";

import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, Clock, CheckCircle, Send } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate WhatsApp message
    const message = `Olá! Meu nome é ${formData.name}.
    
Email: ${formData.email}
Telefone: ${formData.phone}
Serviço de interesse: ${formData.service}

Mensagem: ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5543998088888?text=${encodedMessage}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="contato" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-light text-gray-900 mb-8">
            <span className="font-bold">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Pronto para transformar sua comunicação visual? Vamos conversar sobre seu projeto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-light text-gray-900 mb-6">Fale Conosco</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Nossa equipe está sempre pronta para atender você. Escolha a forma de contato que preferir.
              </p>
            </div>

            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="flex items-center space-x-4 bg-gray-50 p-6 rounded-2xl">
                <div className="bg-green-500 p-3 rounded-xl">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600">(43) 99808-8888</p>
                </div>
                <WhatsAppButton
                  message="Olá! Vim através do site e gostaria de mais informações."
                  source="contato-direto"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Conversar
                </WhatsAppButton>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 bg-gray-50 p-6 rounded-2xl">
                <div className="bg-blue-500 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">Telefone</h4>
                  <p className="text-gray-600">(43) 99808-8888</p>
                </div>
                <a href="tel:+5543998088888" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Ligar
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 bg-gray-50 p-6 rounded-2xl">
                <div className="bg-purple-500 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">E-mail</h4>
                  <p className="text-gray-600">contato@mrmachado.com.br</p>
                </div>
                <a href="mailto:contato@mrmachado.com.br" className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Enviar
                </a>
              </div>

              {/* Location */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-red-500 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Localização</h4>
                    <p className="text-gray-600">Jaboti, Paraná</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-light">
                  Atendemos Jaboti e toda a região. Fazemos visitas para orçamentos sem custo adicional.
                </p>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-yellow-500 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Horário de Funcionamento</h4>
                  </div>
                </div>
                <div className="space-y-2 text-gray-600 font-light">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span>8h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span>8h às 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Fechado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-3xl">
            <h3 className="text-3xl font-light text-gray-900 mb-6">Solicite seu Orçamento</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-medium text-gray-900 mb-2">Mensagem Enviada!</h4>
                <p className="text-gray-600 font-light">Em breve entraremos em contato com você.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-900">Nome *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-0 bg-white focus:ring-2 focus:ring-blue-500 transition-all font-light"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-900">Telefone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-0 bg-white focus:ring-2 focus:ring-blue-500 transition-all font-light"
                      placeholder="(43) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-900">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-0 bg-white focus:ring-2 focus:ring-blue-500 transition-all font-light"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-900">Serviço de Interesse</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-0 bg-white focus:ring-2 focus:ring-blue-500 transition-all font-light"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Fachadas">Fachadas</option>
                    <option value="Letreiros Luminosos">Letreiros Luminosos</option>
                    <option value="Placas e Banners">Placas e Banners</option>
                    <option value="Adesivos">Adesivos</option>
                    <option value="Veículos">Veículos</option>
                    <option value="Projetos Especiais">Projetos Especiais</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-900">Mensagem</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-0 bg-white focus:ring-2 focus:ring-blue-500 transition-all resize-none font-light"
                    placeholder="Conte-nos mais sobre seu projeto..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}