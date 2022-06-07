import React from 'react'
import '../component/Bollywood.css'

const Blocktoppost = (props) => {
    const { img,  title }=props;
  return (
         <>
        
          <div className='block_home' >
           
           <div className='top_post'>
           <img className='block_top_post_img' src={img} alt='not found' />
             <h4 className='block_top_post_title' >{title}</h4>
           </div>
          
            
          </div>
          
          </>
  )
}

export default Blocktoppost
