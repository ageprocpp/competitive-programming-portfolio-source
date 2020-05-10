import React from "react"
import {Link} from "@reach/router"
import "../stylesheets/Navbar.css"

class NavBar extends React.Component{
    render(){
        return (
            <nav className="navbar">
                <Link className="navbar-title" to="/">
                    Competitive Programming Portfolio
                </Link>
            </nav>
        )
    }
}

export default NavBar