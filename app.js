//Part 1: Selecting and wiring up (15 marks)
//At the top of app.js, select the elements you need and store them in const variables.

// Use getElementById to select #task-input, #add-task-btn and #task-list.

const taskInput = document.getElementById("task-input");
const btn = document.getElementById("add-task-btn");
const list = document.getElementById("task-list");

// Use querySelector to select #main-heading, then change its text to "My Task List" using textContent.

const heading = document.querySelector("#main-heading");
heading.textContent = "My Task List";

// Use innerHTML on #stats to set its starting content to the text Tasks: 0 wrapped in a <strong> tag.

let stats = document.getElementById("stats");
stats.innerHTML = " <strong>Tasks: 0</strong>";

// Use .style to give #stats a backgroundColor of light yellow and some padding,
// directly from JavaScript. This is the one place in this assignment where inline .style is the
// right tool, because it is a small one off change.

stats.style.backgroundColor = "lightyellow";
stats.style.padding = "20px";

// Add a click listener to #add-task-btn. For now just have it call a function named addTask() that you will write in Part 2.

btn.addEventListener("click", addTask);

// Part 2: Add a task, using create then configure then append (20 marks)
//Write a function addTask(). Do not put this logic inline inside the listener. The function is called from the listener, keeping the pattern from the Day 2 class.
// When it runs:

// Read taskInput.value.
// If the input is empty, stop there and add nothing. Use an if check, do not add blank tasks.
// Otherwise build a new <li> with createElement and configure it:
// set its textContent to the text the user typed
// give it the class task using classList.add
// give it a data-id attribute using setAttribute, using a counter that goes up by one for each task added

// Create two buttons with createElement and put them inside the <li>:
// a Done button with the class done-btn and the text Done
// a Delete button with the class delete-btn and the text X
// Append the <li> to #task-list using appendChild.
// Clear the input with taskInput.value = "" so it is ready for the next task.
// Call updateStats() and showStatus("Item added successfully!"), both written further down.
// One more thing: add a second button somewhere in your #input-area labelled Add Urgent Task.
// It does the same as addTask() except it uses prepend instead of appendChild, so an urgent
// task goes to the top of the list.

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
  taskInput.value=""
  // updateStats();
  // showStatus("Item added successfully!");

 if(isUrgent===true)
  return list.prepend(listItem)
else
  return list.appendChild(listItem)
}

let urgentBtn=document.getElementById("urgent-btn")
urgentBtn.addEventListener("click",()=>{
  addTask(true)
})


// Part 3: Delete, using event delegation (20 marks)
//Attach exactly one click listener to #task-list. Not one per button.
// Inside it, use event.target to find out what was actually clicked.
// Check whether event.target has the class delete-btn using classList.contains.
// If it does, use .closest("li") to get the whole task element, not just the button, and
// remove it with .remove().
// Call updateStats() and showStatus("Item removed successfully!") afterwards.

list.addEventListener("click",(event)=>{
  if(event.target.classList.contains("delete-btn"))
     event.target.closest("li").remove()
   if( event.target.classList.contains("done-btn"))
   {let li = event.target.closest("li")
  li.classList.toggle("completed")
  
  if(li.classList.contains("completed")){
    event.target.textContent="undo"
  }
  else{
    event.target.textContent="Done"
  }
}})


