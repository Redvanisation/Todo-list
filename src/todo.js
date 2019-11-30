class Todo {
    constructor(project, title, description, date, priority, notes) {
        this.project = project;
        this.title = title;
        this.description = description;
        this.date = Date.now();
        this.priority = priority;
        this.notes = notes;
    }
}