import { useContext } from "react"
import ProfileTile from "./DashboardComponents/profileTile"
import InfoTileContext from "../../Context/InfoTileContext"
import InfoTile from "./DashboardComponents/infoTile";
import './Layout.scss'
import SharedComponent from "../../sharedComponents/shareMainHeading";

function Layout(){
    const infoArray = useContext(InfoTileContext);
    const iterate=()=>{
       return infoArray.map((element,index)=>{
            return(
                <div className="col-4 key={index}">
                <InfoTile tileName={element.titleName} iconName={element.iconName} totalNumber={element.amount} previous={element.fromPrevious} fromLayout={true}></InfoTile>
                </div>
           )
        })
    }
    return(<div className="layOutTileContainer">
             <SharedComponent tileName={"Layout"} linkToTileName={"Layouts"} linkInfo={"Layout"}></SharedComponent>

        <div className="row layout2Section">
            <div className="col-12">
                <ProfileTile fromLayout={true}></ProfileTile>
            </div>
            <div className="col-12">
                {iterate()}
            </div>
        </div>
    </div>)
}

export default Layout