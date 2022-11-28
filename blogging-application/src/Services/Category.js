import { myAxios } from "./Constant"


// get all category
export const loadAllCategories = ()=>{
    return myAxios.get('/category/get-all-category').then((response)=>response.data)
}