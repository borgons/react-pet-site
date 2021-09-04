import {React, Fragment} from 'react'

import ShowCaseThree from '../../../assets/img/showcase3.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Contact() {
   return (
      <Fragment>
         <header style={getShwStyle} className="mb-3"></header>
         
         <div className="container">
            <div className="column is-desktop">
               <div className="column is-half is-offset-one-quarter">
                  <h1 className="title is-2 has-text-centered">Please Touch with us</h1>
                     <h5 className="title is-5 has-text-centered">Please follow our Social Media</h5> 
                        <ul>
                           <li>
                              <FontAwesomeIcon icon="envelope" style={getIconStyle} /> -- rrborgonia@gmail.com
                           </li>
                           <li>
                              <FontAwesomeIcon icon="globe" style={getIconStyle} /> -- Facebook - Pet Site
                           </li>
                           <li>
                              <FontAwesomeIcon icon="globe" style={getIconStyle} /> -- Instagram - Pet Site
                           </li>
                           <li>
                              <FontAwesomeIcon icon="globe" style={getIconStyle} /> -- Twitter - Pet Site
                           </li>
                           <li>
                              <FontAwesomeIcon icon="globe" style={getIconStyle}/> -- Website - www.petSite.com.ph OR
                           </li>
                           <li>
                              <FontAwesomeIcon icon="phone" style={getIconStyle}/> -- Website - 2664420
                           </li>
                           <br/>
                        </ul>
                        <h6 className="title is-6 has-text-centered">Thank you for your patronage</h6> 
               </div>
            </div>
         </div>
      </Fragment>
   )
}




const getShwStyle = {
   backgroundImage: `url('${ShowCaseThree}')`,
   height:'50vh',
   opacity:'1',
   backgroundSize:'cover',
   backgroundPosition:'center',
   backgroundRepeat:'no-repeat',
}

const getIconStyle = {
   fontSize: '1.5rem', 
   color: 'cornflowerblue',
}
export default Contact
