import { useContext, useEffect, useState } from "react";
import SharedComponent from "../../sharedComponents/shareMainHeading";
import "./chat.scss";
import userDataContext from "../../Context/AuthContext";
import userImage from "../../assets/anime pic.jpg";
import { Bell, Dot, Search } from "react-bootstrap-icons";
import { chatData, groupChats, contactList } from "../../dataChat";
import { elements } from "chart.js";
const baseUrl = " http://localhost:3030";
function Chat() {
  // console.log(chatData, "CHAT");
  const userData = useContext(userDataContext);
  let userName = userData.charAt(0).toUpperCase();
  useEffect(()=>{
    document.getElementsByClassName('Chat0')[0].style.backgroundColor= "#556ee6";
    document.getElementsByClassName('Chat0')[0].style.color= "white";
  },[])
  const chatIterat = () => {
    return chatData.map((element) => {
      return (
        <div className="col-12 chatiterating" key={element.id}>
          <div className="col-1">
            <span className="stylingFordot">
              <Dot className="styleDot" style={{ color: "red" }}></Dot>
            </span>
          </div>
          <div className="col-2 imageStyling">
            <img
              src={window.location.origin + element.imageUrl}
              alt="ChatterImage"
              height={50}
            />
          </div>
          <div className="col-7 infoChatPerson">
            <div className="col-12 nameOfChat">{element.name}</div>
            <div className="col-12 statusofChatPerson">
              {element.statusInfo}
            </div>
          </div>
          <div className="col-2 timeofLastChat">5:03am</div>
        </div>
      );
    });
  };
  const [cssStyleOnButton,setStyleOnButton] = useState([])
  const [contentToDisplay, setContentToDisplay] = useState(chatIterat());
const [mentionForChatDesc, setChatDesc] = useState('Recent')
  const name = userData.replace(userData[0], userName);
  const buttons = [
    { nameofDetails: "Chat" },
    { nameofDetails: "Groups" },
    { nameofDetails: "Contacts" },
  ];

  const groupsIterate = () => {
    return groupChats.map((element, index) => {
      let firstElement = element.groupName[0];
      firstElement = firstElement.toUpperCase();
      return (
        <div className="col-12 groupChatsSection" key={index}>
          <div className="col-2 stylingIcons">
            <span className="styleAlphabet">{firstElement}</span>
          </div>
          <div className="col-8 groupName">{element.groupName}</div>
        </div>
      );
    });
  };
  const contactIterate = () => {
    return contactList.map((element, index) => {
      return (
        <div key={index} className="col-12 contactIterate">
          <div className="col-12 nameOftheContact">{element.name}</div>
          <div className="displayContact contactNoStyling">
            {element.contactNo}
          </div>
        </div>
      );
    });
  };
  const allButtons = () => {
 
    return buttons.map((element, index) => {
      console.log(cssStyleOnButton,(element.nameofDetails+index))
      return (
        <div className="col-4 chatButtonStyling" key={index}>
          <button
            className={`btn btn removeStyleForOthers${' '}${element.nameofDetails+index}`}
            onClick={() => updateContent(element.nameofDetails,element.nameofDetails+index)}
          >
            {element.nameofDetails}
          </button>
        </div>
      );
    });
  };
  const updateContent = (element,cssStyle) => {
   const elements = document.getElementsByClassName('removeStyleForOthers');
   for(let i=0;i<elements.length;i++){
    elements[i].style.backgroundColor= "transparent";
    elements[i].style.color= "#000";
   }
    document.getElementsByClassName(cssStyle)[0].style.backgroundColor= "#556ee6";
    document.getElementsByClassName(cssStyle)[0].style.color= "white";

    switch (element) {
      case "Chat":
        setChatDesc("Recent");
        return setContentToDisplay(chatIterat());
      case "Groups":
        setChatDesc("Group");

        return setContentToDisplay(groupsIterate());
      case "Contacts":
        setChatDesc("Contact");

        return setContentToDisplay(contactIterate());
      default:
        return "";
    }
  };
  return (
    <div className="chatTile">
      <div className="chatForDashBoard">
        <SharedComponent
          tileName={"CHAT"}
          linkToTileName={"blueJay"}
          linkInfo={"Chat"}
        ></SharedComponent>
      </div>
      <div className="row chatContent">
        <div className="col-5 chat2Section">
          <div className="col-12">
            <div className="userDataInfo col-12">
              <div className="col-2 userImage">
                <img src={userImage} alt="userPic" height={50} />
              </div>
              <div className="col-8 userDataStyling">
                <p className="nameStyling">{name}</p>
                <p className="statusStyling">
                  <span className="stylingFordot">
                    <Dot className="styleDot"></Dot>
                  </span>
                  <span className="activeStyling">Active</span>
                </p>
              </div>
              <div className="col-2" style={{ textAlign: "center" }}>
                <Bell className="bellStyling"></Bell>
              </div>
            </div>
          </div>
          <div className="col-12 searchBarStyling">
            <div className="SearchBar" style={{ width: "100%" }}>
              <form className="app-search" style={{ width: "100%" }}>
                <div className="position-relative" style={{ width: "100%" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span>
                    <Search className="searchStyling"></Search>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 buttonGroupStyling">{allButtons()}</div>
          <div className="col-12 chatDetails">
            <div className="col-12 chatDesc">{mentionForChatDesc}</div>
            <div className="iterateChat">{contentToDisplay}</div>
          </div>
        </div>
        <div className="col-7 chat3Section">For Chat individual</div>
      </div>
    </div>
  );
}

export default Chat;
