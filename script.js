let inputText = document.getElementById("enterTasks");
let addButton = document.getElementById("addButton");
let tasks=[]


addButton.addEventListener("click", addTask);
// Add task to the list
function addTask() {
    let task = inputText.value;
    tasks.push(task);
    localStorage.setItem("task", tasks);
    inputText.value = "";
}