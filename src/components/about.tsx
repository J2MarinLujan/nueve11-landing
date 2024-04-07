"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function About() {
	return (
		<>
			<motion.div
				id="about"
				className="center-center relative w-full flex-col gap-20 px-8 py-10 lg:gap-20 lg:px-20 lg:py-20"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
			>
				<Image
					src="/texture-background.webp"
					alt=""
					width={1280}
					height={646}
					className="animate-scale absolute bottom-0 left-0 right-0 z-10 h-full max-h-[700px] w-full object-cover object-bottom md:object-fill"
				/>
				<motion.section
					className="center-center z-20 w-full max-w-[1064px] flex-col gap-1 md:flex-row lg:gap-20 lg:p-20"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: { duration: 0.5 },
					}}
				>
					<div className="flex w-full max-w-[420px] flex-col items-center justify-center gap-4 md:items-start">
						<h3 className="mb-2 text-2xl font-[600] md:text-3xl">
							¿Quiénes somos?
						</h3>
						<p className="text-xs font-[400] md:text-sm">
							Somos un equipo interdisciplinario de profesionales
							especializados en la industria del juego en
							Latinoamérica.
						</p>
						<p className="text-xs font-[400] md:text-sm">
							Tenemos la capacidad de desarrollar planes
							estratégicos, estructuración de áreas,
							transformación organizacional, intervención de
							procesos y servicios de TI para el B2B y B2C.
						</p>
						<p className="text-xs font-[400] md:text-sm">
							Nuestro equipo de profesionales tiene experiencia
							específica en modelos de operación, administración,
							áreas de transformación digital y staffing services
							para TI.
						</p>
					</div>
					<Image
						src="/avatar-about.webp"
						alt="banner-about"
						width={441}
						height={416}
						className="animate-scale aspect-square sm:w-1/2"
					/>
				</motion.section>
				<motion.section
					className="center-center z-20 max-w-[1064px] flex-col gap-4"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: { delay: 0.5, duration: 0.5 },
					}}
				>
					<h3 className="text-2xl font-[600] lg:text-3xl">
						¿Por qué y para qué?
					</h3>
					<p className="max-w-[600px] text-center text-xs font-[400] lg:text-sm">
						Nuestro objetivo es el acompañamiento en la optimización
						de los procesos internos, permitiendo:
					</p>
					<div className="flex max-w-[650px] flex-wrap items-center justify-center gap-4">
						<motion.div
							className="center-center aspect-square w-[140px] flex-col gap-4 rounded-lg bg-white p-1 shadow-lg shadow-[#08B3CE25] lg:w-[169px] lg:p-2"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { duration: 0.5 },
							}}
						>
							<Image
								src="/icon1.webp"
								alt="icon1"
								width={60}
								height={60}
								className="aspect-square w-[45%]"
							/>
							<span className="text-center text-[11px] font-[600] lg:h-[60px] lg:text-sm">
								Minimizar costos
							</span>
						</motion.div>
						<motion.div
							className="center-center aspect-square w-[140px] flex-col gap-4 rounded-lg bg-white p-1 shadow-lg shadow-[#08B3CE25] lg:w-[169px] lg:p-2"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.2, duration: 0.5 },
							}}
						>
							<Image
								src="/icon2.webp"
								alt="icon2"
								width={60}
								height={60}
								className="aspect-square w-[45%]"
							/>
							<span className="text-center text-[11px] font-[600] lg:h-[60px] lg:text-sm">
								Disminuir el riesgo operativo y económico
							</span>
						</motion.div>
						<motion.div
							className="center-center aspect-square w-[140px] flex-col gap-4 rounded-lg bg-white p-1 shadow-lg shadow-[#08B3CE25] lg:w-[169px] lg:p-2"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.4, duration: 0.5 },
							}}
						>
							<Image
								src="/icon3.webp"
								alt="icon3"
								width={60}
								height={60}
								className="aspect-square w-[45%]"
							/>
							<span className="text-center text-[11px] font-[600] lg:h-[60px] lg:text-sm">
								Disminuir errores humanos
							</span>
						</motion.div>
						<motion.div
							className="center-center aspect-square w-[140px] flex-col gap-4 rounded-lg bg-white p-1 shadow-lg shadow-[#08B3CE25] lg:w-[169px] lg:p-2"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.6, duration: 0.5 },
							}}
						>
							<Image
								src="/icon4.webp"
								alt="icon4"
								width={60}
								height={60}
								className="aspect-square w-[45%]"
							/>
							<span className="text-center text-[11px] font-[600] lg:h-[60px] lg:text-sm">
								Maximizar la eficiencia
							</span>
						</motion.div>
						<motion.div
							className="center-center aspect-square w-[140px] flex-col gap-4 rounded-lg bg-white p-1 shadow-lg shadow-[#08B3CE25] lg:w-[169px] lg:p-2"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.8, duration: 0.5 },
							}}
						>
							<Image
								src="/icon5.webp"
								alt="icon5"
								width={60}
								height={60}
								className="aspect-square w-[45%]"
							/>
							<span className="text-center text-[11px] font-[600] lg:h-[60px] lg:text-sm">
								Mejorar la experiencia del cliente
							</span>
						</motion.div>
					</div>
				</motion.section>
			</motion.div>
		</>
	);
}
