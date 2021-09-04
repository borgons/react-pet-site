import {React, Fragment }from 'react'
import HomePetOffer from  '../../parts/HomePetOffer'

import ShowCaseOne from '../../../assets/img/showcase1.jpeg'


function Home() {

   return (
      <Fragment>
         <div className="container mb-5">
            <header style={getShwStyle}>
            <h1 style={getHOneStyle}>Welcome to the Sample Tikong Pet Services</h1>
      <p style={getPStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia totam perspiciatis! Nihil.</p>
            </header>
         </div>

         <HomePetOffer />

      </Fragment>
   )
}

const getShwStyle = {
   backgroundImage: `url('${ShowCaseOne}')`,
   height:'80vh',
   opacity:'0.9',
   backgroundSize:'cover',
   backgroundPosition:'center',
   backgroundRepeat:'no-repeat',
   display:'flex',
   flexDirection: 'column',
   justifyContent: 'flex-end',
   alignItems:'center',
}

const getHOneStyle = {
   backgroundColor: '#1930fc',
   padding:'8px',
   fontSize:'40px',
   color:'#FFF',
   fontFamily:'Arial, Helvetica, sans-serif',
   lineHeight:'1.2',
}

const getPStyle = {
   backgroundColor:'#1930fc',
   fontSize:'15px',
   color:'#FFF',
   padding:'8px',
}

export default Home
