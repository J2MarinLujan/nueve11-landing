"use client";
import { Icons } from "@/components/icons";
import { motion } from "framer-motion";
import CopyEmailButton from "@/components/buttons/copy-email-button";
export default function Footer() {
	return (
		<>
			<footer className="border-gradient relative bg-gradient-to-b from-[#08B3CE50] to-transparent">
				<motion.div
					className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-4 px-8 pb-20 pt-5 lg:h-[164px] lg:flex-row lg:items-start lg:justify-between lg:px-20"
					initial={{ opacity: 0, y: 200 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.5,
						},
					}}
				>
					<a href="#home" className="hoveer cursor-pointer">
						<Icons.logo />
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
								className="center-center h-[39px] w-[39px] rounded-full bg-[#08B3CE] text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
							>
								<Icons.instagram />
							</a>
							<a
								href="https://www.facebook.com/share/RSh44nkBztxyrbW9/?mibextid=LQQJ4d"
								target="_blank"
								rel="noopener noreferrer"
								className="center-center h-[39px] w-[39px] rounded-full bg-[#08B3CE] text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
							>
								<Icons.facebook />
							</a>
							<a
								href="https://www.linkedin.com/company/nueve-11"
								target="_blank"
								rel="noopener noreferrer"
								className="center-center h-[39px] w-[39px] rounded-full bg-[#08B3CE] text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
							>
								<Icons.linkedin />
							</a>
						</div>
					</div>
					<CopyEmailButton />
				</motion.div>
			</footer>
		</>
	);
}
