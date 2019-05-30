import {SIDE_MENU_CLOSE} from "../actionTypes";
export const sideMenuCloseAction=(payload)=>{
    return{
        type:SIDE_MENU_CLOSE,
        payload
    }
};
