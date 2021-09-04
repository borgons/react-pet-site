import {React , Fragment} from 'react'

import { BrowserRouter as
   Router, Route } from  'react-router-dom'

import ShowCaseFour from '../../../assets/img/showcase4.jpeg'
import FrmRegistration from '../../forms/FrmRegistration'

function petRegistration() {
   return (
      <Fragment>
         <header style={getShwStyle} className="mb-3"></header>
         <Router>
            <Route component= {FrmRegistration} />
            <div className="container"></div>
         </Router>
      </Fragment>
   )
}

const getShwStyle = {
   backgroundImage: `url('${ShowCaseFour}')`,
   height:'50vh',
   opacity:'1',
   backgroundSize:'cover',
   backgroundPosition:'center',
   backgroundRepeat:'no-repeat',
}


export default petRegistration
