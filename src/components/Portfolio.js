import React from "react"

class Portfolio extends React.Component {
    render() {
        return (
            <div>
                {this.props.focusedContestSite}
                {this.props.username}
            </div>
        )
    }
}

export default Portfolio
