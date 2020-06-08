import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import "../stylesheets/Portfolio.css"
import PortfolioContents from "./PortfolioContents"

function getOrdinal(num) {
	if (num % 10 === 1) return "st"
	else if (num % 10 === 2) return "nd"
	return "th"
}

const Portfolio = props => {
	const [loading, setLoading] = useState(0)

	const [loadingTime, setLoadingTime] = useState(0)
	const [data, setData] = useState({
	})
	const [inputBool, setInputbool] = useState(true)
	const [userExistence, setUserExistence] = useState(true)

	useEffect(() => {
		setLoadingTime(0)
		setInputbool(true)
		setUserExistence(true)
		const intervalId = setInterval(
			() =>
				setLoadingTime(prev => prev + 1),
			1000
		)
		if (props.focusedContestSite === "atcoder") {
			setLoading(prev => prev + 4)
			fetch(
				`https://kenkoooo.com/atcoder/atcoder-api/v2/user_info?user=${props.username}`
			)
				.then(response => response.json())
				.then(responseJson => {
					setData(prev => ({
						...prev,
						acCount: responseJson["accepted_count"],
						acCountRank:
								responseJson["accepted_count_rank"] + 1,
						ratedPointSum: responseJson["rated_point_sum"],
						ratedPointSumRank:
								responseJson["rated_point_sum_rank"] + 1,
					}))
					setLoading(prev => prev - 1)
				})
				.catch(err => console.error(err))

			fetch("https://kenkoooo.com/atcoder/resources/merged-problems.json")
				.then(response => response.json())
				.then(responseJson => {
					let firstAcCount = {
						[props.username]: 0,
					}
					for (let problem of responseJson) {
						if (problem.first_user_id === null) continue
						if (firstAcCount[problem.first_user_id] === undefined)
							firstAcCount[problem.first_user_id] = 1
						else firstAcCount[problem.first_user_id]++
					}
					let firstAcRank = 1
					for (let user in firstAcCount) {
						if (firstAcCount[user] > firstAcCount[props.username])
							firstAcRank++
					}
					setData(prev => ({
						...prev,
						firstAcCount: firstAcCount[props.username],
						firstAcRank: firstAcRank,
					}))

					let fastestCodeCount = {
						[props.username]: 0,
					}
					for (let problem of responseJson) {
						if (problem.fastest_user_id === null) continue
						if (
							fastestCodeCount[problem.fastest_user_id] ===
							undefined
						)
							fastestCodeCount[problem.fastest_user_id] = 1
						else fastestCodeCount[problem.fastest_user_id]++
					}
					let fastestCodeRank = 1
					for (let user in fastestCodeCount) {
						if (
							fastestCodeCount[user] >
							fastestCodeCount[props.username]
						)
							fastestCodeRank++
					}
					setData(prev => ({
						...prev,
						fastestCodeCount: fastestCodeCount[props.username],
						fastestCodeRank: fastestCodeRank,
					}))

					let shortestCodeCount = {
						[props.username]: 0,
					}
					for (let problem of responseJson) {
						if (problem.shortest_user_id === null) continue
						if (
							shortestCodeCount[problem.shortest_user_id] ===
							undefined
						)
							shortestCodeCount[problem.shortest_user_id] = 1
						else shortestCodeCount[problem.shortest_user_id]++
					}
					let shortestCodeRank = 1
					for (let user in shortestCodeCount) {
						if (
							shortestCodeCount[user] >
							shortestCodeCount[props.username]
						)
							shortestCodeRank++
					}

					setData(prev => ({
						...prev,
						shortestCodeCount:
								shortestCodeCount[props.username],
						shortestCodeRank: shortestCodeRank,
					}))
					setLoading(prev => prev - 1)
				})
				.catch(err => console.error(err))

			fetch("https://kenkoooo.com/atcoder/resources/streaks.json")
				.then(response => response.json())
				.then(responseJson => {
					let userData = responseJson.filter(item => item.user_id === props.username)
					if (userData[0] === undefined) {
						setLoading(prev => prev - 1)
						return
					}
					let longestStreakRank = 1
					responseJson.forEach(user => {
						if (user.streak > userData[0].streak)
							longestStreakRank++
					})
					setData(prev => ({
						...prev,
						longestStreak: userData[0].streak,
						longestStreakRank: longestStreakRank,
					}))
					setLoading(prev => prev - 1)
				})
			fetch(
				`https://cpportfolio-backend.herokuapp.com/atcoder/?username=${props.username}`
			)
				.then(response => {
					if (!response.ok) {
						setUserExistence(false)
						setLoading(prev => prev - 1)
						console.log(props.username)
						if (props.username === "") setInputbool(false)
						else Promise.reject("Such a user does not exist")
					}
					return response.json()
				})
				.then(responseJson => {
					setData(prev => ({
						...prev,
						rating: responseJson.rating,
						ratingRank: responseJson.ratingRank,
						participatedRatedContests:
								responseJson.participatedRatedContests,
						participatedContests:
								responseJson.participatedContests,
					}))
					setLoading(prev => prev - 1)
				})
				.catch(err => console.error(err))
		}
		else if(props.focusedContestSite === "codeforces"){
			setLoading(1)
			fetch(`https://codeforces.com/api/user.info?lang=en&handles=${props.username}`)
				.then(response => response.json())
				.then(responseJson => {
					console.log(responseJson)
					setData(prev => ({
						...prev,
						rating: responseJson.result[0].rating,
						contribution: responseJson.result[0].contribution
					}))
					setLoading(prev => prev - 1)
				})
		}
		return () => {
			clearInterval(intervalId)
		}
	}, [props.focusedContestSite, props.username])

	if (props.focusedContestSite === "" || props.username === "") return <></>
	if (!inputBool) return <></>
	if (loading) {
		return (
			<>
				<hr />
				<div className="loading">
					Loading{".".repeat(loadingTime % 4)}
				</div>
			</>
		)
	}
	if (!userExistence) {
		return (
			<>
				<hr />
				<div className="user-not-exist">
					<span>Such a user does not exist.</span>
				</div>
			</>
		)
	}
	if(props.focusedContestSite === "atcoder"){
		return (
			<>
				<hr />
				<div className="portfolio-main">
					<div className="portfolio-contents">
						<PortfolioContents
							title="Rating"
							value={data.rating}
							valueUnit=""
							subValue={data.ratingRank}
							subValueUnit=""
						/>
						<PortfolioContents
							title="Participated Contests"
							value={data.participatedContests}
							valueUnit=""
							subValue={`Rated:${data.participatedRatedContests}`}
						/>
						<PortfolioContents
							title="AC Count"
							value={data.acCount}
							valueUnit=""
							subValue={data.acCountRank}
							subValueUnit={getOrdinal(data.acCountRank)}
						/>
						<PortfolioContents
							title="Rated Point Sum"
							value={data.ratedPointSum}
							valueUnit="pt"
							subValue={data.ratedPointSumRank}
							subValueUnit={getOrdinal(data.ratedPointSumRank)}
						/>
						<PortfolioContents
							title="First AC"
							value={data.firstAcCount}
							valueUnit=""
							subValue={data.firstAcRank}
							subValueUnit={getOrdinal(data.firstAcRank)}
						/>
						<PortfolioContents
							title="Fastest Code"
							value={data.fastestCodeCount}
							valueUnit=""
							subValue={data.fastestCodeRank}
							subValueUnit={getOrdinal(data.fastestCodeRank)}
						/>
						<PortfolioContents
							title="Shortest Code"
							value={data.shortestCodeCount}
							valueUnit=""
							subValue={data.shortestCodeRank}
							subValueUnit={getOrdinal(data.shortestCodeRank)}
						/>
						<PortfolioContents
							title="Longest Streak"
							value={data.longestStreak}
							valueUnit="days"
							subValue={data.longestStreakRank}
							subValueUnit={getOrdinal(data.longestStreakRank)}
						/>
					</div>
				</div>
			</>
		)
	}
	else if(props.focusedContestSite === "codeforces"){
		return (
			<>
				<hr />
				<div className="portfolio-main">
					<div className="portfolio-contents">
						<PortfolioContents
							title="Rating"
							value={data.rating}
							valueUnit=""
						/>
					</div>
				</div>
			</>
		)
	}
}

Portfolio.propTypes = {
	focusedContestSite: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
}

export default Portfolio
