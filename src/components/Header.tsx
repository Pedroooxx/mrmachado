"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Instagram, Mail, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (    <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-md bg-white/90">
      {/* Main Header */}
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl font-light text-gray-900 hover:text-blue-600 transition-colors">
            <span className="font-bold">Mr. Machado</span>
            <span className="block text-xs font-normal text-gray-600 tracking-wider">COMUNICAÇÃO VISUAL</span>
          </Link>
            {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 xl:space-x-12">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/sobre-nos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Sobre
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
          <div className="flex items-center space-x-2 sm:space-x-4">
            <a 
              href="tel:+5543998088888" 
              className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-colors items-center text-sm lg:text-base"
            >
              <Phone className="mr-1 lg:mr-2 h-4 w-4" />
              <span className="hidden lg:inline">(43) 99808-8888</span>
              <span className="lg:hidden">Ligar</span>
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
          <div className="lg:hidden mt-6 pb-6 border-t border-gray-200">
            <nav className="flex flex-col space-y-6 pt-6">
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
                Sobre
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
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center justify-center"
              >
                <Phone className="mr-2 h-4 w-4" />
                (43) 99808-8888
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}