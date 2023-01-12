import React,{useState,useEffect} from 'react'
import { BiSearch } from 'react-icons/bi';
import { BsCart2 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import {Link,useLocation} from 'react-router-dom';
const NavBar = () => {
    const location=useLocation();
    const {quantity}=useSelector(state=>state.cart);
    const [authData,setAuthData] = useState(JSON.parse(localStorage.getItem('user')));
    useEffect(()=>{
        setAuthData(JSON.parse(localStorage.getItem('user')))
    },[location])
    const logoutHandler=()=>{
        localStorage.clear();
        setAuthData();
    }
return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-around" style={{height:'60px',padding:'10px 20px'}}>
            <div className='d-flex' style={{flex:'1'}}>
                    <div className="navbar-brand" style={{cursor:'pointer'}}>EN</div>
                    <div className='d-flex align-items-center border border-muted rounded-4'>
                        <input type='text' name='search' style={{border:'none',height:'95%'}} className='form-control'/>
                        <BiSearch size={20} className='m-2'/>
                    </div>
            </div>
            <Link to='/Home' style={{textDecoration:'none'}}>
            <div style={{flex:'1',color:'black'}}>
                <h1 className='fs-1 fw-1 text-dark text-capitalize text-center'>E-Commerce</h1>
            </div>
            </Link>
            <div style={{flex:'1'}} className='d-flex justify-content-end cart'>
                {authData ? (
                <div className='d-flex algin-items-center me-2'>
                    <div style={{width:'25px',height:'25px',backgroundColor:'red'}} className='rounded-circle my-auto'>
                        <p className='text-capitalize d-flex justify-content-center algin-items-center text-white'>{authData?.username.charAt(0)}</p>
                    </div>
                    <div className='mx-2 my-auto'>
                        {authData?.username}
                    </div>
                    <div className='btn btn-outline-danger' onClick={logoutHandler}>
                        LogOut
                    </div>
                </div>
                ):
                (
                <Link to='/Auth' style={{textDecoration:'none'}} className='text-dark'>
                    <div role='button' className='me-5'>Register/Login</div>
                </Link>
                )}
                
                <Link to='/Cart'>
                <div className='position-relative' >
                    <BsCart2 size={25} style={{cursor:'pointer',color:'black'}}/>
                    <span className='badge badge-primary text-white rounded-circle bg-primary position-absolute start-50 end-50 translate-middle ms-1 mt-1' style={{width:'20px',height:'20px',zIndex:'-1'}}>{quantity > 0 && quantity}</span>
                </div>
                </Link>
            </div>
        </nav>
)
}

export default NavBar