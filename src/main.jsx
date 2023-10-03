import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TasksProvider } from "./Context/TasksProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TasksProvider>
    <App />
  </TasksProvider>
);
