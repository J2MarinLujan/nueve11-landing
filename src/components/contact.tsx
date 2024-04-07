"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/forms/contact-form";
export default function Contact() {
	return (
		<>
			<section
				id="contact"
				className="center-center w-full px-8 pb-20 pt-10 lg:px-20 lg:pt-20"
			>
				<div className="flex w-full max-w-[1064px] flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between lg:gap-16">
					<motion.div
						className="flex w-full max-w-[470px] flex-col items-start justify-center gap-4"
						initial={{ opacity: 0, x: -200 }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: { duration: 0.5 },
						}}
					>
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
					</motion.div>
					<ContactForm />
				</div>
			</section>
		</>
	);
}
