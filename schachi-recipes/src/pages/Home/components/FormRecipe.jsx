import React from 'react';
import { useFetchCategories } from "../../../services/categories/useFetchCategories.js";
import { useFormik } from "formik";
import { useAddRecipe } from "../../../services/recipes/useAddRecipe.js";
import {Navigate} from "react-router-dom";


const FormRecipe = () => {
    const { categories, isLoading: isLoadingCategories } = useFetchCategories();
    const { mutate, isLoading: isLoadingAddRecipe } = useAddRecipe({
        onSuccess: () => {
            formik.resetForm();
            <Navigate to="/"/>
        }
    });

    const formik = useFormik({
        initialValues: {
            title: "",
            desc: "",
            ingredient: "",
            instruction: "",
            image: null,
            categoryId: ""
        },
        onSubmit: async () => {
            const formData = new FormData();
            formData.append('title', formik.values.title);
            formData.append('desc', formik.values.desc);
            formData.append('ingredient', formik.values.ingredient);
            formData.append('instruction', formik.values.instruction);
            if (formik.values.image) {
                formData.append('image', formik.values.image[0]);
            } else {
                console.error('Image is required.');
                return;
            }
            formData.append('categoryId', formik.values.categoryId);

            await mutate(formData);
        }
    });

    const handleFormInput = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            formik.setFieldValue(name, files);
        } else {
            formik.setFieldValue(name, e.target.value);
        }
    };
    return (
        <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t mb-8 bg-orange/60">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Terms of Service
                    </h3>
                </div>
                <div className="px-8 mb-8">
                    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="title"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recipe
                                    Name</label>
                                <input type="text" name="title" id="title"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="Type recipe name" onChange={handleFormInput} value={formik.values.title}/>
                            </div>
                            <div>
                                <label htmlFor="category"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <select id="category" name="categoryId"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={handleFormInput}>
                                    <option selected="" disabled={true}>Select category</option>
                                    {categories.map((category) => {
                                        return (
                                            <option value={category.id}>{category.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="w-full">
                                <label htmlFor="ingredient"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingredient</label>
                                <input type="text" name="ingredient" id="ingredient" value={formik.values.ingredient}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="Type Ingredient" required="" onChange={handleFormInput}/>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="desc"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea id="desc" name="desc" rows="8"
                                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                          placeholder="Your description here" onChange={handleFormInput}></textarea>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="instruction"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instruction</label>
                                <textarea id="instruction" name="instruction" rows="8" value={formik.values.instruction}
                                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                          placeholder="Your description here" onChange={handleFormInput}></textarea>
                            </div>
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                       htmlFor="image">Upload file</label>
                                <input
                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    id="image" name="image" type="file" accept="image/*" onChange={handleFormInput}/>
                            </div>

                        </div>
                        <div className="flex justify-end">
                        <button type="submit" data-modal-hide="default-modal"
                                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-orange rounded-lg hover:bg-primary-800">
                            Add product
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormRecipe;