import { NavBar } from "../NavBar/NavBar";
import { SideBar } from "../SideBar/SideBar";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main className="flex">
        <SideBar />
        {children}
      </main>
    </div>
  );
};
