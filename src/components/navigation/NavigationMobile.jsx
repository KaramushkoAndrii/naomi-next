import { NavigationList } from "./NavigationList";
// import { moksData } from "@/data/moks";
import { NavigationData } from "@/data/navigationData";

export const NavigationMobile = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      {/* mobile menu is there */}
      <NavigationList
        list={NavigationData}
        classNames="menu bg-base-200 min-h-full w-80 p-4"
      />
    </div>
  );
};
