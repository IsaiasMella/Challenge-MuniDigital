import { NewTask } from "./Components";
import { MainLayout, ModalLayout, ProjectLayout } from "./Layout";

function App() {
  return (
    <main className="w-full h-screen overflow-y-hidden relative">
      <ModalLayout>
        <NewTask/>
      </ModalLayout>
      <MainLayout>
        <ProjectLayout>
          <p>ACA van las tarjetitas</p>
        </ProjectLayout>
      </MainLayout>
    </main>
  );
}

export default App;
