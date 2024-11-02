"use client";
import {faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
type SidebarProps = {
  menuOpen: boolean;
  toogleMenu: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({menuOpen, toogleMenu}) => {
  return (
    <aside
      id="sidebar"
      className={`h-svh p-0 lg:p-8 absolute left-0 lg:relative bg-foreground 
      ${menuOpen ? "w-[70%] lg:w-[15%]" : "collapsed"}`}>
      <div className="text-white">
        <FontAwesomeIcon icon={faX} onClick={toogleMenu} />
      </div>
    </aside>
  );
};

export default Sidebar;
