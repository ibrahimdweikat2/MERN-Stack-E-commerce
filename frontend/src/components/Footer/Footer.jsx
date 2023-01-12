import React from 'react'
import {FaFacebookSquare,FaMapMarkerAlt,FaPhoneAlt} from 'react-icons/fa'
import {BsInstagram,BsTwitter} from 'react-icons/bs'
import {IoMail} from 'react-icons/io5'
const Footer = () => {
  return (
    <div className='row' style={{height:'30vh'}}>
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <h1 style={{fontSize:'50px',fontWeight:'600',margin:'30px 0 30px 10px'}}>E-Commerce</h1>
            <p style={{margin:'30px 0 30px 10px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates accusamus at sed placeat hic ex quo facilis vero laudantium sit, quae amet debitis. Quae enim numquam perspiciatis reiciendis assumenda facere.</p>
            <div className='d-flex'>
                <div style={{width:'40px',height:'40px',backgroundColor:'#3B5999'}} className='rounded-circle d-flex justify-content-center algin-items-center mx-2'><FaFacebookSquare className='my-auto text-white' role='button'/></div>
                <div style={{width:'40px',height:'40px',backgroundColor:'#E4405F'}} className='rounded-circle d-flex justify-content-center algin-items-center mx-2'><BsInstagram className='my-auto text-white' role='button'/></div>
                <div style={{width:'40px',height:'40px',backgroundColor:'#55ACEE'}} className='rounded-circle d-flex algin-items-center justify-content-center mx-2'><BsTwitter className='my-auto text-white' role='button'/></div>
            </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <h1 className='fs-4 my-4 ms-4'>UseFul Links</h1>
            <ul style={{listStyle:'none'}} className='links d-flex flex-wrap'>
                <li>Home</li>
                <li>Man Fashion</li>
                <li>Accessories</li>
                <li>Order Tracking</li>
                <li>WishList</li>
                <li>Cart</li>
                <li>Women Fashion</li>
                <li>My Account</li>
                <li>Terms</li>
                <li>WishList</li>
            </ul>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <h1 className='fs-4 my-4'>Contact</h1>
            <div className='d-flex align-items-center mt-5 mb-3'>
                <FaMapMarkerAlt  className='me-3'/>
                622 Palestine Nablus Beta
            </div>
            <div className='d-flex align-items-center mb-3'>
                <FaPhoneAlt className='me-3'/>
                +970 568227764
            </div>
            <div className='d-flex align-items-center mb-3'>
                <IoMail className='me-3'/>
                ibrahimdweikatwork@gmail.com
            </div>
        </div>
    </div>
  )
}

export default Footer