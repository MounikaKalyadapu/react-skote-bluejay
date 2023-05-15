import "./sidebar.scss";
import "react-dropdown/style.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import logoBluejay from "../assets/bluejayNoBackground.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  HouseHeart,
  Calendar3,
  ChatSquare,
  FileEarmarkText,
  Shop,
  CurrencyBitcoin,
  Envelope,
  Receipt,
  Kanban,
  ListCheck,
  PersonLinesFill,
  CardText,
  Briefcase,
  PersonCircle,
  FilterCircle,
  Eraser,
  ListTask,
  BarChartFill,
  BoundingBoxCircles,
  GeoAlt,
  Share,
  ChevronUp,
  ChevronDown,
  LayoutTextWindow,
} from "react-bootstrap-icons";
function SideBar() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logoBluejay} width="20%" alt="bluejayLogo" />
        BLUEJAY
      </div>
      <ul className="sideBarDropDown">
        <li className="menu-title">Menu</li>
      <li className="dropDown dashboard">
          <HouseHeart className="icons homeIcon" />
          <Dropdown
            isOpen={menu}
            toggle={() => setMenu(!menu)}
            className="d-inline-block"
          >
            <DropdownToggle
              className="btn dashboardDropDown"
              id="page-header-user-dropdown"
              tag="button"
            >
              <span className="d-none d-xl-inline-block ms-2 me-1">
                Dashboard
              </span>
              {menu ? <ChevronUp /> : <ChevronDown />}
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem>
                <Link to="/">Default</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/saas">Saas</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/crypto">Crypto</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/blog">Blog</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/job">Job</Link>{" "}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li className="dropDown">
          <LayoutTextWindow className="icons layoutWindow" />
          <span>
            <Link to="/layout">Layout</Link>
          </span>
        </li>
        <li className="menu-title">Apps</li>
        <ul>
          <li className="dropDown">
            <Calendar3 className="icons calendericon" />
          
            <span>  <Link to="/calender">Calender</Link></span>
          </li>
          <li>
            {" "}
            <ChatSquare className="icons" /> <span><Link to="/chat">Chat</Link></span>
          </li>
          <li>
            {" "}
            <FileEarmarkText className="icons" /> <span>File Manager</span>
          </li>
          <li>
            {" "}
            <Shop className="icons" /> <span>Ecommerce</span>
          </li>
          <li>
            {" "}
            <CurrencyBitcoin className="icons" /> <span>Crypto</span>
          </li>
          <li>
            <Envelope className="icons" /> <span>Email</span>
          </li>
          <li>
            <Receipt className="icons" /> <span>Invoices</span>
          </li>
          <li>
            <Kanban className="icons" /> <span>Projects</span>
          </li>
          <li>
            <ListCheck className="icons" /> <span>Tasks</span>
          </li>
          <li>
            <PersonLinesFill className="icons" /> <span>Contacts</span>
          </li>
          <li>
            <CardText className="icons" /> <span>Blog</span>
          </li>
          <li>
            <Briefcase className="icons" /> <span>Jobs</span>
          </li>
        </ul>
        <li className="menu-title">Pages</li>{" "}
        <ul>
          <li>
            {" "}
            <PersonCircle className="icons" /> <span>Authentication</span>
          </li>
          <li>
            {" "}
            <FileEarmarkText className="icons" /> <span>Utility</span>
          </li>
        </ul>
        <li className="menu-title">Components</li>{" "}
        <ul>
          <li>
            <FilterCircle className="icons" /> <span>UI Elements</span>
          </li>
          <li>
            <Eraser className="icons" /> <span>Forms</span>
          </li>
          <li>
            {" "}
            <ListTask className="icons" /> <span>Tables</span>
          </li>
          <li>
            <BarChartFill className="icons" /> <span>Charts</span>
          </li>
          <li>
            <BoundingBoxCircles className="icons" /> <span>Icons</span>
          </li>
          <li>
            {" "}
            <GeoAlt className="icons" /> <span>Maps</span>
          </li>
          <li>
            {" "}
            <Share className="icons" /> <span>Multi Level</span>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default SideBar;
