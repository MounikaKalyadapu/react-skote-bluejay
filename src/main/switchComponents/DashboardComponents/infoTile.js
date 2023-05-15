import {
  BoxSeam,
  PersonBadge,
  Archive
} from "react-bootstrap-icons";
import React from "react";
import './InfoTile.scss'
function InfoTile({ tileName, totalNumber, iconName,fromLayout,previous }) {
 let infoTileClassOnLayout = [];
  if(fromLayout){
infoTileClassOnLayout.push("addMargin")
  }
  const previousData =()=>{
    if(previous){
      const divide = previous[0];
    const styleName=divide==="+"?"#aef1ae":'rgb(250 214 214)'
    const colorName = divide ==="+"?"green":'#e14c4c'
   return ( <div className="previosStyling">
      <span style={{backgroundColor: styleName,padding:"2px 10px",border:"0px",borderRadius:"7px",color:colorName, fontSize:"12px",marginRight:"10px"}}>{previous} </span><span>From Previous p...</span>
    </div>)
  }else{
return ""
  }}
  const getIcon = () => {
    switch (iconName) {
      case "PersonBadge":
        return <PersonBadge></PersonBadge>;
      case "Archive":
        return <Archive></Archive>;
      case "BoxSeam":
        return <BoxSeam></BoxSeam>;
      default:
        return "";
    }
  };
  return (
    <div>
      <div className={`${infoTileClassOnLayout.join(" ")} mini-stats-wid card`}>
        <div className="card-body">
          <div className="d-flex">
            <div className="flex-grow-1">
              <p className="text-muted fw-medium">{tileName}</p>
              <h4 className="mb-0">{totalNumber}</h4>
            </div>
            <div className="avatar-sm rounded-circle backGroundColor align-self-center mini-stat-icon">
              <span className="avatar-title rounded-circle ">
                <i className="bx bx-copy-alt font-size-24"></i>
              <span className="iconStyling"> {getIcon()}</span>
               
              </span>
            </div>
          </div>
          <div>
              {previousData()}
            </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default InfoTile;
