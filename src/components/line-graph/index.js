import React from "react";

const LineGraph = () => (
  <div className="card">
    <div className="card-body">
      <h4 className="header-title m-t-0">Line Chart</h4>
      <p className="text-muted m-b-30">
        The line chart is most often used chart, aslo the easiest to make, it
        shows trends over time, visualizes data and information, so users can
        know how exactly these numbers are relate to each other in one glance.
      </p>

      <div id="website-stats1" className="flot-chart" />
    </div>
  </div>
);

export default LineGraph;
