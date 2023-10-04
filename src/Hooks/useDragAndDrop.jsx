import { useContext } from "react";

import { tasksContext } from "../Context/TasksProvider";

import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../Data/Firebase";

export const useDragAndDrop = () => {
  const { tasks } = useContext(tasksContext);

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

  return { startDrag, draggingOver, onDrop };
};
