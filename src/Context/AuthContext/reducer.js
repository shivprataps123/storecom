// reducer related to auth state;
const reducer=(state,action)=>{
     switch (action.type){
        case "LOGIN_LOADING":{
            return {
                isLoading:true,
                isAuth:false,
                token:"",
                isError:false,
            };
        }
        case "LOGIN_SUCCESS":{
            return {
                isLoading:false,
                isAuth:true,
                token:action.payload,

                
                isError:false,
            };
        }
        case "LOGIN_Failure":{
            return {
                isLoading:false,
                isAuth:false,
                token:"",
                isError:true,
            };
        }
        default:{
            return state;
        }
     }
}
export default reducer;
