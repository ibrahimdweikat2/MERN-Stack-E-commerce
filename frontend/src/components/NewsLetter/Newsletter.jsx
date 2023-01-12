import React from 'react'
import {IoSend} from 'react-icons/io5';
const Newsletter = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{flexDirection:'column',height:'60vh',backgroundColor:'#fcf5f5'}}>
        <h1 className='text-capitalize mb-3' style={{fontSize:'70px' ,fontWeight:'bold'}}>NewsLetter</h1>
        <p className='text-uppercase mb-4' style={{fontWeight:'300'}}>get timely update from your favorite products.</p>
        <div className='w-50 bg-white d-flex justify-content-between' style={{border:'1px solid lightgray',height:'40px'}}>
            <input type='text' placeholder='Enter Email' style={{flex:'8',border:'none',paddingLeft:'10px'}}/>
            <button style={{flex:'1',border:'none',backgroundColor:'teal',color:'white'}}>
                <IoSend size={25}/>
            </button>
        </div>
    </div>
  )
}

export default Newsletter