import React from "react"
import PropTypes from "prop-types"
import "../stylesheets/Forms.css"
import Form from "./Form"
const Forms = props => {
	return (
		<>
			<hr />
			<ul className="forms">
				<Form
					contestSite="atcoder"
					setInformation={props.setInformation}
					username={props.usernames.atcoder}
				/>
				<Form
					contestSite="codeforces"
					setInformation={props.setInformation}
					username={props.usernames.codeforces}
				/>
				<Form
					contestSite="topcoder"
					setInformation={props.setInformation}
					username={props.usernames.topcoder}
				/>
				<Form
					contestSite="yukicoder"
					setInformation={props.setInformation}
					username={props.usernames.yukicoder}
				/>
			</ul>
		</>
	)
}

Forms.propTypes = {
	setInformation: PropTypes.func.isRequired,
	usernames: PropTypes.object.isRequired,
}

export default Forms
