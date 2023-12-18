const express = require('express')
const recipeService  = require("../service/recipeService")
const router = express.Router();
const upload = require('../config/uplaod')

router.get('/',async (req,res)=>{
    try {
    const recipes = await recipeService.getAllRecipes()
    res.send({
        data:recipes,
        message:"get all recipes successfully"
    }
    )
    }catch (err) {
        res.send({
            "message": err.message,
        })
    }
});

router.get("/:id",async (req,res)=>{
    try {
        const recipe = await recipeService.getRecipeById(String(req.params.id))
        res.send(
            {
                data:recipe,
                message:"get recipe successfully"
            }
        )
    }catch (err) {
        res.send({
            "message": err.message,
        })
    }
})

router.delete("/:id",async (req,res)=>{
    try{
        await recipeService.deleteRecipeById(String(req.params.id))
        res.send(
            {
            message:"Recipe deleted successfully",
            }
        )
    }catch (err) {
        res.send({
            "message": err.message,
        })
    }
})

router.post("/",upload.single('image'),async(req,res)=>{
    try{
        if (!req.file){
            return res.status(400).json({ error: 'Image Require.' });
        }

        const {filename} = req.file
        const dataRecipe = {
            ...req.body,
            imageUrl:filename,
        }
        const recipe = await recipeService.addRecipe(dataRecipe)
        res.send({
            message:"add recipe successfully",
            data:recipe,
        })
    }catch (e) {
        res.send({
            "message": e.message,
        })
    }
})


router.put("/:id",upload.single('image'),async(req,res)=>{
    try{

        let updateRecipe = req.body
        if (req.file && req.file.filename) {
            const { filename } = req.file;
            updateRecipe = {
                ...req.body,
                imageUrl: filename,
            };
        }
    const recipeId = req.params.id;
        const recipe = await recipeService.updateRecipeById(recipeId,updateRecipe)
        res.send({
            message:"update recipe successfully",
            data:recipe,
        })
    }catch (e) {
        res.send({
            "message": e.message,
        })
    }
})
module.exports = router;