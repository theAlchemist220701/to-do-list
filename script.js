// Add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById("taskList");
        const listItem = document.createElement("li");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);

        const completeButton = document.createElement("button");
        completeButton.innerHTML = "&#10003;"; // Tick mark
        completeButton.addEventListener("click", function () {
            listItem.classList.toggle("completed");
        });
        listItem.appendChild(completeButton);

        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}

// Event listeners
document.getElementById("addTaskBtn").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") addTask();
});
