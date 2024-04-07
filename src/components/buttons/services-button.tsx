"use client";
import { useState } from "react";
import { Icons } from "@/components/icons";

export default function ServicesButton() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<>
			<div className="relative">
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="flex items-center justify-center gap-1 hover:fill-amber-100 hover:text-[#08B3CE] hover:underline"
				>
					Nuestros servicios
					<Icons.arrow_down className={
						isMenuOpen
							? "rotate-180 transform"
							: "stroke-[#08B3CE]"
					} />
				</button>

				<div
					className="absolute right-0 top-8 h-[350px] w-[260px] rounded-lg bg-white shadow-lg transition-all duration-500 ease-in-out"
					style={{
						transform: `translateY(${isMenuOpen ? "0" : "-250%"} )`,
					}}
				>
					{isMenuOpen && (
						<ul className="flex flex-col gap-2 p-4 text-sm">
							<li
								onClick={() => setIsMenuOpen(false)}
								className="h-full w-full cursor-pointer rounded border-b border-[#F2F2F2] p-2 hover:bg-[#08B3CE] hover:text-white hover:underline"
							>
								<a href="#service1">
									Estrategia y desarrollo de negocios
								</a>
							</li>
							<li
								onClick={() => setIsMenuOpen(false)}
								className="h-full w-full cursor-pointer rounded border-b border-[#F2F2F2] p-2 hover:bg-[#08B3CE] hover:text-white hover:underline"
							>
								<a href="#service2">Mejoramiento de procesos</a>
							</li>
							<li
								onClick={() => setIsMenuOpen(false)}
								className="h-full w-full cursor-pointer rounded border-b border-[#F2F2F2] p-2 hover:bg-[#08B3CE] hover:text-white hover:underline"
							>
								<a href="#service3">
									Transformación digital e innovación
								</a>
							</li>
							<li
								onClick={() => setIsMenuOpen(false)}
								className="h-full w-full cursor-pointer rounded border-b border-[#F2F2F2] p-2 hover:bg-[#08B3CE] hover:text-white hover:underline"
							>
								<a href="#service4">
									Reclutamiento especializado para posiciones
									táctico-estratégicas
								</a>
							</li>
							<li
								onClick={() => setIsMenuOpen(false)}
								className="h-full w-full cursor-pointer rounded p-2 hover:bg-[#08B3CE] hover:text-white hover:underline"
							>
								<a href="#service5">
									Formación para equipos operativos
								</a>
							</li>
						</ul>
					)}
				</div>
			</div>
		</>
	);
}
