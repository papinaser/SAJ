import {LOGIN_USER,USER_PERMITS_FETCGED} from "../actionTypes"
export const userLoggedInAction=(payload)=>{
    return{
        type:LOGIN_USER,
        payload
    }
};
const userPermitUpdated=(payload)=>{
    return{
        type:USER_PERMITS_FETCGED,
        payload
    }
};

export const updateUserPermits=(payload)=>{
    return (dispatch)=>{
        console.log("payload",payload);
        payload.actionNames.forEach((act,index)=>{
            const current = payload.currentPermits.find(cr=>cr.key===act);
            if (current){
                current.value=payload.permits[index];
            }
            else {
                payload.currentPermits.push({key:act,value:payload.permits[index]});
            }
            if (index===payload.currentPermits.length-1){
                dispatch(userPermitUpdated({currentPermits:payload.currentPermits}));
            }
        });
    }

};
