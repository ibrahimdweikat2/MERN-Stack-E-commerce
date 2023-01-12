import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { deleteProduct } from '../action';
import {Link,useNavigate} from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const Cart = () => {
    const data=useSelector(state=>state?.cart);
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const onToken=async (stripToken)=>{
        const res=await axios.post('https://nodejsecommerce.onrender.com/api/stripe/payment',{
            tokenId:stripToken?.id,
            amount:data?.total *100
        });
        if(res?.data){
            navigate('/Cart/success');
        }else{
            navigate('/Cart/failer');
        }
        
    }
  return (
    <div>
        <h1 className='text-center text-capitalize my-4 bag' style={{fontWeight:'300'}}>your bag</h1>
        <div className='d-flex align-items-center justify-content-around mb-3 shop-1'>
            <div className='me-5'>
                <button className='text-capitalize p-2' style={{backgroundColor:'transparent',border:'2px solid black',fontWeight:'500'}}><Link to='/Home' style={{textDecoration:'none',color:'black'}}>continue shopping</Link></button>
            </div>
            <div className='d-flex shop'>
                <p className='me-3'>{`Shopping Bag(${data?.quantity})`}</p>
                <p>Your WishList</p>
            </div>
            <div className='ms-5'>
            {data?.total > 0 ? (<StripeCheckout 
                name='E-Commerce'
                description={`Your Order Is ${data?.total}`}
                billingAddress
                shippingAddress
                token={onToken}
                stripeKey='pk_test_51MOLREFLtO945TkbLgLZbEfoqlYMBXePGcXt1N8rx6GpG8kSLapNR5Gmw6c3igZqC2E9ydPZSt7iX83DfuL9OTgH00Y9ytBRHs'
                >
                    <button className='text-capitalize px-4 py-2 text-white' style={{backgroundColor:'black',fontWeight:'500'}}>checkout now</button>
                </StripeCheckout>):
                    <button className='text-capitalize px-4 py-2 text-white' style={{backgroundColor:'black',fontWeight:'500'}}>checkout now</button>
                }
            </div>
        </div>
        <div className='row ms-lg-5'>
            <div className='col-lg-7 col-sm-12'>
                {data?.products?.map(product=>(
                    <div>
                    <div className='row mb-3'>
                    <div className='col-lg-8 col-sm-11'>
                    <div className='d-flex gap-3'>
                            <img style={{width:'40%'}} src={product?.img} alt={product?.title}/>
                            <div>
                                <p><strong>Product:</strong>{product?.title}</p>
                                <p><strong>ID:</strong>{product?._id}</p>
                                <div style={{width:'20px',height:'20px',backgroundColor:`${product?.color}`}} className='rounded-circle mb-2' />
                                <p><strong>Size:</strong>{product?.size}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-11'>
                        <div className='d-flex gap-3 justify-content-center'>
                            <strong role='button' style={{fontSize:'20px'}}>+</strong>
                            <strong  style={{fontSize:'20px'}}>{product?.quantity}</strong>
                            <strong role='button' style={{fontSize:'20px'}}>-</strong>
                        </div>
                        <div className='mt-3 d-flex justify-content-center ms-2' style={{fontSize:'30px',fontWeight:'300'}}>
                            {product?.price * product?.quantity}
                        </div>
                        <div className='mt-3 d-flex justify-content-center ms-2 btn btn-dark' onClick={()=>dispatch(deleteProduct(product?._id))}>
                            Delete
                        </div>
                    </div>
                </div>
                <hr />
                </div>
                ))}
            </div>
            <div className='col-lg-4 col-sm-11 rounded-3 ms-lg-3 ms-4 mt-3 summery' style={{height:'50vh',border:'1px solid black'}}>
                <h1 style={{fontWeight:'300'}} className='p-3'>Order Summery</h1>
                <div className='d-flex justify-content-between align-items-center pe-4 mb-2 mt-3'>
                    <p>SubTotal:</p>
                    <p>{data?.total}</p>
                </div>
                <div className='d-flex justify-content-between align-items-center pe-4 mb-3'>
                    <p>Estimated Shipping:</p>
                    <p>{data?.total?`5.99$`:'0'}</p>
                </div>
                <div className='d-flex justify-content-between align-items-center pe-4 mb-3'>
                    <p>Shipping Discount:</p>
                    <p>{data?.total?`-5.99$`:'0'}</p>
                </div>
                <div className='d-flex justify-content-between align-items-center pe-4 mb-3'>
                    <strong style={{fontWeight:'800'}}>Total:</strong>
                    <strong style={{fontWeight:'800'}}>{data?.total? data?.total - 5.99:0}</strong>
                </div>
                {data?.total > 0 ? (<StripeCheckout 
                name='E-Commerce'
                description={`Your Order Is ${data?.total}`}
                billingAddress
                shippingAddress
                token={onToken}
                stripeKey={`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`}
                email={`${process.env.REACT_APP_STRIPE_EMAIL}`}
                >
                    <button className='p-2 w-100 text-white' style={{backgroundColor:'black',fontWeight:'600'}}>Checkout Now</button>
                </StripeCheckout>)
                :
                <button className='p-2 w-100 text-white' style={{backgroundColor:'black',fontWeight:'600'}}>Checkout Now</button>
                }
            </div>
        </div>
    </div>
  )
}

export default Cart