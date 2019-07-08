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

          <div id="con-close-modal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h4 className="modal-title mt-0"><i className="fa fa-filter"></i> Filtro</h4>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div className="modal-body">
                          <div className="row">
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <label for="field-1" className="control-label">Nome ou Título</label>
                                      <input type="text" className="form-control" id="example-name" placeholder="John" />
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <label for="field-2" className="control-label">E-mail</label>
                                      <input type="email" id="example-email" name="example-email" className="form-control" placeholder="Email" />
                                  </div>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <label for="field-5" className="control-label">UF</label>
                                      <Select2 />
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <label for="field-4" className="control-label">Município</label>
                                      <Select2 />
                                  </div>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <label for="field-7" className="control-label">Situação</label>
                                      <Select2 />
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <label for="field-7" className="control-label">Data de Cadastro</label>
                                      <DateRangePicker />
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Fechar</button>
                          <button type="button" className="btn btn-info waves-effect waves-light">Aplicar</button>
                      </div>
                  </div>
              </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body table-responsive">

                  <div className="row mb-4">
                    <div className="col-lg-6 align-self-center">
                      <h4 className="m-t-0 header-title"><b>Todos os filiados</b></h4>
                    </div>

                    <div className="col-lg-6">
                      <button type="button" class="btn btn-primary waves-effect float-right" data-toggle="modal" data-target="#con-close-modal"> <i class="fa fa-filter m-r-5"></i> <span>Filtrar</span> </button>
                    </div>
                  </div>

                  <div className="card card-border">
                      <div className="card-body p-3">
                          <strong className="mr-2">Filtros aplicados:</strong> <button type="button" class="btn btn-secondary waves-effect waves-light"> <span>Nome: blah</span> <i class="fa fa-close"></i> </button>
                      </div>
                  </div>

                  <ResponsiveTable />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default FiliadosTodos;
