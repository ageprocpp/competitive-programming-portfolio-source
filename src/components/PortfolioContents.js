import React from "react"
import "../stylesheets/PortfolioContents.css"

const PortfolioContents = props => {
    return (
        <div className="portfolio-content">
            <div className="portfolio-content-title">{props.title}</div>
            <div className="portfolio-content-value">
                {props.value}
                <span className="portfolio-content-value-unit">
                    {props.valueUnit}
                </span>
            </div>
            <div className="portfolio-content-subValue">
                {props.subValue}
                {props.subValueUnit}
            </div>
        </div>
    )
}

export default PortfolioContents
