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

const tasks: Task[] = [];

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
    addtask(task);
    // render tasks
    renderTask(task);
    // update localstorage
    formInput.value = "";
    return;
  }
  alert("Please enter a task descripition!!!");
}
function addtask(task: Task): void {
  tasks.push(task);
  console.log(tasks);
}

function renderTask(task: Task): void {
  const taskElement = document.createElement("li");
  taskElement.textContent = task.description;
  taskListElement?.appendChild(taskElement);
}
