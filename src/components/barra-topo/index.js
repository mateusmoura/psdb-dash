import React from 'react';

import logo from '../../images/logo_psdb_branca.svg';
import '../../pages-js/metisMenu.min.js';

const BarraTopo = () => (
  <div className="topbar">
    {/*
    <!-- LOGO -->
    */}
    <div className="topbar-left">
      {/*
      <!--<a href="index.html" className="logo"><span>Code<span>Fox</span></span><i className="mdi mdi-layers"></i></a>-->
      */} {/*
      <!-- Image logo -->
      */}
      <a href="index.html" className="logo">
        <span>
          <img src={logo} alt="" height="40" />
        </span>
        <i>
          <img src={logo} alt="" height="30" />
        </i>
      </a>
    </div>

    {/*
    <!-- Button mobile view to collapse sidebar menu -->
    */}
    <div className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
        {/*
        <!-- Navbar-left -->
        */}
        <ul className="nav navbar-left">
          <li>
            <button
              type="button"
              className="button-menu-mobile open-left waves-effect"
            >
              <i className="dripicons-menu"></i>
            </button>
          </li>

          <li className="d-none d-sm-block lang-option">
            {/* <select
              className="selectpicker form-control"
              title=""
              data-width="110px"
            >
              <option> English </option>
              <option> French </option>
              <option> Germany </option>
              <option> Spanish</option>
            </select> */}
          </li>
        </ul>

        {/* <!-- Right(Notification) --> */}
        <ul className="nav navbar-right list-inline">
          <li className="d-none d-sm-block list-inline-item">
            <form role="search" className="app-search">
              <input
                type="text"
                placeholder="Buscar..."
                className="form-control"
              />
              <a href="#this"><i className="fa fa-search"></i></a>
            </form>
          </li>
          <li className="list-inline-item">
            <div className="dropdown">
              <a
                href="#this"
                className="right-menu-item dropdown-toggle"
                data-toggle="dropdown"
              >
                <i className="dripicons-bell"></i>
                <span className="badge badge-pill badge-pink">4</span>
              </a>

              <ul
                className="dropdown-menu dropdown-menu-right dropdown-lg user-list notify-list"
              >
                <li className="list-group notification-list m-b-0">
                  <div className="slimscroll">
                    {/* <!-- list item--> */}
                    <a href="#this" className="list-group-item">
                      <div className="media">
                        <div className="media-left p-r-10">
                          <em className="fa fa-diamond bg-primary"></em>
                        </div>
                        <div className="media-body">
                          <h5 className="media-heading">
                            Nova mensagem
                          </h5>
                          <p className="m-0">
                            Texto
                          </p>
                        </div>
                      </div>
                    </a>

                    {/* <!-- list item--> */}
                    <a href="#this" className="list-group-item">
                      <div className="media">
                        <div className="media-left p-r-10">
                          <em className="fa fa-exclamation bg-warning"></em>
                        </div>
                        <div className="media-body">
                          <h5 className="media-heading">Atualizar</h5>
                          <p className="m-0">
                            Está na hora de atualizar as informações do seu diretório
                          </p>
                        </div>
                      </div>
                    </a>

                    {/* <!-- list item--> */}
                    <a href="#this" className="list-group-item">
                      <div className="media">
                        <div className="media-left p-r-10">
                          <em className="fa fa-bell-o bg-custom"></em>
                        </div>
                        <div className="media-body">
                          <h5 className="media-heading">Filiados</h5>
                          <p className="m-0">
                            Você já tem
                            <span className="text-primary font-600"> 10</span> novos filiados pendentes
                          </p>
                        </div>
                      </div>
                    </a>

                    {/* <!-- list item--> */}
                    <a href="#this" className="list-group-item">
                      <div className="media">
                        <div className="media-left p-r-10">
                          <em className="fa fa-user-plus bg-danger"></em>
                        </div>
                        <div className="media-body">
                          <h5 className="media-heading">Novos pedidos de filiados</h5>
                          <p className="m-0">
                            34 novos pedidos de filiação
                          </p>
                        </div>
                      </div>
                    </a>

                  </div>
                </li>
                {/* <!-- end notification list --> */}
              </ul>
            </div>
          </li>

          <li className="dropdown user-box list-inline-item">
            <a
              href="#this"
              className="dropdown-toggle waves-effect user-link"
              data-toggle="dropdown"
              aria-expanded="true"
            >
              <img
                src="https://i.pravatar.cc/200"
                alt="user-img"
                className="rounded-circle user-img"
              />
            </a>

            <ul
              className="dropdown-menu dropdown-menu-right arrow-dropdown-menu arrow-menu-right user-list notify-list"
            >
              <li>
                <a href="#this" className="dropdown-item">Profile</a>
              </li>
              <li>
                <a href="#this" className="dropdown-item"
                  ><span className="badge badge-pill badge-info float-right"
                    >4</span
                  >Settings</a
                >
              </li>
              <li>
                <a href="#this" className="dropdown-item"
                  >Lock screen</a
                >
              </li>
              <li className="dropdown-divider"></li>
              <li>
                <a href="#this" className="dropdown-item">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
        {/* <!-- end navbar-right --> */}
      </div>
      {/* <!-- end container-fluid --> */}
    </div>
    {/* <!-- end navbar --> */}
  </div>
);

export default BarraTopo;
