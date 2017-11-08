const express = require("express");
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;

router.get("/", async(req, res) => {
    try {
        const recipeList = await recipeData.getAllIDAndTitleRecipes();
        res.json(recipeList);
    } catch (e) {
        res.status(500).json({error: e});
    }
});

router.get("/:id", async(req, res) => {
    try {
        let recipe = await recipeData.getRecipeByID(req.params.id);
        res.json(recipe); 
    } catch (e) {
        res.status(404).json({error: "Recipe not found"});
    }
});

router.post("/", async(req, res) => {
    const newRecipeData = req.body;
 
    try {
        let createdRecipe = await recipeData.createRecipe(newRecipeData.title, newRecipeData.ingredients, newRecipeData.steps);
        res.json(createdRecipe);
    } catch (e) {
        res.status(500).json({error: e});
    }
});

router.put("/:id", async(req, res) => {
    try {
        await recipeData.getRecipeByID(req.params.id);
        try {
            const newRecipeData = req.body;
            
            let updatedRecipe = await recipeData.updateRecipe(req.params.id, newRecipeData);
            res.json(updatedRecipe);
        } catch (e) {
            res.status(500).json({error: e});
        }
    } catch (e) {
        res.status(404).json({error: "Recipe not found"});
    }
});

router.delete("/:id", async(req, res) => {
    try {
        await recipeData.getRecipeByID(req.params.id);
        try {
            let deletionInfo = await recipeData.removeRecipe(req.params.id);
            res.json(deletionInfo);
        } catch (e) {
            res.status(500).json({ error: e });
        }
    } catch (e) {
        res.status(404).json({ error: "Recipe not found" });
    }
});


module.exports = router;
