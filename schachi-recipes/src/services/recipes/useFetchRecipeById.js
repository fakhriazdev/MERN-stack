import React, { useEffect, useState } from 'react';
import {axiosInstance} from "../../api/axios.js";

export const useFetchRecipeById = (id) => {
    const [recipe, setRecipe] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const fetchRecipe = async () => {
        setIsLoading(true);
        try {
            const recipeResponse = await axiosInstance.get(`/recipes/${id}`);
            setRecipe(recipeResponse.data.data);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchRecipe();
    }, []);

    return {
        recipe,
        isLoading,
    };
};
