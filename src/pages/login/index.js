import React from 'react';

const Login = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="wrapper-page">
          <div className="m-t-40 account-pages">
            <div className="text-center account-logo-box">
              <h2 className="text-uppercase">
                <a href="index.html" className="text-success">
                  <span
                    ><img
                      src="assets/images/logo_dark.png"
                      alt=""
                      height="30"
                  /></span>
                </a>
              </h2>
              {/* <!--<h4 className="text-uppercase font-bold m-b-0">Sign In</h4>--> */}
            </div>
            <div className="account-content">
              <form className="form-horizontal" action="#">
                <div className="form-group m-b-25">
                  <div className="col-12">
                    <label htmlFor="emailaddress">Email address</label>
                    <input
                      className="form-control input-lg"
                      type="email"
                      id="emailaddress"
                      required=""
                      placeholder="john@deo.com"
                    />
                  </div>
                </div>

                <div className="form-group m-b-25">
                  <div className="col-12">
                    <a
                      href="page-recoverpw.html"
                      className="text-muted float-right"
                      >Forgot your password?</a
                    >
                    <label htmlFor="password">Password</label>
                    <input
                      className="form-control input-lg"
                      type="password"
                      required=""
                      id="password"
                      placeholder="Enter your password"
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
                        >Remember me</label
                      >
                    </div>
                  </div>
                </div>

                <div className="form-group account-btn text-center m-t-10">
                  <div className="col-12">
                    <button
                      className="btn w-lg btn-rounded btn-lg btn-primary waves-effect waves-light"
                      type="submit"
                    >
                      Sign In
                    </button>
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
                Don't have an account?
                <a href="page-register.html" className="text-dark m-l-5"
                  >Sign Up</a
                >
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
