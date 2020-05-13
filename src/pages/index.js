import React from "react"
import { Router } from "@reach/router"
import "../stylesheets/index.css"
import Navbar from "../components/Navbar"
import Description from "../components/Description"
import Forms from "../components/Forms"
import Portfolio from "../components/Portfolio"
import { withPrefix } from "gatsby"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username_atcoder: "",
            username_codeforces: "",
            username_topcoder: "",
            username_yukicoder: "",
        }
        this.setInformation = this.setInformation.bind(this)
    }
    setInformation(contestSite, username) {
        let newState = {}
        if (contestSite === "atcoder") newState.username_atcoder = username
        if (contestSite === "codeforces")
            newState.username_codeforces = username
        if (contestSite === "topcoder") newState.username_topcoder = username
        if (contestSite === "yukicoder") newState.username_yukicoder = username
        this.setState(newState)
    }
    render() {
        return (
            <div className="app">
                <Navbar />
                <div className="main">
                    <Router>
                        <Description exact path={withPrefix("/")} />
                    </Router>
                    <Forms
                        setInformation={this.setInformation}
                        usernames={this.state}
                    />
                    <Router>
                        <Portfolio
                            path={withPrefix("/portfolio")}
                            username={this.state.username_atcoder}
                        />
                    </Router>
                </div>
            </div>
        )
    }
}

export default App
