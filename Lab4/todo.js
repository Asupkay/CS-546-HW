const mongoCollections = require("./mongoCollections.js")
const uuidv4 = require('uuid/v4');
const todoItems = mongoCollections.todoItems;

module.exports = {
    async createTask(title, description) {
        if(!title || typeof title !== 'string') throw "You must provide a title";
        if(!description || typeof description !== 'string') throw "You must provide a description";

        let todoCollection = await todoItems();

        let newTask = {
            _id: uuidv4(),
            title: title,
            description: description,
            completed: false,
            completedAt: null
        };

        let insertionInfo = await todoCollection.insertOne(newTask);
        if(insertionInfo.insertedCount === 0) throw "Could not create Task";

        let newId = insertionInfo.insertedId;

        let task = await this.getTask(newId);
        
        return task;
    },
    async getAllTasks() {
        let todoCollection = await todoItems();

        let tasks = await todoCollection.find({}).toArray();

        return tasks;
    }, 
    async getTask(id) {
        if(!id) throw "You must provide an id to search for";

        let todoCollection = await todoItems();
        
        let task = await todoCollection.findOne({_id: id});
        if(task === null) throw "No task found with that id";

        return task;  
    },
    async completeTask(taskId) {
        if(!taskId) throw "You must provide a taskId";

        let todoCollection = await todoItems();

        let taskToUpdate = await this.getTask(taskId);
        let updatedTask = {
            _id: taskId,
            title: taskToUpdate.title,
            description: taskToUpdate.description,
            completed: true,
            completedAt: new Date()
        }

        let completeInfo = await todoCollection.updateOne({_id: taskId}, updatedTask);
        if(completeInfo.modifiedCount === 0) {
            throw "could not update task successfully";
        }

        return await this.getTask(taskId);
    },
    async removeTask(id) {
        if(!id) throw "You must provide an id to remove";

        let taskCollection = await todoItems();
        
        let removeInfo = await taskCollection.removeOne({_id: id});
        if(removeInfo.deletedCount === 0) {
            throw `Could not delete task with id of ${id}`;
        }
        return true;
    }
}
