import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../images/logo-psdb.png';

const Relembrar = () => (
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
              <div className="text-center m-b-20">
                <p className="text-muted m-b-0">
                  Digite seu e-mail e enviaremos um e-mail para você instruções para redefinir sua senha,
                </p>
              </div>
              <form className="form-horizontal" action="#">
                <div className="form-group">
                  <div className="col-12">
                    <label htmlFor="emailaddress">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      id="emailaddress"
                      required=""
                      placeholder="voce@psdb.com.br"
                    />
                  </div>
                </div>

                <div className="form-group account-btn text-center m-t-10">
                  <div className="col-12">
                    <Link
                      to="/dashboard"
                      className="btn w-lg btn-rounded btn-lg btn-primary waves-effect waves-light"
                    >Redefinir senha</Link>
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
                Voltar para o
                <Link
                  to="/"
                  className="text-dark m-l-5"
                >Login</Link>
              </p>
            </div>
          </div>
        </div>
        {/* <!-- end wrapper --> */}
      </div>
    </div>
  </div>
)

export default Relembrar;
