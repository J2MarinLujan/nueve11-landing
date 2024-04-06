export default function About() {
	return (
		<>
			<section
				id="about"
				className="center-center w-full flex-col gap-2 rounded-b-[25%] bg-gradient-to-t from-[#08B3CE25] via-transparent to-transparent py-20"
			>
				<div className="center-center w-full gap-20">
					<div className="flex w-[420px] flex-col items-start justify-center gap-4">
						<h3 className="mb-2 text-3xl font-[600]">
							¿Quiénes somos?
						</h3>
						<p className="text-sm font-[400]">
							Somos un equipo interdisciplinario de profesionales
							especializados en la industria del juego en
							Latinoamérica.
						</p>
						<p className="text-sm font-[400]">
							Tenemos la capacidad de desarrollar planes
							estratégicos, estructuración de áreas,
							transformación organizacional, intervención de
							procesos y servicios de TI para el B2B y B2C.
						</p>
						<p className="text-sm font-[400]">
							Nuestro equipo de profesionales tiene experiencia
							específica en modelos de operación, administración,
							áreas de transformación digital y staffing services
							para TI.
						</p>
					</div>
					<img
						src="/avatar-about.png"
						alt="banner-about"
						className="aspect-square"
					/>
				</div>
				<div className="center-center flex-col gap-4">
					<h3 className="text-3xl font-[600]">
						¿Por qué y para qué?
					</h3>
					<p className="max-w-[600px] text-center text-sm font-[400]">
						Nuestro objetivo es el acompañamiento en la optimización
						de los procesos internos, permitiendo:
					</p>
					<div className="flex max-w-[650px] flex-wrap items-center justify-center gap-4">
						<div className="center-center aspect-square w-[169px] flex-col gap-4 rounded-lg bg-white shadow-lg shadow-[#08B3CE25]">
							<img src="/icon1.png" alt="icon1" />
							<span className="text-center text-sm font-[600]">
								Minimizar costos
							</span>
						</div>
						<div className="center-center aspect-square w-[169px] flex-col gap-4 rounded-lg bg-white shadow-lg shadow-[#08B3CE25]">
							<img src="/icon2.png" alt="icon2" />
							<span className="text-center text-sm font-[600]">
								Disminuir el riesgo operativo y económico
							</span>
						</div>
						<div className="center-center aspect-square w-[169px] flex-col gap-4 rounded-lg bg-white shadow-lg shadow-[#08B3CE25]">
							<img src="/icon3.png" alt="icon3" />
							<span className="text-center text-sm font-[600]">
								Disminuir errores humanos
							</span>
						</div>
						<div className="center-center aspect-square w-[169px] flex-col gap-4 rounded-lg bg-white shadow-lg shadow-[#08B3CE25]">
							<img src="/icon4.png" alt="icon4" />
							<span className="text-center text-sm font-[600]">
								Maximizar la eficiencia
							</span>
						</div>
						<div className="center-center aspect-square w-[169px] flex-col gap-4 rounded-lg bg-white shadow-lg shadow-[#08B3CE25]">
							<img src="/icon5.png" alt="icon5" />
							<span className="text-center text-sm font-[600]">
								Mejorar la experiencia del cliente
							</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
