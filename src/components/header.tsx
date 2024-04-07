import ServicesButton from "@/components/buttons/services-button";
import MenuMobile from "@/components/buttons/menu-mobile";
import Image from "next/image";

export default function Header() {
	return (
		<>
			<header className="header-blur fixed left-0 right-0 top-0 z-40 flex h-[60px] w-full items-center justify-center bg-gradient-to-t from-transparent to-[#F2F2F2] lg:h-[95px] lg:justify-between lg:px-20">
				<a href="#home" className="hoveer cursor-pointer">
					<Image src="/logo.png" alt="logo" width={129} height={29} />
				</a>
				<nav className="hidden items-center justify-center lg:flex">
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
				<MenuMobile />
			</header>
		</>
	);
}
