function MonthlyTile() {
  return (
    <div>

    <div className="card">
      <div className="card-body">
        <div className="mb-4 card-title">Monthly Earning</div>
        <div className="row">
          <div className="col-sm-6">
            <p className="text-muted">This month</p>
            <h3>$34,252</h3>
            <p className="text-muted">
              <span className="text-success me-2">
                {" "}
                12% <i className="mdi mdi-arrow-up"></i>{" "}
              </span>{" "}
              From previous period
            </p>
            <div className="mt-4">
              <a
                className="btn btn-primary waves-effect waves-light btn-sm"
                href="/dashboard"
              >
                View More <i className="mdi mdi-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mt-4 mt-sm-0">
              <div className="apex-charts">
                <div
                  id="apexchartseahp7gx6i"
                  className="apexcharts-canvas apexchartseahp7gx6i apexcharts-theme-light"
           >
                  <svg
                    id="SvgjsSvg1456"
                    width="121"
                    height="168.52499999999998"
                    version="1.1"
                    className="apexcharts-svg"
                    transform="translate(0, 0)"
                  >
                    <g
                      id="SvgjsG1458"
                      className="apexcharts-inner apexcharts-graphical"
                      transform="translate(-26.5, 0)"
                    >
                      <defs id="SvgjsDefs1457">
                        <clipPath id="gridRectMaskeahp7gx6i">
                          <rect
                            id="SvgjsRect1460"
                            width="182"
                            height="200"
                            x="-3"
                            y="-1"
                            rx="0"
                            ry="0"
                            opacity="1"
                            strokeWidth="0"
                            stroke="none"
                            strokeDasharray="0"
                            fill="#fff"
                          ></rect>
                        </clipPath>
                        <clipPath id="forecastMaskeahp7gx6i"></clipPath>
                        <clipPath id="nonForecastMaskeahp7gx6i"></clipPath>
                        <clipPath id="gridRectMarkerMaskeahp7gx6i">
                          <rect
                            id="SvgjsRect1461"
                            width="180"
                            height="202"
                            x="-2"
                            y="-2"
                            rx="0"
                            ry="0"
                            opacity="1"
                            strokeWidth="0"
                            stroke="none"
                            strokeDasharray="0"
                            fill="#fff"
                          ></rect>
                        </clipPath>
                        <linearGradient
                          id="SvgjsLinearGradient1466"
                          x1="1"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            id="SvgjsStop1467"
                            stopOpacity="1"
                            stopColor="rgba(242,242,242,1)"
                            offset="0"
                          ></stop>
                          <stop
                            id="SvgjsStop1468"
                            stopOpacity="1"
                            stopColor="rgba(206,206,206,1)"
                            offset="0.5"
                          ></stop>
                          <stop
                            id="SvgjsStop1469"
                            stopOpacity="1"
                            stopColor="rgba(206,206,206,1)"
                            offset="0.65"
                          ></stop>
                          <stop
                            id="SvgjsStop1470"
                            stopOpacity="1"
                            stopColor="rgba(242,242,242,1)"
                            offset="0.91"
                          ></stop>
                        </linearGradient>
                        <linearGradient
                          id="SvgjsLinearGradient1478"
                          x1="1"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            id="SvgjsStop1479"
                            stopOpacity="1"
                            stopColor="rgba(85,110,230,1)"
                            offset="0"
                          ></stop>
                          <stop
                            id="SvgjsStop1480"
                            stopOpacity="1"
                            stopColor="rgba(72,94,196,1)"
                            offset="0.5"
                          ></stop>
                          <stop
                            id="SvgjsStop1481"
                            stopOpacity="1"
                            stopColor="rgba(72,94,196,1)"
                            offset="0.65"
                          ></stop>
                          <stop
                            id="SvgjsStop1482"
                            stopOpacity="1"
                            stopColor="rgba(85,110,230,1)"
                            offset="0.91"
                          ></stop>
                        </linearGradient>
                      </defs>
                      <g id="SvgjsG1462" className="apexcharts-radialbar">
                        <g id="SvgjsG1463">
                          <g id="SvgjsG1464" className="apexcharts-tracks">
                            <g
                              id="SvgjsG1465"
                              className="apexcharts-radialbar-track apexcharts-track"
                              rel="1"
                            >
                              <path
                                id="apexcharts-radialbarTrack-0"
                                d="M 50.94156838842453 125.05843161157546 A 52.40853658536585 52.40853658536585 0 1 1 125.05843161157546 125.05843161157546"
                                fill="none"
                                fillOpacity="1"
                                stroke="rgba(242,242,242,0.85)"
                                strokeOpacity="1"
                                strokeLinecap="butt"
                                strokeWidth="14.514512195121952"
                                strokeDasharray="0"
                                className="apexcharts-radialbar-area"
                              ></path>
                            </g>
                          </g>
                          <g id="SvgjsG1472">
                            <g
                              id="SvgjsG1477"
                              className="apexcharts-series apexcharts-radial-series"
                              seriesname="SeriesxA"
                              rel="1"
                            >
                              <path
                                id="SvgjsPath1483"
                                d="M 50.94156838842453 125.05843161157546 A 52.40853658536585 52.40853658536585 0 1 1 125.69954624335796 51.59397137746902"
                                fill="none"
                                fillOpacity="0.85"
                                stroke="url(#SvgjsLinearGradient1478)"
                                strokeOpacity="1"
                                strokeLinecap="butt"
                                strokeWidth="14.963414634146343"
                                strokeDasharray="4"
                                className="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                index="0"
                                j="0"
                              ></path>
                            </g>
                            <circle
                              id="SvgjsCircle1473"
                              r="40.151280487804875"
                              cx="88"
                              cy="88"
                              className="apexcharts-radialbar-hollow"
                              fill="transparent"
                            ></circle>
                            <g
                              id="SvgjsG1474"
                              className="apexcharts-datalabels-group"
                              transform="translate(0, 0) scale(1)"
                            >
                              <text
                                id="SvgjsText1475"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x="88"
                                y="148"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="13px"
                                fontWeight="600"
                                fill="#556ee6"
                                className="apexcharts-text apexcharts-datalabel-label"
                              >
                                Series A
                              </text>
                              <text
                                id="SvgjsText1476"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x="88"
                                y="126"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="16px"
                                fontWeight="400"
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-datalabel-value"
                              >
                                67%
                              </text>
                            </g>
                          </g>
                        </g>
                      </g>
                      <line
                        id="SvgjsLine1484"
                        x1="0"
                        y1="0"
                        x2="176"
                        y2="0"
                        stroke="#b6b6b6"
                        strokeDasharray="0"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        className="apexcharts-ycrosshairs"
                      ></line>
                      <line
                        id="SvgjsLine1485"
                        x1="0"
                        y1="0"
                        x2="176"
                        y2="0"
                        strokeDasharray="0"
                        strokeWidth="0"
                        strokeLinecap="butt"
                        className="apexcharts-ycrosshairs-hidden"
                      ></line>
                    </g>
                    <g id="SvgjsG1459" className="apexcharts-annotations"></g>
                  </svg>
                  <div className="apexcharts-legend"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-muted mb-0">
          We craft digital, graphic and dimensional thinking.
        </p>
      </div>
    </div>
    </div>

  );
}

export default MonthlyTile;