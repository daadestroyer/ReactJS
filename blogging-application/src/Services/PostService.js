import { myAxios, privateAxios } from "./Constant"

// create post
export const createPost = (postData)=>{
   
    return privateAxios.post(`/post/user/${postData.userId}/category/${postData.catId}/posts`,postData).then((response)=>response.data)
}

// get all post
export const getAllPosts = (pageNumber,pageSize,sortDir)=>{
    return myAxios.get(`/post/get-all-post?pageNumber=${pageNumber}&pageSize=${pageSize}&sortDir=${sortDir}`).then((response)=>response.data)
}


// get post by id
export const getPostById = (postId)=>{
    return myAxios.get(`/post/get-post/${postId}`).then((response)=>response.data)
}