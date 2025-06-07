import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Nossos trabalhos em comunicação visual
          </p>
          <div className="space-y-4">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}