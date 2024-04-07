import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import React from "react";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
	try {
		const data = await resend.emails.send({
			from: "Acme <onboarding@resend.dev>",
			to: ["juanjose.marinlujan@gmail.com"],
			text: "",
			subject: "Contacto - Landing Nueve 11",
			react: EmailTemplate(await req.json()) as React.ReactElement,
		});

		return Response.json(data);
	} catch (error) {
		return Response.json({ error, status: 500 });
	}
}
