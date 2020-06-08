import React from "react"
import PropTypes from "prop-types"
import "../stylesheets/PortfolioContents.css"

const PortfolioContents = props => (
	<div className="portfolio-content">
		<div className="portfolio-content-title">{props.title}</div>
		<div className="portfolio-content-value">
			{props.value}
			{(
				props.valueUnit !== "" ?
					<span className="portfolio-content-value-unit">
						{props.valueUnit}
					</span> :
					<></>
			)}
		</div>
		<div className="portfolio-content-subValue">
			{props.subValue}
			{props.subValueUnit}
		</div>
	</div>
)

PortfolioContents.propTypes = {
	title: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	valueUnit: PropTypes.string,
	subValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	subValueUnit: PropTypes.string
}

export default PortfolioContents
