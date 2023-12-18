const categoryRepository = require('../repository/categoryRepository')
const getAllCategories = async () =>{
    const categories = await categoryRepository.findAll()
    if(!categories) {throw Error("Recipe is empty")}
    return categories
}

const getCategoryById   = async (id) =>{
    const category = await categoryRepository.findById(id)
    if(!category) {
        throw Error("Recipe Not Found")
    }
    return category
}

const addCategory = async (data) =>{
    try{
        const category = await categoryRepository.save(data)
        return category
    }catch(err){
        throw Error(err.message)
    }
}

const updateCategoryById = async (id, data) =>{
    await getCategoryById(id)
    const category = await categoryRepository.update(id, data)
    return category
}

const deleteCategoryId = async (id)=>{
    await categoryRepository.remove(id)
    return "category deleted successfully"
}

module.exports ={
    getAllCategories,
    addCategory,
    updateCategoryById,
    deleteCategoryId,
    getCategoryById
}