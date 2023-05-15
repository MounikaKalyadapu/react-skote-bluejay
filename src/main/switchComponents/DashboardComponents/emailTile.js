import { useState } from "react";
import BarChart from "./emailChart/BarChart";
import { UserData } from "./emailChart/emailState";
import './emailTile.scss'
function EmailTile() {
const [ userdata,setUserdata] = useState({
  labels:UserData.map(user=> user.month),
  datasets:[{
    label:"Emails Generated",
    data:UserData.map(user=> user.noOfmails),
    backgroundColor:["#decc73","#73ded0","#b472cc","#6dcfad"]
  }]
})

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="d-sm-flex flex-wrap">
            <h4 className="card-title mb-4">Email Sent</h4>
            <div className="ms-auto">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a className="nav-link" id="one_month" href="/dashboard">
                    Week
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="one_month" href="/dashboard">
                    Month
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="active nav-link"
                    id="one_month"
                    href="/dashboard"
                  >
                    Year
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="apex-charts">
            <div
              id="apexcharts8pizchov"
              className="apexcharts-canvas apexcharts8pizchov apexcharts-theme-light"
            >
            <BarChart chartData={userdata}/>
              <div
                className="seriesNames row"
              >
              <div className="col-4 boxStyling">
                Series A <span className="boxStylingA"> </span>
              </div>
              <div className="col-4 boxStyling">
                Series B <span className="boxStylingB"></span>
              </div>
              <div className="col-4 boxStyling">
                Series C <span className="boxStylingC"></span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailTile;
