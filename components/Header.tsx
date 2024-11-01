import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faCog, faEnvelope, faUser, faBars, faX} from "@fortawesome/free-solid-svg-icons";

type HeaderProps = {
  menuOpen: boolean;
  toogleMenu: () => void;
};

const Header: React.FC<HeaderProps> = ({toogleMenu, menuOpen}) => {
  return (
    <nav id="header">
      <div className="cursor-pointer" onClick={toogleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faX : faBars} width={25} />
      </div>
      <ul>
        <li className="icon">
          <FontAwesomeIcon icon={faBell} width={15} />
        </li>
        <li className="icon">
          <FontAwesomeIcon icon={faEnvelope} width={15} />
        </li>
        <li className="userInfo">
          <FontAwesomeIcon icon={faUser} width={15} />
        </li>
        <li className="icon">
          <FontAwesomeIcon icon={faCog} width={15} />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
