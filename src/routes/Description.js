import React from "react"
import "../stylesheets/Description.css"

class Description extends React.Component {
    render() {
        return (
            <>
                <div className="main-contents">
                    <div className="main-contents-title">
                        Competitive Programming Portfolio とは？
                    </div>
                    <hr />
                    <div className="description">
                        AtCoder, Codeforces, TopCoder,
                        yukicoderのユーザ名から情報を取得し、統計情報を取得するサイトです。
                        <br />
                        <a
                            href="https://twitter.com/ageprocpp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @ageprocpp
                        </a>
                        が運営しています。
                    </div>
                </div>
                <div className="main-contents">
                    <div className="main-contents-title">取得できるもの</div>
                    <hr />
                    <div className="description">
                        正解数はもちろん、提出したコードの総長, 得点の合計,
                        streakなどを取得できます。
                        <br />
                        取得には、AtCoder Problems API, Codeforces API, TopCoder
                        API, yukicoder APIをそれぞれ利用しています。
                        <br />
                        追加してほしいものがあれば、連絡してください。
                    </div>
                </div>
            </>
        )
    }
}

export default Description
