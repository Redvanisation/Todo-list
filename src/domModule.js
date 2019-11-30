import { addProject } from './storage';
import Task from './tasks';

const clear = document.querySelector('#clear');
const displayProject = document.querySelector('#display-project');
const displayTasks = document.querySelector('#display-tasks');
const newTask = document.querySelector('#new-task');
const bd = document.querySelector('body');

// Project inputs
const projectTitle = document.querySelector('#project-title');
const submitProject = document.querySelector('#submit-project');

let lsProjects = [];

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


function closeTasksForm() {
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

  btnSummit.innerHTML = 'Add Task';
  btnCancel.innerHTML = 'Cancel';
  
  newTask.appendChild(btnSummit);
  newTask.appendChild(btnCancel);
  
}

function changePriority(div) {
  if (div.className.includes('Normal')) {
    div.className = div.className.replace('Normal', 'High');
    div.innerHTML = div.className.substring(13, div.className.length);
  } else if (div.className.includes('High')) {
    div.className = div.className.replace('High', 'Low');
    div.innerHTML = div.className.substring(13, div.className.length);
  } else {
    div.className = div.className.replace('Low', 'Normal');
    div.innerHTML = div.className.substring(13, div.className.length);
  }
}

function showTasks(elem) {
  const key = elem.dataset.name;

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
      <p><span class="tsk-heading">Notes:</span> <span class="tsk-detail">${task.notes} </span></p>
      <button class="btn-priority ${task.priority}">${task.priority}</button>
      <button class=""></button>
      <button class=""></button>`;
    displayTasks.appendChild(taskDetails);
    const btnPriority = document.querySelector('.btn-priority');
    btnPriority.addEventListener('click', () => changePriority(btnPriority));
  });
}



function showProjects() {
  if (localStorage.length == 0) return;
  lsProjects = JSON.parse(localStorage.getItem('projects'));

  displayProject.innerHTML = ''; // clear div

  lsProjects.forEach((project) => {
    const h2 = document.createElement('h2');
    h2.setAttribute('class', 'project-title');
    h2.setAttribute('data-name', project.title );
    h2.innerHTML = project.title;
    displayProject.appendChild(h2);
  });

  const projectH2 = document.querySelectorAll('.project-title');
  projectH2.forEach((elem) => {
    elem.addEventListener('click', () => showTasks(elem));
  });

}

submitProject.addEventListener('click', addProject);


export {
  showProjects,
  showTasks,
  lsProjects,
  addTask,
  showTaskForm,
  submitProject,
  projectTitle,
};
