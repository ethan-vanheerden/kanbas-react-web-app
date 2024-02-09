import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt,
  FaInbox, FaHistory, FaDesktop, FaArrowCircleRight, FaRegQuestionCircle
} from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox", icon: <FaInbox className="fs-2" /> },
    { label: "History", icon: <FaHistory className="fs-2" /> },
    { label: "Studio", icon: <FaDesktop className="fs-2" /> },
    { label: "Commons", icon: <FaArrowCircleRight className="fs-2" /> },
    { label: "Help", icon: <FaRegQuestionCircle className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li>
        <Link to="https://northeastern.edu">
          <img className="wd-nu-image" src="../../../images/nu_logo.jpg" alt="" />
        </Link>
      </li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}>
            <div className={link.label === "Account" ? "wd-pofile-icon" : "wd-other-icon" }>
              {link.icon}
            </div>
            <div>
              {link.label}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;