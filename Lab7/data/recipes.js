const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.posts;
const uuid = require("node-uuid");

const exportedMethods {
    async getAllPosts() {
        let recipeCollection = await recipes();
        return await recipeCollection.find({}).toArray();
    },
    
    async getAllIDAndTitlePosts() {
        let recipeCollection = await recipes();
        return await recipeCollection.find({}, {id: 1, title: 1}).toArray();
    },
    
    async createRecipe(title, ingredients, steps) {
        if(typeof title !== "string") throw "No title provided";
        if(!Array.isArray(ingredients)) throw "No ingredients provided";
        if(!Array.isArray(steps)) throw "No steps provided";    

        let recipeCollection = await recipes();

        const newRecipe = {
            _id: uuid.v4(),
            title: title,
            ingredients: ingredients,
            steps: steps,
            comments: []
        }

        const insertInformation = await recipeCollection.insertOne(newRecipe);
        const newID = insertInformation.insertedId;
        return await this.getRecipeById(newID);
    },

    async getRecipeByID(id) {
        if (!id) throw "No ID provided";
        let recipeCollection = await recipes();
        let recipe = await recipeCollection.find({_id: id});

        if (!recipe) throw "Recipe not found";
        return recipe;
    },

    async updateRecipe(id, updatedRecipe) {
        if(!id) throw "No id provided";
        
        let updatedRecipeData = {};

        if(updatedRecipe.title) {
            updatedPostData.title = updatedPost.title;
        }

        if(updatedRecipe.ingredients) {
            updatedRecipeData.ingredients = updatedRecipe.ingredients;
        }

        if(updatedRecipe.steps) {
            updatedRecipeData.steps = updatedRecipe.steps;
        }

        let recipeCollection = await recipes();
        await recipeCollection.updateOne({_id: id}, {$set: updatedPostData});

        return await this.getPostById(id);
    },

    async deletePost(id) {
        if(!id) throw "No id provided";
        
        let recipeCollection = await recipes();
        recipeCollection.deleteOne({_id: id});
    },

    async getAllCommentsOfRecipe(id) {
        if(!id) throw "No id provided";

        let recipe = await getRecipeByID(id);
    }
}

module.exports = exportedMethods;
