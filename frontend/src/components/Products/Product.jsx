import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { BsCart2 } from 'react-icons/bs';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addProduct } from '../../action';
const Product = ({item}) => {
  const dispatch=useDispatch();
  return (
    <div className='col-lg-3 col-md-4 col-sm-12 mb-2'>
        <div className='d-flex position-relative'>
            <img src={item.img} alt='' style={{width:'100%' ,height:'100%'}}/>
            <div className='icon'>
              <Link to={`/product/${item._id}`}>
                <div>
                    <BiSearch />
                </div>
              </Link>
                <div>
                  <Link to='/Cart' className='text-dark'>
                    <BsCart2 onClick={()=>dispatch(addProduct({...item,quantity:1,color:item?.color[0],size:item?.size[0]}))}/>
                  </Link>
                </div>
                <div><MdOutlineFavoriteBorder /></div>
            </div>
        </div>
    </div>
  )
}

export default Product