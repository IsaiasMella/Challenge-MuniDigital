import { useState } from "react";
import { TaskForm } from "./Components";
import { MainLayout, ModalLayout, ProjectLayout } from "./Layout";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState("");

  const handleModale = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleCurrentId = (id) => {
    setCurrentId(id);
    handleModale()
  };
  return (
    <main className="w-full h-full relative">
      {modalIsOpen && (
        <ModalLayout handleModale={handleModale}>
          <TaskForm
            handleModale={handleModale}
            handleCurrentId={handleCurrentId}
            currentId={currentId}
          />
        </ModalLayout>
      )}
      <MainLayout>
        <ProjectLayout handleModale={handleModale} handleCurrentId={handleCurrentId} />
      </MainLayout>
    </main>
  );
}

export default App;
