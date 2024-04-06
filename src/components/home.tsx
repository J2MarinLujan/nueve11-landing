export default function Home() {
	return (
		<>
			<section
				id="home"
				className="center-center relative mt-[95px] w-full"
			>
				<img
					src="/banner-home.png"
					alt="banner-home"
					className="w-full object-cover object-center"
				/>
				<div className="center-center absolute bottom-0 left-0 right-0 top-0 z-20 mx-auto h-full w-full max-w-[1088px]">
					<h3 className="title-home text-center text-5xl font-[600] leading-[60px] text-white shadow-black drop-shadow-lg">
						Acompañamos a nuestros clientes a través de servicios de
						consultoría 360° y modular
					</h3>
				</div>
			</section>
		</>
	);
}
