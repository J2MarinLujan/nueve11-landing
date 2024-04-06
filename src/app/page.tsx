import Header from "@/components/header";
import Footer from "@/components/footer";
import Home from "@/components/home";
import About from "@/components/about";
import Services from "@/components/services";
import Contact from "@/components/contact";

export default function Main() {
	return (
		<>
			<Header />
			<main>
				<Home />
				<About />
				<Services />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
