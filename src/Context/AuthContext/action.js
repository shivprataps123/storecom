export const loginLoadingAction={type:"LOGIN_REQUEST"};
export const loginFailureAction={type:"LOGIN_FAILURE"};

export function loginSuccessAction(token){
    return {type:"LOGIN_SUCCESS",
             payload:token
            }
}