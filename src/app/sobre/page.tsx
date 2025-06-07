import Link from "next/link";
import { Info } from "lucide-react";

export default function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center mb-4">
          <Info className="w-12 h-12 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Sobre Nós
        </h1>
        <Link 
          href="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}