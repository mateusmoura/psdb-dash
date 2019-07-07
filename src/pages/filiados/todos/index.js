import React from "react";
import Sidebar from "../../../components/sidebar";
import BarraTopo from "../../../components/barra-topo";
import ResponsiveTable from "../../../components/responsive-table";
import Select2 from "../../../components/select-2";
import DateRangePicker from "../../../components/date-range-picker";

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
                  <li className="active">Dashboard</li>
                </ol>
                <div className="clearfix" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">

              <div className="card card-border card-primary">
                <div className="card-heading">
                    <h3 className="card-title text-primary"><i className="fa fa-filter"></i> Filtro</h3>
                </div>

                <div className="card-body mt-4 p-0">

                  <form>


                    <div className="row">
                      <div className="col-lg-6">

                        <div className="form-group">
                          <label htmlFor="text" className="col-md-12 control-label">Nome ou título</label>
                          <div className="col-md-12">
                            <input
                              type="text"
                              id="text"
                              className="form-control"
                              // value="Some text value..."
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            className="col-md-3 control-label"
                            htmlFor="example-email"
                          >
                            Email
                          </label>
                          <div className="col-md-12">
                            <input
                              type="email"
                              id="example-email"
                              name="example-email"
                              className="form-control"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label className="col-md-3 control-label">Situação</label>
                          <div className="col-md-12">
                            <Select2 />
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="text" className="col-md-12 control-label">Município</label>
                          <div className="col-md-12">
                            <Select2 />
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="text" className="col-md-12 control-label">Unidade Federativa (UF)</label>
                          <div className="col-md-12">
                            <Select2 />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label htmlFor="text" className="col-md-12 control-label">Data de Cadastro</label>
                          <div className="col-md-12">
                            <DateRangePicker />
                          </div>
                        </div>
                      </div>
                   </div>

                   <div className="p-3 overflow-hidden">
                     <button type="button" class="btn float-right btn-primary waves-effect w-md waves-light">Pesquisar</button>
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
