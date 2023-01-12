

const cart=(state={products:[],quantity:0,total:0},action)=>{
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                products:[...state?.products,action?.payload],
                quantity:state?.quantity + 1,
                total:state?.total + (action?.payload?.quantity * action?.payload?.price),
            }
        case 'DELETE_PRODUCT':
        const item=state?.products.find(product=>product?._id===action?.payload)
        return{
            products:state?.products.filter(product=>product._id !== action?.payload),
            quantity:state?.quantity -1,
            total:state?.quantity === 0 ? 0:state?.total - (item?.quantity * item?.price)
        }
        case 'GET_CART':
        return{
            ...state,
            products:[...action?.payload?.products],
        }
        default:
            return {...state};
    }
}

export default cart;