import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import SharedComponent from "../../sharedComponents/shareMainHeading";
import "./Calender.scss";

function Calender() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <div className="app">
        <SharedComponent
          tileName={"Calendar"}
          linkToTileName={"Calendars"}
          linkInfo={"Calendar"}
        ></SharedComponent>
 
        <div className="row calender2Section">
            <div className="col-3">
            <div className="card">
              <div className="card-body">
                <div className="d-grid">
                  <button
                    type="button"
                    className="font-16 btn-block btn btn-primary"
                  >
                    <i className="mdi mdi-plus-circle-outline me-1"></i>Create New
                    Event
                  </button>
                </div>
                <div id="external-events" className="mt-2">
                  <br />
                  <p className="text-muted">
                    Drag and drop your event or click in the calendar
                  </p>
                  <div
                    className="bg-success external-event fc-event text-white"
                    draggable="true"
                  >
                    <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>
                    New Event Planning
                  </div>
                  <div
                    className="bg-info external-event fc-event text-white"
                    draggable="true"
                  >
                    <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>
                    Meeting
                  </div>
                  <div
                    className="bg-warning external-event fc-event text-white"
                    draggable="true"
                  >
                    <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>
                    Generating Reports
                  </div>
                  <div
                    className="bg-danger external-event fc-event text-white"
                    draggable="true"
                  >
                    <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>
                    Create New theme
                  </div>
                </div>
                <div className="justify-content-center mt-5 row">
                  <img
                    src="/static/media/verification-img.4d646fae9b5bb6a56a9d.png"
                    alt=""
                    className="img-fluid d-block"
                  />
                </div>
              </div>
            </div>
         
            </div>
            <div className="col-9">
            <div className="calendar-container">
            <Calendar onChange={setDate} value={date} />
          </div>
            </div>
        
        
        </div>
        <div style={{ display: "block" }}>
          <div className="text-center">
            Selected date: {date.toDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calender;
