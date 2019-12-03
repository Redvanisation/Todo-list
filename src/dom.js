import { storeProject, getProjects, storeTodo, storeEditTodos, removeProject } from './storage';
import { showForm, hideForm, showHide, showNewForm, disabledDiv, showMessage } from './helpers';
import Todo from './todo';

// Add / Remove project inputs
const pTitleinput = document.querySelector('#project-title');
const pTitleBtn = document.querySelector('#submit-project');
const pRemoveBtn = document.querySelector('#delete-project-btn');

// Show project inputs
const projectsDiv = document.querySelector('#display-projects');

// Todos From
const TodoFormDiv = document.querySelector('#new-task');
const cancelForm = document.querySelector('#form-btn-cancel');
const submitForm = document.querySelector('#form-btn-submit');
const editForm = document.querySelector('#form-btn-edit');
const nTasksBtn = document.querySelector('#new-task-btn');
const projectTodoH2 = document.querySelector('#task-project-h2');

// Todo form inputs
const todoTitleInput = document.querySelector('#task-title');
const todoDescriptionInput = document.querySelector('#task-description');
const todoDateInput = document.querySelector('#task-date');
const todoPriorityInput = document.querySelector('#task-priority');
const todoNotesInput = document.querySelector('#task-notes');

// Display Todos
const displayTodosDiv = document.querySelector('#display-tasks');
const todoContainer = document.querySelector('#todo-container');

// Misc
const areSure = document.querySelector('#are-sure');
const yess = document.querySelector('#btn-yes');
const noo = document.querySelector('#btn-no');

const projectDelConfirm = document.querySelector('#project-del-confirm');
const yesP = document.querySelector('#btn-p-yes');
const noP = document.querySelector('#btn-p-no');

// current project variable
let currentProject = '';
let todoTasks = [];
let currentTodo = '';
let toDltTodo = '';
let doneTitle = '';
let done = false;


// test button
// const cons = document.querySelector('#console');

const showEditForm = (title) => {
  currentTodo = '';
  showForm(TodoFormDiv);
  showForm(editForm);
  hideForm(submitForm);
  currentTodo = title;
};

const setDone = (title) => {
  doneTitle = '';
  doneTitle = title;
  console.log(doneTitle);
};

// Empty the todos container, get the todos array from the storage,
// loop through it and append a div with its content to the todos container
const displayTodos = () => {
  displayTodosDiv.innerHTML = '';

  const btnDone = () => {
    const one = document.createElement('button');
    one.setAttribute('class', 'submit-btn');
    one.addEventListener('click', () => disabledDiv(one));
    one.innerHTML = 'Done/Undone';
    return one;
  };

  // const btnPriority = () => {
  //   const prio = document.createElement('button');
  //   prio.setAttribute('class', 'submit-btn');
  //   prio.addEventListener('click', () => changePriority(prio));

  // }

  const todos = JSON.parse(localStorage.getItem(currentProject));
  todos.forEach((todo) => {

    const todoDiv = document.createElement('div');
    todoDiv.setAttribute('class', 'tasks-list');
    todoDiv.setAttribute('id', 'tasks-list');
    
    todoDiv.innerHTML = `
      <div id="done-div"></div>
      <h3 class="task-title" id="todo-title"><span class="todo-h3"> ${todo.title} </span></h3>
      <p class="task-description"><span class="todo-titles"> Description:</span> ${todo.description}</p>
      <p class="task-date"><span class="todo-titles">Date:</span> ${todo.date}</p>
      <p class="task-priority"><span class="todo-titles">Priority:</span> ${todo.priority}</p>
      <p class="task-notes"><span class="todo-titles">Notes:</span> ${todo.notes}</p>
      <button id="btn-edit-todo" class="submit-btn card-btn" data-name="${todo.title}">Edit</button>
      <button id="btn-delete-todo" class="submit-btn btn-delete" data-delete="${todo.title}">Delete</button>
      `;

    displayTodosDiv.appendChild(todoDiv);
    todoDiv.appendChild(btnDone());

    const doneBtn = document.querySelectorAll('#done');
    const cards = document.querySelectorAll('#tasks-list');

    cards.forEach((card) => {
      const priorityBtn = card.querySelector('#btn-priority');
      if (done === true) priorityBtn.classList.add('hidden');
    });
    
    const btnsEdit = document.querySelectorAll('#btn-edit-todo');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', () => showEditForm(btn.dataset.name));
    });

    const btnsDelete = document.querySelectorAll('#btn-delete-todo');
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', () => showForm(areSure));
    });
  });
};


