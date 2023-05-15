import "react-dropdown/style.css";
import { Routes, Route } from "react-router-dom";

import Footer from "./footer/footer";
import Header from "./header/header";
import "./main.scss";
import Layout from "./switchComponents/Layout";
import Dashboard from "./switchComponents/Dashboard";
import NotFound from "./NotFound";
import InfoTileContext from "../Context/InfoTileContext";
import Calender from "./switchComponents/Calender";
import Chat from "./switchComponents/Chat";
function Main({ sideBarToggle }) {
  const infoArray = [{
    titleName:'Orders',
    amount:9877,
    iconName:"BoxSeam",
    fromPrevious:'+2'
  },{
    titleName:'Revenue',
    amount:878987,
    iconName:"Archive",
    fromPrevious:'+10'
  },{
    titleName:'Average Price',
    amount:56,
    iconName:"PersonBadge",
    fromPrevious:'-0'

  }]
  return (
    <InfoTileContext.Provider value={infoArray}>

    <div className="mainSection col-12">
      <div className="headerSection col-12">
        <Header sideBarToggle={sideBarToggle} />
      </div>
      <div className="mainContent col-12">
        <Routes>
          <Route exact path="/" Component={Dashboard}></Route>
          <Route exact path="/layout" Component={Layout}></Route>
          <Route path="/calender" Component={Calender}></Route>
          <Route path="/chat" Component={Chat}></Route>

          <Route path="*" Component={NotFound}></Route>

        </Routes>
      </div>
      <div className="mainfooter col-12">
        <Footer />
      </div>
    </div>
    </InfoTileContext.Provider>

  );
}
export default Main;
