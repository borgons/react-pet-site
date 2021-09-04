import {React, Fragment} from 'react'
import Offer1 from '../../assets/img/Offer1.jpeg'
import Offer2 from '../../assets/img/Offer2.jpeg'
import Offer3 from '../../assets/img/Offer3.jpeg'
import Offer4 from '../../assets/img/Offer4.jpeg'

function HomePetOffer() {
   return (
      <Fragment>
         <div className="container mb-4">
            <h3 className="title is-3 has-text-centered">Pet Offers</h3>
            <div className="columns is-desktop">

               <div className="column">

                  <div className="card">
                     <div className="card-image">
                        <figure className="image is-4by3">
                           <img src={Offer1} alt="Offer1" />
                        </figure>
                     </div>
                     <div className="card-content" style={getCardBackground}>
                        <div className="media">
                           <div className="media-content">
                              <p className="title is-4 has-text-centered">Vaccination</p>
                           </div>
                        </div>

                        <div className="content">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           Phasellus nec iaculis mauris.
                        </div>
                     </div>
                  </div>
               </div>

               <div className="column">

                  <div className="card">
                        <div className="card-image">
                           <figure className="image is-4by3">
                              <img src={Offer2} alt="Offer2" />
                           </figure>
                        </div>
                        <div className="card-content" style={getCardBackground}>
                           <div className="media">
                              <div className="media-content">
                                 <p className="title is-4 has-text-centered">Adoption</p>
                              </div>
                           </div>

                           <div className="content">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Phasellus nec iaculis mauris.
                           </div>
                        </div>
                     </div>

               </div>

               <div className="column">
                  <div className="card">
                        <div className="card-image">
                           <figure className="image is-4by3">
                              <img src={Offer3} alt="Offer3" />
                           </figure>
                        </div>
                        <div className="card-content" style={getCardBackground}>
                           <div className="media">
                              <div className="media-content">
                                 <p className="title is-4 has-text-centered">Grooming</p>
                              </div>
                           </div>

                           <div className="content">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Phasellus nec iaculis mauris.
                           </div>
                        </div>
                     </div>

               </div>

               <div className="column">

                  <div className="card">
                        <div className="card-image">
                           <figure className="image is-4by3">
                              <img src={Offer4} alt="Offer4" />
                           </figure>
                        </div>
                        <div className="card-content" style={getCardBackground}>
                           <div className="media">
                              <div className="media-content">
                                 <p className="title is-4 has-text-centered">Pet Foods</p>
                                 
                              </div>
                           </div>

                           <div className="content">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Phasellus nec iaculis mauris.
                           </div>
                        </div>
                     </div>
               </div> 
               
            </div>

         </div> 
      </Fragment>
   )
}

const getCardBackground = {
   background:' #fff894'
}

export default HomePetOffer
