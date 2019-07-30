import React from "react";
import Sidebar from "../../../components/sidebar";
import Footer from "components/footer";
import BarraTopo from "../../../components/barra-topo";
import TabelaDinamica from 'components/tabela-dinamica';
import Select2 from "../../../components/select-2";
// import DateRangePicker from "../../../components/date-range-picker";

import { Link } from 'react-router-dom';

import { EstadosOptions } from 'js/estados.js';
import { MunicipiosOptions } from 'js/municipios.js';

const dadosTabela = {
  head: ['UF', 'Partido', 'Nome', 'Cargo', 'Situação'],
  body: [
    ['AC', 'PSDB', 'ANTONIA DE SOUZA NASCIMENTO	ANTONIA DO LANCHE', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'ANTONIA FRANÇA DE OLIVEIRA VIEIRA	TOINHA VIEIRA', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'ANTONIO CARLOS FERREIRA PORTELA	CARLINHOS PORTELA', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'AROLDO MONTEIRO RODRIGUES	AROLDO MONTEIRO', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'AUDER LIMA GUIMARÃES	AUDER QUASE TUDO', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'CADMIEL JOSÉ ARAÚJO BOMFIM	SGT CADMIEL BOMFIM', 'Deputado Estadual', 'Eleito'],
    ['AC', 'PSDB', 'CARLOS ALBERTO ALVES DE SOUZA	PROF. CARLOS ALBERTO', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'CYLMARA FERNANDES DA ROCHA GRIPP	MARA ROCHA', 'Deputado Federal', 'Eleito'],
    ['AC', 'PSDB', 'EMERSON AMORIM DE FREITAS	EMERSON AMORIM', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'FELIPE HENRIQUE DO NASCIMENTO BASTOS	FELIPE MENDES', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'FRANCINEUDO SOUZA DA COSTA	FRANCINEUDO COSTA', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'FRANCISCO FEITOZA BATISTA	CHICO BATISTA', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'FRANCISCO HAMILTON D" AVILA LUCENA	HAMILTON LUCENA - LIDERANÇA', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'GILBERTO SOUZA DE FIGUEIREDO	BETO FIGUEIREDO', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'JEREMIAS CUNHA DE FRANÇA	JEREMIAS CUNHA', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'JOSANDRO BARBOZA CAVALCANTE	JOSANDRO CAVALCANTE', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'JOSE CARLOS DOS ANJOS FERNANDES	CARLOS FERNANDES', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'JOSÉ CELIO BRITO DA SILVA	CÉLIO GADELHA', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'JOSE SOARES PACHECO	ZEZINHO PACHECO', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'JURANDIR FERREIRA DA SILVA	DIR PARAGUAI', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'LUCIENE SOUZA COSTA	LUCIENE COSTA', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'LUIZ GONZAGA ALVES FILHO	LUIZ GONZAGA', 'Deputado Estadual', 'Eleito'],
    ['AC', 'PSDB', 'MARCOS TIBURCIO DOS SANTOS	MARQUINHOS TIBURCIO', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'MARIA APARECIDA FREITAS DA SILVA	APARECIDA CIDINHA', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'MARIA CLARA DE OLIVEIRA QUEIROZ LEORNE	CLARINHA LEORNE', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'MARIA RAIMUNDA RODRIGUES PINHEIRO MENEZES	BRANCA MENEZES', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'NESIO MENDES DE CARVALHO	NESIO MENDES', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'RAIMUNDO NONATO CELESTINO DA SILVA	PASTOR CELESTINO', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'ROSIANE DO NASCIMENTO SOUZA	ROSI SOUZA', 'Deputado Estadual', 'Suplente'],
    ['AC', 'PSDB', 'ROZENIR PIMENTEL DA SILVA	ROSE PIMENTEL', 'Deputado Estadual', 'Suplente'],
    ['MG', 'PSDB', 'ANTONIO AUGUSTO JUNHO ANASTASIA	ANTONIO ANASTASIA', 'Governado', '2º turno'],
    ['MS', 'PSDB', 'REINALDO AZAMBUJA SILVA	REINALDO AZAMBUJA', 'Governado', '2º turno'],
    ['PA', 'PSDB', 'JOSÉ MEGALE FILHO	MEGALE', 'Vice-governado', '2º turno'],
    ['RO', 'PSDB', 'EXPEDITO GONÇALVES FERREIRA JUNIOR	EXPEDITO JUNIOR', 'Governado', '2º turno'],
    ['RO', 'PSDB', 'MAURICIO FONSECA RIBEIRO CARVALHO DE MORAES	MAURICIO CARVALHO', 'Vice-governado', '2º turno'],
    ['RR', 'PSDB', 'JOSE DE ANCHIETA JUNIOR	ANCHIETA', 'Governado', '2º turno'],
    ['RS', 'PSDB', 'EDUARDO FIGUEIREDO CAVALHEIRO LEITE	EDUARDO LEITE', 'Governado', '2º turno'],
    ['SP', 'PSDB', 'JOÃO AGRIPINO DA COSTA DORIA JUNIOR	JOÃO DORIA', 'Governado', '2º turno'],
    ['DF', 'PSDB', 'ANTONIO MONTEIRO DOS SANTOS	DR. ANTONIO MONTEIRO', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'CLEISON MEDAS DUVAL	CLEISON DUVAL', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'DIEGO LUIZ DE SOUSA ARRUDA	DIEGO ARRUDA', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'EDSON FERREIRA COSTA	IRMÃO GLÓRIA A DEUS', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'ELAYNE TIAGO DE QUEIROZ	ELAYNE TIAGO', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'EROTIDES SOUZA DE ALMEIDA JUNIOR	JUNIOR ALMEIDA', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'FLAVIO JOSÉ BARBOSA DE ALENCASTRO	FLAVIO ALENCASTRO', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'FRANCISCO DE ASSIS FERNANDES DOS SANTOS	ASSIS FERNANDES', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'FREDERICO ROSSI DOS SANTOS	ROSSI', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'HELCIMAR EVANGELISTA DA SILVA	PROFESSORA HELCIMAR', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'JAQUELINE CHAGAS DE OLIVEIRA	KELLYNHA ESTRUTURAL', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'JOSE FERREIRA DE SOUSA FILHO	O FISCAL DE BRASÍLIA', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'LÚCIA MARIA DE OLIVEIRA FÉLIX	LÚCIA FÉLIX', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'LUCIMARA SOARES FAGUNDES	LUCIMARA FAGUNDES', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'MARCO ANTONIO ELIAS DE ALMEIDA	DEPUTADO MÃE', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'MARISMAR REIS DA SILVA	MARA DE TODOS', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'MÔNICA DA SILVA ALVARES	MÔNICA ALVARES', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'NÁGELA MARIA GONÇALVES DOS SANTOS	NÁGELA MARIA', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'NOEMI ALVES BARUZZI	NOEMI BARUZZI', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'RAAD MASSOUH JUNIOR	RAAD JR.', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'RICHARD DA SILVA BANHARA	RICHARD BANHARA', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'ROBINSON NOGUEIRA BARROSO PAIS	PROFESSOR ROBINSON PAIS', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'RODRIGO GUSTAVO SCARPA	RODRIGO SCARPA', 'Deputado Distrital', 'Não eleito'],
    ['DF', 'PSDB', 'SAULO COSTA DE JESUS	SAULO COSTA', 'Deputado Distrital', 'Não eleito'],
    ['AC', 'PSDB', 'CADMIEL JOSÉ ARAÚJO BOMFIM	SGT CADMIEL BOMFIM', 'Deputado Estadual', 'Eleito'],
    ['AC', 'PSDB', 'LUIZ GONZAGA ALVES FILHO	LUIZ GONZAGA', 'Deputado Estadual', 'Eleito'],
    ['AL', 'PSDB', 'CIBELE CORADO DE MOURA	CIBELE MOURA', 'Deputado Estadual', 'Eleito'],
    ['AL', 'PSDB', 'JOAO EDUARDO MARTINS COELHO DA PAZ	DUDU RONALSA', 'Deputado Estadual', 'Eleito'],
    ['AM', 'PSDB', 'THEREZINHA RUIZ DE OLIVEIRA	PROF. THEREZINHA RUIZ', 'Deputado Estadual', 'Eleito'],
    ['AP', 'PSDB', 'TELMA ADRIANA NERY PAIVA	TELMA NERY', 'Deputado Estadual', 'Eleito'],
    ['BA', 'PSDB', 'DAVID SILVA RIOS	DR.DAVID RIOS', 'Deputado Estadual', 'Eleito'],
    ['BA', 'PSDB', 'MARCELL CARVALHO DE MORAES	MARCELL MORAES', 'Deputado Estadual', 'Eleito'],
    ['BA', 'PSDB', 'PAULO SERGIO DE SA BITTENCOURT CÂMARA	PAULO CÂMARA', 'Deputado Estadual', 'Eleito'],
    ['CE', 'PSDB', 'FERNANDA ENEIDA PESSOA CARACAS DE SOUZA	FERNANDA PESSOA', 'Deputado Estadual', 'Eleito'],
    ['CE', 'PSDB', 'RONDINELLE PEREIRA DE FREITAS	NELINHO', 'Deputado Estadual', 'Eleito'],
    ['ES', 'PSDB', 'EMILIO MAMERI NETO	DR. EMILIO MAMERI', 'Deputado Estadual', 'Eleito'],
    ['ES', 'PSDB', 'MARCOS ANTONIO MANSOR	PR MARCOS MANSUR', 'Deputado Estadual', 'Eleito'],
    ['ES', 'PSDB', 'VANDERSON ALONSO LEITE	VANDINHO LEITE', 'Deputado Estadual', 'Eleito'],
    ['GO', 'PSDB', 'DIEGO VAZ SORGATTO	DIEGO SORGATTO', 'Deputado Estadual', 'Eleito'],
    ['GO', 'PSDB', 'GUSTAVO KOPPAN FAIAD SEBBA	GUSTAVO SEBBA', 'Deputado Estadual', 'Eleito'],
    ['GO', 'PSDB', 'HELIO ANTONIO DE SOUSA	DR. HELIO DE SOUSA', 'Deputado Estadual', 'Eleito'],
    ['GO', 'PSDB', 'LEDA BORGES DE MOURA	LÊDA BORGES', 'Deputado Estadual', 'Eleito'],
    ['GO', 'PSDB', 'SEBASTIÃO MONTEIRO GUIMARÃES FILHO	TIÃO CAROÇO', 'Deputado Estadual', 'Eleito'],
    ['GO', 'PSDB', 'TALLES ALVES BARRETO	TALLES BARRETO', 'Deputado Estadual', 'Eleito'],
    ['MA', 'PSDB', 'CARLOS WELLINGTON DE CASTRO BEZERRA	WELLINGTON DO CURSO', 'Deputado Estadual', 'Eleito'],
    ['MG', 'PSDB', 'ANTÔNIO CARLOS ARANTES	ANTÔNIO CARLOS ARANTES', 'Deputado Estadual', 'Eleito'],
    ['MG', 'PSDB', 'DALMO ROBERTO RIBEIRO SILVA	DALMO RIBEIRO', 'Deputado Estadual', 'Eleito'],
    ['MG', 'PSDB', 'GUSTAVO DA CUNHA PEREIRA VALADARES	GUSTAVO VALADARES', 'Deputado Estadual', 'Eleito'],
    ['MG', 'PSDB', 'JOÃO LEITE DA SILVA NETO	JOÃO LEITE', 'Deputado Estadual', 'Eleito'],
    ['MG', 'PSDB', 'JOÃO VÍTOR XAVIER FAUSTINO	JOÃO VITOR XAVIER DA ITATIAIA', 'Deputado Estadual', 'Eleito'],
    ['MG', 'PSDB', 'LUIZ HUMBERTO CARNEIRO	LUIZ HUMBERTO CARNEIRO', 'Deputado Estadual', 'Eleito'],
    ['MG', 'PSDB', 'TITO BRUNO MIRANDA TORRES DUARTE	TITO TORRES', 'Deputado Estadual', 'Eleito'],
    ['MS', 'PSDB', 'LUIZ FELIPPE RIBEIRO ORRO	FELIPE ORRO', 'Deputado Estadual', 'Eleito'],
    ['MS', 'PSDB', 'MARÇAL GONÇALVES LEITE FILHO	MARÇAL FILHO', 'Deputado Estadual', 'Eleito'],
    ['MS', 'PSDB', 'ONEVAN JOSÉ DE MATOS	ONEVAN DE MATOS', 'Deputado Estadual', 'Eleito'],
    ['MS', 'PSDB', 'PAULO JOSÉ ARAUJO CORREA	PAULO CORRÊA', 'Deputado Estadual', 'Eleito'],
    ['MS', 'PSDB', 'RINALDO MODESTO DE OLIVEIRA	PROFESSOR RINALDO', 'Deputado Estadual', 'Eleito'],
    ['MT', 'PSDB', 'GUILHERME ANTONIO MALUF	GUILHERME MALUF', 'Deputado Estadual', 'Eleito'],
    ['MT', 'PSDB', 'WILSON PEREIRA DOS SANTOS	WILSON SANTOS', 'Deputado Estadual', 'Eleito'],
    ['PA', 'PSDB', 'ANA MARIA DO SOCORRO MAGNO CUNHA	ANA CUNHA', 'Deputado Estadual', 'Eleito'],
    ['PA', 'PSDB', 'CILENE LISBOA COUTO MARQUES	CILENE COUTO', 'Deputado Estadual', 'Eleito'],
    ['PA', 'PSDB', 'DANIEL BARBOSA SANTOS	DR DANIEL', 'Deputado Estadual', 'Eleito'],
    ['PA', 'PSDB', 'LUIZ FURTADO REBELO FILHO	LUTH REBELO', 'Deputado Estadual', 'Eleito'],
    ['PA', 'PSDB', 'VICTOR ORENGEL DIAS	VICTOR DIAS', 'Deputado Estadual', 'Eleito'],
    ['PB', 'PSDB', 'CAMILA ARAUJO TOSCANO	CAMILA TOSCANO', 'Deputado Estadual', 'Eleito'],
    ['PB', 'PSDB', 'JOÃO HENRIQUE DE SOUZA	JOÃO HENRIQUE', 'Deputado Estadual', 'Eleito'],
    ['PB', 'PSDB', 'TOVAR ALVES CORREIA LIMA	TOVAR', 'Deputado Estadual', 'Eleito'],
    ['PE', 'PSDB', 'ALESSANDRA XAVIER DA ROCHA VIEIRA	ALESSANDRA VIEIRA', 'Deputado Estadual', 'Eleito'],
    ['PI', 'PSDB', 'MARDEN LUIS BRITO CAVALCANTE E MENESES	MARDEN  MENESES', 'Deputado Estadual', 'Eleito'],
    ['PR', 'PSDB', 'ADEMAR LUIZ TRAIANO	TRAIANO', 'Deputado Estadual', 'Eleito'],
    ['PR', 'PSDB', 'MICHELE CAPUTO NETO	MICHELE CAPUTO', 'Deputado Estadual', 'Eleito'],
    ['PR', 'PSDB', 'PAULO HENRIQUE COLETTI FERNANDES	PAULO LITRO', 'Deputado Estadual', 'Eleito'],
    ['RJ', 'PSDB', 'LUCIA HELENA PINTO DE BARROS	LUCINHA', 'Deputado Estadual', 'Eleito'],
    ['RJ', 'PSDB', 'LUIZ PAULO CORRÊA DA ROCHA	LUIZ PAULO', 'Deputado Estadual', 'Eleito'],
    ['RN', 'PSDB', 'EZEQUIEL GALVAO FERREIRA DE SOUZA	EZEQUIEL', 'Deputado Estadual', 'Eleito'],
    ['RN', 'PSDB', 'GUSTAVO HENRIQUE LIMA DE CARVALHO	GUSTAVO CARVALHO', 'Deputado Estadual', 'Eleito'],
    ['RN', 'PSDB', 'JOSÉ DIAS DE SOUZA MARTINS	JOSÉ DIAS', 'Deputado Estadual', 'Eleito'],
    ['RN', 'PSDB', 'LUIZ ANTONIO LOURENCO DE FARIAS	TOMBA FARIAS', 'Deputado Estadual', 'Eleito'],
    ['RN', 'PSDB', 'RAIMUNDO NONATO PESSOA FERNANDES	RAIMUNDO FERNANDES', 'Deputado Estadual', 'Eleito'],
    ['RO', 'PSDB', 'LAERTE GOMES	LAERTE GOMES', 'Deputado Estadual', 'Eleito'],
    ['RS', 'PSDB', 'LUIZ HENRIQUE CORDEIRO VIANA	VIANA', 'Deputado Estadual', 'Eleito'],
    ['RS', 'PSDB', 'MATEUS JOSÉ DE LIMA WESP	MATEUS WESP', 'Deputado Estadual', 'Eleito'],
    ['RS', 'PSDB', 'PEDRO OZÓRIO PEREIRA	PEDRO PEREIRA', 'Deputado Estadual', 'Eleito'],
    ['RS', 'PSDB', 'ZILÁ MARIA BREITENBACH	ZILÁ BREITENBACH', 'Deputado Estadual', 'Eleito'],
    ['SC', 'PSDB', 'MARCOS LUIZ VIEIRA	MARCOS VIEIRA', 'Deputado Estadual', 'Eleito'],
    ['SC', 'PSDB', 'VICENTE AUGUSTO CAROPRESO	DR. VICENTE CAROPRESO', 'Deputado Estadual', 'Eleito'],
    ['SE', 'PSDB', 'MARIA VIEIRA DE MENDONÇA	MARIA MENDONÇA', 'Deputado Estadual', 'Eleito'],
    ['SP', 'PSDB', 'ANALICE FERNANDES	ANALICE FERNANDES', 'Deputado Estadual', 'Eleito'],
    ['SP', 'PSDB', 'ANTONIO DA ROCHA MARMO CEZAR	CEZAR', 'Deputado Estadual', 'Eleito'],
    ['SP', 'PSDB', 'CARLA SARDANO MORANDO	CARLA MORANDO', 'Deputado Estadual', 'Eleito'],
    ['SP', 'PSDB', 'CARLOS EDUARDO PIGNATARI	CARLÃO PIGNATARI', 'Deputado Estadual', 'Eleito'],
    ['SP', 'PSDB', 'CAUE CASEIRO MACRIS	CAUÊ MACRIS', 'Deputado Estadual', 'Eleito'],
    ['SP', 'PSDB', 'MARCOS ANTONIO ZERBINI	MARCOS ZERBINI', 'Deputado Estadual', 'Eleito'],
    ['SP', 'PSDB', 'MARIA LUCIA CARDOSO PINTO AMARY	MARIA LÚCIA AMARY', 'Deputado Estadual', 'Eleito'],
    ['SP', 'PSDB', 'MAURO BRAGATO	MAURO BRAGATO', 'Deputado Estadual', 'Eleito'],
    ['TO', 'PSDB', 'LUANA MATILDE RIBEIRO LIMA	LUANA RIBEIRO', 'Deputado Estadual', 'Eleito'],
    ['TO', 'PSDB', 'OLYNTHO GARCIA DE OLIVEIRA NETO	OLYNTHO NETO', 'Deputado Estadual', 'Eleito'],
  ]
};

