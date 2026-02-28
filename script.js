document.addEventListener("DOMContentLoaded", function () {

    const inputTask = document.getElementById("taskInput");
    const taskBtn = document.getElementById("addTaskBtn");
    const displayTask = document.getElementById("taskList");
    const prioritySelect = document.getElementById("prioritySelect");

    let tasks = [];

    function addTask() {
        const inputValue = inputTask.value.trim();
        if (inputValue === "") return;

        const priorityValue = prioritySelect.value;

        const newTask = {
            id: Date.now(),
            text: inputValue,
            completed: false,
            priority: priorityValue
        };

        tasks.push(newTask);
        saveTasks();
        renderTasks();

        inputTask.value = ""; // correct clearing
    }

    taskBtn.addEventListener("click", addTask);

    function renderTasks() {
        displayTask.innerHTML = "";

        tasks.forEach(task => {

            const li = document.createElement("li");
            li.classList.add("task-item");
            li.classList.add(`priority-${task.priority}`);

            if (task.completed) {
                li.classList.add("completed");
            }

            li.innerHTML = `
          <span>${task.text}</span>
          <div class="actions">
            <button class="complete-btn" data-id="${task.id}">✔</button>
            <button class="delete-btn" data-id="${task.id}">Delete</button>
          </div>
        `;

            displayTask.appendChild(li);
        });
    }

    displayTask.addEventListener("click", function (e) {

        const id = Number(e.target.dataset.id);

        if (e.target.classList.contains("delete-btn")) {
            tasks = tasks.filter(task => task.id !== id);
            saveTasks();
            renderTasks();
        }

        if (e.target.classList.contains("complete-btn")) {
            tasks = tasks.map(task =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            );
            saveTasks();
            renderTasks();
        }
    });


    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        renderTasks();
    }
});