export default function Footer() {
	return (
		<>
			<footer className="between-start border-gradient relative h-[164px] w-full bg-gradient-to-b from-[#08B3CE50] to-transparent px-20 pt-5">
				<button className="hoveer cursor-pointer">
					<img src="/logo.png" alt="logo" />
				</button>
				<div className="center-center flex-col gap-2">
					<span className="text-sm font-light">Redes sociales</span>
					<div className="center-center gap-4">
						<a
							href="https://www.instagram.com/nueve11.co/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="/instagram.png"
								alt="instagram"
								className="hoveer"
							/>
						</a>
						<a
							href="https://www.facebook.com/nueve11.co"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="/facebook.png"
								alt="facebook"
								className="hoveer"
							/>
						</a>
						<a
							href="https://www.linkedin.com/company/nueve11-co"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="/linkeding.png"
								alt="linkedin"
								className="hoveer"
							/>
						</a>
					</div>
				</div>
				<span className="hoveer cursor-pointer text-sm font-[400] underline hover:scale-105 hover:text-[#08B3CE]">
					contacto@nueve11.co
				</span>
			</footer>
		</>
	);
}
