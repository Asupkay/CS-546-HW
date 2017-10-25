const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.posts;
const uuid = require("node-uuid");

const exportedMethods {
    async getAllPosts() {
        recipeCollection = await recipes();
        return await recipeCollection.find({}).toArray();
    },
    
    async getAllIDAndTitlePosts() {
        recipeCollection = await recipes();
        return await recipeCollection.find({}, {id: 1, title: 1}).toArray();
    },

    async getPostByID (id) {
        if (!id) throw "No ID provided";
        recipeCollection = await recipes();
        recipe = await recipeCollection.fint({_id: id});

        if (!recipe) throw "Recipe not found";
        return recipe;
    }
}

module.exports = exportedMethods;
