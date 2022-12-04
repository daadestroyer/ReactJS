import { myAxios, privateAxios } from "./Constant"

// create post
export const createPost = (postData)=>{
   
    return privateAxios.post(`/post/user/${postData.userId}/category/${postData.catId}/posts`,postData).then((response)=>response.data)
}

// get all post
export const getAllPosts = (pageNumber,pageSize,sortDir)=>{
    return myAxios.get(`/post/get-all-post?pageNumber=${pageNumber}&pageSize=${pageSize}&sortDir=${sortDir}&sortBy=addedDate`).then((response)=>response.data)
}


// get post by id
export const getPostById = (postId)=>{
    return myAxios.get(`/post/get-post/${postId}`).then((response)=>response.data)
}

// // get post by category
// export const getPostByCategory = (catId)=>{
//     console.log(catId)
//     return myAxios.get(`/post/category/${catId}/posts`,catId).then((response)=>response.data)
// }

// get post by usr id
export const getAllPostByUserId = (userId)=>{
    return myAxios.get(`/post/user/${userId}/posts`,userId).then((response)=>response.data)
}

// delete post by post id
export const deletePostByPostId = (postId)=>{
    return privateAxios.delete(`/post/delete-post/${postId}`,postId).then((response)=>response.data)
}