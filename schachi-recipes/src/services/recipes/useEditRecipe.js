import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../api/axios.js";
export const useEditRecipe = ({ onSuccess }) => {
    return useMutation({
        mutationFn: async (body) => {
            const recipeResponse = await axiosInstance.patch(
                `/recipes/${body.id}`,
                body
            );
            return recipeResponse;
        },
        onSuccess,
    });
};