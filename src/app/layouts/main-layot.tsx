import { Sidebar } from "@/widgets/sidebar";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen h-screen px-20 py-10 flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default MainLayout;
