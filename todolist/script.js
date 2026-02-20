document.addEventListener("DOMContentLoaded", () => {
  const addTaskButton = document.getElementById("add-task-btn");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  // getting back from localstorage..
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTask(task));

  addTaskButton.addEventListener("click", () => {
    const taskTest = todoInput.value.trim();
    if (taskTest === "") return;

    const newTask = {
      id: Date.now(),
      text: taskTest,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    todoInput.value = ""; // clear input.
    console.log(tasks);
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); // prevent toggle from firing
      tasks = tasks.filter((t) => t.id != tasks.id);
      li.remove();
      saveTasks();
    });
    todoList.appendChild(li);
  }

  // saving into local storage...

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});

// trim():- remove extra spaces.
// event bubbling - stopPropogration , do not trigger parents elements.
