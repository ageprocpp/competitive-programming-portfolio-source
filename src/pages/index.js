import React from "react"
import {Router} from "@reach/router"
import "../stylesheets/index.css"
import NavBar from "../routes/Navbar"
import Home from "../routes/Home"

class App extends React.Component{
    render(){
        return (
            <div className="app">
                <NavBar />
                <Router>
                    <Home path="/"/>
                </Router>
            </div>
        )
    }
}

export default App