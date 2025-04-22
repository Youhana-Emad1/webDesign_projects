document.getElementById("add-task-btn").addEventListener("click", function() {  
    const input = document.getElementById("task-input");  
    const taskText = input.value.trim();  

    if (taskText === "") {  
        alert("Please enter a task.");  
        return;  
    }  

    const taskList = document.getElementById("task-list");  
    const taskCard = document.createElement("div");  
    taskCard.classList.add("task-card", "card", "p-2");  

    const taskContent = document.createElement("span");  
    taskContent.textContent = taskText;  

    const deleteBtn = document.createElement("button");  
    deleteBtn.textContent = "Delete";  
    deleteBtn.classList.add("delete-btn", "btn");  

    taskCard.appendChild(taskContent);  
    taskCard.appendChild(deleteBtn);  
    taskList.appendChild(taskCard);  
    input.value = "";  

    // Update empty state  
    taskList.querySelector(".empty-state").style.display = "none";  

    // Task completion toggle  
    taskContent.addEventListener("click", function() {  
        this.classList.toggle("completed");  
    });  

    // Delete task event  
    deleteBtn.addEventListener("click", function() {  
        taskCard.style.transition = "opacity 0.5s";  
        taskCard.style.opacity = "0";  
        setTimeout(() => {  
            taskCard.remove();  
            if (taskList.children.length === 0) {  
                taskList.querySelector(".empty-state").style.display = "block";  
            }  
        }, 500);  
    });  
});  