import React from "react"
import "../stylesheets/Home.css"

class Home extends React.Component{
    render(){
        return (
            <div className="main">
                <div className="main-contents">
                    <div className="main-contents-title">
                        Competitive Programming Portfolio とは？
                    </div>
                    <hr />
                    <div classname="description">
                        AtCoder, Codeforces, TopCoder, yukicoderのユーザ名から情報を取得し、統計情報を取得するサイトです。<br />
                        <a href="https://twitter.com/ageprocpp">@ageprocpp</a>が運営しています。
                    </div>
                </div>
            </div>
        )
    }
}

export default Home