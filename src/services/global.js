export const saveInLocalDb=(key,value)=>{
    if (typeof of (value)==="object"){
        localStorage.setItem(key,JSON.stringify(value))
    }
};
export const getFromLocalDb=(key)=>{
    return JSON.parse(localStorage.getItem(key));
};
