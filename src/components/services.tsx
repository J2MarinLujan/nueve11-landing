export default function Services() {
	return (
		<>
			<section
				id="service1"
				className="center-center w-full flex-col gap-6 py-20"
			>
				<h3 className="text-3xl font-[600]">Nuestros servicios</h3>
				<div className="center-center flex-col gap-14">
					<div className="flex w-full max-w-[1064px] flex-col items-start justify-center gap-2">
						<span className="text-base font-bold text-[#08B3CE]">
							Estrategia y desarrollo de negocios
						</span>
						<img src="/service1.png" alt="service1" />
						<p className="text-lg font-[400]">
							Te ayudamos a crecer de una manera organizada y con
							la estrategia correcta, para lograr una mayor
							rentabilidad.
						</p>
					</div>
					<div
						id="service2"
						className="flex w-full max-w-[1064px] flex-col items-start justify-center gap-2"
					>
						<span className="text-base font-bold text-[#08B3CE]">
							Mejoramiento de procesos
						</span>
						<img src="/service2.png" alt="service2" />
						<p className="text-lg font-[400]">
							Realizamos intervención en los procesos para el
							mejoramiento y eficiencia de los niveles de
							servicio.
						</p>
						<p className="text-lg font-[400]">
							Proponemos herramientas para la automatización de
							procesos, gestión integrada de la operación y la
							arquitectura para soportarlos.
						</p>
						<p className="text-lg font-[400]">
							Diseñamos e implementamos flujos BPMN, RPA, RDA,
							analítica aplicada e inteligencia artificial.{" "}
						</p>
					</div>
					<div
						id="service3"
						className="flex w-full max-w-[1064px] flex-col items-start justify-center gap-2"
					>
						<span className="text-base font-bold text-[#08B3CE]">
							Transformación digital e innovación
						</span>
						<img src="/service3.png" alt="service3" />
						<p className="text-lg font-[400]">
							Te acompañamos a aumentar la eficiencia operativa,
							mejorar la experiencia de cliente, impulsar la toma
							de decisiones basada en datos, facilitar la
							adaptación a los cambios del mercado y fomentar la
							competitividad a largo plazo.
						</p>
					</div>
					<div
						id="service4"
						className="flex w-full max-w-[1064px] flex-col items-start justify-center gap-2"
					>
						<span className="text-base font-bold text-[#08B3CE]">
							Reclutamiento especializado para posiciones
							táctico-estratégicas.
						</span>
						<img src="/service4.png" alt="service4" />
						<p className="text-lg font-[400]">
							Proporcionamos soluciones de reclutamiento
							personalizadas para posiciones tácticas y
							estratégicas.
						</p>
					</div>
					<div
						id="service5"
						className="flex w-full max-w-[1064px] flex-col items-start justify-center gap-2"
					>
						<span className="text-base font-bold text-[#08B3CE]">
							Formación para equipos operativos.
						</span>
						<img src="/service5.png" alt="service5" />
						<p className="text-lg font-[400]">
							Desarrollamos planes de formación específicos en las
							áreas de atención para segmentos B2B y B2C, así como
							documentación técnica de instructivos y
							procedimientos.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
