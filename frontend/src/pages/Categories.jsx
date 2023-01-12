import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import Products from '../components/Products/Products';

const Categories = () => {
    const location=useLocation();
    const categories=location.pathname.split('/')[2];
  const [filters,setFilters]=useState({});
  const [sort,setSort]=useState("new");
  const selectHandler=e=>{
    setFilters({...filters, [e.target.name]:e.target.value});
  }
  return (
    <div>
        <div>
            <h1 style={{margin:'20px'}}>Dresses</h1>
            <div style={{margin:'20px'}} className='d-flex justify-content-between'>
                <div className='ms-2'>
                    <span style={{fontSize:'20px',fontWeight:'bold'}}>Filter Products:</span>
                    <select className='mx-3 p-2' name='color' onChange={selectHandler}>
                        <option   disabled>color</option>
                        <option >White</option>
                        <option >black</option>
                        <option >red</option>
                        <option >blue</option>
                        <option >yalow</option>
                    </select>
                    <select className='p-2' name='size' onChange={selectHandler}>
                        <option  disabled>Size</option>
                        <option >XL</option>
                        <option >L</option>
                        <option >M</option>
                        <option >S</option>
                        <option >XS</option>
                    </select>
                </div>
                <div>
                    <span style={{fontSize:'20px',fontWeight:'bold'}}>Sort:</span>
                    <select className='mx-3 p-2' onChange={e=>setSort(e.target.value)}>
                        <option value='news'>News</option>
                        <option value='dec'>Price(dec)</option>
                        <option value='asc'>Price(asc)</option>
                    </select>
                </div>
            </div>
        </div>
        <Products Categories={categories} filters={filters} sort={sort}/>
    </div>
  )
}

export default Categories