

const Auth=(state={authData:null,token:null},action)=>{
    switch (action.type) {
        case "SIGN_UP":
        return {
            ...state,
            authData:action?.payload
        }
        case 'SIGN_IN':
        localStorage.setItem('user',JSON.stringify(action?.payload));
        return{
            ...state,
            authData:action?.payload,
            token:action?.payload?.token
        }
        default:
            return {...state};
    }
}

export default Auth;