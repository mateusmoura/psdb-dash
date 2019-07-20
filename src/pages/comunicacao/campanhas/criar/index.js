import React, { PureComponent } from "react";

import { Link } from "react-router-dom";

import Sidebar from "components/sidebar";
import BarraTopo from "components/barra-topo";
import Footer from "components/footer";
import Select2 from 'components/select-2';
import TextareaWysiwig from 'components/textarea-wysiwig';
import DatePicker from "components/datepicker";

import "plugins/jquery.steps/css/jquery.steps.css";
import './index.scss';

class CriarCampanha extends PureComponent {
  componentDidMount() {
    const $form_container = window.jQuery("#wizard-validation-form");
    $form_container.validate({
      errorPlacement: function errorPlacement(error, element) {
        element.after(error);
      }
    });
    $form_container.children("div").steps({
      headerTag: "h3",
      bodyTag: "section",
      transitionEffect: "slideLeft",
      onStepChanging: function(event, currentIndex, newIndex) {
        $form_container.validate().settings.ignore = ":disabled,:hidden";
        return $form_container.valid();
      },
      onFinishing: function(event, currentIndex) {
        $form_container.validate().settings.ignore = ":disabled";
        return $form_container.valid();
      },
      onFinished: function(event, currentIndex) {
        alert("Submitted!");
      },
      labels: {
        cancel: "Cancelar",
        current: "passo atual:",
        pagination: "Paginação",
        finish: "Finalizar",
        next: "Próximo",
        previous: "Anterior",
        loading: "Carregando ..."
      }
    });
  }

  render() {
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
                    <h4 className="page-title">Campanhas</h4>
                    <ol className="breadcrumb p-0 m-0">
                      <li>
                         <span>PSDB</span>
                      </li>
                      <li>Comunicação</li>
                      <li className="active">
                        <Link to="/comunicacao/campanhas">Campanhas</Link>
                      </li>
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
                            <b>Criar Campanha</b>
                          </h4>
                        </div>
                      </div>

                      <form id="wizard-validation-form" action="#">
                        <div>
                          <h3>Destinatários</h3>
                          <section>
                            <div className="form-group row">
                              <label
                                className="col-lg-2 control-label "
                                for="surname2"
                              >
                                Tipo da mensagem:
                              </label>
                              <div className="col-lg-10">
                                <Select2 dados={[{
                                  value: 'WP',
                                  title: 'Whatsapp'
                                }, {
                                  value: 'SMS',
                                  title: 'SMS',
                                }, {
                                  value: 'MAIL',
                                  title: 'E-mail',
                                }]} />
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                className="col-lg-2 control-label "
                                for="userName2"
                              >
                                Para:
                              </label>
                              <div className="col-lg-10">
                                <Select2 dados={[{
                                  value: 1,
                                  title: 'Todos os filiados'
                                }, {
                                  value: 2,
                                  title: 'Todos os presidentes diretórios de diretório municipal',
                                }, {
                                  value: 3,
                                  title: 'Todos os membros da comissão executiva',
                                }]} />
                              </div>
                            </div>
                          </section>
                          <h3>Mensagem</h3>
                          <section>
                            <div className="form-group row">
                              <div className="col-lg-12">
                                <ul className="list-unstyled w-list">
                                  <li>
                                    <b>Tipo da mensagem:</b> E-mail
                                  </li>
                                  <li>
                                    <b>Para :</b> Todos os filiados
                                  </li>
                                </ul>

                                <br />
                                <br />

                                <TextareaWysiwig />
                              </div>
                            </div>
                          </section>
                          <h3>Enviar teste</h3>
                          <section>
                            <div className="form-group row">
                              <label
                                className="col-lg-2 control-label"
                                for="name2"
                              >
                                Email de envio:
                              </label>
                              <div className="col-lg-10">
                                <input
                                  className="form-control input-lg"
                                  type="email"
                                  id="username"
                                  required=""
                                  placeholder="Nome do usuário"
                                />

                                <div className="text-right">
                                  <br />
                                  <button type="button" class="btn btn-primary btn-bordered waves-effect w-md waves-light">Enviar Teste</button>
                                </div>
                              </div>
                            </div>
                          </section>
                          <h3>Enviar mensagem</h3>
                          <section>
                            <div className="form-group row">
                              <div className="col-lg-12">
                                <ul className="list-unstyled w-list">
                                  <li>
                                    <b>Para :</b> Diretório ...
                                  </li>
                                  <li>
                                    <b>De :</b> contato@psdb.com.br
                                  </li>
                                  <li>
                                    <b>Tipo de envio:</b> Email
                                  </li>
                                  <li>
                                    <b>Mensagem:</b> Mensagem que será enviada
                                  </li>
                                </ul>

                                <br />

                                <div className="row">
                                  <div className="col-12">
                                    <button
                                      type="button"
                                      data-toggle="modal"
                                      data-target="#confirmar-modal"
                                      class="btn btn-primary waves-effect w-md waves-light"
                                    >Enviar Agora</button>
                                    <button
                                      type="button"
                                      data-toggle="modal"
                                      data-target="#agendar-modal"
                                      class="btn btn-primary btn-bordered waves-effect w-md waves-light m-l-5"
                                    >Agendar</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="confirmar-modal"
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
                        Confirmar?
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
                        <div className="col-12">
                          <p className="remover-margin">Deseja enviar o email agora?</p>
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
                        Enviar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="agendar-modal"
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
                        Agendamento
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
                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="field-7" className="control-label">
                              Data do envio
                            </label>
                            <DatePicker />
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
                        Agendar
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
    );
  }
}

export default CriarCampanha;
