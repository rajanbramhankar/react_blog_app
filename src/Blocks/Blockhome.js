import React from 'react'


const Blockhome = (props) => {
    const { img, description, title, category }=props;
  return (
    //   <Link to={`/${category}/${ids}`} state={{img:image, description:description, title:title, date:dates, category:category, id:ids}} >
         <>
         
         <div className='block_home_middle_container' >
              <img className='block_home_img_middle' src={img} alt='no image found' />
             <div className='block_home_middle'>
             <h2 className='block_title_home_middle' >{title}</h2>
              <p className='block_description_home_middle' >{description}</p>
              <p className='category_home_middle' ><b>{category}</b></p>
             </div>
          </div>
        
          
          </>
  )
}

export default Blockhome