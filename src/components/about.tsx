import Image from "next/image";
export default function About() {
	return (
		<>
			<div
				id="about"
				className="center-center w-full flex-col gap-20 rounded-b-[50%] bg-gradient-to-t from-[#08B3CE25] via-transparent to-transparent px-8 py-10 lg:gap-20 lg:rounded-b-[30%] lg:px-20 lg:py-20"
			>
				<section className="center-center w-full max-w-[1064px] flex-col gap-10 md:flex-row lg:gap-20">
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
						src="/avatar-about.png"
						alt="banner-about"
						width={441}
						height={416}
						className="aspect-square sm:w-1/2"
					/>
				</section>
				<section className="center-center max-w-[1064px] flex-col gap-4">
					<h3 className="text-2xl font-[600] lg:text-3xl">
						¿Por qué y para qué?
					</h3>
					<p className="max-w-[600px] text-center text-xs font-[400] lg:text-sm">
						Nuestro objetivo es el acompañamiento en la optimización
						de los procesos internos, permitiendo:
					</p>
					<div className="flex max-w-[650px] flex-wrap items-center justify-center gap-4">
						<div className="center-center aspect-square w-[140px] flex-col gap-4 rounded-lg bg-white p-1 shadow-lg shadow-[#08B3CE25] lg:w-[169px]">
							<Image
								src="/icon1.png"
								alt="icon1"
								width={60}
								height={60}
								className="aspect-square w-[45%]"
							/>
							<span className="text-center text-[11px] font-[600] lg:text-sm">
								Minimizar costos
							</span>
						</div>
						<div className="center-center aspect-square w-[140px] flex-col gap-4 rounded-lg bg-white p-1 shadow-lg shadow-[#08B3CE25] lg:w-[169px]">
							<Image
								src="/icon2.png"
								alt="icon2"
								width={60}
								height={60}
								className="aspect-square w-[45%]"
							/>
							<span className="text-center text-[11px] font-[600] lg:text-sm">
								Disminuir el riesgo operativo y económico
							</span>
						</div>
						<div className="center-center aspect-square w-[140px] flex-col gap-4 rounded-lg bg-white p-1 shadow-lg shadow-[#08B3CE25] lg:w-[169px]">
							<Image
								src="/icon3.png"
								alt="icon3"
								width={60}
								height={60}
								className="aspect-square w-[45%]"
							/>
							<span className="text-center text-[11px] font-[600] lg:text-sm">
								Disminuir errores humanos
							</span>
						</div>
						<div className="center-center aspect-square w-[140px] flex-col gap-4 rounded-lg bg-white p-1 shadow-lg shadow-[#08B3CE25] lg:w-[169px]">
							<Image
								src="/icon4.png"
								alt="icon4"
								width={60}
								height={60}
								className="aspect-square w-[45%]"
							/>
							<span className="text-center text-[11px] font-[600] lg:text-sm">
								Maximizar la eficiencia
							</span>
						</div>
						<div className="center-center aspect-square w-[140px] flex-col gap-4 rounded-lg bg-white p-1 shadow-lg shadow-[#08B3CE25] lg:w-[169px]">
							<Image
								src="/icon5.png"
								alt="icon5"
								width={60}
								height={60}
								className="aspect-square w-[45%]"
							/>
							<span className="text-center text-[11px] font-[600] lg:text-sm">
								Mejorar la experiencia del cliente
							</span>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
