"use client";
import useDashboard from "components/app/shared/hooks/useDashboard";
import useScreenSize from "components/app/shared/hooks/useScreenSize";
import ListCategories from "./ListCategories";

const Sidebar = () => {
  const { openNavbar, setOpenNavbar, categories } = useDashboard();
  const { windowWidth } = useScreenSize();
  
  const handleBgSidebar = () => {
    if (!openNavbar) return false;

    return windowWidth <= 767 && !!windowWidth;
  };

  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-30 w-60 h-screen transition-transform ${
          !openNavbar && "-translate-x-full"
        } md:translate-x-0 bg-[#1c2434]`}
        aria-label="Sidebar"
      >
        <div className="s p-4 border-b-[1px] border-slate-200">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
        </div>
        <div>
         <ListCategories categories={categories}/>
        </div>
      </aside>
      {handleBgSidebar() && (
        <div
          className={`fixed top-0 left-0  z-20 bg-slate-500 w-screen h-screen bg-opacity-60  ${
            !openNavbar && "-translate-x-full"
          }  md:translate-x-0`}
          onClick={() => setOpenNavbar(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
