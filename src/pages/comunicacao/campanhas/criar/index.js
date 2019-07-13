import React, { PureComponent } from "react";

import { Link } from "react-router-dom";

import Sidebar from "components/sidebar";
import BarraTopo from "components/barra-topo";
import Footer from "components/footer";

import "plugins/jquery.steps/css/jquery.steps.css";
import "plugins/jquery.steps/js/jquery.steps.min.js";
import "plugins/jquery-validation/js/jquery.validate.js";

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
                          <h3>Step 1</h3>
                          <section>
                            <div className="form-group row">
                              <label
                                className="col-lg-2 control-label "
                                for="userName2"
                              >
                                User name
                              </label>
                              <div className="col-lg-10">
                                <input
                                  className="form-control"
                                  id="userName2"
                                  name="userName"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                className="col-lg-2 control-label "
                                for="password2"
                              >
                                Password *
                              </label>
                              <div className="col-lg-10">
                                <input
                                  id="password2"
                                  name="password"
                                  type="text"
                                  className="required form-control"
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                className="col-lg-2 control-label "
                                for="confirm2"
                              >
                                Confirm Password *
                              </label>
                              <div className="col-lg-10">
                                <input
                                  id="confirm2"
                                  name="confirm"
                                  type="text"
                                  className="required form-control"
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-lg-12 control-label ">
                                (*) Mandatory
                              </label>
                            </div>
                          </section>
                          <h3>Step 2</h3>
                          <section>
                            <div className="form-group row">
                              <label
                                className="col-lg-2 control-label"
                                for="name2"
                              >
                                First name *
                              </label>
                              <div className="col-lg-10">
                                <input
                                  id="name2"
                                  name="name"
                                  type="text"
                                  className="required form-control"
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                className="col-lg-2 control-label "
                                for="surname2"
                              >
                                Last name *
                              </label>
                              <div className="col-lg-10">
                                <input
                                  id="surname2"
                                  name="surname"
                                  type="text"
                                  className="required form-control"
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                className="col-lg-2 control-label "
                                for="email2"
                              >
                                Email *
                              </label>
                              <div className="col-lg-10">
                                <input
                                  id="email2"
                                  name="email"
                                  type="text"
                                  className="required email form-control"
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                className="col-lg-2 control-label "
                                for="address2"
                              >
                                Address
                              </label>
                              <div className="col-lg-10">
                                <input
                                  id="address2"
                                  name="address"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <label className="col-lg-12 control-label ">
                                (*) Mandatory
                              </label>
                            </div>
                          </section>
                          <h3>Step 3</h3>
                          <section>
                            <div className="form-group row">
                              <div className="col-lg-12">
                                <ul className="list-unstyled w-list">
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
                                </ul>
                              </div>
                            </div>
                          </section>
                          <h3>Step Final</h3>
                          <section>
                            <div className="form-group row">
                              <div className="col-lg-12">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="acceptTerms3"
                                  />
                                  <label
                                    className="custom-control-label"
                                    for="acceptTerms3"
                                  >
                                    I agree with the Terms and Conditions.
                                  </label>
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
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default CriarCampanha;
