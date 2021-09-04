import {React, Fragment} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Logo from '../../assets/img/dogLogo.png'

function Navbar() {
   return (
      <Fragment>
         {/* //NAVBAR HERE  */}
         <nav className="navbar is-info" role="navigation" aria-label="main navigation">

            <div className="navbar-brand">
               <img src={Logo} width="80" height="28" alt="Dog Logo" /> 
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
               <div className="navbar-start">
                  <Link className="navbar-item" to="/"><FontAwesomeIcon icon="home" className="mr-1"/> Home</Link>
                  <Link className="navbar-item" to="/aboutPet"><FontAwesomeIcon icon="question-circle" className="mr-1" />About PetSite</Link>
                  <Link className="navbar-item" to="/contact"><FontAwesomeIcon icon="phone" className="mr-1" />  Contact Us</Link>
                  <Link className="navbar-item" to="/petAppointment"><FontAwesomeIcon icon="laptop-house" className="mr-1"/>Appointments</Link>
                  <Link className="navbar-item" to="/petRegistration"><FontAwesomeIcon icon="pen" className="mr-1" /> Pet Registration</Link>
               </div>
            </div>

         </nav>
      </Fragment>
   )
}

export default Navbar
