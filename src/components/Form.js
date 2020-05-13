import React from "react"
import "../stylesheets/Form.css"
import { navigate } from "@reach/router"
import { withPrefix } from "gatsby"
class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: props.username,
            contestSite: props.contestSite,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            username: event.target.value,
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        this.props.setInformation(this.state.contestSite, this.state.username)
        navigate(withPrefix("/portfolio"))
    }
    render() {
        let title
        if (this.state.contestSite === "atcoder") title = "AtCoder"
        if (this.state.contestSite === "codeforces") title = "Codeforces"
        if (this.state.contestSite === "topcoder") title = "TopCoder"
        if (this.state.contestSite === "yukicoder") title = "yukicoder"
        return (
            <li className="form">
                <div className="form-contents">
                    <div className="form-title">{title}</div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            className="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </form>
                </div>
            </li>
        )
    }
}

export default Form
