// Comment:One delegated listener is better than applying listener on each button because it reduces repetition and easy to maintain the code if we apply listener on each button the code will become too large.
// event.target is the  element that was clicked event.currentTarget is the element on which listener applies.

//Part 1: Selecting and wiring up (15 marks)

const taskInput = document.getElementById("task-input");
const btn = document.getElementById("add-task-btn");
const list = document.getElementById("task-list");
const heading = document.querySelector("#main-heading");
heading.textContent = "My Task List";

let stats = document.getElementById("stats");
stats.innerHTML = " <strong>Tasks: 0</strong>";

// Use .style to give #stats a backgroundColor of light yellow and some padding

stats.style.backgroundColor = "lightyellow";
stats.style.padding = "20px";

// Add a click listener to #add-task-btn. For now just have it call a function named addTask() that you will write in Part 2.

btn.addEventListener("click", addTask);

// Part 2: Add a task, using create then configure then append (20 marks)
//Write a function addTask(). Do not put this logic inline inside the listener. The function is called from the listener, keeping the pattern from the Day 2 class.

let counter = 0;
function addTask(isUrgent) {
  if (taskInput.value === "") {
    return;
  }
  let listItem = document.createElement("li");
  listItem.textContent = taskInput.value;
  listItem.classList.add("task");
  counter++;
  listItem.setAttribute("data-id", counter);
  let doneBtn = document.createElement("button");
  doneBtn.classList.add("done-btn");
  doneBtn.textContent = "Done";
  listItem.appendChild(doneBtn);
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "X";
  listItem.appendChild(deleteBtn);
  taskInput.value = "";
  list.appendChild(listItem);
  updateStats();
  showStatus("Item added successfully!");

  if (isUrgent === true) return list.prepend(listItem);
  else return list.appendChild(listItem);
}

let urgentBtn = document.getElementById("urgent-btn");
urgentBtn.addEventListener("click", () => {
  addTask(true);
});

// Part 3: Delete, using event delegation (20 marks)
//Attach exactly one click listener to #task-list. Not one per button.
//Part 4: Done and Undo toggle (15 marks)
//Handle this in the same single listener from Part 3. Do not add a second listener.

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn"))
    event.target.closest("li").remove();
  showStatus("Item removed successfully!");
  updateStats();
  if (event.target.classList.contains("done-btn")) {
    let li = event.target.closest("li");
    li.classList.toggle("completed");
    showStatus("class added successfully!");
    updateStats();
    if (li.classList.contains("completed")) {
      event.target.textContent = "undo";
    } else {
      event.target.textContent = "Done";
    }
    showStatus("class done successfully!");
    updateStats();
  }
});

// Part 5: Status message, built with createElement (10 marks)

let previousDiv = document.getElementById("todo-app");
let newDiv = document.createElement("div");
newDiv.id = "status-msg";
previousDiv.insertBefore(newDiv,stats);

// Write a function showStatus(message) that puts the message into that div using textContent.

function showStatus(message) {
  newDiv.textContent = message;
  setTimeout(() => {
    newDiv.textContent = "";
  }, 2000);
}

// Part 6: Live stats, using traversing (15 marks)
//Write a function updateStats() and call it at the end of every add, delete, done and undo action.

function updateStats() {
  let total = list.children.length;
  let done = list.querySelectorAll(".completed").length;
  let remaining = total - done;
  stats.textContent = `Tasks: ${total} | Done:${done} | Remaining:${remaining}`;
}

//Also use these at least once each, logging the result to the console:
// .parentElement, to go from the task list up to #todo-app
// .firstElementChild and .lastElementChild, to log the first and last task
// .nextElementSibling, to log the task sitting directly after the first one

console.log(list.parentElement);
console.log(list.firstElementChild);
console.log(list.lastElementChild);
console.log(list.previousElementSibling);
console.log(list.nextElementSibling);

//Part 7: Hover highlight (5 marks)

list.addEventListener("mouseover", (event) => {
  let task=event.target.closest("li").classList.add("highlight");
  task.classList.add("highlight")
});

list.addEventListener("mouseout", (event) => {
  let task=event.target.closest("li")
  task.classList.remove("highlight");
});






