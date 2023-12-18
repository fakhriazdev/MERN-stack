const express  = require('express')
const categoryService = require('../service/categoryService')
const router = express.Router();

router.get("/",async (req,res) => {
    try {
        const categories = await categoryService.getAllCategories()
        res.send({
            message:"get all categories successfully",
            data:categories,
        })
    }catch (err) {
        res.send({
            "message": err.message,
        })
    }
})

router.get("/:id",async (req,res) => {
    try {
        const category = await categoryService.getCategoryById(String(req.params.id))
        res.send(
            {
                message:"get category successfully",
                data:category,
            }
        )
    }catch (err) {
        res.send({
            "message": err.message,
        })
    }
})

router.delete("/:id", async (req, res) => {
    try{
        await categoryService.deleteCategoryId(String(req.params.id))
        res.send({
            message:"category deleted successfully",
        })
    }catch (err) {
        res.send({
            "message": err.message,
        })
    }
})

router.post("/", async (req, res) => {
    try{
        const category = await categoryService.addCategory(req.body)
        res.send({
            message:"add category successfully",
            data:category,
        })
    }catch (err) {
        res.send({
            "message": err.message,
        })
    }
})

router.put("/:id", async (req, res) => {
    try {

        const updateCategory = req.body
        const categoryId = req.params.id
        const category = await categoryService.updateCategoryById(categoryId,updateCategory)
        res.send({
            data:category,
            message:"update category successfully",
        })
    }catch (err) {
        res.send({
            "message": err.message,
        })
    }
})

module.exports =router;