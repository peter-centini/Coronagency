import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
import DarkModeToggle from './DarkModeToggle'
import Darkmod from './Darkmod'
import image from "../images/iconinfo.png"
import image2 from "../images/icongraph.png"
import image3 from "../images/iconmap.png"
import image4 from "../images/iconquiz.png"

function Navbar() {
    return (  
    <div>
        <div className="navbar">
            <Link to="/" className="link">INFOS</Link>
            <Link to="/graphiques" className="link">GRAPHIQUES</Link>
            <Link to="/centres" className="link">CENTRES DE VACCINATION</Link>
            <Link to="/quizz" target="_blank" className="link">QUIZZ</Link>
        <Darkmod/>
        </div>
    
        <div className="navbar2">
            <Link to="/" className="link2"><img src={image} className="icon"/></Link>
            <Link to="/graphiques" className="link2"><img src={image2} className="icon"/></Link>
            <Link to="/centres" className="link2"><img src={image3} className="icon"/></Link>
            <Link to="/quizz" target="_blank" className="link2"><img src={image4} className="icon"/></Link>
        <Darkmod/>
        </div>
    </div> 
    )
}

export default Navbar