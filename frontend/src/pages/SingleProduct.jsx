import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { addProduct } from '../action';
const SingleProduct = () => {
  const dispatch=useDispatch();
  const {id}=useParams();
  const [quantity,setQuantity]=useState(1);
  const [product,setProduct]=useState(null);
  const [color,setColor]=useState(null); 
  const [size,setSize]=useState(null);
  useEffect(()=>{
    const getProduct=async ()=>{
      const res=await axios.get(`https://nodejsecommerce.onrender.com/api/products/find/${id}`);
      setProduct(res?.data);
      setColor(res?.data?.color[0]);
      setSize(res?.data?.size[0]);
    }
    getProduct();
  },[id]);
  const addToProduct=()=>{
    dispatch(addProduct({...product,quantity,color,size}))
  }
  return (
    <div className='row mt-3 product'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
            <div>
                <img className='w-100' style={{objectFit:'cover'}} src={product?.img} alt={product?.title} />
            </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
            <h1 style={{fontWeight:'200',fontSize:'3rem'}}>{product?.title}</h1>
            <p style={{width:'70%'}} className='my-5'>{product?.description}</p>
            <span className='fs-4'>{`${product?.price}$`}</span>
            <div className='w-50 d-flex justify-content-between mt-5 filter'>
              <div className='w-100'>
                <span className='fs-4'>Color:</span>
                <select className='mx-3 p-2' onChange={e=>setColor(e.target.value)}>
                  {product?.color?.map(color=><option key={Math.random(100)} value={color}>{color}</option>)}
                </select>
              </div>
              <div className='d-flex'>
                <span className='fs-4 me-3'>Size:</span>
                <select className='p-2' onChange={e=>setSize(e.target.value)}>
                {product?.size?.map(size=><option key={Math.random(100)} value={size}>{size}</option>)}
                </select>
              </div>
            </div>
            <div className='w-50 add d-flex align-items-center justify-content-between mt-5'>
              <div className='d-flex align-items-center justify-content-center'>
                <span role='button' className='fs-3 me-3' style={{fontWeight:'600'}} onClick={()=>quantity > 1 && setQuantity(quantity -1)}>-</span>
                <div className='rounded-2 d-flex align-items-center justify-content-center' style={{width:'30px',height:'30px',backgroundColor:'white',border:'2px solid teal'}}>
                  <span>{quantity}</span>
                </div>
                <span role='button' className='fs-3 ms-3' style={{fontWeight:'600'}} onClick={()=>setQuantity(quantity +1)}>+</span>
              </div>
              <div>
                <button onClick={addToProduct} className='px-4 py-2 add' style={{backgroundColor:'transparent',border:'2px solid teal'}}>Add To Cart</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct