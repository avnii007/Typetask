let nextId = 1;
// 3. addTask operation
export function addTask(tasks, title) {
    const newTask = {
        id: nextId++,
        title,
        status: "todo",
    };
    return [...tasks, newTask];
}
// 4. completeTask operation
export function completeTask(tasks, id) {
    return tasks.map((task) => task.id === id ? { ...task, status: "done" } : task);
}
// 5. filterByStatus operation
export function filterByStatus(tasks, status) {
    return tasks.filter((task) => task.status === status);
}
// Extra Custom Operation: deleteTask
export function deleteTask(tasks, id) {
    return tasks.filter((task) => task.id !== id);
}
// Extra Custom Operation: advanceTask
export function advanceTask(tasks, id) {
    return tasks.map((task) => {
        if (task.id !== id)
            return task;
        if (task.status === "todo")
            return { ...task, status: "in-progress" };
        if (task.status === "in-progress")
            return { ...task, status: "done" };
        return task;
    });
}
