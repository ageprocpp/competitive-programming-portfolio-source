import React from "react"
import "../stylesheets/Forms.css"
import Form from "./Form"

class Forms extends React.Component {
    render() {
        return (
            <>
                <hr />
                <ul className="forms">
                    <Form
                        contestSite="atcoder"
                        setInformation={this.props.setInformation}
                        username={this.props.usernames.atcoder}
                    />
                    <Form
                        contestSite="codeforces"
                        setInformation={this.props.setInformation}
                        username={this.props.usernames.codeforces}
                    />
                    <Form
                        contestSite="topcoder"
                        setInformation={this.props.setInformation}
                        username={this.props.usernames.topcoder}
                    />
                    <Form
                        contestSite="yukicoder"
                        setInformation={this.props.setInformation}
                        username={this.props.usernames.yukicoder}
                    />
                </ul>
            </>
        )
    }
}

export default Forms
