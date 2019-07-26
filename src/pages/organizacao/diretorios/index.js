import React, { Component } from "react";

import { Link } from 'react-router-dom';

import Sidebar from "components/sidebar";
import DatePicker from "components/datepicker";
import BarraTopo from "components/barra-topo";
// import ResponsiveTable from "components/responsive-table";
// import CheckboxSwitchery from "components/checkbox/switchery";
import TabelaDinamica from 'components/tabela-dinamica';

import Select2 from 'components/select-2';
import { EstadosOptions } from 'js/estados.js';
import { MunicipiosOptions } from 'js/municipios.js';

import "./index.scss";

const dadosTabela = {
  head: ['#', 'UF', 'Município', 'Nome', 'Título', 'Cargo'],
  body: [
    ['1', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Presidente 1'],
    ['2', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Vice-presidente 2'],
    ['3', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '038151471805', 'Tesoureiro 3'],
    ['4', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '048151471805', 'Vogal 4'],
    ['5', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '058151471805', 'Presidente 5'],
    ['6', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Vice-presidente 6'],
    ['7', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Tesoureiro 7'],
    ['8', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Vogal 8'],
    ['9', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Presidente 9'],
    ['10', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Vice-presidente 10'],
    ['11', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Tesoureiro 11'],
    ['12', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Vogal 12'],
    ['13', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Presidente 13'],
    ['14', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Vice-presidente 14'],
    ['15', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Tesoureiro 15'],
    ['16', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Vogal 16'],
    ['17', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Presidente 17'],
    ['18', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Vice-presidente 18'],
    ['19', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Tesoureiro 19'],
    ['20', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Vogal 20'],
    ['21', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Presidente 21'],
    ['22', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Vice-presidente 22'],
    ['23', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Tesoureiro 23'],
    ['24', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Vogal 24'],
    ['25', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Presidente 25'],
    ['26', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Vice-presidente 26'],
    ['27', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Tesoureiro 27'],
    ['28', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Vogal 28'],
    ['29', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Presidente 29'],
    ['30', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Vice-presidente 30'],
    ['31', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Tesoureiro 31'],
    ['32', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Vogal 32'],
    ['33', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Presidente 33'],
    ['34', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Vice-presidente 34'],
    ['35', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Tesoureiro 35'],
    ['36', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Vogal 36'],
    ['37', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Presidente 37'],
    ['38', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Vice-presidente 38'],
    ['39', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Tesoureiro 39'],
    ['40', 'MT', 'Colíder', 'WILSON DIEGO NUNES SANTANA', '028151471805', 'Vogal 40'],
  ]
}

class Diretorios extends Component {
  componentDidMount() {
    window.jQuery(":file").filestyle({input: false});
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
                    <h4 className="page-title">Olá John !</h4>
                    <ol className="breadcrumb p-0 m-0">
                      <li>Organização partidária</li>
                      <li className="active">Diretorios</li>
                    </ol>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="card card-border card-primary">
                    <div className="card-heading">
                      <h3 className="card-title text-primary">
                        DIRETÓRIO NACIONAL
                      </h3>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <h5>Endereço</h5>
                          <address>
                            SGAS QUADRA 607, EDIFICIO METROPOLIS cob 2 COBERTURA 2{" "}
                            <br />
                            Avenida L2 Sul <br />
                            Brasília / DF - CEP: 70.200-670
                            <br />
                          </address>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-6 col-md-3">
                          <h5>E-mail</h5>
                          <p>tucano@psdb.org.br</p>
                        </div>
                        <div className="col-6 col-md-3">
                          <h5>Site</h5>
                          <p>http://www.psdb.org.br</p>
                        </div>
                        <div className="col-6 col-md-3">
                          <h5>Telefone</h5>
                          <p>(61) 3424-0500</p>
                        </div>
                        <div className="col-6 col-md-3">
                          <h5>Fax</h5>
                          <p>(61) 3424-0515</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12 text-right">
                          <button
                            type="button"
                            className="btn btn-primary waves-effect w-md waves-light"
                          >
                            Alterar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="card card-border card-primary">
                    <div className="card-heading">
                      <h3 className="card-title text-primary">
                        <i className="fa fa-filter" /> Filtro
                      </h3>
                    </div>
                    <div className="card-body">
                      <p className="text-muted m-b-20">
                        Possivel filtrar pelo nome, estado, múnicipio.
                      </p>

                      <form action="#">
                        <div className="row">
                          <div className="col-12 col-md-4">
                            <div className="form-group">
                              <label htmlFor="userName">Nome</label>
                              <input
                                type="text"
                                name="nick"
                                id="userName"
                                parsley-trigger="change"
                                className="form-control"
                                placeholder="Digite o nome"
                              />
                            </div>
                          </div>

                          <div className="col-12 col-md-4">
                            <div className="form-group">
                              <label htmlFor="estado">Estado</label>

                              <Select2 dados={EstadosOptions} />
                            </div>
                          </div>

                          <div className="col-12 col-md-4">
                            <div className="form-group">
                              <label htmlFor="estado">Município</label>

                              <Select2 dados={MunicipiosOptions} />
                            </div>
                          </div>
                        </div>

                        <div className="form-group text-right m-b-0">
                          <button
                            className="btn btn-primary waves-effect waves-light"
                            type="submit"
                          >
                            Filtrar
                          </button>
                          {/* <button
                            type="reset"
                            className="btn btn-secondary waves-effect m-l-5"
                          >
                            Cancel
                          </button> */}
                        </div>
                      </form>
                    </div>
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
                        Comissão Executiva
                      </h3>
                    </div>

                    <div className="card-body table-responsive">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <p className="text-danger">
                            Vigência entre 09/12/2017 e 31/05/2019
                          </p>

                          {/* <div className="mandatos-encerrados">
                            <CheckboxSwitchery id="check-1" />
                            <label htmlFor="check-1">
                              Apresentar membros com mandatos encerrados
                            </label>
                          </div> */}
                        </div>

                        <div className="col-12 col-md-6 m-b-20 text-right">
                          <button
                            type="button"
                            className="btn btn-warning waves-effect w-md waves-light"
                            data-toggle="modal"
                            data-target="#con-close-modal"
                          >
                            Prorrogar Vigência
                          </button>
                          {"   "}
                          <button
                            type="button"
                            className="btn btn-primary waves-effect w-md waves-light"
                            data-toggle="modal"
                            data-target="#con-close-modal-2"
                          >
                            Nova Convenção
                          </button>
                          {"   "}
                          <Link
                            to="/comunicacao/campanhas/criar"
                            className="btn btn-info waves-effect w-md waves-light"
                          >Enviar comunicação</Link>
                        </div>
                      </div>
                      
                      <TabelaDinamica
                        dados={dadosTabela}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <div className="card card-border card-primary">
                    <div className="card-heading">
                      <h3 className="card-title text-primary">ATAS DE CONVENÇÃO</h3>
                    </div>

                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table mb-0">
                          <thead className="thead-light">
                            <tr>
                              <th scope="col" />
                              <th scope="col">Data</th>
                              <th scope="col">Ata</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row" />
                              <td>31/01/2018</td>
                              <td>
                                <a href="#this" className="text-blue">
                                  ATA_NOVA_CONVENCAO_10695
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="con-close-modal"
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
                  Prorrogação da vigência da convenção
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
                          data-buttonname="btn-primary"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-12">
                    <div className="form-group">
                      <label htmlFor="field-2" className="control-label">
                        Novo Termino
                      </label>
                      <DatePicker />
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
                  Nova Convenção
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
                          data-buttonname="btn-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label htmlFor="field-2" className="control-label">
                        Início
                      </label>
                      <DatePicker />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label htmlFor="field-2" className="control-label">
                        Término
                      </label>
                      <DatePicker />
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
