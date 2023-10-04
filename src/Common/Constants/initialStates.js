import { serverTimestamp } from "firebase/firestore";

export const initialTask = {
  title: "",
  description: "",
  status: "hacer",
  history: [],
  created: serverTimestamp(),
  lastUpdate: serverTimestamp(),
};

export const initialStateFilters = {
  search: "",
  status: "all",
};