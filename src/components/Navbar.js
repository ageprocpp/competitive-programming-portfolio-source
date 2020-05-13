import React from "react"
import { Link } from "@reach/router"
import { withPrefix } from "gatsby"
import "../stylesheets/Navbar.css"

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <Link className="navbar-title" to={withPrefix("/")}>
                    Competitive Programming Portfolio
                </Link>
            </nav>
        )
    }
}

export default Navbar
