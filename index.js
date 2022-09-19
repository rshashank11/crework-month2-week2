const taskForm = document.querySelector(".task-form");
const formInput = document.querySelector(".form-input");
const formSubmit = document.querySelector(".form-submit");

const taskSection = document.querySelector(".task-section");
const message = document.querySelector(".message");

message.style.display = "none";

formSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    let taskInput = formInput.value;
    if (!taskInput) {
        message.style.display = "block";
        message.innerText = "Enter a task";
        setTimeout(() => {
            message.style.display = "none";
        }, 2000);

    } else {
        const taskContainer = document.createElement("div");
        taskContainer.className = "task-container";
        taskSection.appendChild(taskContainer);

        const taskItem = document.createElement("input");
        taskItem.readOnly = true;
        taskItem.className = "task-item";
        taskItem.value = formInput.value;
        taskContainer.appendChild(taskItem);
        
        const taskCheckbox = document.createElement("input");
        taskCheckbox.type = "button";
        taskCheckbox.className = "task-checkbox";
        taskContainer.appendChild(taskCheckbox);

        taskCheckbox.addEventListener("click", () => {
            taskCheckbox.classList.toggle("done");
            taskItem.classList.toggle("done");
        })

        const taskEditBtn = document.createElement("button");
        taskEditBtn.type = "button";
        taskEditBtn.innerText = "edit";
        taskContainer.appendChild(taskEditBtn);
        taskEditBtn.addEventListener("click", () => {
            taskItem.toggleAttribute("readonly");
            if (taskItem.hasAttribute("readonly")) {
                taskEditBtn.innerText = "edit";
                taskCheckbox.classList.remove("done");
                taskItem.classList.remove("done");
            } else {
                taskEditBtn.innerText = "save";
                taskCheckbox.classList.remove("done");
                taskItem.classList.remove("done");
            }
        });

        const taskDeleteBtn = document.createElement("button");
        taskDeleteBtn.type = "button";
        taskDeleteBtn.className = ("fa fa-trash");
        taskContainer.appendChild(taskDeleteBtn);
        taskDeleteBtn.addEventListener("click", () => {
            taskContainer.remove();
            message.style.display = "block";
            message.innerText = "Task Deleted";
            setTimeout(() => {
                message.style.display = "none";
            }, 2000);

        });

        message.style.display = "block";
        message.innerText = "Task Added";
        setTimeout(() => {
            message.style.display = "none";
        }, 2000);
    }
})