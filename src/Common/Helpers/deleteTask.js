import { collection, doc, writeBatch } from "firebase/firestore";
import { db } from "../../Data/Firebase";

import { getTaskById } from "../Utils";

const deletedTaskHistory = collection(db, "deleted-tasks");

export const deleteTask = async (id) => {
  const taskDoc = doc(db, "tasks", id);
  const deleteTask = await getTaskById(id);
  const batch = writeBatch(db);
  const deletedTaskDoc = doc(deletedTaskHistory, id);

  batch.set(deletedTaskDoc, deleteTask);
  batch.delete(taskDoc);

  await batch.commit();
};
