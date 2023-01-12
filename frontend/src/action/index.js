import * as api from '../api/index';
const user=JSON.parse(localStorage.getItem('user'));
export const addProduct=(data)=>async dispatch=>{
    try {
        dispatch({type:'ADD_PRODUCT',payload:data})
        await api.addProductToCart(data?._id,data?.quantity,data?.color,data?.size);
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct=(id)=> dispatch=>{
    try {
        dispatch({type:'DELETE_PRODUCT',payload:id})
    } catch (error) {
        console.log(error)
    }
}

export const singUp=(user)=>async dispatch=>{
    try {
        const {data}=await api.Register(user);
        dispatch({type:'SIGN_UP',payload:data})
    } catch (error) {
        console.log(error);
    }
}

export const signIn=user=>async dispatch=>{
    try {
        const {data}=await api.Login(user);
        dispatch({type:'SIGN_IN',payload:data});
    } catch (error) {
        console.log(error)
    }
}

