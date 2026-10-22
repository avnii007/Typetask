import { addTask, filterByStatus, advanceTask, } from "./model.js";
let tasks = [];
let currentFilter = "all";
const listEl = document.getElementById("task-list");
const formEl = document.getElementById("task-form");
const inputEl = document.getElementById("task-input");
formEl.onsubmit = (e) => {
    e.preventDefault();
    if (!inputEl.value.trim())
        return;
    tasks = addTask(tasks, inputEl.value.trim());
    inputEl.value = "";
    render();
};
function render() {
    if (!listEl)
        return;
    listEl.innerHTML = "";
    const filteredTasks = currentFilter === "all"
        ? tasks
        : filterByStatus(tasks, currentFilter);
    filteredTasks.forEach((task) => {
        const li = document.createElement("li");
        li.className = "task";
        const textSpan = document.createElement("span");
        textSpan.textContent = `${task.title} [${task.status}]`;
        const advanceBtn = document.createElement("button");
        advanceBtn.textContent = "Advance";
        advanceBtn.onclick = () => {
            tasks = advanceTask(tasks, task.id);
            render();
        };
        li.appendChild(textSpan);
        li.appendChild(advanceBtn);
        listEl.appendChild(li);
    });
}
render();
