import { SidebarItem } from "@/features/sidebar-item";
import { sideBar } from "../lib/sidebar-data";
const Sidebar = () => {
  return (
    <div className="w-[72px] rounded-2xl py-5 h-full flex flex-col items-center  bg-secondaryColor">
      <div className="bg-black w-[52px] flex items-center justify-center  h-[52px] rounded-full">
        <p className="text-white text-24px">B</p>
      </div>
      <ul className="mt-[50px] flex flex-col items-center gap-[50px]">
        {sideBar.map((item) => (
          <SidebarItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
