/* eslint-disable */
import Project from './project';
import Task from './tasks';
import './style/style.css';
import { brotliDecompressSync } from 'zlib';

// Task inputs
//const tasksForm = document.querySelector('#new-task');

// const submitTask = document.querySelector('#submit');

// General elements
const clear = document.querySelector('#clear');
const displayProject = document.querySelector('#display-project');
const displayTasks = document.querySelector('#display-tasks');
const newTask = document.querySelector('#new-task');
const bd = document.querySelector('body');
let lsProjects = [];

// Project inputs
const projectTitle = document.querySelector('#project-title');
const submitProject = document.querySelector('#submit-project');
// const newProjectForm = document.querySelector('.new-project');

function addTask(elem) {
  let key = elem.dataset.name;

  const projectSelected = lsProjects.find((item) => item.title == key);

  const taskTitle = document.querySelector('#task-title');
  const description = document.querySelector('#description');
  const date = document.querySelector('#date');
  const priority = document.querySelector('#priority');
  const notes = document.querySelector('#notes');

  const taskValues = Task(taskTitle.value, description.value, date.value, priority.value, notes.value);

  projectSelected.tasks.push(taskValues);
  taskTitle.value = '';
  description.value = '';
  date.value = '';
  notes.value = '';
  showTasks(elem);
  newTask.classList.add('hidden');
}

function showTaskForm(elem) {
  newTask.innerHTML = `
      <input type="text" placeholder="Title" id="task-title" class="task-title input" required><br>
      <input type="text" placeholder="Description" id="description" class="task-description input"><br>
      <input type="date" id="date" class="task-date input"><br>
      <label id="checkbox-label" class="task-label input">High Priority:</label>

      <select id="priority" class="task-options input">
        <option value="Low" class="task-option">Low</option> 
        <option value="Normal" class="task-option" selected>Normal</option>
        <option value="High" class="task-option">High</option>
      </select><br>

      <textarea name="notes" id="notes" class="task-notes input" cols="30" rows="10"></textarea><br>
      </br>`;

  newTask.classList.toggle('hidden');
  
  const btnSummit = document.createElement('button');
  const btnCancel = document.createElement('button');
  
  btnSummit.addEventListener('click', () => addTask(elem));
  btnCancel.addEventListener('click', closeTasksForm);
  
  btnSummit.setAttribute('class', 'submit-btn mr-1');
  btnCancel.setAttribute('class', 'submit-btn');

  btnSummit.innerHTML = 'Add Task'
  btnCancel.innerHTML = 'Cancel'
  
  newTask.appendChild(btnSummit);
  newTask.appendChild(btnCancel);
  
}



// Function to show the project's related tasks
function showTasks(elem){
  let key = elem.dataset.name;

  // elem.classList.toggle('clicked');
  displayTasks.innerHTML = '';

  const btnNewTask = document.createElement('button');
  btnNewTask.setAttribute('class', 'submit-btn margin');
  btnNewTask.innerHTML = 'New Task';
  btnNewTask.addEventListener('click', () => showTaskForm(elem));
  displayTasks.appendChild(btnNewTask);

  const projectSelected = lsProjects.find((item) => item.title == key);

  projectSelected.tasks.forEach((task) => {
    const taskDetails = document.createElement('div');
    taskDetails.setAttribute('class', 'tasks-list');
    taskDetails.innerHTML += ` <h3 class="tsk-title"> ${task.title} </h3>
      <p><span class="tsk-heading">Description:</span> <span class="tsk-detail">${task.description} </span></p>
      <p><span class="tsk-heading">DueDate:</span> <span class="tsk-detail">${task.dueDate} </span></p>
      <p><span class="tsk-heading">Priority:</span> <span class="tsk-detail">${task.priority} </span></p>
      <p><span class="tsk-heading">Notes:</span> <span class="tsk-detail">${task.notes} </span></p>`;
    displayTasks.appendChild(taskDetails);
  });

}

// Funtion to show the created projects
function showProjects() {
  if (localStorage.length == 0) return;
  lsProjects = JSON.parse(localStorage.getItem('projects'));

  displayProject.innerHTML = ''; // clear div
  for (const project of lsProjects) {
    const h2 = document.createElement('h2');
    h2.setAttribute('class', 'project-title');
    h2.setAttribute('data-name', project.title );
    h2.innerHTML = project.title;
    displayProject.appendChild(h2);
  }
  const projectH2 = document.querySelectorAll('.project-title');
  projectH2.forEach((elem) => {
    elem.addEventListener('click', () => showTasks(elem));
  });

}

// Function to add a new project
function addProject() {
  if (!projectTitle.value) return alert('Title must be provided!');
  let project = Project(projectTitle.value);

  lsProjects.push(project);
  
  localStorage.setItem("projects", JSON.stringify(lsProjects));
  showProjects();
}

// function to clear localStorage
function clearLocalStore() {
  if (localStorage.length == 0) return;
  localStorage.clear();
  lsProjects = [];
  displayProject.innerHTML = '';
  console.log(localStorage);
  showProjects();
}

function closeTasksForm() {
  newTask.classList.add('hidden');
}

submitProject.addEventListener('click', addProject);
// submitTask.addEventListener('click', handleClick);
clear.addEventListener('click', clearLocalStore);

