import React from "react"
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

export default Forms
