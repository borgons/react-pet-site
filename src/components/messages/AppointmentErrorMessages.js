import React,  { Fragment, useEffect, useState} from 'react'

function AppointmentErrorMessages(props) {
   const { errorHandler } = props;
   const [show, setShow] = useState(false);

   useEffect(() => {
      setShow(false);
      
      if( errorHandler.hasError){
         setShow(true);
      }
   }, [errorHandler]);

      


   return (
      
      
      <Fragment>
         { show ? (
            <div className="container">
               <div className="columns">
                  <div className="column is-desktop">
                     <div 
                        className="column is-6 is-offset-one-half m-auto">
                           <article className="message is-danger">
                           <div className="message-header">
                              <p>Danger</p>
                              <button 
                                 className="delete" 
                                 aria-label="delete"
                                 onClick={() => {
                                    setShow(false);
                                 }}
                                 >
                              </button>
                           </div>
                           <div className="message-body">
                              <ul>
                                 <li>{errorHandler.msg.appNumber[0]}</li>
                                 <li>{errorHandler.msg.appPetID[0]}</li>
                                 <li>{errorHandler.msg.appPetName[0]}</li>
                                 <li>{errorHandler.msg.appPurpose[0]}</li>
                                 <li>{errorHandler.msg.appDate[0]}</li>
                              </ul>
                           </div>
                           </article>
                     </div>
                     
                  </div>
               </div>
            </div>
            
         ):
         ("")}
      </Fragment>
   );
}

export default AppointmentErrorMessages
