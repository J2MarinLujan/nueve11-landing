"use client";
import { useState } from "react";

export default function CopyEmailButton() {
	const [isCopied, setIsCopied] = useState(false);
	const copyToClipboard = (email: string) => {
		navigator.clipboard.writeText(email).then(
			function () {
				setIsCopied(true);
				setTimeout(() => {
					setIsCopied(false);
				}, 3000);
			},
			function (err) {
				console.error("Async: Could not copy text: ", err);
			}
		);
	};
	return (
		<>
			<button
				onClick={() => copyToClipboard("contacto@nueve11.co")}
				className="hoveer cursor-pointer text-sm font-[400] underline hover:scale-105 hover:text-[#08B3CE]"
			>
				contacto@nueve11.co
			</button>
			<div
				className="fixed top-28 z-[30] mx-auto transition-all duration-500 ease-in-out sm:right-4"
				style={{
					transform: `translateY(${isCopied ? "0" : "-150%"} )`,
				}}
			>
				{isCopied && (
					<div className="animate-bounce cursor-pointer rounded-xl bg-[#08B3CE] px-4 py-2 text-center text-sm">
						¡Correo guardado en el portapapeles!
					</div>
				)}
			</div>
		</>
	);
}
