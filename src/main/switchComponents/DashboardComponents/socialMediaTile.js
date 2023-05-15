import './socialMediaTile.scss'

function SocialMediaTile() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="mb-4 card-title">Social Source</div>
        <div className="text-center">
          <div className="avatar-sm mx-auto mb-4">
            <span className="avatar-title rounded-circle bg-primary bg-soft font-size-24">
              <i className="mdi mdi-facebook text-primary"></i>
            </span>
          </div>
          <p className="font-16 text-muted mb-2"></p>
          <h5>
            <a className="text-dark" href="/dashboard">
              Facebook - <span className="text-muted font-16">125 sales</span>{" "}
            </a>
          </h5>
          <p className="text-muted">
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
            libero venenatis faucibus tincidunt.
          </p>
          <a className="text-primary font-16" href="/dashboard">
            Learn more <i className="mdi mdi-chevron-right"></i>
          </a>
        </div>
        <div className="mt-4 row">
          <div className="col-4 col">
            <div className="social-source text-center mt-3">
              <div className="avatar-xs mx-auto mb-3">
                <span className="avatar-title rounded-circle bg-primary font-size-16">
                  <i className="mdi mdi-facebook text-white"></i>
                </span>
              </div>
              <h5 className="font-size-15">Facebook</h5>
              <p className="text-muted mb-0">125 sales</p>
            </div>
          </div>
          <div className="col-4 col">
            <div className="social-source text-center mt-3">
              <div className="avatar-xs mx-auto mb-3">
                <span className="avatar-title rounded-circle bg-info font-size-16">
                  <i className="mdi mdi-twitter text-white"></i>
                </span>
              </div>
              <h5 className="font-size-15">Twitter</h5>
              <p className="text-muted mb-0">112 sales</p>
            </div>
          </div>
          <div className="col-4 col">
            <div className="social-source text-center mt-3">
              <div className="avatar-xs mx-auto mb-3">
                <span className="avatar-title rounded-circle bg-pink font-size-16">
                  <i className="mdi mdi-instagram text-white"></i>
                </span>
              </div>
              <h5 className="font-size-15">Instagram</h5>
              <p className="text-muted mb-0">104 sales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaTile