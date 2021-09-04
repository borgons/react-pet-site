import {React, Fragment} from 'react'
import { BrowserRouter as 
   Router, Route} from 'react-router-dom'

import ShowCaseFive from '../../../assets/img/showcase5.jpeg'
import FrmAppointment from '../../forms/FrmAppointment'


function petAppointment() {
   return (
      <Fragment>
         <header style={getShwStyle} className="mb-3"></header>
      <Router>
         <Route component={FrmAppointment}></Route>
      </Router>
      </Fragment>
   )
}

const getShwStyle = {
   backgroundImage: `url('${ShowCaseFive}')`,
   height:'50vh',
   opacity:'1',
   backgroundSize:'cover',
   backgroundPosition:'top',
   backgroundRepeat:'no-repeat',
}

export default petAppointment
