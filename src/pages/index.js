import React from "react"
import { Router } from "@reach/router"
import "../stylesheets/index.css"
import NavBar from "../routes/Navbar"
import Description from "../routes/Description"
import Forms from "../routes/Forms"

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <NavBar />
                <div className="main">
                    <Router>
                        <Description path="/" />
                    </Router>
                    <Forms />
                </div>
            </div>
        )
    }
}

export default App
