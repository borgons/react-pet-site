import {React, Fragment} from 'react'

function Footer() {
   return (
      <Fragment>
         <div style={getFootStyle}>
            <h4 style={getHOneStyle} >Sample Project | Sample Pet Site &copy;2021 </h4>
         </div>
      </Fragment>
   )
}

const getHOneStyle = {
   backgroundColor: '#54534e',
   color:'#FFF',
   font:'20px Arial, Helvetica, sans-serif ',
   lineHeight:'1.2',
}

const getFootStyle = {
   height: '20vh',
   backgroundColor: '#54534e',
   display:'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems:'center',
}


export default Footer
