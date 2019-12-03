class Todo {
  constructor(project, title, description, date = new Date().toLocaleString().substring(0, 10),
    priority = 'Normal', notes) {
    this.project = project;
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.notes = notes;
  }
}

export default Todo;
