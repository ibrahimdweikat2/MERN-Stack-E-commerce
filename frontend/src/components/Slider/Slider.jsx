import React from 'react'
import women from '../../assets/women.png';

const Slider = () => {
  return (
    <div className='d-flex' style={{overflow:'hidden',padding:'0 20px',height:'100vh' ,width:'100%'}}>
        <div className='' style={{flex:'1',height:'100vh'}}>
            <img src={women} alt='#' style={{height:'90%',width:'80%'}} className='rounded-5 image'/>
        </div>
        <div className='m-auto' style={{flex:'1'}}>
            <h1 className='text-capitalize' style={{fontSize:'70px'}}>Summary Sale</h1>
            <p className='text-capitalize fs-2' style={{fontWeight:'500',letterSpacing:'3px',margin:'50px 0'}}>dont't commpomiss on style! get flat 30% off for new arrival</p>
            <button className='text-capitalize px-4 py-2 fs-4' style={{backgroundColor:'transparent'}}>shop now</button>
        </div>
    </div>
  )
}

export default Slider