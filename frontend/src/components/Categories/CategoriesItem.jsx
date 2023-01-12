import React from 'react'
import {Link} from 'react-router-dom';
const CategoriesItem = ({item}) => {
  return (
    <div style={{height:'70vh'}} className='mb-4 position-relative col-sm-12 col-lg-4'>
        <img src={item.img} alt={item.title} style={{width:'100%',height:'100%',objectFit:'fill'}}/>
        <div className='position-absolute top-0 start-0 d-flex justify-content-center algin-items-center' style={{flexDirection:'column',width:'100%',height:'100%'}}>
            <h1 className='text-capitalize text-center text-white mb-2'>{item.title}</h1>
            <button className='text-capitalize text-muted mx-auto' style={{fontWeight:'500',width:'25%',border:'none',backgroundColor:'white',padding:'10px'}}>{<Link style={{textDecoration:'none',color:'black'}} to={`/products/${item.title}`}>shop now</Link>}</button>
        </div>
    </div>
  )
}

export default CategoriesItem