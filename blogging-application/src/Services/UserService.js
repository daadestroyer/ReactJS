import axios from "axios";
import { myAxios } from "./Constant";

export const saveUser =  (user) => {
    return myAxios.post("/user/register-user",user).then((response) => response.data);
}


 