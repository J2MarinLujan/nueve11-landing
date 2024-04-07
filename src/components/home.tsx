"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<>
			<motion.section
				id="home"
				className="center-center relative h-[475px] w-full lg:mt-[95px] lg:h-[510px]"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 1 } }}
			>
				<div className="absolute left-0 right-0 top-0 z-10 h-full w-full">
					<div className="absolute left-0 right-0 top-0 h-40 bg-opacity-90 bg-gradient-to-b from-[#F2F2F2] to-transparent"></div>
					<div className="absolute bottom-0 left-0 right-0 h-40 bg-opacity-90 bg-gradient-to-t from-[#F2F2F2] to-transparent"></div>
					<Image
						src="/banner-mobile-home.webp"
						alt="banner-home-mobile"
						width={428}
						height={474}
						className="h-full w-full object-cover object-center sm:hidden"
					/>
					<Image
						src="/banner-home.webp"
						alt="banner-home"
						width={1280}
						height={511}
						className="hidden h-full w-full object-cover object-center sm:flex"
					/>
				</div>
				<div className="center-center z-20 h-full w-full">
					<h3 className="title-home max-w-[65%] text-center text-2xl font-[600] text-white shadow-black  drop-shadow-lg sm:max-w-[90%] lg:text-5xl lg:leading-[60px]">
						Acompañamos a nuestros clientes a través de servicios de
						consultoría 360° y modular
					</h3>
				</div>
			</motion.section>
		</>
	);
}
