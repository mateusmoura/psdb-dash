import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../images/logo-psdb.png';

const Login = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="wrapper-page">
          <div className="m-t-40 account-pages">
            <div className="text-center account-logo-box">
              <h2 className="text-uppercase">
                <Link
                  to="/"
                  className="text-success"
                >
                  <span
                    ><img
                      src={logo}
                      alt=""
                      height="150"
                  /></span>
                </Link>
              </h2>
              {/* <!--<h4 className="text-uppercase font-bold m-b-0">Sign In</h4>--> */}
            </div>
            <div className="account-content">
              <form className="form-horizontal" action="#">
                <div className="form-group m-b-25">
                  <div className="col-12">
                    <label htmlFor="emailaddress">Email</label>
                    <input
                      className="form-control input-lg"
                      type="email"
                      id="emailaddress"
                      required=""
                      placeholder="voce@psdb.com.br"
                    />
                  </div>
                </div>

                <div className="form-group m-b-25">
                  <div className="col-12">
                    <Link
                      to="/relembrar"
                      className="text-muted float-right"
                    >Esqueceu a senha?</Link>
                    <label htmlFor="password">Senha</label>
                    <input
                      className="form-control input-lg"
                      type="password"
                      required=""
                      id="password"
                      placeholder="Sua senha"
                    />
                  </div>
                </div>

                <div className="form-group m-b-20">
                  <div className="col-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="remembercheck"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="remembercheck"
                        >Lembrar</label
                      >
                    </div>
                  </div>
                </div>

                <div className="form-group account-btn text-center m-t-10">
                  <div className="col-12">
                    {/* <button
                      type="submit"
                      className="btn w-lg btn-rounded btn-lg btn-primary waves-effect waves-light"
                    >
                      Entrar
                    </button> */}

                    <Link
                      to="/cadastrar"
                      className="btn w-lg btn-rounded btn-lg btn-primary waves-effect waves-light"
                    >Entrar</Link>
                  </div>
                </div>
              </form>

              <div className="clearfix"></div>
            </div>
          </div>
          {/* <!-- end card-box--> */}

          <div className="row m-t-50">
            <div className="col-sm-12 text-center">
              <p className="text-muted">
                Não tem uma conta?
                <Link
                  to="/cadastrar"
                  className="text-dark m-l-5"
                >Cadastrar</Link>
              </p>
            </div>
          </div>
        </div>
        {/* <!-- end wrapper --> */}
      </div>
    </div>
  </div>
);

export default Login;
