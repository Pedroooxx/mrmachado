"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const contactInfo = [
	{
		icon: Phone,
		title: "Telefone",
		details: "(43) 99808-8888",
		link: "tel:+5543998088888",
		description: "Atendimento de segunda a sexta",
	},
	{
		icon: Mail,
		title: "E-mail",
		details: "contato@mrmachado.com.br",
		link: "mailto:contato@mrmachado.com.br",
		description: "Resposta em até 24h",
	},
	{
		icon: MapPin,
		title: "Localização",
		details: "Jaboti - PR",
		link: "#",
		description: "Atendemos toda a região",
	},
	{
		icon: Clock,
		title: "Horário",
		details: "08:00 às 18:00",
		link: "#",
		description: "Segunda a sexta-feira",
	},
];

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		service: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const whatsappMessage = `Olá! Meu nome é ${formData.name}.

📧 Email: ${formData.email}
📱 Telefone: ${formData.phone}
🏢 Serviço de interesse: ${formData.service}

💬 Mensagem:
${formData.message}

Enviei este formulário através do site.`;

		const whatsappUrl = `https://wa.me/5543998088888?text=${encodeURIComponent(
			whatsappMessage
		)}`;
		window.open(whatsappUrl, "_blank");
	};

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
			| React.ChangeEvent<HTMLSelectElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<section
			id="contato"
			className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50 dark:bg-gray-900"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-12 sm:mb-16 lg:mb-20">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 dark:text-white mb-6 sm:mb-8">
						<span className="font-bold">Contato</span>
					</h2>
					<p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
						Pronto para dar vida ao seu projeto? Entre em contato conosco e
						descubra como podemos transformar sua comunicação visual.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
					{/* Contact Info */}
					<div className="space-y-8 sm:space-y-10 order-2 lg:order-1">
						<div>
							<h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 dark:text-white mb-6 sm:mb-8">
								<span className="font-bold">Fale Conosco</span>
							</h3>
							<p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 sm:mb-10">
								Nossa equipe está pronta para atendê-lo e criar soluções
								personalizadas para suas necessidades de comunicação visual.
							</p>
						</div>

						<div className="space-y-6 sm:space-y-8">
							{contactInfo.map((info, index) => {
								const Icon = info.icon;
								return (
									<div
										key={index}
										className="flex items-start space-x-4 sm:space-x-6"
									>
										<div className="flex-shrink-0">
											<div className="w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm">
												<Icon className="h-6 w-6 sm:h-7 sm:w-7 text-gray-900 dark:text-white" />
											</div>
										</div>
										<div className="flex-1 min-w-0">
											<h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
												{info.title}
											</h4>
											<a
												href={info.link}
												className="text-base sm:text-lg text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors block mb-1"
											>
												{info.details}
											</a>
											<p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
												{info.description}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					{/* Contact Form */}
					<div className="order-1 lg:order-2">
						<div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
							<h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-6 sm:mb-8">
								Envie sua Mensagem
							</h3>

							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
									<div>
										<label
											htmlFor="name"
											className="block text-sm sm:text-base font-medium text-gray-900 dark:text-gray-200 mb-2"
										>
											Nome *
										</label>
										<input
											type="text"
											id="name"
											name="name"
											required
											value={formData.name}
											onChange={handleChange}
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent text-sm sm:text-base bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
											placeholder="Seu nome completo"
										/>
									</div>

									<div>
										<label
											htmlFor="phone"
											className="block text-sm sm:text-base font-medium text-gray-900 dark:text-gray-200 mb-2"
										>
											Telefone *
										</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											required
											value={formData.phone}
											onChange={handleChange}
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent text-sm sm:text-base bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
											placeholder="(00) 00000-0000"
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm sm:text-base font-medium text-gray-900 dark:text-gray-200 mb-2"
									>
										E-mail *
									</label>
									<input
										type="email"
										id="email"
										name="email"
										required
										value={formData.email}
										onChange={handleChange}
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent text-sm sm:text-base bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
										placeholder="seu@email.com"
									/>
								</div>

								<div>
									<label
										htmlFor="service"
										className="block text-sm sm:text-base font-medium text-gray-900 dark:text-gray-200 mb-2"
									>
										Serviço de Interesse
									</label>
									<select
										id="service"
										name="service"
										value={formData.service}
										onChange={handleChange}
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent text-sm sm:text-base bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									>
										<option value="">Selecione um serviço</option>
										<option value="Fachadas">Fachadas</option>
										<option value="Letreiros Luminosos">
											Letreiros Luminosos
										</option>
										<option value="Adesivação de Veículos">
											Adesivação de Veículos
										</option>
										<option value="Sinalização">Sinalização</option>
										<option value="Painéis Digitais">Painéis Digitais</option>
										<option value="Outros">Outros</option>
									</select>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm sm:text-base font-medium text-gray-900 dark:text-gray-200 mb-2"
									>
										Mensagem *
									</label>
									<textarea
										id="message"
										name="message"
										required
										rows={4}
										value={formData.message}
										onChange={handleChange}
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent text-sm sm:text-base resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
										placeholder="Descreva seu projeto ou dúvida..."
									/>
								</div>

								<button
									type="submit"
									className="w-full bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black py-3 sm:py-4 rounded-full font-medium transition-colors flex items-center justify-center text-sm sm:text-base"
								>
									<Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
									Enviar via WhatsApp
								</button>
							</form>

							<p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-4 sm:mt-6 text-center">
								Ao enviar, você será redirecionado para o WhatsApp com sua
								mensagem preenchida.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}