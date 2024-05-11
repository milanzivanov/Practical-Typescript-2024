////////////////////////
// 82-90. Tasks project

// const btn = document.querySelector(".test-btn")! as HTMLButtonElement;
// const btn = document.querySelector<HTMLButtonElement>(".test-btn")!;

const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskListElement = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  isComplited: boolean;
};

const tasks: Task[] = loadTasks();

tasks.forEach((task) => renderTask(task));
// tasks.forEach(renderTask);

function loadTasks(): Task[] {
  const storedTaks = localStorage.getItem("tasks");
  return storedTaks ? JSON.parse(storedTaks) : [];
}

taskForm?.addEventListener("submit", createTask);

function createTask(event: SubmitEvent) {
  event.preventDefault();
  const taskDescription = formInput?.value;
  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isComplited: false
    };
    // add task to list
    addTask(task);
    // render tasks
    renderTask(task);
    // update localstorage
    updateStorage();

    formInput.value = "";
    return;
  }
  alert("Please enter a task descripition!!!");
}

function addTask(task: Task): void {
  tasks.push(task);
  console.log(tasks);
}

function renderTask(task: Task): void {
  const taskElement = document.createElement("li");
  taskElement.textContent = task.description;

  // checkbox
  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.checked = task.isComplited;

  // toggle checkbox
  taskCheckbox.addEventListener("change", () => {
    task.isComplited = !task.isComplited;
    updateStorage();
  });

  taskListElement?.appendChild(taskElement);
  taskElement.appendChild(taskCheckbox);
}

function updateStorage(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
