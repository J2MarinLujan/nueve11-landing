import Image from "next/image";
export default function Footer() {
	return (
		<>
			<footer className="border-gradient relative flex w-full flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#08B3CE50] to-transparent px-8 pb-20 pt-5 lg:h-[164px] lg:flex-row lg:items-start lg:justify-between lg:px-20">
				<a href="#home" className="hoveer cursor-pointer">
					<Image src="/logo.png" alt="logo" width={129} height={29} />
				</a>
				<div className="center-center flex-col gap-2">
					<span className="text-xs font-light lg:text-sm">
						Redes sociales
					</span>
					<div className="center-center gap-4">
						<a
							href="https://www.instagram.com/nueve11.co?igsh=MWpydTJua2Nkazd2Ng=="
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src="/instagram.png"
								alt="instagram"
								className="hoveer"
								width={39}
								height={39}
							/>
						</a>
						<a
							href="https://www.facebook.com/share/RSh44nkBztxyrbW9/?mibextid=LQQJ4d"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src="/facebook.png"
								alt="facebook"
								className="hoveer"
								width={39}
								height={39}
							/>
						</a>
						<a
							href="https://www.linkedin.com/company/nueve-11"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src="/linkeding.png"
								alt="linkedin"
								className="hoveer"
								width={39}
								height={39}
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
