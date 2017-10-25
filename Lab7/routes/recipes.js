const express = require("express");
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;

router.get("/", async(req, res) => {
    try {
        const recipeList = await recipeData.getAllIDAndTitlePosts();
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
    
});

router.put("/", async(req, res) => {

});

router.delete("/:id", async(req, res) => {
    try {
        await recipeData.getRecipeByID(req.params.id);
        try {
            await recipeData.removeRecipe(req.params.id);
            res.json({delete: "ok"});
        } catch (e) {
            res.status(500).json({ error: e });
        }
    } catch (e) {
        res.status(404).json({ error: "Recipe not found" });
    }
});


module.exports = router;
