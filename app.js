//Part 1: Selecting and wiring up (15 marks)
//At the top of app.js, select the elements you need and store them in const variables.
// Use getElementById to select #task-input, #add-task-btn and #task-list.
// Use innerHTML on #stats to set its starting content to the text Tasks: 0 wrapped in a <strong> tag.
// Use .style to give #stats a backgroundColor of light yellow and some padding,
// directly from JavaScript. This is the one place in this assignment where inline .style is the
// right tool, because it is a small one off change.
// Add a click listener to #add-task-btn. For now just have it call a function named addTask() that you will write in Part 2.

const input=document.getElementById("task-input")
const btn=document.getElementById("add-task-btn")
const list=document.getElementById("task-list")

// Use querySelector to select #main-heading, then change its text to "My Task List" using textContent.

const heading=document.querySelector("#main-heading")
heading.textContent="My Task List"

// Use innerHTML on #stats to set its starting content to the text Tasks: 0 wrapped in a <strong> tag.
let stats=document.getElementById("stats")
stats.innerHTML= " <strong>Tasks: 0</strong>"


// Use .style to give #stats a backgroundColor of light yellow and some padding,
// directly from JavaScript. This is the one place in this assignment where inline .style is the
// right tool, because it is a small one off change.

stats.style.backgroundColor="lightyellow"
stats.style.padding="20px"


