import {
  List,
  ChevronDown,
  ChevronUp,
  Fullscreen,
  Bell,
  Person,
  Wallet,
  Gear,
  Lock,
  Power,
} from "react-bootstrap-icons";
// import Dropdown from "react-dropdown";
import { Row, Col } from "reactstrap";
import { useContext, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import flag from "../../assets/flag.png";
import avatar from "../../assets/anime pic.jpg";
import "./header.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import userDataContext from "../../Context/AuthContext";
function Header(props) {
  const sideBarToggle = props.sideBarToggle;
  const [megaMenu, setmegaMenu] = useState(false);
  const [menu, setMenu] = useState(false);

  const navigate = useNavigate();
  const userName = useContext(userDataContext)
  const logoutAccount = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="navBar ">

      <div className="leftBarFlex">
        <div className="buttonListhamburger">
          <List className="list-hamburger" onClick={sideBarToggle} />
        </div>
        <div className="SearchBar">
          <form className="app-search d-none d-lg-block">
            <div className="position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <span className="bx bx-search-alt" />
            </div>
          </form>
        </div>
        <div className="megaMenu">
          <Dropdown
            className="dropdown-mega"
            isOpen={megaMenu}
            toggle={() => {
              setmegaMenu(!megaMenu);
            }}
          >
            <DropdownToggle className="btn header-item" caret tag="button">
              {" "}
              Mega Menu {megaMenu ? <ChevronUp /> : <ChevronDown />}
            </DropdownToggle>
            <DropdownMenu className="dropdown-megamenu">
              <Row>
                <Col sm={8}>
                  <Row>
                    <Col md={4}>
                      <h5>UI Components</h5>
                      <ul className="list-unstyled megamenu-list">
                        <li>Lightbox</li>
                        <li>Range Slider</li> <li>Sweet Alert</li>
                        <li>Rating</li>
                        <li>Forms</li>
                        <li>Tables</li>
                        <li>Charts</li>
                      </ul>
                    </Col>
                    <Col md={4}>
                      <h5>Applications</h5>
                      <ul className="list-unstyled megamenu-list">
                        <li>Ecommerce</li>
                        <li><Link to={"/calender"}>Calendar</Link></li>
                        <li>Email</li>
                        <li>Projects</li>
                        <li>Tasks</li>
                        <li>Contacts</li>
                      </ul>
                    </Col>
                    <Col md={4}>
                      <h5>Extra Pages</h5>
                      <ul className="list-unstyled megamenu-list">
                        <li>Light Sidebar</li>
                        <li>Compact Sidebar</li>
                        <li>Horizontal layout</li>
                        <li>Maintenance</li>
                        <li>Coming Soon</li>
                        <li>Timeline</li>
                        <li>FAQs</li>
                      </ul>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className="d-flex">
        <div className="imageFlag headerMargin">
          <img src={flag} alt="Flag" className="me-1" height="16" />
        </div>
        <div className="fullScreen headerMargin">
          <Fullscreen />
        </div>
        <div className="notification headerMargin">
          <Bell className="bellIcon" />
          <span className="badge bg-danger badgeStyle">3</span>
        </div>
        <div className="profileDetails headerMargin">
          <Dropdown
            isOpen={menu}
            toggle={() => setMenu(!menu)}
            className="d-inline-block"
          >
            <DropdownToggle
              className="btn header-item "
              id="page-header-user-dropdown"
              tag="button"
            >
              <img
                className="rounded-circle header-profile-user"
                src={avatar}
                alt="Header Avatar"
                height={30}
              />
              <span className="d-none d-xl-inline-block ms-2 me-1">
                {userName}
              </span>
              {menu ? <ChevronUp /> : <ChevronDown />}
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem tag="a" href="/profile">
                {" "}
                <Person className="headerIcons" />
                Profile{" "}
              </DropdownItem>
              <DropdownItem tag="a" href="/crypto-wallet">
                <Wallet className="headerIcons" />
                My Wallet
              </DropdownItem>
              <DropdownItem tag="a" href="#">
                <span className="badge bg-success float-end settingBadge">
                  11
                </span>
                <Gear className="headerIcons" />
                Settings
              </DropdownItem>
              <DropdownItem tag="a" href="auth-lock-screen">
                <Lock className="headerIcons" />
                Lock screen
              </DropdownItem>
              <div className="dropdown-divider " />

              <DropdownItem>
                <div className="logoutClick" onClick={logoutAccount}>
                  <Power className="headerIcons logoutIcon" />
                  <span>Logout</span>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="settings headerMargin">
          <Gear />
        </div>
      </div>
    </div>
  );
}

export default Header;
