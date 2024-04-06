import ServicesButton from "@/components/buttons/services-button";

export default function Header() {
	return (
		<>
			<header className="between-center fixed left-0 right-0 top-0 z-50 h-[95px] w-full bg-gradient-to-t from-transparent to-[#F2F2F2] px-20">
				<button className="hoveer cursor-pointer">
					<img src="/logo.png" alt="logo" />
				</button>
				<nav className="center-center">
					<ul className="center-center gap-10 text-base font-[500]">
						<li>
							<a
								href="#home"
								className="hover:text-[#08B3CE] hover:underline"
							>
								Inicio
							</a>
						</li>
						<li>
							<a
								href="#about"
								className="hover:text-[#08B3CE] hover:underline"
							>
								¿Quiénes somos?{" "}
							</a>
						</li>
						<li>
							<ServicesButton />
						</li>
						<li>
							<a
								href="#contact"
								className="hover:text-[#08B3CE] hover:underline"
							>
								Contacto
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
