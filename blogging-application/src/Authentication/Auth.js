// isLoggedIn => will check token is present in local storage or not

export const isLoggedIn = ()=>{
    let data = localStorage.getItem('tokenKey')
    if(data == null){
        return false
    }
    else{
        return true
    }
}

// setToken => if token is not present in local storage it will set
export const setToken = (data)=>{
    // set the token in local storage and token is tokenKey
    localStorage.setItem('tokenKey', JSON.stringify(data));
}

// get current user
export const getCurrentUser = ()=>{
    
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem('tokenKey'))
    }
    else{
        return false
    }
   

}

// doLogout => remove token from local storage

export const doLogout = ()=>{
    localStorage.removeItem('tokenKey');
}
