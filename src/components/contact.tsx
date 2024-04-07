export default function Contact() {
	return (
		<>
			<section
				id="contact"
				className="center-center w-full px-8 pb-20 pt-10 lg:px-20 lg:pt-20"
			>
				<div className="flex w-full max-w-[1064px] flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between lg:gap-20">
					<div className="flex w-full max-w-[460px] flex-col items-start justify-center gap-4">
						<h3 className="mb-2 w-full text-center text-2xl font-[600] lg:text-start lg:text-3xl">
							Contáctanos
						</h3>
						<p className="text-xs font-[400] lg:text-sm">
							Te ayudaremos a encontrar la solución adecuada a tu
							necesidad.
						</p>
						<p className="text-xs font-[400] lg:-mt-4 lg:text-sm">
							Por favor, ingresa los datos y nuestro equipo se
							pondrá en contacto lo antes posible.
						</p>
					</div>
					<form className="flex w-full max-w-[460px] flex-col gap-4 lg:w-auto">
						<div className="flex w-full flex-col items-start justify-center gap-1">
							<label className="text-sm font-bold">
								Nombre
								<span className="text-red-600">*</span>
							</label>
							<input
								type="text"
								placeholder=""
								className="h-[35px] w-full rounded-md border border-[#CDD8E3] px-4 py-2 lg:w-[430px]"
							/>
						</div>
						<div className="flex w-full flex-col items-start justify-center gap-1">
							<label className="text-sm font-bold">
								Correo electrónico
								<span className="text-red-600">*</span>
							</label>
							<input
								type="text"
								placeholder=""
								className="h-[35px] w-full rounded-md border border-[#CDD8E3] px-4 py-2 lg:w-[430px]"
							/>
						</div>
						<div className="flex w-full flex-col items-start justify-center gap-1">
							<label className="text-sm font-bold">
								Empresa
								<span className="text-red-600">*</span>
							</label>
							<input
								type="text"
								placeholder=""
								className="h-[35px] w-full rounded-md border border-[#CDD8E3] px-4 py-2 lg:w-[430px]"
							/>
						</div>
						<div className="flex w-full flex-col items-start justify-center gap-1">
							<label className="text-sm font-bold">
								Teléfono
								<span className="text-red-600">*</span>
							</label>
							<input
								type="text"
								placeholder=""
								className="h-[35px] w-full rounded-md border border-[#CDD8E3] px-4 py-2 lg:w-[430px]"
							/>
						</div>
						<div className="flex w-full flex-col items-start justify-center gap-1">
							<label className="text-sm font-bold">
								¿Cómo te podemos ayudar?
								<span className="text-red-600">*</span>
							</label>
							<textarea
								placeholder=""
								className="input h-32 w-full rounded-md border border-[#CDD8E3] px-4 py-2 lg:w-[430px]"
							></textarea>
						</div>
						<button className="h-8 w-32 rounded-md bg-[#08B3CE] text-white">
							Enviar
						</button>
					</form>
				</div>
			</section>
		</>
	);
}
