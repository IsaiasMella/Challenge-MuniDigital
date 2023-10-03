import { useState, useMemo, useContext } from "react";

import { tasksContext } from "../../Context/TasksProvider";

import { collection, doc, writeBatch } from "firebase/firestore";
import { db } from "../../Data/Firebase";

import { CardLayout } from "../Card/CardLayout";
import { ProjectLayoutUI } from "./ProjectLayoutUI/ProjectLayoutUI";

import { getTaskById } from "../../Common/Utils";
import { filterSearch, filterStatus } from "../../Common/Helpers";

const initialStateFilters = {
  search: "",
  status: "all",
};

export const ProjectLayout = ({ handleModale, handleCurrentId }) => {
  const [filterTasks, setFilterTasks] = useState(initialStateFilters);

  const { tasks } = useContext(tasksContext);
  const deletedTaskHistory = collection(db, "deleted-tasks");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterTasks({ ...filterTasks, [name]: value });
  };

  const filteredTasksBySearch = useMemo(
    () => filterSearch(tasks, filterTasks),
    [tasks, filterTasks]
  );

  const filteredTasks = useMemo(
    () => filterStatus(filteredTasksBySearch, filterTasks),
    [tasks, filterTasks]
  );

  // const sortedTasks = useMemo(
  //   () => (filteredTasks ? sortSign(filteredSigns) : null),
  //   [filterTasks]
  // );

  const deleteTask = async (id) => {
    const taskDoc = doc(db, "tasks", id);
    const deleteTask = await getTaskById(id);
    const batch = writeBatch(db);
    const deletedTaskDoc = doc(deletedTaskHistory, id);

    batch.set(deletedTaskDoc, deleteTask);
    batch.delete(taskDoc);

    await batch.commit();
  };

  return (
    <ProjectLayoutUI
    handleChange={handleChange}
      handleModale={handleModale}
    >
      <tbody>
        <tr className="w-full grid grid-cols-4">
          <td className="overflow-y">
            {filteredTasks &&
              filteredTasks.map((task) => (
                <CardLayout
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  deleteTask={deleteTask}
                  handleCurrentId={handleCurrentId}
                />
              ))}
          </td>
        </tr>
        {/* <TaskList /> */}
      </tbody>
    </ProjectLayoutUI>
  );
};
