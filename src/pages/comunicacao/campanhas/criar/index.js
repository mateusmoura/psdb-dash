import React, { PureComponent } from "react";

import { Link } from "react-router-dom";

import Sidebar from "components/sidebar";
import BarraTopo from "components/barra-topo";
import Footer from "components/footer";
import Select2 from 'components/select-2';
import TextareaWysiwig from 'components/textarea-wysiwig';

import "plugins/jquery.steps/css/jquery.steps.css";

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
                        <a href="#this">PSDB</a>
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
                          <h3>Dados para Envio</h3>
                          <section>
                            <div className="form-group row">
                              <label
                                className="col-lg-2 control-label "
                                for="userName2"
                              >
                                Para:
                              </label>
                              <div className="col-lg-10">
                                <Select2 />
                              </div>
                            </div>
                          </section>
                          <h3>Configurações de envio</h3>
                          <section>
                            <div className="form-group row">
                              <label
                                className="col-lg-2 control-label"
                                for="name2"
                              >
                                Email de envio:
                              </label>
                              <div className="col-lg-10">
                                <Select2 />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                className="col-lg-2 control-label "
                                for="surname2"
                              >
                                Tipo da mensagem:
                              </label>
                              <div className="col-lg-10">
                                <Select2 />
                              </div>
                            </div>
                          </section>
                          <h3>Mensagem</h3>
                          <section>
                            <div className="form-group row">
                              <div className="col-lg-12">
                                {/* <ul className="list-unstyled w-list">
                                  <li>
                                    <b>First Name :</b> Jonathan
                                  </li>
                                  <li>
                                    <b>Last Name :</b> Smith
                                  </li>
                                  <li>
                                    <b>Emial:</b> jonathan@smith.com
                                  </li>
                                  <li>
                                    <b>Address:</b> 123 Your City, Cityname.
                                  </li>
                                </ul> */}
                                <TextareaWysiwig />
                              </div>
                            </div>
                          </section>
                          <h3>Step Final</h3>
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
                              </div>
                            </div>
                          </section>
                        </div>
                      </form>
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
