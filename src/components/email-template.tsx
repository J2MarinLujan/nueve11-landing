import React from "react";

interface ContactFormInfo {
	name: string;
	email: string;
	company: string;
	phone: string;
	message: string;
}

export const EmailTemplate: React.FC<ContactFormInfo> = ({
	name,
	email,
	company,
	phone,
	message,
}) => (
	<div>
		<h1>Nuevo mensaje de contacto</h1>
		<p>
			<strong>Nombre:</strong> {name}
			<br />
			<strong>Email:</strong> {email}
			<br />
			<strong>Empresa:</strong> {company}
			<br />
			<strong>Teléfono:</strong> {phone}
			<br />
			<strong>Mensaje:</strong> {message}
		</p>
	</div>
);
