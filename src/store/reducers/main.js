import {SIDE_MENU_CLOSE,
    SERVER_REQUESTING,
    SERVER_CALLED_BACKED,
    LOGIN_USER,
    SHOW_SNACKBAR,USER_PERMITS_LOADED} from "../actionTypes";

import {USER_INFO} from "../../services/enums"
import {saveInLocalDb} from "../../services/global";


const defaultState={
    sideMenuIsClose:true,
    isLoading:false,
    visibleSnackbar:false,
    snackbarMessage:"",
    snackbarType:"",
    userLoggedIn:false,
    userTitle:"",
    userToken:"",
    userPermits:{}
};
const userLoggedIn=(state,payload)=> {
    saveInLocalDb(USER_INFO, payload);
    const userInfo = {
        userTitle: payload.title,
        userToken: payload.username,
        userLoggedIn: true
    };
    return {...state, ...userInfo};
};

const userPermidLoaded=(state,payload)=>{

};
export default (state=defaultState,action)=>{
  switch (action.type) {
      case SIDE_MENU_CLOSE:
          return {...state,sideMenuIsClose:action.payload};
      case SERVER_REQUESTING:
          return {...state,...action.payload,isLoading:true};
      case SERVER_CALLED_BACKED:
          return {...state,...action.payload,isLoading:false};
      case SHOW_SNACKBAR:
          return {...state,...action.payload};
      case LOGIN_USER:
          return userLoggedIn(state,action.payload);
      default:
          return state;
  }
}

