import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl lg:text-8xl font-light text-gray-900 mb-8 tracking-tight">
              <span className="font-bold">Contato</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Entre em contato conosco para transformar sua comunicação visual
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Home
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Content would go here */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg text-gray-600">
              Esta página será integrada com o componente Contact existente.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}