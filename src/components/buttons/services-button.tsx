"use client";
import { useState } from "react";

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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="12"
						viewBox="0 0 12 7"
						fill="none"
						className={
							isMenuOpen
								? "rotate-180 transform"
								: "stroke-[#08B3CE]"
						}
					>
						<path
							d="M1 1L6 5.5L11 1"
							stroke="currentColor"
							stroke-width="1.3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
				{isMenuOpen && (
					<div className="absolute right-0 top-8 h-[290px] w-[260px] rounded-lg bg-white shadow-lg transition-all ">
						<ul className="flex flex-col gap-2 p-4 text-sm">
							<li
								onClick={() => setIsMenuOpen(false)}
								className="border-b border-[#F2F2F2] pb-2"
							>
								<a
									href="#service1"
									className="hover:text-[#08B3CE] hover:underline"
								>
									Estrategia y desarrollo de negocios
								</a>
							</li>
							<li
								onClick={() => setIsMenuOpen(false)}
								className="border-b border-[#F2F2F2] pb-2"
							>
								<a
									href="#service2"
									className="hover:text-[#08B3CE] hover:underline"
								>
									Mejoramiento de procesos
								</a>
							</li>
							<li
								onClick={() => setIsMenuOpen(false)}
								className="border-b border-[#F2F2F2] pb-2"
							>
								<a
									href="#service3"
									className="hover:text-[#08B3CE] hover:underline"
								>
									Transformación digital e innovación
								</a>
							</li>
							<li
								onClick={() => setIsMenuOpen(false)}
								className="border-b border-[#F2F2F2] pb-2"
							>
								<a
									href="#service4"
									className="hover:text-[#08B3CE] hover:underline"
								>
									Reclutamiento especializado para posiciones
									táctico-estratégicas
								</a>
							</li>
							<li onClick={() => setIsMenuOpen(false)}>
								<a
									href="#service5"
									className="hover:text-[#08B3CE] hover:underline"
								>
									Formación para equipos operativos
								</a>
							</li>
						</ul>
					</div>
				)}
			</div>
		</>
	);
}
