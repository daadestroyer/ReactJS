import { myAxios, privateAxios } from "./Constant"

// create post
export const createPost = (postData)=>{
   
    return privateAxios.post(`/post/user/${postData.userId}/category/${postData.catId}/posts`,postData).then((response)=>response.data)
}

// get all post
export const getAllPosts = ()=>{
    return myAxios.get("/post/get-all-post").then((response)=>response.data)
}
