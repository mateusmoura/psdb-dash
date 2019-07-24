import React from "react";

import Sidebar from "components/sidebar";
import BarraTopo from "components/barra-topo";
import Footer from "components/footer";
import Select2 from "components/select-2";
import DateRangePicker from "components/date-range-picker";

import { EstadosOptions } from 'js/estados.js';
import { MunicipiosOptions } from 'js/municipios.js';

import FiliadosTable from 'components/tabela-dinamica';

const dadosTabela = {
  head: ['Data de cadastro', 'Nome', 'E-mail', 'Telefone', 'UF', 'Município', 'Título', 'Situação', 'Ações'],
  body: [
    ['01/05/2019', 'ÁLVARO JOSÉ BATISTA DA PAZ', 'alvaropaz015@outlook.com', '(82) 99108-4661', 'AL', 'Barra de Santo Antônio', '44503591783', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'WALLACE MAJOR DOS SANTOS', 'wlaylaelouyse@gmail.com', '(79) 3252-5308', 'BA', 'Coronel João Sá', '23455472100', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'JOAO PEDRO DE MOURA SOUZA', 'jpmssud@gmail.com', '(75) 99202-0319', 'BA', 'Feira de Santana', '146100180523', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'ISAAC JEREMIAS JARDIM GOUVEA', 'gouveaisaac@hotmail.com', '(71) 99200-1754', 'BA', 'Salvador', '83222540558', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'JOSEFA SILVANA CARVALHO SILVESTRE', 'silvaninha_vidy@hotmail.com', '(11) 2015-7056', 'BA', 'Sítio do Quinto', '206043440191', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'PAULA SANTOS SAMPAIO SANTANA', 'psampaiosantana@gmail.com', '(11) 93020-5981', 'DF', 'Brasília', '22130502003', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'DOMINGOS MACIEL DA SILVA LAMEGO', 'elianesilvaaalves@gmail.com', '(99) 98830-3649', 'MA', 'Aldeias Altas', '78029111120', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'ITALO HENRIQUE RODRIGUES GOMES', 'italogomesadv@hotmail.com', '(99) 3621-3879', 'MA', 'Bacabal', '43125001104', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'LUIS EDUARDO MOTA DOS SANTOS', 'luisedumota@yahoo.com', '(99) 3662-1064', 'MA', 'Dom Pedro', '73065931155', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'JOSÉ DA SILVA PEREIRA JUNIOR', 'juniorbatalia122@gmail.com', '(11) 4488-7087', 'MG', 'Piumhi', '40149851740', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'WAGNER ALVES LACERDA JUNIOR', 'wagner.alacerda@yahoo.com.br', '(31) 3255-6198', 'MG', 'Sete Lagoas', '155900520281', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'SANGELA RAMIRES DE SOUZA', 'ramiressangela945@gmail.com', '', 'MS', 'Jaraguari', '23940651945', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'FRANCINE GNOATTO BASSO', 'frangbasso@gmail.com', '(67) 3295-3777', 'MS', 'São Gabriel do Oeste', '18809931961', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'HELENO SOUZA OCAMPO', 'heleno.ocampo@hotmail.com', '', 'MS', 'São Gabriel do Oeste', '17862111961', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'VILMA LEDA DE ALMEIDA SANTANNA', 'ledaemiliani07@gmail.com', '(67) 3295-1763', 'MS', 'São Gabriel do Oeste', '1085201945', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'WENDEL GOMES DE SOUZA LEÃO', 'WEN_WENDEL@HOTMAIL.COM', '(81) 99922-5777', 'PE', 'Recife', '77537320876', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'MARCELO PEDRO DO NASCIMENTO', 'mpdn80@gmail.com', '(21) 2673-2817', 'RJ', 'Duque de Caxias', '112304740353', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'LEONARDO DA SILVA ANVERSI', 'leonardo.anversi@gmail.com', '(21) 3870-1743', 'RJ', 'Rio de Janeiro', '40464800965', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'IVAN DO PRADO DE SOUZA', 'Carmo.prado@yahoo.com.br', '(12) 3107-1210', 'SP', 'Areias', '365065010132', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'CESAR DE AMORIM GONÇALVES', 'Cesar.goncalves3443@gmail.com', '', 'SP', 'Francisco Morato', '449127060116', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'ALTAIR SANTOS IZIDORO JUNIOR', 'altairizidoro@hotmail.com', '', 'SP', 'Lins', '318498590167', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'GUILHERME MANUEL PIRES DE CASTRO', 'guilherme_manuel@yahoo.com', '(17) 99643-7448', 'SP', 'Paranapuã', '453019250116', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'RODRIGO ELTON SILVA DA CRUZ', 'rodrigocruzbgi@gmail.com', '(11) 98762-2168', 'SP', 'Penápolis', '311437330183', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'HAILTON  OLIVEIRA', 'hailtoncaxias@gmail.com', '(16) 3636-9797', 'SP', 'Ribeirão Preto', '97476950310', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'ALEXANDRE LUKAS MORRONE', 'alm089@hotmail.com', '(11) 5564-7273', 'SP', 'São Paulo', '359213510116', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'DAYANE VIEIRA COSTA VIOLA', 'dayaneviola@hotmail.com', '(11) 99182-9179', 'SP', 'São Paulo', '92094970604', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'JOSE JACKSON SILVA DE MENDONÇA', 'Acessoriavalverde@hotmail.com', '', 'SP', 'São Paulo', '42265701732', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'JUARIA BARBOZA MACIEL', 'juaria.maciel@hotmail.com', '(11) 2521-8023', 'SP', 'São Paulo', '190245030141', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'PEDRO FERREIRA DA SILVA JUNIOR', 'pfsilvajr@hotmail.com', '(11) 2283-3026', 'SP', 'São Paulo', '408061600108', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></a>' ],
    ['01/05/2019', 'ERES ALESSANDRO PORCINELI', 'eresalessandro@gmail.com', '(12) 3674-3707', 'SP', 'Tremembé', '234280510141', 'Regular', '<a href="/filiados/cadastro" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i><an>' ]
  ],
}

const FiliadosPedidos = () => (
  <div id= "wrapper">
    <BarraTopo />

    <Sidebar />

    <div className="content-page">
      {/* <!-- Start content --> */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <h4 className="page-title">Filiados</h4>
                <ol className="breadcrumb p-0 m-0">
                  <li>
                    <span>PSDB</span>
                  </li>
                  <li>Filiados</li>
                  <li className="active">Filiações</li>
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
                        <b>Todas as solicitações</b>
                      </h4>
                    </div>

                    <div className="col-lg-6">
                      <button
                        type="button"
                        className="btn btn-primary waves-effect float-right"
                        data-toggle="modal"
                        data-target="#con-close-modal"
                      >
                        {" "}
                        <i className="fa fa-filter m-r-5" />{" "}
                        <span>Filtrar</span>{" "}
                      </button>
                    </div>
                  </div>

                  <div className="card card-border">
                    <div className="card-body p-3">
                      <strong className="mr-2">Filtros aplicados:</strong>{" "}
                      <button
                        type="button"
                        className="btn btn-secondary waves-effect waves-light"
                      >
                        {" "}
                        <span>
                          Nome: blah
                        </span> <i className="fa fa-close" />{" "}
                      </button>
                    </div>
                  </div>

                  <FiliadosTable
                    dados={dadosTabela}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            id="con-close-modal"
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
                    <i className="fa fa-filter m-r-5" /> Filtro
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
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="field-1" className="control-label">
                          Periodo
                        </label>
                        <DateRangePicker />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="field-5" className="control-label">
                          UF
                        </label>
                        <Select2 dados={EstadosOptions} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="field-4" className="control-label">
                          Município
                        </label>
                        <Select2 dados={MunicipiosOptions} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="field-2" className="control-label">
                          E-mail
                        </label>
                        <input
                          type="email"
                          id="example-email"
                          name="example-email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="field-7" className="control-label">
                          Situação
                        </label>
                        <Select2 dados={[{
                          value: '1',
                          title: 'Novo'
                        }, {
                          value: '2',
                          title: 'Em análise pelo diretório municipal',
                        }, {
                          value: '3',
                          title: 'Em análise pelo diretório estadual',
                        }, {
                          value: '4',
                          title: 'Em análise pelo diretório nacional',
                        }, {
                          value: '5',
                          title: 'Aguardando confirmação com o TSE',
                        }, {
                          value: '6',
                          title: 'Concluído',
                        }, {
                          value: '7',
                          title: 'Aguardando recurso',
                        }, {
                          value: '8',
                          title: 'Cancelado',
                        }]} />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="field-2" className="control-label">
                          Nome
                        </label>
                        <input
                          type="text"
                          id="example-email"
                          name="example-email"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="field-7" className="control-label">
                          Titulo
                        </label>
                        <input
                          type="text"
                          id="example-email"
                          name="example-email"
                          className="form-control"
                        />
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
                    Aplicar
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

export default FiliadosPedidos;
