import React from 'react';

import CardDados from 'components/card-dados';
import LineGraph from 'components/line-graph';
import Sidebar from '../../components/sidebar';
import BarraTopo from '../../components/barra-topo';

// import '../../pages-js/jquery.dashboard.js';

const Dashboard = () => (
  <div id="wrapper">
    <BarraTopo />

    <Sidebar />

    <div className="content-page">
      {/* <!-- Start content --> */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <h4 className="page-title">Bem Vindo!</h4>
                <ol className="breadcrumb p-0 m-0">
                  <li>
                      <a href="#this">PSDB</a>
                  </li>
                  {/* <!--<li>-->
                      <!--<a href="#">Dashboard</a>-->
                  <!--</li>--> */}
                  <li className="active">
                      Dashboard
                  </li>
                </ol>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>

          <CardDados
            titulo="Statistics"
          />
          <CardDados />

          <LineGraph />

          <div className="row">
              <div className="col-xl-4">
                  <div className="card">
                      <div className="card-body">
                          <h4 className="header-title m-t-0 m-b-30">Last 30 days statistics</h4>

                          <div className="">
                              <div id="donut-chart" className="ct-chart ct-golden-section dash-chart"></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-xl-4">
                  <div className="card">
                      <div className="card-body">
                          <h4 className="header-title m-t-0 m-b-30">Total Revenue share</h4>
                          <div>
                              <div id="combine-chart" className="ct-chart ct-golden-section dash-chart"></div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-xl-4">
                  <div className="card">
                      <div className="card-body">
                          <h4 className="header-title m-t-0 m-b-30">Total Revenue share</h4>
                          <div className="">
                              <div id="roated-chart" className="ct-chart ct-golden-section dash-chart"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* <!-- end row --> */}
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
