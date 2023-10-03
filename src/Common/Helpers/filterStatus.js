export const filterStatus = (tasks, filterTasks) => {
  return filterTasks.status !== "all"
    ? tasks.filter((task) => task?.status === filterTasks.status)
    : tasks;
};
