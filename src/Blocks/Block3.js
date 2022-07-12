import React from 'react'
import {Link} from 'react-router-dom'

const Block3 = (props) => {
    const { img, description, title, category, id}=props;
  return (
    <Link to={`/${category}/${id}` } state={{img:img,category:category,id:id, description:description,title:title}} >

    <div className='block3_container'>
    <h1>{title}</h1>
    <img src={img} alt='Not Found' />
    <h3>{description}</h3>
    <h2>{category}</h2>
    <hr />
    

    </div>
    </Link>
  )
}

export default Block3