import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { newAppoint } from '../../actions/petActions'
import AppointmentErrorMessages from '../messages/AppointmentErrorMessages'
import AppointmentSuccessMessages from '../messages/AppointmentSuccessMessages'

const FrmAppointment = ({ newAppoint }) => {

   const [appData, setAppData] = useState(
      {
         appNumber:"",
         appPetID:"",
         appPetName:"",
         appPurpose:"",
         appDate:"",
      },
      []
   );
   
   const [errorHandler, setErrorHandler] = useState({
      hasError: false,
      msg: "",
   })

   const [successHandler, setSuccessHandler] = useState({
      hasSuccess: false,
      msg: "",
   })
   

   const { 
      appNumber,
      appPetID, 
      appPetName,
      appPurpose, 
      appDate
   } = appData;

   const onChange = e =>
      setAppData({ ...appData, [e.target.name]: e.target.value})

   const onSubmit = e => {
      e.preventDefault();
      newAppoint(appData,setErrorHandler,setSuccessHandler);

      setAppData ({
         appNumber:"",
         appPetID:"",
         appPetName:"",
         appPurpose:"",
         appDate:"",
      })
   }

   return (
      <Fragment>
         <AppointmentErrorMessages errorHandler={errorHandler} />
         <AppointmentSuccessMessages successHandler={successHandler} />
         <div className="container">
            <div className="columns">
               <div className="column is-desktop">
                  <div className="column is-4 is-offset-one-half m-auto">
                     <h4 className="title is-4 has-text-centered">
                        Please set your Appointment Schedule...
                     </h4>
                        <form onSubmit={onSubmit}>
                           <label className="label">appNumber</label>
                           <input 
                              name="appNumber"
                              className="input is-small is-dark mb-2" 
                              type="number" 
                              value={appNumber}
                              onChange={(e) => onChange(e)}
                              placeholder="APPOINTMENT NUMBER" />

                           <label className="label">appPetID</label>   
                           <input 
                              name="appPetID"
                              className="input is-small is-dark mb-2" 
                              type="number" 
                              value={appPetID}
                              onChange={(e) => onChange(e)}
                              placeholder="APPOINTMENT PET ID" />

                           <label className="label">appPetName</label>  
                           <input 
                              name="appPetName"
                              className="input is-small is-dark mb-2" 
                              type="text" 
                              value={appPetName}
                              onChange={(e) => onChange(e)}
                              placeholder="APPOINTMENT PET NAME" />

                           <label className="label">appPurpose</label> 
                           <input 
                              name="appPurpose"
                              className="input is-small is-dark mb-2" 
                              type="text" 
                              value={appPurpose}
                              onChange={(e) => onChange(e)}
                              placeholder="APPOINTMENT PURPOSE"/>

                           <label className="label">appDate</label> 
                           <input 
                              name="appDate"
                              className="input is-small is-dark mb-4" 
                              type="date" 
                              value={appDate}
                              onChange={(e) => onChange(e)}
                              placeholder="APPOINTMENT DATE"/>  

                           <div className="buttons mb-6  is-centered">
                              <button 
                                 type="submit" 
                                 name="action" 
                                 className="button is-info ">
                                 Set Appointment
                              </button>
                           </div>
                        </form>
                     
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}

FrmAppointment.propTypes = {
   newAppoint: PropTypes.func.isRequired
}


export default connect(null, { newAppoint })(FrmAppointment);
