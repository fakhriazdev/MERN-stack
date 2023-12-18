import {useMutation} from "@tanstack/react-query";
import {axiosInstance} from "../../api/axios.js";

export const useAddRecipe = ({onSuccess}) =>{
    return useMutation({
        mutationFn:async (formData) =>{
            const recipeResponse = await axiosInstance.post("/recipes",formData)
            console.log(recipeResponse)
            return recipeResponse
        },
        onSuccess
    })
}