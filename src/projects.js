/* eslint-disable no-param-reassign */
const Project = (title, description, dueDate, priority = false, notes) => {
  dueDate = new Date().toLocaleString().substring(0, 10);


  // eslint-disable-next-line no-return-assign
  const changePriority = () => priority = !priority;

  return {
    title, description, dueDate, priority, notes, changePriority,
  };
};

export default Project;
