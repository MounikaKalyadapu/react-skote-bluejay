import "./App.scss";
import SideBar from "./sidebar/sidebar";
import { Routes, Route } from "react-router-dom";

import Main from "./main/main";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "./Authentication/loginPage";
import NotFound from "./main/NotFound";
import userDataContext from "./Context/AuthContext";
function App() {
  const userData = localStorage.getItem("userEmail");
  const timeLoggedIn = localStorage.getItem("dateLoggedInWithTime");
 
  const [userName, setUserName] = useState("");
  const [authState, setAuthState] = useState(userData);


  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      const userName = userData.split("@");
      setUserName(userName[0]);
      setAuthState(userData);
    
      if (timeLoggedIn) {
        const dateValue = new Date(JSON.parse(timeLoggedIn));
        const dateY = new Date();
        let differenceTime = Math.abs(dateValue.getTime() - dateY.getTime())/1000
        if (differenceTime > 60*60) {
          localStorage.removeItem("userEmail");
          localStorage.removeItem("dateLoggedInWithTime");
          window.location.reload();
          // navigate("/auth");
        }
      }
    } else {
      navigate("/auth");
    }
  }, [localStorage, navigate, userData]);
  const [sideToggleState, setSideToggleState] = useState(false);
  let sideBarClasses = ["sideBar"];
  let fullMain = ["mainClass"];
  const sideBarToggleEvent = () => {
    setSideToggleState(!sideToggleState);
  };
  if (sideToggleState) {
    sideBarClasses.push("sideBarToggle");
    fullMain.push("col-full");
  }
  return (
    <userDataContext.Provider value={userName}>
      <div className="container-fluid App">
        {!authState ? (
          <div className="authSection col-12">
            <Routes>
              <Route path="/auth" Component={LoginPage}></Route>

              <Route path="*" Component={NotFound}></Route>
            </Routes>
          </div>
        ) : (
          <div className="allData">
            <div className="row">
              <div className={`${sideBarClasses.join(" ")} sideBar col-3`}>
                <SideBar />
              </div>
              <div className={`${fullMain.join(" ")}  col-9`}>
                <Main sideBarToggle={sideBarToggleEvent} />
              </div>
            </div>
          </div>
        )}
      </div>
    </userDataContext.Provider>
  );
}

export default App;
