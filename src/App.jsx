import { MainLayout, ProjectLayout } from "./Layout";

function App() {
  return (
    <main className="w-full h-screen overflow-y-hidden">
      <MainLayout>
        <ProjectLayout>
          <p>ACA van las tarjetitas</p>
        </ProjectLayout>
      </MainLayout>
    </main>
  );
}

export default App;