const EleicaoConsutarDados = () => (
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
                <h4 className="page-title">Consultas</h4>
                <ol className="breadcrumb p-0 m-0">
                  <li>
                     <span>PSDB</span>
                  </li>
                  <li>Eleições</li>
                  <li className="active">Consultas</li>
                </ol>
                <div className="clearfix" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">

              <div className="card card-border card-primary">
                <div className="card-heading">
                    <h3 className="card-title text-primary"><i className="fa fa-filter"></i> Filtro</h3>
                </div>

                <div className="card-body mt-4 p-0">

                  <form>

                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="text" className="col-md-12 control-label">Nome do pré-candidato</label>
                          <div className="col-md-12">
                            <input
                              type="text"
                              id="text"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="text" className="col-md-12 control-label">Unidade Federativa (UF)</label>
                          <div className="col-md-12">
                            <Select2 dados={EstadosOptions} />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="text" className="col-md-12 control-label">Município</label>
                          <div className="col-md-12">
                            <Select2 dados={MunicipiosOptions} />
                          </div>
                        </div>
                      </div>
                    </div>

                   <div className="p-3 overflow-hidden">
                     <button type="button" className="btn float-right btn-primary waves-effect w-md waves-light">Pesquisar</button>
                   </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-12 col-md-12 text-right">
                  <Link
                    to="/comunicacao/campanhas/criar"
                    className="btn btn-primary m-b-20 waves-effect w-md waves-light"
                  >Enviar comunicação</Link>
                </div>
              </div>

              <TabelaDinamica
                dados={dadosTabela}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <Footer />
  </div>
);

export default EleicaoConsutarDados;