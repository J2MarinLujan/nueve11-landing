export default function Contact() {
	return (
		<>
			<section id="contact" className="center-center w-full py-20">
				<div className="center-center w-full gap-20">
					<div className="flex w-[460px] flex-col items-start justify-center gap-4">
						<h3 className="mb-2 text-3xl font-[600]">
							Contáctanos
						</h3>
						<p className="text-sm font-[400]">
							Te ayudaremos a encontrar la solución adecuada a tu
							necesidad. Por favor, ingresa los datos y nuestro
							equipo se pondrá en contacto lo antes posible.
						</p>
					</div>
					<div>
						<form className="flex flex-col gap-4">
							<div className="flex flex-col items-start justify-center gap-1">
								<label className="text-sm">
									Nombre
									<span className="text-red-600">*</span>
								</label>
								<input
									type="text"
									placeholder=""
									className="h-[35px] w-[430px] rounded-md border border-[#CDD8E3] px-4 py-2"
								/>
							</div>
							<div className="flex flex-col items-start justify-center gap-1">
								<label className="text-sm">
									Correo electrónico
									<span className="text-red-600">*</span>
								</label>
								<input
									type="text"
									placeholder=""
									className="h-[35px] w-[430px] rounded-md border border-[#CDD8E3] px-4 py-2"
								/>
							</div>
							<div className="flex flex-col items-start justify-center gap-1">
								<label className="text-sm">
									Empresa
									<span className="text-red-600">*</span>
								</label>
								<input
									type="text"
									placeholder=""
									className="h-[35px] w-[430px] rounded-md border border-[#CDD8E3] px-4 py-2"
								/>
							</div>
							<div className="flex flex-col items-start justify-center gap-1">
								<label className="text-sm">
									Teléfono
									<span className="text-red-600">*</span>
								</label>
								<input
									type="text"
									placeholder=""
									className="h-[35px] w-[430px] rounded-md border border-[#CDD8E3] px-4 py-2"
								/>
							</div>
							<div className="flex flex-col items-start justify-center gap-1">
								<label className="text-sm">
									¿Cómo te podemos ayudar?
									<span className="text-red-600">*</span>
								</label>
								<textarea
									placeholder="Mensaje"
									className="input w-[430px] rounded-md border border-[#CDD8E3] px-4 py-2"
								></textarea>
							</div>
							<button className="h-8 w-32 rounded-md bg-[#08B3CE] text-white">
								Enviar
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}
