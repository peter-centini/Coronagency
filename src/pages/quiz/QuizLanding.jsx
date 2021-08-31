import React, {useRef, useEffect, useState, Fragment} from 'react'
import { Link } from 'react-router-dom';

const QuizLanding = () => {

const [btn, setBtn] = useState(false);

const refVirus = useRef(null);

useEffect (() => {
    refVirus.current.classList.add("startingImg");
    setTimeout(() => {
        refVirus.current.classList.remove("startingImg");
        setBtn(true)
    }, 1000);

}, [])

const setLeftImg = () => {
    refVirus.current.classList.add("leftImg");
}

const setRightImg = () => {
    refVirus.current.classList.add("rightImg");
}

const clearImg = () => {
    if(refVirus.current.classList.contains("leftImg")) {
        refVirus.current.classList.remove("leftImg")
    } else if (refVirus.current.classList.contains("rightImg")) {
        refVirus.current.classList.remove("rightImg")
    }
}

const displayBtn = btn && (
    <Fragment>
        <div onMouseOver={setLeftImg} onMouseOut={clearImg} className="leftBox">
            <Link className="btn-welcome" to="quizz/signup">Inscription</Link>
        </div>
        <div onMouseOver={setRightImg} onMouseOut={clearImg} className="rightBox">
            <Link className="btn-welcome" to="quizz/login">Connexion</Link>
        </div>
    </Fragment>
)
    return (
        <div>
            <main ref={refVirus} className="welcomePage">
                {displayBtn}
            </main>
        </div>
    )
}

export default QuizLanding
