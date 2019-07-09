import React from "react";

import Sidebar from "components/sidebar";
import BarraTopo from "components/barra-topo";
import ResponsiveTable from "components/responsive-table";
import CheckboxSwitchery from 'components/checkbox/switchery';

import './index.scss';

const Diretorios = () => (
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
                          <label htmlFor="userName">
                            Nome
                          </label>
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
                          <label htmlFor="estado">
                            Estado
                          </label>

                          <select id="estado" className="form-control">
                            <option value="">Selecione</option>
                            <option value="press">Distrito Federal</option>
                            <option value="net">São Paulo</option>
                            <option value="mouth">Rio de Janeiro</option>
                            <option value="other">Acre</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-12 col-md-4">
                        <div className="form-group">
                          <label htmlFor="estado">
                            Município
                          </label>

                          <select id="estado" className="form-control">
                            <option value="">Selecione</option>
                            <option value="press">Município 1</option>
                            <option value="net">Município 2</option>
                            <option value="mouth">Município 3</option>
                            <option value="other">Município 4</option>
                          </select>
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
            <div className="col-12">
              <div className="card card-border card-primary">
                <div className="card-heading">
                  <h3 className="card-title text-primary">DIRETÓRIO NACIONAL</h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <h5>Endereço</h5>
                      <address>
                        SGAS QUADRA 607, EDIFICIO METROPOLIS cob 2 COBERTURA 2 <br />
                        Avenida L2 Sul <br />
                        Brasília / DF - CEP: 70.200-670<br />
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
                      <button type="button" className="btn btn-primary waves-effect w-md waves-light">Alterar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="card card-border card-primary">
                <div className="card-heading">
                  <h3 className="card-title text-primary" style={{ textTransform: 'uppercase' }}>Comissão Executiva</h3>
                </div>

                <div className="card-body table-responsive">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <p className="text-danger">Vigência entre 09/12/2017 e 31/05/2019</p>

                      <div className="mandatos-encerrados">
                        <CheckboxSwitchery id="check-1" />
                        <label htmlFor="check-1">Apresentar membros com mandatos encerrados</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 text-right">
                      <button type="button" className="btn btn-warning waves-effect w-md waves-light">Prorrogar Vigência</button>
                      {'   '}
                      <button type="button" className="btn btn-primary waves-effect w-md waves-light">Nova Convenção</button>
                    </div>
                  </div>

                  <ResponsiveTable />
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
                <div class="table-responsive">
                  <table class="table mb-0">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Data</th>
                        <th scope="col">Ata</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"></th>
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
  </div>
);

export default Diretorios;
