import {React, Fragment} from 'react'

import ShowCaseTwo from '../../../assets/img/showcase2.jpeg'

function About() {
   return (
      <Fragment>
         <header style={getShwStyle} className="mb-3"></header>

         <div className="container">

               <div className="card">
                  <div className="card-content has-text-centered">
                     <div className="media">
                        <div className="media-content">
                           <p className="title is-4">About PetSite</p>
                        </div>
                     </div>

                     <div className="content mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fugit nihil harum quidem, nisi maiores quod officiis sapiente, quam necessitatibus quisquam veritatis excepturi distinctio laborum. Est deserunt deleniti et laborum. Delectus, aspernatur esse commodi illum cum, accusamus laudantium mollitia, ullam ipsam perferendis hic id rerum eaque officia numquam. Vero, voluptates esse aperiam voluptatibus hic, beatae fugit voluptas eius magni, porro dolore? Fugit voluptates quis debitis. Veritatis expedita cupiditate numquam nemo, quidem ipsam possimus ab facere est illum nobis quaerat sunt voluptatum laboriosam laudantium aliquam sapiente deleniti fuga porro amet magni doloribus aut officiis? Qui sequi reiciendis impedit corporis soluta tempora.
                     </div>
                  </div>
               </div>
         </div>
      </Fragment>
   )
}

const getShwStyle = {
   backgroundImage: `url('${ShowCaseTwo}')`,
   height:'50vh',
   opacity:'1',
   backgroundSize:'cover',
   backgroundPosition:'center',
   backgroundRepeat:'no-repeat',
}
export default About
