"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const footerLinks = {
  services: [
    { name: "Fachadas", href: "/servicos#fachadas" },
    { name: "Letreiros Luminosos", href: "/servicos#letreiros" },
    { name: "Adesivação de Veículos", href: "/servicos#veiculos" },
    { name: "Sinalização", href: "/servicos#sinalizacao" },
    { name: "Painéis Digitais", href: "/servicos#digitais" }
  ],
  company: [
    { name: "Sobre Nós", href: "/sobre-nos" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contato", href: "/contato" },
    { name: "Orçamento", href: "/orcamento" }
  ]
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-responsive section-padding-small">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="relative h-10 w-40 md:h-12 md:w-48 mb-4">
                <Image
                  src="/logo.png"
                  alt="Mr. Machado Comunicação Visual Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Link>
            
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md">
              Transformando ideias em soluções visuais impactantes há mais de 15 anos. 
              Especialistas em comunicação visual em Jaboti e região.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <a 
                href="tel:+5543998088888"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm sm:text-base">(43) 99808-8888</span>
              </a>
              
              <a 
                href="mailto:contato@mrmachado.com.br"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm sm:text-base">contato@mrmachado.com.br</span>
              </a>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm sm:text-base">Jaboti - PR</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Serviços</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Empresa</h3>
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA */}
            <WhatsAppButton
              message="Olá! Vim através do site e gostaria de mais informações."
              source="footer"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-responsive py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
              © {currentYear} Mr. Machado Comunicação Visual. Todos os direitos reservados.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-400">
              <Link href="/politica-privacidade" className="hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos-uso" className="hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}