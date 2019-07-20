import React from 'react';

import Sidebar from "components/sidebar";
import BarraTopo from "components/barra-topo";
import Footer from "components/footer";

import Select2 from "components/select-2";
import TabelaDinamica from 'components/tabela-dinamica';

const dadosTabelaOld = {
  head: ['Estado/Segmento', 'Responsável', 'E-mail', 'Telefone', 'Facebook', 'Twitter', 'Instagram', 'YouTube', 'Observações'],
  body: [
    ['DF', 'Mateus Moura', 'mateus@email.com',  '61 9999-9999',
      `<div class="row" style="display: flex; flex-wrap: wrap">
        <div class="col-12">
          <span style="white-space: nowrap;"><i class="fa fa-external-link"></i>: <a href="www.url.com.br" target="_blank">www.url.com.br</a></span>
        </div>
      
        <div class="col-12">
          <span style="white-space: nowrap;"><i class="fa fa-user-o"></i>: @user.face</span>
        </div>

        <div class="col-12">
          <span style="white-space: nowrap;"><i class="fa fa-chain-broken"></i>: email@email.com</span>
        </div>

        <div class="col-12">
          <button
            title="Solicitar senha"
            type="button"
            class="btn btn-icon waves-effect waves-light btn-primary btn-xs"
            data-toggle="modal"
            data-target="#solicitar-senha-modal"
          > <i class="fa fa-unlock"></i> </button>
        </div>
      </div>`,
      `<div class="row" style="display: flex; flex-wrap: wrap">
        <div class="col-12">
          <span style="white-space: nowrap;"><i class="fa fa-external-link"></i>: <a href="www.url.com.br" target="_blank">www.url.com.br</a></span>
        </div>
      
        <div class="col-12">
          <span style="white-space: nowrap;"><i class="fa fa-user-o"></i>: @user.face</span>
        </div>

        <div class="col-12">
          <span style="white-space: nowrap;"><i class="fa fa-chain-broken"></i>: email@email.com</span>
        </div>

        <div class="col-12">
          <button
            title="Solicitar senha"
            type="button"
            class="btn btn-icon waves-effect waves-light btn-primary btn-xs"
            data-toggle="modal"
            data-target="#solicitar-senha-modal"
          > <i class="fa fa-unlock"></i> </button>
        </div>
      </div>`
      ,
      `<div class="row" style="display: flex; flex-wrap: wrap">
        <div class="col-12">
          <span style="white-space: nowrap;"><i class="fa fa-external-link"></i>: <a href="www.url.com.br" target="_blank">www.url.com.br</a></span>
        </div>
      
        <div class="col-12">
          <span style="white-space: nowrap;"><i class="fa fa-user-o"></i>: @user.face</span>
        </div>

        <div class="col-12">
          <span style="white-space: nowrap;"><i class="fa fa-chain-broken"></i>: email@email.com</span>
        </div>

        <div class="col-12">
          <button
            title="Solicitar senha"
            type="button"
            class="btn btn-icon waves-effect waves-light btn-primary btn-xs"
            data-toggle="modal"
            data-target="#solicitar-senha-modal"
          > <i class="fa fa-unlock"></i> </button>
        </div>
      </div>`
      ,
      `<div class="row" style="display: flex; flex-wrap: wrap">
        <div class="col-12">
          <span style="white-space: nowrap;"><i class="fa fa-external-link"></i>: <a href="www.url.com.br" target="_blank">www.url.com.br</a></span>
        </div>
      
        <div class="col-12">
          <span style="white-space: nowrap;"><i class="fa fa-user-o"></i>: @user.face</span>
        </div>

        <div class="col-12">
          <span style="white-space: nowrap;"><i class="fa fa-chain-broken"></i>: email@email.com</span>
        </div>

        <div class="col-12">
          <button
            title="Solicitar senha"
            type="button"
            class="btn btn-icon waves-effect waves-light btn-primary btn-xs"
            data-toggle="modal"
            data-target="#solicitar-senha-modal"
          > <i class="fa fa-unlock"></i> </button>
        </div>
      </div>`
      , 'N']
  ]
}

