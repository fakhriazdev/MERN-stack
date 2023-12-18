const prisma = require('../db')
const save = async (data) =>{
    try {
        const {title, ingredient, instruction, categoryId, imageUrl,desc} = data
        const recipe = await prisma.recipe.create({
            data: {
                title, ingredient, instruction, categoryId, imageUrl,desc,
            }
        })
        return recipe
    }catch (e) {
        throw new Error(e.message)
    }
}

const update = async (id,data) =>{
    const {title,ingredient,instruction,categoryId,imageUrl,desc } = data
    const recipe = await prisma.recipe.update({
        where:{
            id,
        },
        data:{
            title,ingredient,instruction,categoryId,imageUrl,desc,
        }
    });
    return recipe
}

const findById = async (id) => {
    const recipe = await prisma.recipe.findUnique({
        where: {
            id: String(id),
        },
        include: {
            categoryMenu: true,
        },
    });
    return recipe;
};

const findAll = async () =>{
    const recipes = await prisma.recipe.findMany({
        include: {
            categoryMenu: true,
        },
    });
    return recipes
}

const remove = async (id) => {
    const recipe = await prisma.recipe.delete({
        where:{
            id,
        }
    })
}


module.exports = {save, update, findById, remove, findAll}