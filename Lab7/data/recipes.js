const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require("node-uuid");

const exportedMethods = {
    async getAllRecipes() {
        let recipeCollection = await recipes();
        return await recipeCollection.find({}).toArray();
    },
    
    async getAllIDAndTitleRecipes() {
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
        };

        const insertInformation = await recipeCollection.insertOne(newRecipe);
        const newID = insertInformation.insertedId;
        let recipe = await this.getRecipeByID(newID);
        return await this.getRecipeByID(newID);
    },

    async getRecipeByID(id) {
        if (!id) throw "No ID provided";
        let recipeCollection = await recipes();
        let recipe = await recipeCollection.findOne({_id: id});
        if (!recipe) throw "Recipe not found";
        return recipe;
    },

    async updateRecipe(id, updatedRecipe) {
        if(!id) throw "No id provided";
        
        let updatedRecipeData = {};

        if(updatedRecipe.title) {
            updatedRecipeData.title = updatedRecipe.title;
        }

        if(updatedRecipe.ingredients) {
            updatedRecipeData.ingredients = updatedRecipe.ingredients;
        }

        if(updatedRecipe.steps) {
            updatedRecipeData.steps = updatedRecipe.steps;
        }

        let recipeCollection = await recipes();
        await recipeCollection.updateOne({_id: id}, {$set: updatedRecipeData});
        return await this.getRecipeByID(id);
    },

    async removeRecipe(id) {
        if(!id) throw "No id provided";
        
        let recipeCollection = await recipes();
        recipeCollection.deleteOne({_id: id});
    },

    async getAllCommentsOfRecipe(id) {
        if(!id) throw "No id provided";

        let recipe = await this.getRecipeByID(id);
        let recipeComments = recipe.comments;

        let recipeCommentsFormatted = [];

        for(let i = 0; i < recipeComments.length; i++) {
            let commentData = recipeComments[i];
            
            var recipeCommentFormat = {
                _id: commentData._id,
                recipeId: id,
                recipeTitle: recipe.title,
                poster: commentData.poster,
                comment: commentData.comment
            };
            
            recipeCommentsFormatted.push(recipeCommentFormat);
        } 
        return recipeCommentsFormatted;
    },

    async getCommentByID(id) {
        if(!id) throw "No id provided";

        let recipes = await this.getAllRecipes();

        for(let i = 0; i < recipes.length; i++) {
            let recipeComments = recipes[i].comments;
            for(let x = 0; x < recipeComments.length; x++) {
                let recipeComment = recipeComments[x];
                if(recipeComment._id == id) {
                    let recipeCommentFormat = {
                        _id: recipeComment._id,
                        recipeId: recipes[i]._id,
                        recipeTitle: recipes[i].title,
                        poster: recipeComment.poster,
                        comment: recipeComment.comment
                    };
                    return recipeCommentFormat;
                }
            }
        }
        throw "Comment not found";
    },

    async postComment(recipeID, poster, comment) {
        if(typeof poster !== "string") throw "No poster provided";
        if(typeof comment !== "string") throw "No comment provided"; 
    
        let recipeCollection = await recipes();
        let recipe = await this.getRecipeByID(recipeID);
        
        let newComment = {
            _id: uuid.v4(),
            poster: poster,
            comment: comment
        };

        recipe.comments.push(newComment);
        await recipeCollection.updateOne({_id: recipeID}, {$set: recipe});
        const newID = newComment._id;
        return await this.getCommentByID(newID);
    },

    async updateComment(recipeID, commentID, updatedCommentData) {
        if(!recipeID) throw "No recipeID provided";
        if(!commentID) throw "No commentID provided";


        let recipe = await this.getRecipeByID(recipeID);
        let recipeComments = recipe.comments;
        for(let i = 0; i < recipeComments.length; i++) {
            let comment = recipeComments[i];
            if(comment._id == commentID) {
                if(typeof updatedCommentData.poster === "string") {
                    recipe.comments[i].poster = updatedCommentData.poster;
                }
                if(typeof updatedCommentData.comment === "string") {
                    recipe.comments[i].comment = updatedCommentData.comment;
                }
            }
        }

        let updatedRecipe = {
            comments: recipe.comments
        };
        let recipeCollection = await recipes();
        await recipeCollection.updateOne({_id: recipeID}, {$set: updatedRecipe});
        let updatedComment = await this.getCommentByID(commentID);
        return updatedComment;

    },

    async removeComment(id) {
        if(!id) throw "No id provided";

        let recipes = await this.getAllRecipes();

        for(let i = 0; i < recipes.length; i++) {
            let recipe = recipes[i];
            let recipeComments = recipe.comments;
            for(let x = 0; x < recipeComments.length; x++) {
                let recipeComment = recipeComments[x];
                if(recipeComment._id == id) {
                    recipe.comments.splice(x, 1);
                    await recipeCollection.update({_id: recipe._id}, {$set: recipe});
                }
            }
        }
    }
};

module.exports = exportedMethods;
