const express = require("express");
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;

router.get("/recipe/:recipeId", async(req, res) => {

});

router.get("/:commentId", async(req, res) => {

});

router.post("/:recipeId", async(req, res) => {

});

router.put("/:recipeId/:commentId", async(req, res) => {

});

router.delete("/:id", async(req, res) => {

});

module.exports = router;
