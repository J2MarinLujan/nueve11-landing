"use client";
import ServicesButton from "@/components/buttons/services-button";
import MenuMobile from "@/components/buttons/menu-mobile";
import { Icons } from "@/components/icons";
import { motion } from "framer-motion";

export default function Header() {
	return (
		<>
			<header className="header-blur fixed left-0 right-0 top-0 z-40 flex h-[60px] w-full  items-center justify-center bg-gradient-to-t from-transparent to-[#F2F2F2] lg:h-[95px] lg:px-20">
				<div className="mx-auto flex w-full max-w-7xl items-center justify-center lg:justify-between">
					<motion.a
						href="#home"
						className="hoveer cursor-pointer"
						initial={{ opacity: 0, x: -200 }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: {
								duration: 0.2,
							},
						}}
					>
						<Icons.logo />
					</motion.a>
					<nav className="hidden items-center justify-center lg:flex">
						<motion.ul className="center-center gap-10 text-base font-[500]">
							<motion.li
								initial={{ opacity: 0, x: 200 }}
								whileInView={{
									opacity: 1,
									x: 0,
									transition: {
										duration: 0.5,
										delay: 0.1,
									},
								}}
							>
								<a
									href="#home"
									className="hover:text-[#08B3CE] hover:underline"
								>
									Inicio
								</a>
							</motion.li>
							<motion.li
								initial={{ opacity: 0, x: 200 }}
								whileInView={{
									opacity: 1,
									x: 0,
									transition: {
										duration: 0.5,
										delay: 0.2,
									},
								}}
							>
								<a
									href="#about"
									className="hover:text-[#08B3CE] hover:underline"
								>
									¿Quiénes somos?{" "}
								</a>
							</motion.li>
							<motion.li
								initial={{ opacity: 0, x: 200 }}
								whileInView={{
									opacity: 1,
									x: 0,
									transition: {
										duration: 0.5,
										delay: 0.3,
									},
								}}
							>
								<ServicesButton />
							</motion.li>
							<motion.li
								initial={{ opacity: 0, x: 200 }}
								whileInView={{
									opacity: 1,
									x: 0,
									transition: {
										duration: 0.5,
										delay: 0.4,
									},
								}}
							>
								<a
									href="#contact"
									className="hover:text-[#08B3CE] hover:underline"
								>
									Contacto
								</a>
							</motion.li>
						</motion.ul>
					</nav>
				</div>
				<MenuMobile />
			</header>
		</>
	);
}
