import axios from "./axiosInstance";
import {USER_INFO} from "./enums";

export const checkUserPermit=(actions,userPermits,permitForCheck)=>{
  const index= actions.findIndex(r=>r===permitForCheck);
  return index>=0 && userPermits[index];
};
const hasUserAccess=(permissionNames)=> {
    return new Promise((resolve, reject) => {
        const userInfo = JSON.parse(localStorage.getItem(USER_INFO));
        if (!userInfo || !userInfo.username) {
            reject("User Not found")
        }
        axios.get(`User/HasUserPermission/${permissionNames}/${userInfo.username}`)
            .then((resp) => {
                resolve(resp.data.message);
            })
            .catch((err) => {
                reject(err.message);
            });
    });
};

export default hasUserAccess;
