const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.posts;
const uuid = require("node-uuid");

const exportedMethods {
    async getAllRecipes() {
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
        };

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
        let recipeComments = recipe.comments;

        let recipeCommentsFormatted = [];

        for(let i = 0; i < recipeComments.length; i++) {
            let commentData = recipeComments[i];
            
            var recipeCommentFormat = {
                _id: comment._id,
                recipeId: id,
                recipeTitle: recipe.title,
                poster: comment.poster,
                comment: commentData.comment
            };
            
            recipeCommentsFormatted.push(recipeCommentFormat);
        } 
        
        return recipeCommentsFormatted;
    }

    async getComment(id) {
        if(!id) throw "No id provided";

        let recipes = getAllRecipes();

        for(let i = 0; i < recipes.length; i++) {
            let recipeComments = recipes[i].comments;
            for(let x = 0; x < recipeComments.length; x++) {
                let recipeComment = recipeComments[x];
                if(recipeComment.id == id) {
                    let recipeCommentFormat = {
                        _id: recipeComment.id,
                        recipeId = recipes[i].id,
                        recipeTitle = recipes[i].title,
                        poster: recipeComment.poster,
                        comment: recipeComment.comment
                    };
                }
            }
        }
        throw "Comment not found";
    },

    async postComment(recipeID, poster, comment) {
        if(typeof poster !== "string") throw "No poster provided";
        if(typeof comment !== "string") throw "No comment provided"; 
    
        let recipeCollection = recipes();
        let recipe = getRecipeByID(recipeID);
        
        let newComment = {
            _id: uuid.v4(),
            poster: poster,
            comment: comment
        };

        recipe.comments.push(newComment); 
        let insertInformation = await recipeCollection.updateOne({_id: recipeID}, {$set: recipe});
        return await this.getComment(insertInformation.insertedId);
    },

    async updateComment(recipeID, commentID, poster, comment) {
        if(!id) throw "No id provided";

        let recipe = getRecipeByID(recipeID);
        let recipeComments = recipe.comments;

        for(int i = 0; i < recipeComments.length; i++) {
            let comment = recipeComment[i];
            if(comment.id == commentID) {
                if(typeof poster === "string") {
                    recipe.comments[i].poster = poster;
                }
                
                if(typeof comment === "string") {
                    recipe.comment[i].comment = comment;
                }
            }
        }

        let updatedRecipe = {
            comments = recipe.comments;
        };


        let insertInformation = await recipeCollection.updateOne({_id: recipeID}, {$set: updateRecipe});

    },

    async deleteComment(id) {
        if(!id) throw "No id provided";

        let recipes = getAllRecipes();

        for(let i = 0; i < recipes.length; i++) {
            let recipe = recipes[i];
            let recipeComments = recipe.comments;
            for(let x = 0; x < recipeComments.length; x++) {
                let recipeComment = recipeComments[x];
                if(recipeComment.id == id) {
                    recipe.comments.splice(x, 1);
                    await recipeCollection.update({_id: recipe.id}, {$set: recipe});
                }
            }
        }
    }
}

module.exports = exportedMethods;
