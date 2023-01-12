import React from 'react'
import { Link } from 'react-router-dom'
const CartFailer = () => {
  return (
    <div  style={{height:'100vh'}} className='position-relative'>
        <div className='position-absolute top-50 start-50 translate-middle' style={{width:'10%',height:'10%',backgroundColor:'red',color:'yellow'}}>
            <p className='mx-5 my-4'>Failer</p>
            <button className='text-capitalize px-5 mt-3' style={{backgroundColor:'transparent',border:'2px solid black',fontWeight:'500'}}><Link to='/Cart' style={{textDecoration:'none',color:'black'}}>continue shopping</Link></button>
        </div>
    </div>
  )
}

export default CartFailer