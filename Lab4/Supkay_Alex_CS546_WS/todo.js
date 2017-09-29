/**----------------------------------------------------*
/ Name: todo.js                                        |
/ Project: Lab4                                        | 
/ Description: Export 5 methods for editing collection |
/ Author: Alex Supkay                                  |
/ Pledge: I pledge my honor that I have abided by the  |
/ Stevens Honor System                                 |
/-----------------------------------------------------*/



const mongoCollections = require("./mongoCollections.js")
const uuidv4 = require('uuid/v4');
const todoItems = mongoCollections.todoItems;

module.exports = {
    async createTask(title, description) {
        //Check the inputs
        if(!title || typeof title !== 'string') throw "You must provide a title";
        if(!description || typeof description !== 'string') throw "You must provide a description";
        
        //Get the collection
        let todoCollection = await todoItems();

        //Put together the new task
        let newTask = {
            _id: uuidv4(),
            title: title,
            description: description,
            completed: false,
            completedAt: null
        };

        //Insert the task into the database if it does not throw an error
        let insertionInfo = await todoCollection.insertOne(newTask);
        if(insertionInfo.insertedCount === 0) throw "Could not create Task";

        //Get the id of the inserted task
        let newId = insertionInfo.insertedId;

        //Get the task and return it
        let task = await this.getTask(newId);
        return task;
    },
    async getAllTasks() {
        //Get the collection
        let todoCollection = await todoItems();

        //Find all tasks an turn it into an array and return it
        let tasks = await todoCollection.find({}).toArray();
        return tasks;
    }, 
    async getTask(id) {
        //Check the input
        if(!id) throw "You must provide an id to search for";

        //Get the collection
        let todoCollection = await todoItems();
        
        //find the one task if you do not get it the id does not exist return the task
        let task = await todoCollection.findOne({_id: id});
        if(task === null) throw "No task found with that id";
        return task;  
    },
    async completeTask(taskId) {
        //Check the input
        if(!taskId) throw "You must provide a taskId";

        //Get the collection
        let todoCollection = await todoItems();

        //Get the task that needs to be completed
        let taskToUpdate = await this.getTask(taskId);
        //Create the completed task
        let updatedTask = {
            _id: taskId,
            title: taskToUpdate.title,
            description: taskToUpdate.description,
            completed: true,
            completedAt: new Date()
        }

        //Update the task that needed to be updated with the updatedTask if it did not work throw
        let completeInfo = await todoCollection.updateOne({_id: taskId}, updatedTask);
        if(completeInfo.modifiedCount === 0) {
            throw "could not update task successfully";
        }
        
        //Return the completed task
        return await this.getTask(taskId);
    },
    async removeTask(id) {
        //Check the input
        if(!id) throw "You must provide an id to remove";

        //Get the collection
        let taskCollection = await todoItems();
        
        //remove the task with the id if it didn't delete throw an error
        let removeInfo = await taskCollection.removeOne({_id: id});
        if(removeInfo.deletedCount === 0) {
            throw `Could not delete task with id of ${id}`;
        }
        //If it was successful return true
        return true;
    }
}
