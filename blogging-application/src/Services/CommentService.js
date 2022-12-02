import { privateAxios } from "./Constant"


export const createComment = (comment,postId) => {
    return privateAxios.post(`/comment/create-comment/${postId}`, comment).then((response)=>response.data)
} 