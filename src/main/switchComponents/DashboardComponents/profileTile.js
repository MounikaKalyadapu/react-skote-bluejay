import { useContext } from 'react';
import Face from '../../../assets/anime pic.jpg'
import userDataContext from '../../../Context/AuthContext';
import '../ProfileTile.scss';
import { Link } from "react-router-dom";

function ProfileTile({fromLayout}) {
  const userName = useContext(userDataContext);
  let ProfileTileClassOnLayout = [];
let styleAlign =[];
  if(fromLayout){
    ProfileTileClassOnLayout.push("imageWidthDecrease");
    styleAlign.push("alignToInline")
      }
  return (
    <div>
      <div className="overflow-hidden card backGroundImageColor">
        <div className=" bg-soft">
          <div className="row">
            <div className="col-12">
              <div className="styleAlign">
                <h5 className={`${styleAlign.join(" ")}`}>Welcome Back !</h5>
                <p className={`${styleAlign.join(" ")}`}>BLUEJAY Dashboard</p>
              </div>
            </div>
            <div className="align-self-end col-5 ">
              <img
                src="/static/media/profile-img.43b59e598ba15abe6eab.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="pt-0 card-body ">
          <div className="row">
            <div className="col-sm-4">
              <div className="avatar-md profile-user-width">
                <img
                  src={Face}
                  alt=""
                  className={`${ProfileTileClassOnLayout.join(" ")} img-thumbnail rounded-circle`}
                />
              </div>
              <h5 className="font-size-15 text-truncate">{userName}</h5>
              <p className="text-muted text-truncate">Web Developer</p>
            </div>
            <div className="col-sm-8">
              <div className="pt-4">
                <div className="row">
                  <div className="col-6">
                    <h5 className="font-size-15">125</h5>
                    <p className="text-muted mb-0">Projects</p>
                  </div>
                  <div className="col-6">
                    <h5 className="font-size-15">$124500</h5>
                    <p className="text-muted mb-0">Revenue</p>
                  </div>
                </div>
                <div className="mt-4">
                  <a className="btn btn-primary  btn-sm viewProfile">
                   <Link to="/layout">View Profile</Link>  <i className="mdi mdi-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileTile;
