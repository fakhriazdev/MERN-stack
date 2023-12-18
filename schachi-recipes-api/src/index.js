const express = require('express');
const dotenv = require('dotenv')
const app = express();
dotenv.config()
const PORT = process.env.PORT
app.use(express.json());
const path = require('path');


const recipeController = require('./controller/recipeController')
const categoryController = require('./controller/categoryController')

app.use('/images', express.static(path.join(__dirname, 'assets/images')));
app.use("/api/recipes",recipeController)
app.use("/api/categories",categoryController)


app.listen(PORT,()=>{
    console.log("listening on port: ",PORT);
})