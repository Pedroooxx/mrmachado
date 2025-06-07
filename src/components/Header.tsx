"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Instagram, Mail, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>(43) 99808-8888</span>
              </div>
              <div className="hidden sm:flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>contato@mrmachado.com.br</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <a href="https://instagram.com/mrmachadocv" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <span className="hidden sm:inline">Siga-nos nas redes sociais</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Mr. Machado
            <span className="block text-sm font-normal text-gray-600">Comunicação Visual</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/sobre-nos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Sobre Nós
            </Link>
            <Link href="/servicos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Serviços
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Portfolio
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contato
            </Link>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+5543998088888" 
              className="hidden md:flex bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors items-center"
            >
              <Phone className="mr-2 h-4 w-4" />
              Ligar Agora
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/sobre-nos" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                href="/servicos" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                href="/portfolio" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                href="/contato" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </Link>
              <a 
                href="tel:+5543998088888" 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Phone className="mr-2 h-4 w-4" />
                Ligar Agora
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}