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
            username: {
                atcoder: "",
                codeforces: "",
                topcoder: "",
                yukicoder: "",
            },
            focusedContestSite: "",
        }
        this.setInformation = this.setInformation.bind(this)
    }
    setInformation(contestSite, username) {
        this.setState({
            focusedContestSite: contestSite,
            username: {
                [contestSite]: username,
            },
        })
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
                        usernames={this.state.username}
                    />
                    <Router>
                        <Portfolio
                            path={withPrefix("/portfolio")}
                            focusedContestSite={this.state.focusedContestSite}
                            username={
                                this.state.username[
                                    this.state.focusedContestSite
                                ]
                            }
                        />
                    </Router>
                </div>
            </div>
        )
    }
}

export default App
