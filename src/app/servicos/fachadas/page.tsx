"use client";

import { Building, Star, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const fachadaTypes = [
	{
		name: "ACM (Alumínio Composto)",
		description: "Material moderno e durável, ideal para fachadas comerciais.",
		features: [
			"Resistente às intempéries",
			"Fácil manutenção",
			"Acabamento premium",
			"Variedade de cores",
		],
	},
	{
		name: "Acrílico Iluminado",
		description: "Elegância com iluminação interna para destaque noturno.",
		features: [
			"Iluminação LED",
			"Transparência única",
			"Efeito moderno",
			"Economia de energia",
		],
	},
	{
		name: "Vidro Temperado",
		description: "Sofisticação e modernidade para empresas premium.",
		features: [
			"Alta resistência",
			"Acabamento sofisticado",
			"Fácil limpeza",
			"Durabilidade",
		],
	},
];

export default function FachadasPage() {
	const handleWhatsApp = () => {
		const message =
			"Olá! Vim da página de Fachadas Comerciais do site e gostaria de mais informações sobre este serviço.";
		const phone = "5543998088888";
		window.open(
			`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
			"_blank"
		);
	};

	return (
		<div className="min-h-screen">
			<Header />

			{/* Hero Section */}
			<section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<div className="flex justify-center mb-6">
							<Building className="h-16 w-16 text-yellow-400" />
						</div>
						<h1 className="text-5xl font-bold mb-6">
							Fachadas que{" "}
							<span className="text-yellow-400">Impressionam</span>
						</h1>
						<p className="text-xl text-blue-100 mb-8 leading-relaxed">
							Transforme a entrada do seu negócio em um verdadeiro cartão de
							visitas. Nossas fachadas são projetadas para atrair clientes e
							fortalecer sua marca.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<WhatsAppButton
								message="Olá! Estou interessado em uma fachada para meu negócio. Gostaria de um orçamento."
								source="fachadas-hero"
								className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
							>
								Solicitar Orçamento de Fachada
							</WhatsAppButton>
							<button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
								Ver Exemplos
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Types Section */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							Tipos de{" "}
							<span className="text-blue-600">Fachadas</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Oferecemos diferentes materiais e estilos para criar a fachada
							perfeita para seu negócio.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{fachadaTypes.map((type, index) => (
							<div
								key={index}
								className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
							>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									{type.name}
								</h3>
								<p className="text-gray-600 mb-6">
									{type.description}
								</p>

								<div className="space-y-3 mb-8">
									{type.features.map((feature, idx) => (
										<div key={idx} className="flex items-center">
											<CheckCircle className="h-5 w-5 text-green-500 mr-3" />
											<span className="text-gray-700">{feature}</span>
										</div>
									))}
								</div>

								<WhatsAppButton
									message={`Olá! Gostaria de saber mais sobre fachadas em ${type.name}.`}
									source={`fachadas-${type.name
										.toLowerCase()
										.replace(/\s+/g, "-")}`}
									className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
								>
									Orçar {type.name}
								</WhatsAppButton>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							Nosso{" "}
							<span className="text-blue-600">Processo</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Do projeto à instalação, cuidamos de cada detalhe da sua fachada.
						</p>
					</div>

					<div className="grid md:grid-cols-4 gap-8">
						{[
							{
								step: "1",
								title: "Visita Técnica",
								desc: "Analisamos o local e suas necessidades",
							},
							{
								step: "2",
								title: "Projeto 3D",
								desc: "Criamos uma visualização realista",
							},
							{
								step: "3",
								title: "Produção",
								desc: "Fabricamos com materiais de qualidade",
							},
							{
								step: "4",
								title: "Instalação",
								desc: "Montagem profissional e segura",
							},
						].map((item, index) => (
							<div key={index} className="text-center">
								<div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
									{item.step}
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-2">
									{item.title}
								</h3>
								<p className="text-gray-600">{item.desc}</p>
								{index < 3 && (
									<ArrowRight className="h-6 w-6 text-blue-400 mx-auto mt-4 hidden md:block" />
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-4xl font-bold mb-6">
						Pronto para uma{" "}
						<span className="text-yellow-400">Nova Fachada?</span>
					</h2>
					<p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
						Nossa equipe está pronta para criar a fachada dos seus sonhos. Entre em
						contato e receba um orçamento personalizado.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<WhatsAppButton
							message="Olá! Quero uma fachada nova para meu negócio. Podem fazer uma visita técnica?"
							source="fachadas-cta-visita"
							className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
						>
							Agendar Visita Técnica
						</WhatsAppButton>
						<WhatsAppButton
							message="Olá! Gostaria de ver exemplos de fachadas que vocês já fizeram."
							source="fachadas-cta-exemplos"
							className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
						>
							Ver Mais Exemplos
						</WhatsAppButton>
					</div>

					<div className="mt-12 flex justify-center space-x-8 text-sm text-blue-200">
						<div className="flex items-center">
							<Star className="h-5 w-5 text-yellow-400 mr-2" />
							<span>15+ Anos de Experiência</span>
						</div>
						<div className="flex items-center">
							<Star className="h-5 w-5 text-yellow-400 mr-2" />
							<span>Garantia de Qualidade</span>
						</div>
						<div className="flex items-center">
							<Star className="h-5 w-5 text-yellow-400 mr-2" />
							<span>Atendimento em Jaboti e Região</span>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}