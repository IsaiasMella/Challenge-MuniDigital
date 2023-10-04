import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Data/Firebase";

export const getTaskById = async ( currentId) => {
  const task = await getDoc(doc(db, "tasks", currentId));
  return task.data()
};
