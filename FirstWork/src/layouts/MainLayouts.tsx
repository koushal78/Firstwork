import { Outlet } from "react-router-dom";

import { Meteors } from "@/components/magicui/meteors";
import Nav from "@/components/Nav";

const MainLayout = () => {
  return (
    <div className="bg-black h-screen max-w-screen">
      <Meteors />
      <Nav />
      <Outlet /> 
    </div>
  );
};

export default MainLayout;