import React, { useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./stylesheets/index.css"
import Navbar from "./components/Navbar"
import Description from "./components/Description"
import Forms from "./components/Forms"
import Portfolio from "./components/Portfolio"

const App = () => {
	const [username, setUsername] = useState({
		atcoder: "",
		codeforces: "",
		topcoder: "",
		yukicoder: "",
	})
	const [focusedContestSite, setFocusedContestSite] = useState("atcoder")

	const setInformation = (contestSite, username) => {
		setFocusedContestSite(contestSite)
		setUsername(prev => {
			return { ...prev, [contestSite]: username }
		})
	}

	return (
		<div className="app">
			<Router basename={"competitive-programming-portfolio"}>
				<div className="main">
					<Navbar />
					<Route exact path="/" component={Description} />
					<Forms
						setInformation={setInformation}
						usernames={username}
					/>
					<Route
						path="/portfolio"
						render={() => (
							<Portfolio
								focusedContestSite={focusedContestSite}
								username={username[focusedContestSite]}
							/>
						)}
					/>
				</div>
			</Router>
		</div>
	)
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
)
