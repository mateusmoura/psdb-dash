import React from "react";
import Sidebar from "components/sidebar";
import BarraTopo from "components/barra-topo";
import Footer from 'components/footer';

import Select2 from "components/select-2";

const FiliadosCadastro = () => (
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
                  <li className="active">Cadastro de Filiados</li>
                </ol>
                <div className="clearfix" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="m-t-0 header-title mb-4"><b>Dados Pessoais</b></h4>

                  <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">Nome</label>
                          <input type="text" className="form-control" id="example-name" />
                        </div>
                     </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">CPF</label>
                          <input type="text" className="form-control" id="example-cpf"  />
                        </div>
                     </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">Data de Nascimento</label>
                          <input type="text" className="form-control" id="example-name" />
                        </div>
                     </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">Sexo</label>
                          <Select2 />
                        </div>
                     </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">Nome da Mãe</label>
                          <input type="text" className="form-control" id="example-name" />
                        </div>
                     </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">Nome do Pai</label>
                          <input type="text" className="form-control" id="example-name" />
                        </div>
                     </div>
                  </div>

                  <hr className="mt-1" />

                  <div className="row">
                    <div className="col-lg-8">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">Título Eleitoral</label>
                          <input type="text" className="form-control" id="example-titulo" />
                        </div>
                     </div>
                    <div className="col-lg-2">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">Seção</label>
                          <input type="text" className="form-control" id="example-zona"  />
                        </div>
                     </div>
                    <div className="col-lg-2">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">Zona</label>
                          <input type="text" className="form-control" id="example-zona"  />
                        </div>
                     </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-2">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">UF</label>
                          <Select2 />
                        </div>
                     </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">Município</label>
                          <Select2 />
                        </div>
                     </div>
                    <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">Data de filiação</label>
                          <input type="text" className="form-control" id="example-titulo" />
                        </div>
                     </div>
                  </div>

                  <hr />

                  <div className="row">
                    <div className="col-lg-5 align-self-center">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="remember3" />
                        <label className="custom-control-label" htmlFor="remember3">Foi indicado por alguém?</label>
                      </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">Indicado por</label>
                          <input type="text" className="form-control" id="example-titulo" />
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h4 className="m-t-0 header-title mb-4"><b>Contatos</b></h4>

                  <div className="row">
                    <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">E-mail</label>
                          <input type="email" id="example-email" name="example-email" className="form-control" />
                        </div>
                     </div>
                    <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">Telefone Fixo</label>
                          <input type="text" placeholder="" data-mask="(999) 999-9999" className="form-control" />
                        </div>
                     </div>
                    <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">Telefone Celular</label>
                          <input type="text" placeholder="" data-mask="(999) 999-9999" className="form-control" />
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <div className="row  mb-4">
                    <div className="col-lg-6">
                      <h4 className="m-t-0 header-title"><b>Endereço</b></h4>
                    </div>

                    <div className="col-lg-6">
                      <button type="button" className="btn btn-light btn-bordered waves-effect w-md float-right"><i className="fa fa-question m-r-5"></i> <span>Não sei meu CEP</span></button>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">CEP</label>

                          <div className="input-group">
                            <input type="email" id="example-input2-group2" name="example-input2-group2" className="form-control"  />

                            <span className="input-group-append">
                              <button type="button" className="btn waves-effect waves-light btn-primary">Buscar</button>
                            </span>
                          </div>
                        </div>

                     </div>
                  </div>

                  <hr />

                  <div className="row">
                    <div className="col-lg-2">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">UF</label>
                          <Select2 />
                        </div>
                     </div>
                    <div className="col-lg-10">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">Município</label>
                          <Select2 />
                        </div>
                     </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">Bairro</label>
                          <input type="text" className="form-control" id="example-name" />
                        </div>
                     </div>
                    <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">Logradouro</label>
                          <input type="text" className="form-control" id="example-name" />
                        </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="form-group">
                        <label htmlFor="field-1" className="control-label">Número</label>
                        <input type="text" className="form-control" id="example-name" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                          <label htmlFor="field-1" className="control-label">Complemento</label>
                          <input type="text" className="form-control" id="example-name" />
                        </div>
                     </div>
                  </div>

                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h4 className="m-t-0 header-title mb-4"><b>Redes Sociais</b></h4>

                  <div className="row mb-4">
                    <div className="col-lg-6">
                      <div className="input-group">
                          <div className="input-group-prepend">
                              <span className="input-group-text"><i className="fa fa-facebook"></i></span>
                          </div>
                          <input type="text" id="example-input1-group1" name="example-input1-group1" className="form-control" placeholder="Facebook" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group">
                          <div className="input-group-prepend">
                              <span className="input-group-text"><i className="fa fa-twitter"></i></span>
                          </div>
                          <input type="text" id="example-input1-group1" name="example-input1-group1" className="form-control" placeholder="Twitter" />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-lg-6">
                      <div className="input-group">
                          <div className="input-group-prepend">
                              <span className="input-group-text"><i className="fa fa-instagram"></i></span>
                          </div>
                          <input type="text" id="example-input1-group1" name="example-input1-group1" className="form-control" placeholder="Instagram" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group">
                          <div className="input-group-prepend">
                              <span className="input-group-text"><i className="fa fa-google"></i></span>
                          </div>
                          <input type="text" id="example-input1-group1" name="example-input1-group1" className="form-control" placeholder="Google+" />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-lg-6">
                      <div className="input-group">
                          <div className="input-group-prepend">
                              <span className="input-group-text"><i className="fa fa-linkedin"></i></span>
                          </div>
                          <input type="text" id="example-input1-group1" name="example-input1-group1" className="form-control" placeholder="Linkedin" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group">
                          <div className="input-group-prepend">
                              <span className="input-group-text"><i className="fa fa-foursquare"></i></span>
                          </div>
                          <input type="text" id="example-input1-group1" name="example-input1-group1" className="form-control" placeholder="Foursquare" />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-lg-6">
                      <div className="input-group">
                          <div className="input-group-prepend">
                              <span className="input-group-text"><i className="fa fa-pinterest"></i></span>
                          </div>
                          <input type="text" id="example-input1-group1" name="example-input1-group1" className="form-control" placeholder="Pinterest" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group">
                          <div className="input-group-prepend">
                              <span className="input-group-text"><i className="fa fa-globe"></i></span>
                          </div>
                          <input type="text" id="example-input1-group1" name="example-input1-group1" className="form-control" placeholder="Blog" />
                      </div>
                    </div>
                  </div>


                </div>
              </div>


            </div>
          </div>

          <div className="form-group text-right mb-5">
            <button className="btn btn-primary waves-effect waves-light btn-lg" type="submit">Cadastrar</button>
          </div>

        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default FiliadosCadastro;
