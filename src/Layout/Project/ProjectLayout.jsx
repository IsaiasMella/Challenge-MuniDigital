import { useState, useMemo, useContext } from "react";

import { tasksContext } from "../../Context/TasksProvider";

import { updateDoc, collection, doc, writeBatch, serverTimestamp } from "firebase/firestore";
import { db } from "../../Data/Firebase";

import { ProjectLayoutUI } from "./ProjectLayoutUI/ProjectLayoutUI";

import { getTaskById } from "../../Common/Utils";
import { filterSearch, filterStatus } from "../../Common/Helpers";
import { NavBar, Card } from "../../Components";

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

  const deleteTask = async (id) => {
    const taskDoc = doc(db, "tasks", id);
    const deleteTask = await getTaskById(id);
    const batch = writeBatch(db);
    const deletedTaskDoc = doc(deletedTaskHistory, id);

    batch.set(deletedTaskDoc, deleteTask);
    batch.delete(taskDoc);

    await batch.commit();
  };

  const startDrag = (e, task) => {
    e.dataTransfer.setData("text/plain", task.id);
  };

  const draggingOver = (e) => {
    e.preventDefault();
  };

  const onDrop = async (e, newStatus) => {
    const taskID = e.dataTransfer.getData("text/plain");
    const item = tasks.find((task) => task.id == taskID);
    const newItem = {
      ...item,
      lastUpdate: serverTimestamp(),
      status: newStatus,
      history: [...item.history, item],
    };

    await updateDoc(doc(db, "tasks", taskID), newItem);
  };

  return (
    <div className="h-full">
      <NavBar handleModale={handleModale} handleChange={handleChange} />
      <ProjectLayoutUI handleChange={handleChange} handleModale={handleModale}>
        <tbody>
          <tr className=" w-11/12 m-auto gap-4 grid grid-cols-4">
            <td
              draggable
              onDragOver={(e) => draggingOver(e)}
              onDrop={(e) => onDrop(e, "hacer")}
              className="overflow-y flex flex-col gap-3 bg-sky-50/50 p-4 rounded-b-xl"
            >
              {filteredTasks &&
                filteredTasks.map((task) => {
                  if (task.status === "hacer") {
                    return (
                      <div
                        draggable
                        onDragStart={(e) => startDrag(e, task)}
                        key={task.id}
                      >
                        <Card
                          id={task.id}
                          title={task.title}
                          description={task.description}
                          deleteTask={deleteTask}
                          handleCurrentId={handleCurrentId}
                          startDrag={startDrag}
                        />
                      </div>
                    );
                  }
                })}
            </td>
            <td
              onDragOver={(e) => draggingOver(e)}
              onDrop={(e) => onDrop(e, "en curso")}
              className="overflow-y flex flex-col gap-3 bg-amber-50/50 p-4 rounded-b-xl"
            >
              {filteredTasks &&
                filteredTasks.map((task) => {
                  if (task.status === "en curso") {
                    return (
                      <div
                        draggable
                        onDragStart={(e) => startDrag(e, task)}
                        key={task.id}
                      >
                        <Card
                          id={task.id}
                          title={task.title}
                          description={task.description}
                          deleteTask={deleteTask}
                          handleCurrentId={handleCurrentId}
                          startDrag={startDrag}
                        />
                      </div>
                    );
                  }
                })}
            </td>
            <td className="overflow-y flex flex-col gap-3 bg-emerald-50/50 p-4 rounded-b-xl"></td>
            <td className="overflow-y flex flex-col gap-3 bg-rose-50/50 p-4 rounded-b-xl"></td>
          </tr>
        </tbody>
      </ProjectLayoutUI>
    </div>
  );
};
