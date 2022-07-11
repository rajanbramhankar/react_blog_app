import React from 'react'
<<<<<<< HEAD
import {Link} from 'react-router-dom'


const Blockhome = (props) => {
    const { img, description, title, category,id }=props;
  return (
  
    <Link to={`${category}/${id}` } state={{img:img,category:category,id:id, description:description,title:title}} >
         
         <div className='block_home_middle_container' >
              <img className='block_home_img_middle' src={img} alt='not found' />
             <div className='block_home_middle'>
             <h2 className='block_title_home_middle' >{title}</h2>
              <p className='block_description_home_middle' >{description}</p>
              <p className='category_home_middle' ><b>{category}</b></p>
             </div>
          </div>
=======
import '../component/Bollywood.css'

const Blocktoppost = (props) => {
    const { img,  title }=props;
  return (
         <>
>>>>>>> 55b163425e3436c2f097465f9589b424a44aaa1a
        
          <div className='block_home' >
           
           <div className='top_post'>
           <img className='block_top_post_img' src={img} alt='not found' />
             <h4 className='block_top_post_title' >{title}</h4>
           </div>
          
            
          </div>
          
        </Link>
  )
}

export default Blocktoppost
