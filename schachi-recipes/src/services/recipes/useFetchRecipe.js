import React, { useEffect, useState } from 'react';
import {axiosInstance} from "../../api/axios.js";

export const useFetchRecipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchRecipes = async () => {
        setIsLoading(true);
        try {
            const recipesResponse = await axiosInstance.get("/recipes");
            setRecipes(recipesResponse.data.data);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    return {
        recipes,
        isLoading,
    };
};
