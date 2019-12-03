class Todo {
  constructor(project, title, description, date = new Date().toLocaleString().substring(0, 10),
    priority = 0, notes, done = false) {
    this.project = project;
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.notes = notes;
    this.done = done;
  }
}

export default Todo;
