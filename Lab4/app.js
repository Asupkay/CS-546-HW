const todoItems = require("./todo");

async function main() {
    try {
        let firstTask = todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
        console.log("Created First Task");
        console.log(firstTask);

        let secondTask = todoItems.createTasks("Play Pokemon with Twitch TV", "Should we revive Helix?");
        
        let allTasks = todoItems.getTasks();
        console.log(allTasks);

        todoItems.removeTask(firstTask._id);

        allTasks = todoItems.getTasks();
        console.log(allTasks);

        secondTask = todoItems.completeTask(secondTask);
        console.log(secondTask);

    } catch (error) {
        console.log(error);
    }
}

main();

        /*console.log("Create first task ------------------");
        let createdTask = await todoItems.createTask("My First Task", "This is the first thing I need to do today");
        console.log(createdTask);

        console.log("Create second task ------------------");
        createdTask = await todoItems.createTask("My Second Task", "This is the Second thing I need to do today");
        console.log(createdTask);

        console.log("Get tasks ------------------");
        let getTasks = await todoItems.getAllTasks();
        console.log(getTasks);

        console.log("Complete task ------------------");
        let updateTask = await todoItems.completeTask(createdTask._id);
        console.log(updateTask);*/
