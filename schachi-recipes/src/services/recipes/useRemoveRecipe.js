import { axiosInstance } from "../../api/axios.js";
import { useMutation } from "@tanstack/react-query";

export const useRemoveRecipe = ({ onSuccess }) => {
    return useMutation({
        mutationFn: async (id) => {
            const recipeResponse = await axiosInstance.delete(`/recipes/${id}`);
            return recipeResponse;
        },
        onSuccess,
    });
};