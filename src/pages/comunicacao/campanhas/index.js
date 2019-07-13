import React from 'react';

import { Link } from 'react-router-dom';

import Sidebar from "components/sidebar";
import BarraTopo from "components/barra-topo";
import Footer from "components/footer";

import CampanhaTable from 'components/tabela-dinamica';

import './index.scss';

const dadosTabela = {
  head: ['Nome', 'Status', 'Data de envio', 'Ações'],
  body: [
    ['Campanha 1', 'Enviada', '99/99/9999 99:99',
      `<div class="text-center">
        <a href="#" title="Visualizar" class="hidden btn-acoes text-success"><i class="fa fa-eye"></i></a>
        <a href="#" title="Editar" class="hidden btn-acoes text-primary"><i class="fa fa-pencil"></i></a>
        <a href="#" title="Excluir" class="hidden btn-acoes text-danger"><i class="fa fa-trash"></i></a>
        <a href="#" title="Relátorio" class="hidden btn-acoes text-purple"><i class="fa fa-bar-chart"></i></a>
      </div>`
    ],
    ['Campanha 2', 'Enviada', '99/99/9999 99:99',
      `<div class="text-center">
        <a href="#" title="Visualizar" class="hidden btn-acoes text-success"><i class="fa fa-eye"></i></a>
        <a href="#" title="Editar" class="hidden btn-acoes text-primary"><i class="fa fa-pencil"></i></a>
        <a href="#" title="Excluir" class="hidden btn-acoes text-danger"><i class="fa fa-trash"></i></a>
        <a href="#" title="Relátorio" class="hidden btn-acoes text-purple"><i class="fa fa-bar-chart"></i></a>
      </div>`
    ],
    ['Campanha 3', 'Enviada', '99/99/9999 99:99',
      `<div class="text-center">
        <a href="#" title="Visualizar" class="hidden btn-acoes text-success"><i class="fa fa-eye"></i></a>
        <a href="#" title="Editar" class="hidden btn-acoes text-primary"><i class="fa fa-pencil"></i></a>
        <a href="#" title="Excluir" class="hidden btn-acoes text-danger"><i class="fa fa-trash"></i></a>
        <a href="#" title="Relátorio" class="hidden btn-acoes text-purple"><i class="fa fa-bar-chart"></i></a>
      </div>`
    ],
    ['Campanha 4', 'Enviada', '99/99/9999 99:99',
      `<div class="text-center">
        <a href="#" title="Visualizar" class="hidden btn-acoes text-success"><i class="fa fa-eye"></i></a>
        <a href="#" title="Editar" class="hidden btn-acoes text-primary"><i class="fa fa-pencil"></i></a>
        <a href="#" title="Excluir" class="hidden btn-acoes text-danger"><i class="fa fa-trash"></i></a>
        <a href="#" title="Relátorio" class="hidden btn-acoes text-purple"><i class="fa fa-bar-chart"></i></a>
      </div>`
    ]
  ]
}

const Campanhas = () => (
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
                  <li className="active">Campanhas</li>
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
                        <b>Todas Campanhas</b>
                      </h4>
                    </div>

                    <div className="col-lg-6">
                      <Link
                        to="/comunicacao/campanhas/criar"
                        className="btn btn-primary waves-effect float-right"
                      >
                        Criar Nova Campanha
                      </Link>
                      {/* <button
                        type="button"
                        className="btn btn-primary waves-effect float-right"
                        data-toggle="modal"
                        data-target="#con-close-modal"
                      >
                        <span>Criar Nova Campanha</span>{" "}
                      </button> */}
                    </div>
                  </div>

                  <CampanhaTable
                    dados={dadosTabela}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

    <Footer />
  </div>
)

export default Campanhas;
