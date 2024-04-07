"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const formSchema = z.object({
	name: z
		.string()
		.min(2, "Mínimo 2 caracteres")
		.max(50, "Máximo 50 caracteres"),
	email: z.string().email("Ingresa un correo electrónico válido"),
	company: z
		.string()
		.min(2, "Mínimo 2 caracteres")
		.max(50, "Máximo 50 caracteres"),
	phone: z
		.string()
		.min(7, "Mínimo 7 caracteres")
		.max(15, "Máximo 15 caracteres")
		.refine((x) => /^\d+$/.test(x), "Solo caracteres numéricos"),
	message: z
		.string()
		.min(10, "Mínimo 10 caracteres")
		.max(500, "Máximo 500 caracteres"),
});
export default function ContactForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			company: "",
			phone: "",
			message: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const resp = await fetch("/api/send", {
			method: "POST",
			body: JSON.stringify(values),
		});
		const data = await resp.json();
		if (data.error === null) {
			Swal.fire({
				title: "Mensaje enviado",
				text: "Gracias por contactarnos, te responderemos lo más pronto posible",
				icon: "success",
			});
			form.reset();
		} else {
			Swal.fire({
				title: "Error",
				text: "Hubo un error al enviar el mensaje, inténtalo de nuevo",
				icon: "error",
			});
		}
	}
	return (
		<motion.div
			initial={{ opacity: 0, x: 200 }}
			whileInView={{
				opacity: 1,
				x: 0,
				transition: { duration: 0.5 },
			}}
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex w-full max-w-[460px] flex-col gap-4 lg:w-auto"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-sm font-bold">
									Nombre
									<span className="text-red-600">*</span>
								</FormLabel>
								<FormControl>
									<input
										type="text"
										placeholder=""
										className="h-[35px] w-full rounded-md border border-[#CDD8E3] px-4 py-2 lg:w-[430px]"
										{...field}
									/>
								</FormControl>
								<FormMessage className="text-xs text-red-500" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-sm font-bold">
									Correo electrónico
									<span className="text-red-600">*</span>
								</FormLabel>
								<FormControl>
									<input
										type="text"
										placeholder=""
										className="h-[35px] w-full rounded-md border border-[#CDD8E3] px-4 py-2 lg:w-[430px]"
										{...field}
									/>
								</FormControl>
								<FormMessage className="text-xs text-red-500" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="company"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-sm font-bold">
									Empresa
									<span className="text-red-600">*</span>
								</FormLabel>
								<FormControl>
									<input
										type="text"
										placeholder=""
										className="h-[35px] w-full rounded-md border border-[#CDD8E3] px-4 py-2 lg:w-[430px]"
										{...field}
									/>
								</FormControl>
								<FormMessage className="text-xs text-red-500" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-sm font-bold">
									Teléfono
									<span className="text-red-600">*</span>
								</FormLabel>
								<FormControl>
									<input
										type="number"
										placeholder=""
										className="h-[35px] w-full rounded-md border border-[#CDD8E3] px-4 py-2 lg:w-[430px]"
										{...field}
									/>
								</FormControl>
								<FormMessage className="text-xs text-red-500" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-sm font-bold">
									¿Cómo te podemos ayudar?
									<span className="text-red-600">*</span>
								</FormLabel>
								<FormControl>
									<textarea
										placeholder=""
										className="input h-32 w-full rounded-md border border-[#CDD8E3] px-4 py-2 lg:w-[430px]"
										{...field}
									></textarea>
								</FormControl>
								<FormMessage className="text-xs text-red-500" />
							</FormItem>
						)}
					/>
					<button
						type="submit"
						className="h-8 w-32 rounded-md bg-[#08B3CE] text-white"
					>
						Enviar
					</button>
				</form>
			</Form>
		</motion.div>
	);
}
