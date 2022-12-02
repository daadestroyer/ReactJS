import { privateAxios } from "./Constant";


// upload post banner image
export const uploadBannerImage = (image,postId)=>{
    let formData = new FormData();
    formData.append("image",image);
    return privateAxios.post(`/post/upload-image/${postId}`,formData,{
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    }).then((resp)=>resp.data)
}