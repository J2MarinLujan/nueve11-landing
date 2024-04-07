export default function Home() {
	return (
		<>
			<section
				id="home"
				className="center-center relative h-[475px] w-full lg:mt-[95px] lg:h-[510px]"
			>
				<img
					src="/banner-mobile-home.png"
					alt="banner-home-mobile"
					className="absolute left-0 right-0 top-0 z-10 h-full w-full object-cover object-center sm:hidden"
				/>
				<img
					src="/banner-home.png"
					alt="banner-mobile"
					className="absolute left-0 right-0 top-0 z-10 hidden h-full w-full object-cover object-center sm:flex"
				/>
				<div className="center-center z-20 h-full w-full">
					<h3 className="title-home max-w-[65%] text-center text-2xl font-[600] text-white shadow-black  drop-shadow-lg sm:max-w-[90%] lg:text-5xl lg:leading-[60px]">
						Acompañamos a nuestros clientes a través de servicios de
						consultoría 360° y modular
					</h3>
				</div>
			</section>
		</>
	);
}
