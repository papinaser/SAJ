import {LOGIN_USER,USER_PERMITS_LOADED} from "../actionTypes"
export const userLoggedInAction=(payload)=>{
    return{
        type:LOGIN_USER,
        payload
    }
};

export const userPermitLoaded=(payload)=>{
    return{
        type:USER_PERMITS_LOADED,
        payload
    }
};
