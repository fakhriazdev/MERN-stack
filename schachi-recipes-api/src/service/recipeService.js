
const recipeRepository = require('../repository/recipeRepository')

const getAllRecipes = async ()=> {
    const recipes = await recipeRepository.findAll()
    if(recipes.length === 0) {throw Error("Recipe is empty")}
    return recipes
}

const getRecipeById = async (id)=> {
    const recipe = await recipeRepository.findById(id)
    if(!recipe) {
        throw Error("Recipe Not Found")
    }
    return recipe
}

const addRecipe = async (data) => {
    try{
    const recipe = await recipeRepository.save(data)
    return recipe
    }catch (e) {
        throw Error(e.message)
    }
}

const deleteRecipeById = async (id) => {
    await recipeRepository.remove(id)
    return "recipe deleted successfully"
}

const updateRecipeById = async (id,data) => {
    await getRecipeById(id)
    const recipe = await recipeRepository.update(id,data)
    return recipe
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    addRecipe,
    deleteRecipeById,
    updateRecipeById
}




