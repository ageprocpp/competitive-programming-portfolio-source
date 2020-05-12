import React from "react"
import "../stylesheets/Forms.css"
import Form from "./Form"

class Forms extends React.Component {
    render() {
        return (
            <>
                <hr />
                <ul className="forms">
                    <Form contestSite="atcoder" />
                    <Form contestSite="codeforces" />
                    <Form contestSite="topcoder" />
                    <Form contestSite="yukicoder" />
                </ul>
            </>
        )
    }
}

export default Forms
