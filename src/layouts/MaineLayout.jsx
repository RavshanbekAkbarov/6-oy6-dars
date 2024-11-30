import { Outlet } from "react-router-dom";
// komponentlar
import Navbar from "../components/navbar";

function MainLayout() {
    return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
