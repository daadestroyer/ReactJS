// isLoggedIn => will check token is present in local storage or not

export const isLoggedIn = ()=>{
    let data = localStorage.getItem('MyToken')
    
    if(data == null){
        
        return false
    }
    else{
         
        return true
    }
}

// setToken => if token is not present in local storage it will set
export const setToken = (data,next)=>{
    // set the token in local storage and token is tokenKey
    // setting decrypted username and password in local storage and stringify take object & convert to JSON
     
    localStorage.setItem('MyToken', JSON.stringify(data));
    next()
};

// get current user
export const getCurrentUser = ()=>{
    
    if(isLoggedIn()){
        // get the username and password from local storage where parse will convert JSON to object
        
        return JSON.parse(localStorage.getItem("MyToken")).userDto; 
    }
    else{
         
        return undefined;
    }
};

// doLogout => remove token from local storage

export const doLogout = (next)=>{
    localStorage.removeItem('MyToken');
    next()
}


// get token
export const getToken = ()=>{
    
    if(isLoggedIn()){         
        return JSON.parse(localStorage.getItem("MyToken")).token; 
    }
    else{
        return null;
    }
}