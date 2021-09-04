import React, { Fragment, useState } from 'react'
import PropTypes from "prop-types";
import  { connect }  from 'react-redux'
import { petRegister } from '../../actions/petActions' 
import RegistrationErrorMessages from '../messages/RegistrationErrorMessages'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FrmRegistration = ({ petRegister }) => {
   
   const [formData, setFormData] = useState(
      {
         ownID:"",
         ownFirst:"",
         ownLast:"",
         ownAddress:"",
         ownEmail:"",
         ownContact:"",
         petID:"",
         petName:"", 
         petAge:"",
         petImage:""
         
      },
      []
   );

   const [image, setImage] = useState();
   const [imageName, setImageName] = useState("Choose File");

   const { 
      ownID,
      ownFirst,
      ownLast,
      ownAddress,
      ownEmail,
      ownContact,
      petID, 
      petName, 
      petAge
   } = formData;

   const [errorHandler, setErrorHandler] = useState({
      hasError: false, 
      msg: "",
   })


   const onFileChange = (e) => {
      setImage(e.target.files[0]);
      setImageName(e.target.files[0].name);
   }


   const onChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value})
   };

   const onSubmit = e => {
      e.preventDefault();
      
      const payload = new FormData();
      payload.append("ownID", formData.ownID);
      payload.append("ownFirst", formData.ownFirst);
      payload.append("ownLast", formData.ownLast);
      payload.append("ownAddress", formData.ownAddress);
      payload.append("ownEmail", formData.ownEmail);
      payload.append("ownContact", formData.ownContact)
      payload.append("petID", formData.petID);
      payload.append("petName", formData.petName);
      payload.append("petAge", formData.petAge);
      payload.append("petImage", image);

      petRegister(payload, setErrorHandler);
      
      setFormData({
         ownID:"",
         ownFirst:"",
         ownLast:"",
         ownAddress:"",
         ownEmail:"",
         ownContact:"",
         petID:"",
         petName:"", 
         petAge:"",
         petImage:""
      })
   }

   return (
      <Fragment>
         <RegistrationErrorMessages errorHandler={errorHandler} />
         <div className="container">
            <div className="columns">
               <div className="column is-desktop">
                  <div className="column is-4 is-offset-one-half m-auto">
                     <h4 className="title is-4 has-text-centered">
                        Please Register your Pets here
                     </h4>
                        
                        <form onSubmit={onSubmit} encType="multipart/form-data" >
                           <h5 className="title is-5">OWNERS</h5>
                        
                           <label className="label">ownID</label>
                           <input 
                              name="ownID"
                              className="input is-small is-dark mb-2" 
                              type="number" 
                              placeholder="ID"
                              value={ownID}
                              onChange={(e) => onChange(e)}
                              />

                           <label className="label">ownFirstName</label>   
                           <input 
                              name="ownFirst"
                              className="input is-small is-dark mb-2" 
                              type="text" 
                              placeholder="FIRST NAME"
                              value={ownFirst}
                              onChange={(e) => onChange(e)}
                              />

                           <label className="label">ownLastName</label>  
                           <input 
                              name="ownLast"
                              className="input is-small is-dark mb-2" 
                              type="text" 
                              placeholder="LAST NAME"
                              value={ownLast}
                              onChange={(e) => onChange(e)}
                              />

                           <label className="label">ownAddress</label> 
                           <input 
                              name="ownAddress"
                              className="input is-small is-dark mb-2" 
                              type="text" 
                              placeholder="ADDRESS"
                              value={ownAddress}
                              onChange={(e) => onChange(e)}
                              />

                           <label className="label">ownEmail</label> 
                           <input 
                              name="ownEmail"
                              className="input is-small is-dark mb-2" 
                              type="text" 
                              placeholder="EMAIL"
                              value={ownEmail}
                              onChange={(e) => onChange(e)}
                              />   

                           <label className="label">ownContact</label> 
                           <input 
                              name="ownContact"
                              className="input is-small is-dark mb-5" 
                              type="number" 
                              placeholder="CONTACT"
                              value={ownContact}
                              onChange={(e) => onChange(e)}
                              />

                           <h5 className="title is-5">PET OWNERS</h5>
                           <hr />

                           <label className="label">petID</label>
                           <input 
                              name="petID"
                              className="input is-small is-dark mb-2" 
                              type="number" 
                              placeholder="PET ID"
                              value={petID}
                              onChange={(e) => onChange(e)}
                           />

                           <label className="label">petName</label>   
                           <input 
                              name="petName"
                              className="input is-small is-dark mb-2" 
                              type="text" 
                              placeholder="PET NAME"
                              value={petName}
                              onChange={(e) => onChange(e)}
                           />

                           <label className="label">Age</label> 
                           <input 
                              name="petAge"
                              className="input is-small is-dark mb-4" 
                              type="text" 
                              placeholder="PET AGE"
                              value={petAge}
                              onChange={(e) => onChange(e)}
                           />   

                           <div className="file is-primary has-name mb-5">
                              <label className="file-label">
                                 <input 
                                    name="petImage"
                                    className="file-input" 
                                    type="file" 
                                    accept="image/*"
                                    
                                    onChange={(e) => onFileChange(e)} />
                                 <span className="file-cta">
                                    <span className="file-icon">
                                       <FontAwesomeIcon icon="upload" />
                                    </span>
                                    <span 
                                       className="file-label">
                                    </span>
                                 </span>
                                 <span
                                    className="file-name">
                                       {imageName}
                                 </span>
                              </label>
                           </div>

                           <div className="buttons mb-6  is-centered">
                              <button 
                                 type="submit" 
                                 name="action" 
                                 className="button is-info ">
                                 Submit Form
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
FrmRegistration.propTypes = {
   petRegister: PropTypes.func.isRequired
}


export default connect(null, { petRegister })(FrmRegistration);