// Creating a new instance of the project then calling the local storage function
const addProject = () => {
  if (pTitleinput.value === '') {
    return showMessage('Project title required.');
  }
  const project = new Todo();
  project.project = pTitleinput.value;
  storeProject(project.project);
  // Setting the current project variable to the project name to track it later
  currentProject = project.project;
};

// Displaying the Added project as soon as it's added to the local storage
const displayProjects = () => {
  const projects = getProjects();
  projectsDiv.innerHTML = '';

  projects.forEach((project) => {
    const projectsContainer = document.createElement('h2');
    projectsContainer.setAttribute('class', 'project-title');
    projectsContainer.textContent = project;
    projectsDiv.appendChild(projectsContainer);
  });

  const pjTitles = document.querySelectorAll('.project-title');
  // Displaying the projects / setting the current project var to the title's content
  // setting the todo array to the list of project's task on each click on the project title
  // setting the title of the active project to the clicked project
  // Calling the display todo function to show the todos on every click on a project title
  // Displaying the add new tasks button after clicking on the project's title

  pjTitles.forEach((title) => {
    title.addEventListener('click', () => {
      currentProject = title.textContent;
      todoTasks = JSON.parse(localStorage.getItem(currentProject));
      projectTodoH2.textContent = `Current Project: ${currentProject}`;
      displayTodos();
      showForm(nTasksBtn);
      showForm(pRemoveBtn);
      showForm(todoContainer);
    });
  });
};

/* Get the values from the form input and push it into the todos array,
then empty the inputs and call the local storage function to save the array into it
then hide call the function to hide the form at last */

const addTodo = () => {
  if (todoTitleInput.value == '') {
    return showMessage('Title of task required.')
  } 
  if (todoDescriptionInput.value == '') {
    return showMessage('Description of task required.')
  } 
  if (todoDateInput.value == '') {
    return showMessage('DateDue of task required.')
  }
  const project = new Todo(currentProject, todoTitleInput.value,
    todoDescriptionInput.value, todoDateInput.value, todoPriorityInput.value, todoNotesInput.value);

  todoTasks.push(project);
  todoTitleInput.value = '';
  todoDescriptionInput.value = '';
  todoDateInput.value = '';
  todoPriorityInput.value = 'Normal';
  todoNotesInput.value = '';

  storeTodo(project.project, todoTasks);
  hideForm(TodoFormDiv);
};


const editTodo = () => {
  if (todoTitleInput.value == '') {
    return showMessage('Title of task required.')
  } 
  if (todoDescriptionInput.value == '') {
    return showMessage('Description of task required.')
  } 
  if (todoDateInput.value == '') {
    return showMessage('DateDue of task required.')
  }

  todoTasks.forEach((todo) => {
    if (todo.title === currentTodo) {
      todo.title = todoTitleInput.value;
      todo.description = todoDescriptionInput.value;
      todo.date = todoDateInput.value;
      todo.priority = todoPriorityInput.value;
      todo.notes = todoNotesInput.value;
    }
  });

  storeTodo(currentProject, todoTasks);

  todoTitleInput.value = '';
  todoDescriptionInput.value = '';
  todoDateInput.value = '';
  todoPriorityInput.value = 'Normal';
  todoNotesInput.value = '';

  hideForm(TodoFormDiv);
  displayTodos();
};

const removeTodos = () => {
  const theTasks = todoTasks;
  let ind = 0;

  theTasks.forEach((todo) => {
    if (todo.title === toDltTodo) {
      ind = theTasks.indexOf(todo);
    }
  });

  theTasks.splice(ind, 1);
  storeTodo(currentProject, theTasks);
  hideForm(areSure);
  displayTodos();
};

const handleRemoveProject = () => {
  removeProject(currentProject);
  hideForm(todoContainer);
  hideForm(projectDelConfirm);
  currentProject = '';
  displayProjects();
};

pTitleBtn.addEventListener('click', addProject);
pTitleBtn.addEventListener('click', displayProjects);
cancelForm.addEventListener('click', () => hideForm(TodoFormDiv));
submitForm.addEventListener('click', addTodo);
submitForm.addEventListener('click', displayTodos);
nTasksBtn.addEventListener('click', () => showNewForm(TodoFormDiv, submitForm, editForm));
editForm.addEventListener('click', editTodo);

yess.addEventListener('click', removeTodos);
noo.addEventListener('click', () => hideForm(areSure));

// cons.addEventListener('click', displayTodos);

pRemoveBtn.addEventListener('click', () => showForm(projectDelConfirm));
yesP.addEventListener('click', handleRemoveProject);
noP.addEventListener('click', () => hideForm(projectDelConfirm));

export {
  addProject,
  displayProjects,
};
