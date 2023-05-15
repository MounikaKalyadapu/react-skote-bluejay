import { Link } from "react-router-dom";
import './sharedMainHeading.scss'
function SharedComponent({tileName,linkToTileName,linkInfo}){
   return(
 <div className="row dashboardHeading">
        <div className="col-12 col">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0 font-size-18">{tileName}</h4>
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <Link to="/">{linkToTileName}</Link>
                </li>
                <li className="active breadcrumb-item" aria-current="page">
                  <Link to="/">{linkInfo}</Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
   )
  
}
export default SharedComponent;