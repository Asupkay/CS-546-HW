const todoItems = require("./todo");

async function main() {
    try {
        let firstTask = await todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
        console.log("---------Created First Task---------");
        console.log(firstTask);

        let secondTask = await todoItems.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
        console.log("---------Created Second Task---------");
        console.log(secondTask);
        
        let allTasks = await todoItems.getAllTasks();
        console.log("---------Get All The Tasks---------");
        console.log(allTasks);

        console.log("---------Remove First Task---------");
        await todoItems.removeTask(firstTask._id);

        allTasks = await todoItems.getAllTasks();
        console.log("---------Get All The Tasks---------");
        console.log(allTasks);

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
