import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import "../stylesheets/Form.css"
import { withRouter } from "react-router-dom"
const Form = props => {
	const [username, setUsername] = useState(props.username)
	const [submitted, setSubmitted] = useState(false)

	const handleChange = event => {
		setUsername(event.target.value)
	}
	const handleSubmit = event => {
		event.preventDefault()
		props.setInformation(props.contestSite, username)
		setSubmitted(true)
	}

	useEffect(() => {
		if (submitted) {
			props.history.push("/portfolio")
			setSubmitted(false)
		}
	}, [submitted, props.history])

	let title
	if (props.contestSite === "atcoder") title = "AtCoder"
	if (props.contestSite === "codeforces") title = "Codeforces"
	if (props.contestSite === "topcoder") title = "TopCoder"
	if (props.contestSite === "yukicoder") title = "yukicoder"

	return (
		<li className="form">
			<div className="form-contents">
				<div className="form-title">{title}</div>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						className="username"
						value={username}
						onChange={handleChange}
					/>
				</form>
			</div>
		</li>
	)
}

Form.propTypes = {
	history: PropTypes.object,
	username: PropTypes.string.isRequired,
	setInformation: PropTypes.func.isRequired,
	contestSite: PropTypes.string.isRequired,
}

export default withRouter(Form)
