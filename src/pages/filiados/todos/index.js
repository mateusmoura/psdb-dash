import React from 'react';
import Sidebar from '../../../components/sidebar';
import BarraTopo from '../../../components/barra-topo';
import ResponsiveTable from '../../../components/responsive-table';

const FiliadosTodos = () => (
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
                <h4 className="page-title">Pedidos de filiação</h4>
                <ol className="breadcrumb p-0 m-0">
                  <li>
                      <a href="#this">PSDB</a>
                  </li>
                  <li className="active">
                      Dashboard
                  </li>
                </ol>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-lg-12">
              <div class="card">
                <div class="card-body">

                  <form className="form-horizontal">
                      <div className="form-group row">
                          <label className="col-md-2 control-label">Text</label>
                          <div className="col-md-10">
                              <input type="text" className="form-control" value="Some text value..." />
                          </div>
                      </div>
                      <div className="form-group row">
                          <label className="col-md-2 control-label" for="example-email">Email</label>
                          <div className="col-md-10">
                              <input type="email" id="example-email" name="example-email" className="form-control" placeholder="Email" />
                          </div>
                      </div>
                      <div className="form-group row">
                          <label className="col-md-2 control-label">Password</label>
                          <div className="col-md-10">
                              <input type="password" className="form-control" value="password" />
                          </div>
                      </div>

                      <div className="form-group row">
                          <label className="col-md-2 control-label">Placeholder</label>
                          <div className="col-md-10">
                              <input type="text" className="form-control" placeholder="placeholder" />
                          </div>
                      </div>
                      <div className="form-group row">
                          <label className="col-md-2 control-label">Text area</label>
                          <div className="col-md-10">
                              <textarea className="form-control" rows="5"></textarea>
                          </div>
                      </div>



                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
              <div className="col-sm-12">
                 <ResponsiveTable titulo="Todos os Afiliados" />
              </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default FiliadosTodos;
