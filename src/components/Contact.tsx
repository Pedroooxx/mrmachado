"use client";

import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `*Novo contato do site:*\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Telefone:* ${formData.phone}\n*Serviço:* ${formData.service}\n*Mensagem:* ${formData.message}\n\n*Origem:* Formulário de contato`;
    const phoneNumber = "5543998088888";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Entre em <span className="text-yellow-400">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para transformar sua comunicação visual? Fale conosco e vamos criar algo incrível juntos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Nossa equipe está sempre pronta para atender você. Escolha a forma de contato que preferir e responderemos o mais rápido possível.
              </p>
            </div>

            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="flex items-center space-x-4 bg-gray-800 p-6 rounded-2xl">
                <div className="bg-green-500 p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white">WhatsApp</h4>
                  <p className="text-gray-300">(43) 99808-8888</p>
                </div>
                <WhatsAppButton
                  message="Olá! Vim através do site e gostaria de mais informações."
                  source="contato-direto"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Conversar
                </WhatsAppButton>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 bg-gray-800 p-6 rounded-2xl">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white">Telefone</h4>
                  <p className="text-gray-300">(43) 99808-8888</p>
                </div>
                <a href="tel:+5543998088888" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                  Ligar
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 bg-gray-800 p-6 rounded-2xl">
                <div className="bg-purple-500 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white">E-mail</h4>
                  <p className="text-gray-300">contato@mrmachado.com.br</p>
                </div>
                <a href="mailto:contato@mrmachado.com.br" className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                  Enviar
                </a>
              </div>

              {/* Location */}
              <div className="bg-gray-800 p-6 rounded-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-red-500 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Localização</h4>
                    <p className="text-gray-300">Jaboti, Paraná</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Atendemos Jaboti e toda a região. Fazemos visitas para orçamentos sem custo adicional.
                </p>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-800 p-6 rounded-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Horário de Funcionamento</h4>
                  </div>
                </div>
                <div className="space-y-2 text-gray-300">
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
          <div className="bg-white text-gray-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Solicite seu Orçamento</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nome *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Telefone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    placeholder="(43) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Serviço de Interesse</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="fachadas">Fachadas</option>
                  <option value="letreiros">Letreiros Luminosos</option>
                  <option value="placas">Placas e Banners</option>
                  <option value="adesivos">Adesivos</option>
                  <option value="veiculos">Veículos</option>
                  <option value="especiais">Projetos Especiais</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Mensagem *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-none"
                  placeholder="Descreva seu projeto ou dúvida..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar via WhatsApp
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pronta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}