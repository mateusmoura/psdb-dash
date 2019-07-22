import React, { Component } from 'react';

import CardDados from 'components/card-dados';
import LineGraph from 'components/line-graph';
import Sidebar from 'components/sidebar';
import BarraTopo from 'components/barra-topo';
import Footer from 'components/footer';
import Select2 from 'components/select-2';
// import DateRangePicker from "../../../components/date-range-picker";
import './index.scss';
import '../../pages-js/jquery.dashboard.js';
import '../../pages-js/jquery.c3-chart.init.js';
import '../../plugins/morris/morris.css';

class Dashboard extends Component {
  componentDidMount() {
    window.Morris.Area({
        element: 'morris-area-with-dotted',
        pointSize: 3,
        lineWidth: 1,
        data: [
            { y: '2009', a: 10},
            { y: '2010', a: 75},
            { y: '2011', a: 50},
            { y: '2012', a: 75},
            { y: '2013', a: 50},
            { y: '2014', a: 75},
            { y: '2015', a: 90 }
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Filiados'],
        hideHover: 'auto',
        pointFillColors: ['#ffffff'],
        pointStrokeColors: ['#999999'],
        resize: true,
        smooth: false,
        gridLineColor: '#eef0f2',
        lineColors: ['#3b3e47', "#bdbdbd"]
    });
  }

  render() {
    return (
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
                           <span>PSDB</span>
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

              <div className="row">
                <div className="col-lg-4">
                  <CardDados
                    titulo="Filiados"
                    descricao="Total nacional"
                    cor="widget-two-info"
                    valor={1500000}
                  />
                </div>
                <div className="col-lg-4">
                  <CardDados
                    titulo="Novas Filiações 2019"
                    descricao="Total nacional"
                    cor="widget-two-success"
                    valor={20000}
                  />
                </div>
                <div className="col-lg-4">
                  <CardDados
                    titulo="Filiações aguardando confirmação do TSE"
                    descricao="TSE"
                    cor="widget-two-pink"
                    valor={231}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="card">
                     <div className="card-body">
                       <div className="row">
                          <div className="col-lg-10 align-self-center">
                            <h4 className="header-title m-t-0">Histórico de filiação</h4>
                            <p className="text-muted m-b-30 text-overflow">
                                Gráfico com a quantidade total de filiados em todos os estados nos últimos anos:
                            </p>
                          </div>

                          <div className="col-lg-2">
                            <button type="button" className="btn btn-primary waves-effect float-right" data-toggle="modal" data-target="#con-close-modal"> <i className="fa fa-cog"></i></button>
                          </div>
                       </div>

                       <div id="morris-area-with-dotted" className="morris-chart" style={{height:'320px'}}></div>
                     </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="row mb-3">
                        <div className="col-lg-10 align-self-center">
                          <h4 className="header-title m-t-0">Comunicação com os filiados</h4>
                        </div>
                      </div>

                      <div className="row">
                        <div class="col-lg-6">
                          <div class="card widget-box-three">
                              <div class="card-body">
                                  <div class="bg-icon float-left">
                                    <a href="./PSDB.xlsx"><i class="fi-inbox"></i></a>
                                  </div>
                                  <div class="text-right">
                                      <p class="m-t-5 text-uppercase font-600">Possuem e-mail</p>
                                      <h2 class="m-b-10"><span data-plugin="counterup">300.000</span> <br/> <span class="small-text">30,32%</span></h2>
                                  </div>
                              </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="card widget-box-three">
                              <div class="card-body">
                                  <div class="bg-icon float-left">
                                    <a href="./PSDB.xlsx"><i class="fi-inbox"></i></a>
                                  </div>
                                  <div class="text-right">
                                      <p class="m-t-5 text-uppercase font-600">Possuem e-mail</p>
                                      <h2 class="m-b-10"><span data-plugin="counterup">300.000</span> <br/> <span class="small-text">30,32%</span></h2>
                                  </div>
                              </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div class="col-lg-6">
                          <div class="card widget-box-three">
                              <div class="card-body">
                                  <div class="bg-icon float-left">
                                    <a href="./PSDB.xlsx"><i class="fi-inbox"></i></a>
                                  </div>
                                  <div class="text-right">
                                      <p class="m-t-5 text-uppercase font-600">Possuem telefone</p>
                                      <h2 class="m-b-10"><span data-plugin="counterup">250.000</span> <br/> <span class="small-text">25,43%</span></h2>
                                  </div>
                              </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="card widget-box-three">
                              <div class="card-body">
                                  <div class="bg-icon float-left">
                                    <a href="./PSDB.xlsx"><i class="fi-inbox"></i></a>
                                  </div>
                                  <div class="text-right">
                                      <p class="m-t-5 text-uppercase font-600">Possuem whatsapp</p>
                                      <h2 class="m-b-10"><span data-plugin="counterup">100.000</span> <br/> <span class="small-text">10,00%</span></h2>
                                  </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                      <div className="card-body">
                          <h4 className="header-title m-t-0">Novas Filiações</h4>
                          <p className="text-muted text-overflow m-b-30">
                              Gráfico da quantidade de novas filiações nos últimos 6 meses
                          </p>

                          <div id="chart-filiacoes"></div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="con-close-modal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title mt-0"><i className="fa fa-filter m-r-5"></i> Filtro</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="field-5" className="control-label">UF</label>
                                    <Select2 />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="field-4" className="control-label">Município</label>
                                    <Select2 />
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

        <Footer />
      </div>
    )
  }
};

export default Dashboard;
