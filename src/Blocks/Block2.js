import React from 'react'
import '../component/Bollywood.css'

const Block2 = (props) => {
    const { img, description, title, category}=props;
  return (
         <>
        
        
         <div className='block_home' >
              <img className='block_img_home' src={img} alt='no image found' />
             <div className='bolly_container' >
             <h4 className='block_title_home' >{title}</h4>
              <p className='block_description_home' >{description}</p>
              <p className='category_home' ><b>{category}</b></p>
             </div>
          </div>  
          
          </>
  )
}

export default Block2