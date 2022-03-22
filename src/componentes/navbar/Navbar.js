import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faStar } from '@fortawesome/free-solid-svg-icons'
import { Image } from 'react-bootstrap'

const navbar = () => {
  return (
    <div>
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">

  <Image  src="./start3.png" width='50' height='50' type="image"/>

    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <li className="nav-item">
          
        </li>
        <li className="nav-item">
          <Link name='home' className="nav-link" to='/'>
          <FontAwesomeIcon icon={faHouse}/> Inicio
         </Link>
        </li>
        <li className="nav-item">
          <Link  name='favoritos' className="nav-link"to ='/favoritos'>
          <FontAwesomeIcon icon={faStar}/> Favoritos
          </Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default navbar