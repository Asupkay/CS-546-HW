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

};

router.post("/", async(req, res) => {

};

router.put("/", async(req, res) => {

};

router.delete("/:id", async(req, res) => {

};


module.exports = router;
