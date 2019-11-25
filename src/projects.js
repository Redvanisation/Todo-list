/* eslint-disable no-param-reassign */
const Project = (title, description, dueDate, priority, notes) => {
  dueDate = new Date().toLocaleString().substring(0, 10);

  return {
    title, description, dueDate, priority, notes,
  };
};

export default Project;
