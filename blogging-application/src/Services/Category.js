import { myAxios, privateAxios } from "./Constant"


// get all category
export const loadAllCategories = ()=>{
    return myAxios.get('/category/get-all-category').then((response)=>response.data)
}

// add category

export const addCategory = (newCat)=>{
     
    return privateAxios.post("/category/save-category/",newCat).then((response)=>response.data)
}