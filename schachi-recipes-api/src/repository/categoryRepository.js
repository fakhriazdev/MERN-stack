const prisma = require('../db')

const save = async(data)=>{
        const { name } = data
        const category = await prisma.categoryMenu.create({
            data: {
                name,
            }
        })
        return category
}

const update = async(id,data)=>{
    const { name } = data
    const category = await prisma.categoryMenu.update({
        where:{
            id,
        },
        data:{
            name,
        }
    })
    return category
}

const findAll = async()=>{
    const categories = await prisma.categoryMenu.findMany()
    return categories
}

const remove  = async(id) =>{
    await prisma.categoryMenu.delete({
        where:{
            id,
        }
    })
}

const findById = async(id)=>{
    const category = await prisma.categoryMenu.findUnique({
        where:{
            id: String(id),
        }
    })
    return category
}
module.exports ={save,update,findAll,remove,findById}