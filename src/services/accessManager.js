import axios from "./axiosInstance";
import {USER_INFO} from "./enums";
import {getFromLocalDb} from "../services/global"

export const currentUser=()=>{
    const userInfo = getFromLocalDb(USER_INFO);
    if (!userInfo || !userInfo.username) {
        return null;
    }
    return userInfo;
};

export const checkUserPermit=(userPermits,permitForCheck)=>{
  const permit= userPermits.find(r=>r.key===permitForCheck);
  return permit!=null && permit.value;
};
const hasUserAccess=(permissionNames)=> {
    return new Promise((resolve, reject) => {
        const userInfo = currentUser();

        if (userInfo==null) {
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
