import React,{useState,useEffect} from 'react'
import Product from './Product'
import axios from 'axios';
const Products = ({Categories,filters,sort}) => {
    const [products,setProducts] = useState([]);
    const [filterProducts,setFilterProducts]=useState([]);
    useEffect(()=>{
        const getProduct= async()=>{
            try {
                let res;
                Categories ? res=await axios.get(`http://localhost:5000/api/products?categories=${Categories}`): res=await axios.get(`http://localhost:5000/api/products`)
                setProducts(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getProduct();
    },[Categories]);
    
    useEffect(()=>{
        Categories &&setFilterProducts(products.filter(item=> Object.entries(filters).every(([key,value])=> item[key].includes(value))));
    },[products,Categories,filters]);
    useEffect(()=>{
        if(sort==='new'){
            setFilterProducts(prev=>[...prev].sort((a,b)=>a.createdAt - b.createdAt));
        }else if(sort==='asc'){
            setFilterProducts(prev=>[...prev].sort((a,b)=>a.price - b.price));
        }
        else{
            setFilterProducts(prev=>[...prev].sort((a,b)=>b.price - a.price));
        }
    },[sort])
    
  return (
    <>
        <div className='row'>
            {
                Categories ? filterProducts.map(item=><Product item={item} key={item.id}/>):
                products.slice(0,8).map(item=><Product item={item} key={item.id}/>)
            }
        </div>
    </>
  )
}

export default React.memo(Products)