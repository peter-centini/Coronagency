import React from "react";
import Navbar from "../components/Navbar";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as centres from "../data/centres-vaccination.json";
import "./Map.css"
import marker from "../images/markervert.png"
import L from "leaflet"
   

function Map() {

   let Icon = L.icon({
    iconUrl: marker,
    iconSize: [35, 35],
});

  const [centreVacc, setCentreVacc] = React.useState(null);

  return (
  <div>
    <Navbar/>
    <h1 className="centrevacc">Carte des centres de vaccinations français</h1>
    <div className="prout">
     <MapContainer className="map-container" center={[45.999054, 3.033400]} zoom={6}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
       />
        {centres.features.map((centre, index) => (
        <Marker  
          icon={Icon}
          key={index}
          position={[
            centre.properties.c_latitude_coor1,
            centre.properties.c_longitude_coor1,
          ]}
          onClick={() => {
            setCentreVacc(centre);
          }}
          >
           <Popup
              position={[
              centre.properties.c_latitude_coor1[1],
            centre.properties.c_longitude_coor1[0],
            //      centre.geometry.coordinates[1],
            //    centre.geometry.coordinates[0]
              ]}
              onClose={() => {
                setCentreVacc(null);
                  }}
                  >
              <div>
                  <a href={centre.properties.c_rdv_site_web} target='blank' className="rdv">Prendre un Rendez-Vous</a>
                <h2 className="Horaire">{centre.properties.c_rdv_lundi}</h2>
               <h2 className="Chu">{centre.properties.c_nom}</h2>
                <p className="ville">{centre.properties.c_com_nom}</p>
                 </div>
             </Popup>
          </Marker>
        ))},
    </MapContainer>
    </div>
  </div>
    
  );
}
export default Map

