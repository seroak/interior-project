import { Outlet } from "react-router";
import { Header } from "@/components/shared";

const RootLayout = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
