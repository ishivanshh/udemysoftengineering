const fs = require('fs');
const { parse } = require('path');
const filePath = './tasks.json';
const LoadTask = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath)
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return []
    }
}
const saveTasks = (tasks) =>{
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);
}
const addTask = (task) =>{
    const tasks = LoadTask();
    tasks.push({task});
    saveTasks(tasks);
    console.log("task added ", task);
}
const command = process.argv[2] // command on 2
// node filename command argument..
const argument = process.argv[3] // argument on 3

if(command === "add"){
    addTask(argument)
} else if (command === "list"){
    listTasks()
} else if(command == "remove"){
    removeTask(parseInt(argument));
} else {
    console.log("Invalid command. Use 'add', 'list', or 'remove'.");
}
