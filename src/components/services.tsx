import Image from "next/image";
export default function Services() {
	return (
		<>
			<div className="center-center w-full flex-col gap-6 py-10 lg:px-20 lg:py-20">
				<h3 className="text-2xl font-[600] lg:text-3xl">
					Nuestros servicios
				</h3>
				<div className="center-center w-full flex-col gap-14">
					<section
						id="service1"
						className="flex w-full max-w-[1064px] flex-col items-start justify-center gap-4"
					>
						<span className="w-full text-center text-sm font-bold text-[#08B3CE] lg:text-start lg:text-base">
							Estrategia y desarrollo de negocios
						</span>
						<Image
							src="/service1.webp"
							alt="service1"
							width={1064}
							height={396}
						/>
						<p className="px-8 text-xs font-[400] lg:px-0 lg:text-lg">
							Te ayudamos a crecer de una manera organizada y con
							la estrategia correcta, para lograr una mayor
							rentabilidad.
						</p>
					</section>
					<section
						id="service2"
						className="flex w-full max-w-[1064px] flex-col items-start justify-center gap-4"
					>
						<span className="w-full text-center text-sm font-bold text-[#08B3CE] lg:text-start lg:text-base">
							Mejoramiento de procesos
						</span>
						<Image
							src="/service2.webp"
							alt="service2"
							width={1064}
							height={396}
						/>
						<p className="px-8 text-xs font-[400] lg:px-0 lg:text-lg">
							Realizamos intervención en los procesos para el
							mejoramiento y eficiencia de los niveles de
							servicio.
						</p>
						<p className="px-8 text-xs font-[400] lg:px-0 lg:text-lg">
							Proponemos herramientas para la automatización de
							procesos, gestión integrada de la operación y la
							arquitectura para soportarlos.
						</p>
						<p className="px-8 text-xs font-[400] lg:px-0 lg:text-lg">
							Diseñamos e implementamos flujos BPMN, RPA, RDA,
							analítica aplicada e inteligencia artificial.{" "}
						</p>
					</section>
					<section
						id="service3"
						className="flex w-full max-w-[1064px] flex-col items-start justify-center gap-4"
					>
						<span className="w-full text-center text-sm font-bold text-[#08B3CE] lg:text-start lg:text-base">
							Transformación digital e innovación
						</span>
						<Image
							src="/service3.webp"
							alt="service3"
							width={1064}
							height={396}
						/>
						<p className="px-8 text-xs font-[400] lg:px-0 lg:text-lg">
							Te acompañamos a aumentar la eficiencia operativa,
							mejorar la experiencia de cliente, impulsar la toma
							de decisiones basada en datos, facilitar la
							adaptación a los cambios del mercado y fomentar la
							competitividad a largo plazo.
						</p>
					</section>
					<section
						id="service4"
						className="flex w-full max-w-[1064px] flex-col items-start justify-center gap-4"
					>
						<span className="w-full text-center text-sm font-bold text-[#08B3CE] lg:text-start lg:text-base">
							Reclutamiento especializado para posiciones
							táctico-estratégicas.
						</span>
						<Image
							src="/service4.webp"
							alt="service4"
							width={1064}
							height={396}
						/>
						<p className="px-8 text-xs font-[400] lg:px-0 lg:text-lg">
							Proporcionamos soluciones de reclutamiento
							personalizadas para posiciones tácticas y
							estratégicas.
						</p>
					</section>
					<section
						id="service5"
						className="flex w-full max-w-[1064px] flex-col items-start justify-center gap-4"
					>
						<span className="w-full text-center text-sm font-bold text-[#08B3CE] lg:text-start lg:text-base">
							Formación para equipos operativos.
						</span>
						<Image
							src="/service5.webp"
							alt="service5"
							width={1064}
							height={396}
						/>
						<p className="px-8 text-xs font-[400] lg:px-0 lg:text-lg">
							Desarrollamos planes de formación específicos en las
							áreas de atención para segmentos B2B y B2C, así como
							documentación técnica de instructivos y
							procedimientos.
						</p>
					</section>
				</div>
			</div>
		</>
	);
}
