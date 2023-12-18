import React from 'react';
import {useParams} from "react-router-dom";
import {useFetchRecipeById} from "../../../services/recipes/useFetchRecipeById.js"
const DetailRecipe = () => {
    const params = useParams();
    const {recipe,isLoading} = useFetchRecipeById(params.id)
    console.log(params.id)
    console.log()
    return (
        <div className="container mx-auto flex justify-center">
            <div
                className="max-w-[500px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
                <div className="flex justify-between">
                    <h1 className="mb-2 text-title font-bold tracking-tight text-gray-900 dark:text-white">{recipe?.title}</h1>
                    <h2 className="text-subtitle">{recipe?.categoryMenu?.name}</h2>
                </div>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{recipe?.desc}</p>
                <img className="w-full h-[300px] object-cover mb-4"
                     src={`http://localhost:2000/images/${recipe?.imageUrl}`}
                     alt="product image"/>
                <h2 className="text-subtitle">Ingredient</h2>
                <p className="text-darkgray mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{recipe?.ingredient}</p>
                <h2 className="text-subtitle">Instruction</h2>
                <p className="text-darkgray mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{recipe?.instruction}</p>
            </div>
        </div>
    );
};

export default DetailRecipe;