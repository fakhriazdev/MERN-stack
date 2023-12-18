import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useFetchRecipe} from "../../../services/recipes/useFetchRecipe.js"
import FormRecipe from "./FormRecipe.jsx";
import {useFetchCategories} from "../../../services/categories/useFetchCategories.js";
import {useRemoveRecipe} from "../../../services/recipes/useRemoveRecipe.js";
import {Plus} from "@phosphor-icons/react";

const ListRecipe = () => {
   const  {recipes,isLoading:isLoadingRecipes} = useFetchRecipe()
    const {categories,isLoading:isLoadingCategories} = useFetchCategories()
    const [data, setData] = useState([])
    const { mutate: deleteRecipe } = useRemoveRecipe({
        onSuccess: () => {

        },
    });

   const handleEdit = (datas) => {
       setData(datas)
   }
    console.log(data)

    return (
        <>
            <section className="relative overflow-x-auto mb-10">
            <div className=" flex items-center justify-center py-4 md:py-8">
                {categories?.map((category)=>{
                    return (
                        <button type="button" className="text-black border border-white hover:text-orange bg-white rounded-full text-base font-medium p-2 text-center mb-3" key={category.id}>
                            {category.name}
                        </button>
                    )
                })}

            </div>
            </section>
            <section className="lg:container mb-10 px-2 mx-auto">
                <div className="flex justify-end px-4 pt-4 py-2 mb-4">

                    <button data-modal-target="default-modal" data-modal-toggle="default-modal"
                            className="w-[150px] block text-white bg-orange hover:bg-white hover:text-orange font-medium rounded-lg text-sm px-2 py-2 text-center flex justify-center"
                            type="button">
                        <Plus size={20} weight="bold"/>Recipe
                    </button>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4">

                    {recipes?.map((recipe) => {
                        return (
                            <div
                                className="w-full max-w-full bg-white border border-gray-200 rounded-lg shadow bg-orange/10">
                                <div className="flex justify-between px-4 pt-4 bg-orange/50 py-2">
                                    <h5 className="text-[20px] font-semibold tracking-tight text-gray-900 dark:text-white my-auto">{recipe.title}</h5>
                                    <div>
                                        <button data-modal-target="default-modal" data-modal-toggle="default-modal"
                                                className="w-[150px] block text-white bg-orange hover:bg-white hover:text-orange font-medium rounded-lg text-sm px-2 py-2 text-center flex justify-center"
                                                type="button">
                                            <Plus size={20} weight="bold"/>Recipe
                                        </button>
                                        <Link to={"/"}
                                              className="inline-block bg-white text-red hover:text-white hover:bg-red rounded-lg text-sm h-10 p-2 mr-2">
                                            <Trash size={24} weight="bold" onClick={() => deleteRecipe(recipe.id)}/>
                                        </Link>
                                    </div>
                                </div>
                                <a href="#">
                                    <img className="w-full h-80 object-cover mb-4"
                                         src={`http://localhost:2000/images/${recipe.imageUrl}`}
                                         alt="product image"/>
                                </a>
                                <div className="flex flex-col px-5 pb-2">
                                    <span className="text-lightgray">Title</span>
                                    <a href="#">
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{recipe.title}</h5>
                                    </a>
                                    <div className="flex flex-col mb-2">
                                        <span className="text-lightgray">Description</span>
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            <p>{recipe.desc}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-3xl font-bold text-lightgray">Ingredient</span>
                                            <p>{recipe.ingredient}</p>
                                        </div>
                                        <Link to={`${recipe.id}/detail`}
                                           className="text-white bg-orange border-2 border-transparent hover:bg-white hover:text-orange hover:border-orange font-medium rounded-lg text-sm px-2 py-2 text-center ">
                                            Read more</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div id="default-modal" tabIndex="-1" aria-hidden="true"
                     className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/20">
                    <FormRecipe/>
                </div>
            </section>
        </>
    );
};

export default ListRecipe;