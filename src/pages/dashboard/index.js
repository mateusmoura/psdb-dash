import React from 'react';

import Sidebar from '../../components/sidebar';
import BarraTopo from '../../components/barra-topo';

import '../../pages-js/jquery.dashboard.js';

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
                      <a href="#">PSDB</a>
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
          {/* <!-- end row --> */}
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
