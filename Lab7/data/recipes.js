const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require("node-uuid");

const exportedMethods = {
    //Gets all the recipes
    async getAllRecipes() {
        let recipeCollection = await recipes();
        return await recipeCollection.find({}).toArray();
    },
    
    //Responds with a list of all recipes in the format of {_id: RECIPE_ID, title: RECIPE_TITLE}
    async getAllIDAndTitleRecipes() {
        let recipeCollection = await recipes();
        return await recipeCollection.find({}, {id: 1, title: 1}).toArray();
    },
    
    //Creates a recipe with the supplied data in the request body, and returns the new recipe
    async createRecipe(title, ingredients, steps) {
        if(typeof title !== "string") throw "No title provided or is not a string";
        if(!Array.isArray(ingredients)) throw "No ingredients provided or is not an array";
        if(!Array.isArray(steps)) throw "No steps provided or is not an array";    
        
        for(var currIngredient in ingredients) {
            if(Object.keys(ingredients[currIngredient]).length !== 2 || typeof ingredients[currIngredient]['name'] !== "string" || typeof ingredients[currIngredient]['amount'] !== "string") {
                throw "Improper layout for ingredients must be an array of objects containing name and amount";
            }
        }

        for(var step in steps) {
            if(typeof steps[step] !== "string") {
                throw "Improper format for steps must be an array of strings";
            }
        }

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

    //Responds with the full content of the specified recipe
    async getRecipeByID(id) {
        if (!id) throw "No ID provided";
        let recipeCollection = await recipes();
        let recipe = await recipeCollection.findOne({_id: id});
        if (!recipe) throw "Recipe not found";
        return recipe;
    },

    //Updates the specified recipe with only the supplied changes, and returns the updated recipe
    async updateRecipe(id, updatedRecipe) {
        if(!id) throw "No id provided";
        
        let updatedRecipeData = {};
        
        if(updatedRecipe.title) {
            if(typeof updatedRecipe.title === "string") {
                updatedRecipeData.title = updatedRecipe.title;
            } else {
                throw "Title must be a string";
            }
        }
        if(updatedRecipe.ingredients) {
            if(Array.isArray(updatedRecipe.ingredients)) {
                for(var currIngredient in updatedRecipe.ingredients) {
                    if(Object.keys(updatedRecipe.ingredients[currIngredient]).length !== 2 || typeof updatedRecipe.ingredients[currIngredient]['name'] !== "string" || typeof updatedRecipe.ingredients[currIngredient]['amount'] !== "string") {
                        throw "Improper layout for ingredients must be an array of objects containing name and amount";
                    }
                }
                updatedRecipeData.ingredients = updatedRecipe.ingredients;
            } else {
                throw "Ingredients must be an array";
            }
        }

        if(updatedRecipe.steps) {
            if(Array.isArray(updatedRecipe.steps)) {
                for(var step in updatedRecipe.steps) {
                    if(typeof updatedRecipe.steps[step] !== "string") {
                        throw "Improper format for steps must be an array of strings";
                    }
                }
                updatedRecipeData.steps = updatedRecipe.steps;
            } else {
                throw "Steps must be an array";
            }
        }

        let recipeCollection = await recipes();
        await recipeCollection.updateOne({_id: id}, {$set: updatedRecipeData});
        return await this.getRecipeByID(id);
    },

    //Deletes the recipe
    async removeRecipe(id) {
        if(!id) throw "No id provided";
        
        let recipeCollection = await recipes();
        let deletionInfo = recipeCollection.deleteOne({_id: id});
        if(deletionInfo.deletedCount === 0) {
            throw `Could not delete recipe with id of ${id}`;
        } else {
            return {deleted: "okay"};
        }
    },

    //Returns a list of all comments in the specified recipe in the format of 
    //{_id: COMMENT_ID, recipeId: RECIPE_ID, recipeTitle: RECIPE_TITLE, poster: COMMENT_NAME, comment: COMMENT}
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
    
    // Returns the comment specified by that commentId in the format of 
    // {_id: COMMENT_ID, recipeId: RECIPE_ID, reciipeTitle: RECIPE_TITLE, poster: COMMENT_NAME, comment: COMMENT}
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

    //Creates a new comment with the supplied data in the request body for the stated recipe, and returns the new comment
    async postComment(recipeID, poster, comment) {
        if(!recipeID) throw "No recipeID provided";
        if(typeof poster !== "string") throw "No poster provided or is not a string";
        if(typeof comment !== "string") throw "No comment provided or is not a string"; 
    
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

    //Updates the specified comment for the stated recipe with only the supplied changes, and returns the updated comment
    async updateComment(recipeID, commentID, updatedCommentData) {
        if(!recipeID) throw "No recipeID provided";
        if(!commentID) throw "No commentID provided";


        let recipe = await this.getRecipeByID(recipeID);
        let recipeComments = recipe.comments;
        for(let i = 0; i < recipeComments.length; i++) {
            let comment = recipeComments[i];
            if(comment._id == commentID) {
                if(updatedCommentData.poster) {
                    if(typeof updatedCommentData.poster === "string") {
                        recipe.comments[i].poster = updatedCommentData.poster;
                    } else {
                        throw "Poster must be a string";
                    }
                }
    
                if(updatedCommentData.comment) {
                    if(typeof updatedCommentData.comment === "string") {
                        recipe.comments[i].comment = updatedCommentData.comment;
                    } else {
                        throw "Comment must be a string";
                    }
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

    //Deletes the comment specified
    async removeComment(id) {
        if(!id) throw "No id provided";

        let recipeCollection = await recipes();
        let recipesData = await this.getAllRecipes();

        for(let i = 0; i < recipesData.length; i++) {
            let recipe = recipesData[i];
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
