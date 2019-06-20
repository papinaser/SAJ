import {
    SIDE_MENU_CLOSE,
    SERVER_REQUESTING,
    SERVER_CALLED_BACKED,
    LOGIN_USER,
    SHOW_SNACKBAR, USER_PERMITS_FETCGED
} from "../actionTypes";

import {USER_INFO,USER_PERMITS} from "../../services/enums"
import {getFromLocalDb, saveInLocalDb} from "../../services/global";
import {currentUser} from "../../services/accessManager";


const defaultState=()=>{
    const curUser = currentUser();
    const currentPermits= getFromLocalDb(USER_PERMITS);
    return(
        {
            sideMenuIsClose: true,
            isLoading: false,
            visibleSnackbar: false,
            snackbarMessage: "",
            snackbarType: "",
            userLoggedIn: curUser!==null,
            userTitle: curUser!==null?curUser.title:"",
            userToken: curUser!==null?curUser.username:"",
            userPermits:currentPermits!=null?currentPermits:[]
        }
    );
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
const updateUserPermits=(state,payload)=>{
    saveInLocalDb(USER_PERMITS,payload.currentPermits);
    return {...state,userPermits:payload.currentPermits}
};

export default (state=defaultState(),action)=>{
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
      case USER_PERMITS_FETCGED:
          return updateUserPermits(state,action.payload);
      default:
          return state;
  }
}

