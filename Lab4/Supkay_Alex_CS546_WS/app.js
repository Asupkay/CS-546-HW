const todoItems = require("./todo");
/**----------------------------------------------------*
/ Name: app.js                                         |
/ Project: Lab4                                        |
/ Description: Test the mongodb methods                |
/ Author: Alex Supkay                                  |
/ Pledge: I pledge my honor that I have abided by the  |
/ Stevens Honor System                                 |
/-----------------------------------------------------*/


async function main() {
    try {
        //Create the first task and then print it
        let firstTask = await todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
        console.log("---------Created First Task---------");
        console.log(firstTask);

        //Create the second task and then print it
        let secondTask = await todoItems.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
        console.log("---------Created Second Task---------");
        //console.log(secondTask);
        
        //Print all the tasks
        let allTasks = await todoItems.getAllTasks();
        console.log("---------Get All The Tasks---------");
        console.log(allTasks);

        //Remove the first task
        console.log("---------Remove First Task---------");
        await todoItems.removeTask(firstTask._id);

        //Print all the tasks again
        allTasks = await todoItems.getAllTasks();
        console.log("---------Get All The Tasks---------");
        console.log(allTasks);

        //Complete the second task then print it
        secondTask = await todoItems.completeTask(secondTask._id);
        console.log("--------Complete Second Task--------");
        console.log(secondTask);

        //Error checking
        //let errorTask = await todoItems.createTask(null, null); checked with numbers and null
        //let errorTask = await todoItems.getTask();
        //let errorTask = await todoItems.getTask(12345);
        //let errorTask = await todoItems.completeTask();
        //let errorTask = await todoItems.completeTask(1234);
        //let errorTask = await todoItems.removeTask();
        //let errorTask = await todoItems.removeTask(1234);
        

    } catch (error) {
        console.log(error);
    }
}

main();
