import React from 'react'

import {Link} from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

import {Map, TileLayer, Marker, Popup } from 'react-leaflet'

import mapIcon from '../utils/MapIcon'
import mapMarkerImg from '../images/maker.svg'

import '../styles/pages/orphanages-map.css'

const OrphanagesMap = () => {
    return (
        <div id="page-map">
          <aside>
             <header>
               <img src={mapMarkerImg} alt="Happy"/>
      
               <h2>Escolha um orfanato no mapa</h2>
               <p>Muitas crianças estão esperando a sua visita</p>
             </header>
      
             <footer>
               <strong>São Paulo</strong>
               <span>São Paulo</span>
             </footer>
           </aside>

           <Map 
           center={[-23.5682479,-46.5446162]}
           zoom={15}
           style={{
               width: '100%',
               height: '100%'
           }}
           >
             <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
              
             <Marker icon={mapIcon} position={[-23.5682479,-46.5446162]}  >

             <Popup closeButton={false} minWidth={248} maxWidth={248} className="map-popup" >
                Lar das meninas
             </Popup>

             </Marker>

           </Map>

           <Link to="/orphanages/create"   className="create-orphanage">
             <FiPlus size={32} color="FFF"/>
           </Link>
        </div>
    )
}

export default OrphanagesMap
