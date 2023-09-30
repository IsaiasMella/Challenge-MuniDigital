import { NavBar } from "../NavBar/NavBar";
import { SideBar } from "../SideBar/SideBar";

export const MainLayout = ({ children }) => {
  return (
    <div className="h-full">
      <NavBar />
      <main className="flex h-full">
        <SideBar />
        {children}
      </main>
    </div>
  );
};
