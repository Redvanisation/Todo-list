/* eslint-disable */
import Project from './project';
import Task from './tasks';
import './style/style.css';

// Task inputs
//const tasksForm = document.querySelector('#new-task');

// const submitTask = document.querySelector('#submit');

// General elements
const clear = document.querySelector('#clear');
const displayProject = document.querySelector('#display-project');
const displayTasks = document.querySelector('#display-tasks');
const newTask = document.querySelector('#new-task');
let lsProjects = [];

// Project inputs
const projectTitle = document.querySelector('#project-title');
const submitProject = document.querySelector('#submit-project');
const cancelProject = document.querySelector('#cancel-project');
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
      <input type="text" placeholder="Title" id="task-title" required><br>
      <input type="text" placeholder="Description" id="description"><br>
      <input type="date" id="date"><br>
      <label id="checkbox-label">High Priority:</label>

      <select id="priority">
        <option value="Low">Low</option> 
        <option value="Normal" selected>Normal</option>
        <option value="High">High</option>
      </select><br>

      <textarea name="notes" id="notes" cols="30" rows="10"></textarea><br>
      </br>`;

  newTask.classList.toggle('hidden');
  const btnSummit = document.createElement('button');
  btnSummit.addEventListener('click', () => addTask(elem));
  btnSummit.innerHTML = 'Add Task'
  newTask.appendChild(btnSummit);
  
}



// Function to show the project's related tasks
function showTasks(elem){
  let key = elem.dataset.name;
  displayTasks.innerHTML = '';

  const btnNewTask = document.createElement('button');
  btnNewTask.innerHTML = 'New Task';
  btnNewTask.addEventListener('click', () => showTaskForm(elem));
  displayTasks.appendChild(btnNewTask);
  
  const projectSelected = lsProjects.find((item) => item.title == key);

  projectSelected.tasks.forEach((task) => {
    const taskDetails = document.createElement('div');
    taskDetails.setAttribute('class', 'tasks-list');
    taskDetails.innerHTML += ` <h3> ${task.title} </h3>
      <p>Description: ${task.description} </p>
      <p>DueDate: ${task.dueDate} </p>
      <p>Priority: ${task.priority} </p>
      <p>Notes: ${task.notes} </p>`;
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


submitProject.addEventListener('click', addProject);
// submitTask.addEventListener('click', handleClick);
clear.addEventListener('click', clearLocalStore);

