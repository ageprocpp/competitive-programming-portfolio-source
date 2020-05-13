import React from "react"
import { Link } from "@reach/router"
import "../stylesheets/Navbar.css"

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <Link className="navbar-title" to="/" replace>
                    Competitive Programming Portfolio
                </Link>
            </nav>
        )
    }
}

export default Navbar
