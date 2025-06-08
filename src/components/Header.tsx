"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Instagram, Mail, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800">
      {/* Main Header */}
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl font-light text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <div className="relative h-10 w-40 md:h-12 md:w-48">
              <Image
                src="/logo.png"
                alt="Mr. Machado Comunicação Visual Logo"
                layout="fill"
                objectFit="contain"
                className="block dark:hidden"
              />
              <Image
                src="/logo-dark.png"
                alt="Mr. Machado Comunicação Visual Logo Dark"
                layout="fill"
                objectFit="contain"
                className="hidden dark:block"
              />
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 xl:space-x-12">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
              Home
            </Link>
            <Link href="/sobre-nos" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
              Sobre
            </Link>
            <Link href="/servicos" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
              Serviços
            </Link>
            <Link href="/portfolio" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
              Portfolio
            </Link>
            <Link href="/contato" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
              Contato
            </Link>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <a 
              href="tel:+5543998088888" 
              className="hidden md:flex bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-colors items-center text-sm lg:text-base"
            >
              <Phone className="mr-1 lg:mr-2 h-4 w-4" />
              <span className="hidden lg:inline">(43) 99808-8888</span>
              <span className="lg:hidden">Ligar</span>
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-6 pt-6">
              <Link 
                href="/" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/sobre-nos" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                href="/servicos" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                href="/portfolio" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                href="/contato" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </Link>
              <a 
                href="tel:+5543998088888" 
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center justify-center"
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