const dadosTabela = {
  head: ['Estado/Segmento', 'Responsável', 'E-mail', 'Telefone', 'Redes Sociais', 'Observações'],
  body: [
    ['DF', 'Mateus Moura', 'mateus@email.com',  '61 9999-9999',
      `<div class="redes-sociais">
        <div class="row" style="display: flex; flex-wrap: wrap">
          <div class="col-3">
            <strong>Facebook:</strong>
          </div>

          <div class="col-9">
            <div class="row">
              <div class="col-12">
                <span style="white-space: nowrap;"><i class="fa fa-external-link"></i>: <a href="www.url.com.br" target="_blank">www.url.com.br</a></span>
              </div>
            
              <div class="col-12">
                <span style="white-space: nowrap;"><i class="fa fa-user-o"></i>: @user.face</span>
              </div>

              <div class="col-12">
                <span style="white-space: nowrap;"><i class="fa fa-chain-broken"></i>: email@email.com</span>
              </div>

              <div class="col-12">
                <button
                  title="Solicitar senha"
                  type="button"
                  class="btn btn-icon waves-effect waves-light btn-primary btn-xs"
                  data-toggle="modal"
                  data-target="#solicitar-senha-modal"
                > <i class="fa fa-unlock"></i> </button>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div class="row" style="display: flex; flex-wrap: wrap">
          <div class="col-3">
            <strong>Twitter:</strong>
          </div>

          <div class="col-9">
            <div class="row">
              <div class="col-12">
                <span style="white-space: nowrap;"><i class="fa fa-external-link"></i>: <a href="www.url.com.br" target="_blank">www.url.com.br</a></span>
              </div>
            
              <div class="col-12">
                <span style="white-space: nowrap;"><i class="fa fa-user-o"></i>: @user.face</span>
              </div>

              <div class="col-12">
                <span style="white-space: nowrap;"><i class="fa fa-chain-broken"></i>: email@email.com</span>
              </div>

              <div class="col-12">
                <button
                  title="Solicitar senha"
                  type="button"
                  class="btn btn-icon waves-effect waves-light btn-primary btn-xs"
                  data-toggle="modal"
                  data-target="#solicitar-senha-modal"
                > <i class="fa fa-unlock"></i> </button>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div class="row" style="display: flex; flex-wrap: wrap">
          <div class="col-3">
            <strong>Instagram:</strong>
          </div>

          <div class="col-9">
            <div class="row">
              <div class="col-12">
                <span style="white-space: nowrap;"><i class="fa fa-external-link"></i>: <a href="www.url.com.br" target="_blank">www.url.com.br</a></span>
              </div>
            
              <div class="col-12">
                <span style="white-space: nowrap;"><i class="fa fa-user-o"></i>: @user.face</span>
              </div>

              <div class="col-12">
                <span style="white-space: nowrap;"><i class="fa fa-chain-broken"></i>: email@email.com</span>
              </div>

              <div class="col-12">
                <button
                  title="Solicitar senha"
                  type="button"
                  class="btn btn-icon waves-effect waves-light btn-primary btn-xs"
                  data-toggle="modal"
                  data-target="#solicitar-senha-modal"
                > <i class="fa fa-unlock"></i> </button>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div class="row" style="display: flex; flex-wrap: wrap">
          <div class="col-3">
            <strong>YouTube:</strong>
          </div>

          <div class="col-9">
            <div class="row">
              <div class="col-12">
                <span style="white-space: nowrap;"><i class="fa fa-external-link"></i>: <a href="www.url.com.br" target="_blank">www.url.com.br</a></span>
              </div>
            
              <div class="col-12">
                <span style="white-space: nowrap;"><i class="fa fa-user-o"></i>: @user.face</span>
              </div>

              <div class="col-12">
                <span style="white-space: nowrap;"><i class="fa fa-chain-broken"></i>: email@email.com</span>
              </div>

              <div class="col-12">
                <button
                  title="Solicitar senha"
                  type="button"
                  class="btn btn-icon waves-effect waves-light btn-primary btn-xs"
                  data-toggle="modal"
                  data-target="#solicitar-senha-modal"
                > <i class="fa fa-unlock"></i> </button>
              </div>
            </div>
          </div>
        </div>
      </div>`
      , 'N']
  ]
}

const RedesSociais = () => (
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
                <h4 className="page-title">Redes Sociais</h4>
                <ol className="breadcrumb p-0 m-0">
                  <li>
                     <span>PSDB</span>
                  </li>
                  <li>Comunicação</li>
                  <li className="active">Redes Socias</li>
                </ol>
                <div className="clearfix" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body table-responsive">
                  <div className="row mb-4">
                    <div className="col-lg-6 align-self-center">
                      <h4 className="m-t-0 header-title">
                        <b>Todas Redes Sociais</b>
                      </h4>
                    </div>

                    <div className="col-lg-6">
                      <button
                        type="button"
                        className="btn btn-primary waves-effect float-right"
                        data-toggle="modal"
                        data-target="#con-close-modal"
                      >
                        {" "}
                        <i className="fa fa-filter m-r-5" />{" "}
                        <span>Filtrar</span>{" "}
                      </button>
                    </div>
                  </div>

                  <div className="card card-border">
                    <div className="card-body p-3">
                      <strong className="mr-2">Filtros aplicados:</strong>{" "}
                      <button
                        type="button"
                        className="btn btn-secondary waves-effect waves-light"
                      >
                        {" "}
                        <span>
                          Nome: blah
                        </span> <i className="fa fa-close" />{" "}
                      </button>
                    </div>
                  </div>

                  <TabelaDinamica
                    dados={dadosTabela}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            id="con-close-modal"
            className="modal fade"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title mt-0">
                    <i className="fa fa-filter m-r-5" /> Filtro
                  </h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="field-1" className="control-label">
                          Nome
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="example-name"
                          placeholder="John"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="field-2" className="control-label">
                          E-mail
                        </label>
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
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="field-5" className="control-label">
                          UF
                        </label>
                        <Select2 />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="field-4" className="control-label">
                          Rede Social
                        </label>
                        <Select2 />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary waves-effect"
                    data-dismiss="modal"
                  >
                    Fechar
                  </button>
                  <button
                    type="button"
                    className="btn btn-info waves-effect waves-light"
                  >
                    Aplicar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
)

export default RedesSociais;
