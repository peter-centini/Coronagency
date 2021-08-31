import React from 'react'
import Navbar from "./Navbar";
import "./info.css";
import images from "../images/covid.png";
import images1 from "../images/covid2.png";
function Info() {
    return (
        <div>
            <Navbar/>
            <div className="picture">
            <img src={images} className="covid" alt="image-covid"></img>
            <img src={images1} className="covid2" alt="image-covid2"></img>
            </div>
            <div className="title-container">
                <p id="text">
                la Coronagency a été créer pour faire remontée les chiffres des contaminations
                des hospitalisations et des décés suite a la Pandémie de CoronaVirus 
                </p>
            </div>
            <div className="container-2">
            <aside className="article">
                <div className="miniparaph"> Les coronavirus (CoV) sont des virus qui constituent la sous-famille Orthocoronavirinae de la famille Coronaviridae.</div>
                <div className="miniparaph">Le nom « coronavirus », du latin signifiant « virus à couronne », 
                est dû à l'apparence des virions sous un microscope électronique,
                 avec une frange de grandes projections bulbeuses qui évoquent une couronne solaire.</div>
                <div className="miniparaph">Les coronavirus sont munis d'une enveloppe virale incluant une capside caractérisée par des protéines en forme de massue (appelées spicules). 
                Ils ont un génome à ARN monocaténaire (c'est-à-dire à un seul brin), de sens positif (groupe IV de la classification Baltimore), 
                de 26 à 32 kilobases (ce qui en fait les plus grands génomes parmi les virus à ARN).</div>
                <div className="miniparaph">Ils se classent parmi les Nidovirales, ordre de virus produisant un jeu imbriqué d'ARNm sous-génomiques lors de l'infection.
                 Des spicules, une enveloppe, membrane et capside contribuent à la structure d'ensemble de tous les coronavirus. Ils peuvent muter et se recombiner.</div>
            </aside>
            </div>
        </div>
    )
}

export default Info