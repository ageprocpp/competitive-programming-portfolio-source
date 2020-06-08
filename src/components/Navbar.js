import React from "react"
import { Link } from "react-router-dom"
import "../stylesheets/Navbar.css"
const Navbar = () => (
	<nav className="navbar">
		<Link className="navbar-title" to="/">
			Competitive Programming Portfolio
		</Link>
	</nav>
)

export default Navbar
