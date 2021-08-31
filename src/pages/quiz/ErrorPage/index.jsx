import React from 'react'
import skull from "../../../images/skull.png"
import "./error.css"

const centerH2 = {
    textAlign: "center",
    marginTop: "50px"
}

const centerImg = {
    display: "block",
    margin: "20px auto",
}

const ErrorPage = () => {
    return (
        <div className="quiz-bg">
            <div className="container1">
                <h2 className="centerH2" style={centerH2}>Houloulou, t'as trompé de page !</h2>
                <img className="centerImg" style={centerImg} src={skull} alt="error page"></img>
            </div>
        </div>
    )
}

export default ErrorPage
