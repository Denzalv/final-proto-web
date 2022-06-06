import React from "react"
import About from "../components/About/About"
import Carousel from "../components/Carrousel/Carousel"
import Demo from "../components/Demo/Demo"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import Navigasi from "../components/Navbar/Navigasi"

export default function LandingPage() {
	return (
		<>
		<div>
			<Navigasi />
			<Hero />
			<About />
			<Demo />
			<Carousel />
			<Footer />
		</div>
		</>
	)
}