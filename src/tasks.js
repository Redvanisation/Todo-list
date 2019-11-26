/* eslint-disable no-param-reassign */
const Task = (title, description, dueDate, priority = 0, notes) => {
  dueDate = new Date().toLocaleString().substring(0, 10);

  return {
    title, description, dueDate, priority, notes,
  };
};

export default Task;
