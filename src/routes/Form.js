import React from "react"
import "../stylesheets/Form.css"
class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            contestSite: props.contestSite,
        }
    }
    handleChange(event) {
        this.setState({
            value: event.target.value,
        })
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
                    <form>
                        <input
                            type="text"
                            className="username"
                            value={this.state.value}
                            onChange={this.handleChange.bind(this)}
                        />
                    </form>
                </div>
            </li>
        )
    }
}

export default Form
