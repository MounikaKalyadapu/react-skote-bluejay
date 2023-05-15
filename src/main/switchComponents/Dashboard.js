import "./Dashboard.scss";
import { Link } from "react-router-dom";
import InfoTile from "./DashboardComponents/infoTile";
import ProfileTile from "./DashboardComponents/profileTile";
import EmailTile from "./DashboardComponents/emailTile";
import MonthlyTile from "./DashboardComponents/monthlyTile";
import SocialMediaTile from "./DashboardComponents/socialMediaTile";
import ActivityTile from "./DashboardComponents/ActivityTile";
import TopCities from "./DashboardComponents/topCitiesTile";
import TransactionTable from './DashboardComponents/TransactionTable'
import { useContext } from "react";
import InfoTileContext from "../../Context/InfoTileContext";
import SharedComponent from "../../sharedComponents/shareMainHeading";
function Dashboard() {
  const infoContext = useContext(InfoTileContext)

  const IterateInfoTile =()=>{
   return infoContext.map((element,index)=>{
      return (  <div className="col-4" key={index}>
      <InfoTile tileName={element.titleName} totalNumber={element.amount} iconName={element.iconName} />
    </div>)
    })
   
  }
  return (
    <div className="DashboardComponent">
     <SharedComponent tileName={"Dashboard"} linkToTileName={"Dashboards"} linkInfo={"Dashboard"}></SharedComponent>
      <div className="row dashboard2section">
        <div className="mainSection col-4">
          <div className="row">
            <ProfileTile />
          </div>
          <div className="row monthlyTile">
            <MonthlyTile />
          </div>
        </div>
        <div className="col-8">
          <div className="row" style={{marginTop:'7px'}}>
          {IterateInfoTile()}
          </div>
          <div className="row emailTile">
            <EmailTile />
          </div>
        </div>
      </div>
      <div className="row dashboard3section">
        <div className="col-4">
<SocialMediaTile/>
        </div>
        <div className="col-4">
          <ActivityTile/>
        </div>
        <div className="col-4">
<TopCities/>

        </div>
      </div>
      <div className="row dashboard4section">
        <TransactionTable/>
      </div>
    </div>
  );
}
export default Dashboard;
