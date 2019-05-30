import {SERVER_REQUESTING,SERVER_CALLED_BACKED,SHOW_SNACKBAR} from "../actionTypes"
export const requestFromServerAction=(payload)=>{
    return{
        type:SERVER_REQUESTING,
        payload
    }
};
export const serverCalledBackAction=(payload)=>{
    return{
        type:SERVER_CALLED_BACKED,
        payload
    }
};
export const showSnackBar=(payload)=>{
  return{
      type:SHOW_SNACKBAR,
      payload
  }
};
