import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faCog, faEnvelope, faBars, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons/faChevronDown";
import HeaderSelect from "./HeaderSelect";
import {grupos, entidades} from "@/lib/constants/constants";

type HeaderProps = {
  menuOpen: boolean;
  toogleMenu: () => void;
};

const Header: React.FC<HeaderProps> = ({toogleMenu, menuOpen}) => {
  return (
    <nav id="header">
      <div
        className="cursor-pointer rounded-full bg-opacity-35 bg-white/20 w-[40px] h-[40px] flex items-center justify-center"
        onClick={toogleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faChevronLeft : faBars} width={25} />
      </div>
      <ul>
        <li>
          <HeaderSelect selectOptions={grupos} />
        </li>
        <li>
          <HeaderSelect selectOptions={entidades} />
        </li>
        <li className="icon">
          <FontAwesomeIcon icon={faBell} width={25} />
        </li>
        <li className="icon">
          <FontAwesomeIcon icon={faEnvelope} width={25} />
        </li>
        <li className="userInfo">
          <Image src={"/images/userIcon.png"} width={40} height={40} alt="Profile Image" />
          <div className="hidden md:block">
            <p className="text-[0.65rem] p-0 m-0">Admin</p>
            <p className="text-xs font-medium p-0 m-0 flex items-center gap-1">
              Jhon Doe
              <span className="text-[0.55rem] font-bold">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </p>
          </div>
        </li>
        <li className="icon">
          <FontAwesomeIcon icon={faCog} width={25} />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
