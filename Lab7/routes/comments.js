const express = require("express");
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;

router.get("/recipe/:recipeId", async(req, res) => {
    try {
        await recipeData.getRecipeByID(req.params.recipeId);
        try {
            let comments = await recipeData.getAllCommentsOfRecipe(req.params.recipeId);
            res.json(comments);
        } catch (e) {
            res.status(500).json({error: e});
        }
    } catch (e) {
        res.status(404).json({ error: "Recipe not found" });
    }
});

router.get("/:commentId", async(req, res) => {
    try {
        let comment = await recipeData.getCommentByID(req.params.commentId);
        res.json(comment);
    } catch (e) {
        res.status(404).json({error: "Comment not found"});
    }
});

router.post("/:recipeId", async(req, res) => {

});

router.put("/:recipeId/:commentId", async(req, res) => {

});

router.delete("/:id", async(req, res) => {
    try {
        await recipeData.getCommentByID(req.params.id);
        try {
            await recipeData.removeComment(req.params.id);
            res.json({delete: "ok"});
        } catch (e) {
            res.status(500).json({ error: e });
        }
    } catch (e) {
        res.status(404).json({ error: "Comment not found" });
    }
});

module.exports = router;
