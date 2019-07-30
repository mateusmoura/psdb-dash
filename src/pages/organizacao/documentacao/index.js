import React, { Component } from "react";

import Sidebar from "components/sidebar";
import DatePicker from "components/datepicker";
import BarraTopo from "components/barra-topo";
import ResponsiveTable from "components/responsive-table";
import CheckboxSwitchery from "components/checkbox/switchery";
import TabelaDinamica from 'components/tabela-dinamica';

import "./index.scss";

const dadosTabela = {
  head: ['Data de Cadastro', 'Responsável', 'Tipo', 'Descrição', 'Ações'],
  body: [
    ['01/01/2017', 'Roberto Silva', 'Ata de convenções', 'Descrição aqui asdfasdfa sdfas dfasdf asdf', '<div><button type="button" class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-download"></i> </button></div>'],
    ['01/01/2017', 'Roberto Silva', 'Ata de convenções', 'Descrição aqui asdfasdfa sdfas dfasdf asdf', '<div><button type="button" class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-download"></i> </button></div>'],
    ['01/01/2017', 'Roberto Silva', 'Ata de convenções', 'Descrição aqui asdfasdfa sdfas dfasdf asdf', '<div><button type="button" class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-download"></i> </button></div>'],
    ['01/01/2017', 'Roberto Silva', 'Ata de convenções', 'Descrição aqui asdfasdfa sdfas dfasdf asdf', '<div><button type="button" class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-download"></i> </button></div>'],
    ['01/01/2017', 'Roberto Silva', 'Ata de convenções', 'Descrição aqui asdfasdfa sdfas dfasdf asdf', '<div><button type="button" class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-download"></i> </button></div>'],
    ['01/01/2017', 'Roberto Silva', 'Ata de convenções', 'Descrição aqui asdfasdfa sdfas dfasdf asdf', '<div><button type="button" class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-download"></i> </button></div>'],
    ['01/01/2017', 'Roberto Silva', 'Ata de convenções', 'Descrição aqui asdfasdfa sdfas dfasdf asdf', '<div><button type="button" class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-download"></i> </button></div>'],
    ['01/01/2017', 'Roberto Silva', 'Ata de convenções', 'Descrição aqui asdfasdfa sdfas dfasdf asdf', '<div><button type="button" class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-download"></i> </button></div>'],
    ['01/01/2017', 'Roberto Silva', 'Ata de convenções', 'Descrição aqui asdfasdfa sdfas dfasdf asdf', '<div><button type="button" class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-download"></i> </button></div>'],
    ['01/01/2017', 'Roberto Silva', 'Ata de convenções', 'Descrição aqui asdfasdfa sdfas dfasdf asdf', '<div><button type="button" class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-download"></i> </button></div>'],
    ['01/01/2017', 'Roberto Silva', 'Ata de convenções', 'Descrição aqui asdfasdfa sdfas dfasdf asdf', '<div><button type="button" class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-download"></i> </button></div>'],
    ['01/01/2017', 'Roberto Silva', 'Ata de convenções', 'Descrição aqui asdfasdfa sdfas dfasdf asdf', '<div><button type="button" class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-download"></i> </button></div>'],
    ['01/01/2017', 'Roberto Silva', 'Ata de convenções', 'Descrição aqui asdfasdfa sdfas dfasdf asdf', '<div><button type="button" class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-download"></i> </button></div>'],
    ['01/01/2017', 'Roberto Silva', 'Ata de convenções', 'Descrição aqui asdfasdfa sdfas dfasdf asdf', '<div><button type="button" class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-download"></i> </button></div>'],
    ['01/01/2017', 'Roberto Silva', 'Ata de convenções', 'Descrição aqui asdfasdfa sdfas dfasdf asdf', '<div><button type="button" class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-download"></i> </button></div>'],
    ['01/01/2017', 'Roberto Silva', 'Ata de convenções', 'Descrição aqui asdfasdfa sdfas dfasdf asdf', '<div><button type="button" class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-download"></i> </button></div>'],
    ['01/01/2017', 'Roberto Silva', 'Ata de convenções', 'Descrição aqui asdfasdfa sdfas dfasdf asdf', '<div><button type="button" class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-download"></i> </button></div>'],
    ['01/01/2017', 'Roberto Silva', 'Ata de convenções', 'Descrição aqui asdfasdfa sdfas dfasdf asdf', '<div><button type="button" class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-download"></i> </button></div>'],
    ['01/01/2017', 'Roberto Silva', 'Ata de convenções', 'Descrição aqui asdfasdfa sdfas dfasdf asdf', '<div><button type="button" class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-download"></i> </button></div>'],
    ['01/01/2017', 'Roberto Silva', 'Ata de convenções', 'Descrição aqui asdfasdfa sdfas dfasdf asdf', '<div><button type="button" class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-download"></i> </button></div>'],
  ]
}

class Diretorios extends Component {
  componentDidMount() {
    window.jQuery(":file").filestyle({
      text: 'Selecionar',
    });
  }

  render () {
    return (
      <div id="wrapper">
        <BarraTopo />

        <Sidebar />

        <div className="content-page">
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box">
                    <h4 className="page-title">Documentação</h4>
                    <ol className="breadcrumb p-0 m-0">
                      <li>Organização partidária</li>
                      <li className="active">Documentação</li>
                    </ol>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <div className="card card-border card-primary">
                    <div className="card-heading">
                      <h3
                        className="card-title text-primary"
                        style={{ textTransform: "uppercase" }}
                      >
                        Documentações
                      </h3>
                    </div>

                    <div className="card-body table-responsive">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          {/* <p className="text-danger">
                            Vigência entre 09/12/2017 e 31/05/2019
                          </p> */}

                          {/* <div className="mandatos-encerrados">
                            <CheckboxSwitchery id="check-1" />
                            <label htmlFor="check-1">
                              Apresentar membros com mandatos encerrados
                            </label>
                          </div> */}
                        </div>

                        <div className="col-12 col-md-6 text-right m-b-20">
                          <button
                            type="button"
                            className="btn btn-primary waves-effect w-md waves-light"
                            data-toggle="modal"
                            data-target="#con-close-modal-2"
                          >
                            Upload novo documento
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
            </div>
          </div>
        </div>

        <div
          id="con-close-modal-2"
          className="modal fade"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title mt-0">
                  Novo Documento
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
                  <div className="col-12 col-md-12">
                    <div className="form-group">
                      <label htmlFor="field-1" className="control-label">
                        Arquivo
                      </label>
                      <div className="form-group m-b-0">
                        <input
                          type="file"
                          className="filestyle"
                          data-text="Selecionar"
                          data-buttonname="btn-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light btn-bordered waves-effect w-md"
                  data-dismiss="modal"
                >
                  Fechar
                </button>
                <button
                  type="button"
                  className="btn btn-primary waves-effect w-md waves-light"
                >
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Diretorios;
