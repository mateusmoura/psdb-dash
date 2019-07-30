import React from "react";

import { Link } from "react-router-dom";

import Sidebar from "components/sidebar";
import BarraTopo from "components/barra-topo";
import Footer from "components/footer";
import Select2 from "components/select-2";
import DatePicker from "components/datepicker";

import { EstadosOptions } from 'js/estados.js';
import { MunicipiosOptions } from 'js/municipios.js';

import FiliadosTable from 'components/tabela-dinamica';

const dadosTabela = {
  head: ['Data de cadastro', 'Nome', 'E-mail', 'Telefone', 'UF', 'Município', 'Título', 'Situação', 'Ações'],
  body: [
    ['01/05/2019', 'ÁLVARO JOSÉ BATISTA DA PAZ', 'alvaropaz015@outlook.com', '(82) 99108-4661', 'AL', 'Barra de Santo Antônio', '44503591783', 'Novo', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'WALLACE MAJOR DOS SANTOS', 'wlaylaelouyse@gmail.com', '(79) 3252-5308', 'BA', 'Coronel João Sá', '23455472100', 'Em análise pelo diretório municipal', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'JOAO PEDRO DE MOURA SOUZA', 'jpmssud@gmail.com', '(75) 99202-0319', 'BA', 'Feira de Santana', '146100180523', 'Em análise pelo diretório estadual', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'ISAAC JEREMIAS JARDIM GOUVEA', 'gouveaisaac@hotmail.com', '(71) 99200-1754', 'BA', 'Salvador', '83222540558', 'Em análise pelo diretório nacional', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'JOSEFA SILVANA CARVALHO SILVESTRE', 'silvaninha_vidy@hotmail.com', '(11) 2015-7056', 'BA', 'Sítio do Quinto', '206043440191', 'Aguardando confirmação com o TSE', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'PAULA SANTOS SAMPAIO SANTANA', 'psampaiosantana@gmail.com', '(11) 93020-5981', 'DF', 'Brasília', '22130502003', 'Concluído', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'DOMINGOS MACIEL DA SILVA LAMEGO', 'elianesilvaaalves@gmail.com', '(99) 98830-3649', 'MA', 'Aldeias Altas', '78029111120', 'Aguardando recurso', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'ITALO HENRIQUE RODRIGUES GOMES', 'italogomesadv@hotmail.com', '(99) 3621-3879', 'MA', 'Bacabal', '43125001104', 'Cancelado', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'LUIS EDUARDO MOTA DOS SANTOS', 'luisedumota@yahoo.com', '(99) 3662-1064', 'MA', 'Dom Pedro', '73065931155', 'Em análise pelo diretório estadual', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'JOSÉ DA SILVA PEREIRA JUNIOR', 'juniorbatalia122@gmail.com', '(11) 4488-7087', 'MG', 'Piumhi', '40149851740', 'Concluído', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'WAGNER ALVES LACERDA JUNIOR', 'wagner.alacerda@yahoo.com.br', '(31) 3255-6198', 'MG', 'Sete Lagoas', '155900520281', 'Em análise pelo diretório municipal', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'SANGELA RAMIRES DE SOUZA', 'ramiressangela945@gmail.com', '', 'MS', 'Jaraguari', '23940651945', 'Aguardando recurso', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'FRANCINE GNOATTO BASSO', 'frangbasso@gmail.com', '(67) 3295-3777', 'MS', 'São Gabriel do Oeste', '18809931961', 'Cancelado', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'HELENO SOUZA OCAMPO', 'heleno.ocampo@hotmail.com', '', 'MS', 'São Gabriel do Oeste', '17862111961', 'Concluído', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'VILMA LEDA DE ALMEIDA SANTANNA', 'ledaemiliani07@gmail.com', '(67) 3295-1763', 'MS', 'São Gabriel do Oeste', '1085201945', 'Cancelado', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'WENDEL GOMES DE SOUZA LEÃO', 'WEN_WENDEL@HOTMAIL.COM', '(81) 99922-5777', 'PE', 'Recife', '77537320876', 'Aguardando confirmação com o TSE', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'MARCELO PEDRO DO NASCIMENTO', 'mpdn80@gmail.com', '(21) 2673-2817', 'RJ', 'Duque de Caxias', '112304740353', 'Em análise pelo diretório municipal', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'LEONARDO DA SILVA ANVERSI', 'leonardo.anversi@gmail.com', '(21) 3870-1743', 'RJ', 'Rio de Janeiro', '40464800965', 'Em análise pelo diretório estadual', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'IVAN DO PRADO DE SOUZA', 'Carmo.prado@yahoo.com.br', '(12) 3107-1210', 'SP', 'Areias', '365065010132', 'Aguardando recurso', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'CESAR DE AMORIM GONÇALVES', 'Cesar.goncalves3443@gmail.com', '', 'SP', 'Francisco Morato', '449127060116', 'Cancelado', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'ALTAIR SANTOS IZIDORO JUNIOR', 'altairizidoro@hotmail.com', '', 'SP', 'Lins', '318498590167', 'Aguardando confirmação com o TSE', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'GUILHERME MANUEL PIRES DE CASTRO', 'guilherme_manuel@yahoo.com', '(17) 99643-7448', 'SP', 'Paranapuã', '453019250116', 'Em análise pelo diretório municipal', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'RODRIGO ELTON SILVA DA CRUZ', 'rodrigocruzbgi@gmail.com', '(11) 98762-2168', 'SP', 'Penápolis', '311437330183', 'Concluído', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'HAILTON  OLIVEIRA', 'hailtoncaxias@gmail.com', '(16) 3636-9797', 'SP', 'Ribeirão Preto', '97476950310', 'Aguardando recurso', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'ALEXANDRE LUKAS MORRONE', 'alm089@hotmail.com', '(11) 5564-7273', 'SP', 'São Paulo', '359213510116', 'Em análise pelo diretório municipal', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'DAYANE VIEIRA COSTA VIOLA', 'dayaneviola@hotmail.com', '(11) 99182-9179', 'SP', 'São Paulo', '92094970604', 'Em análise pelo diretório estadual', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'JOSE JACKSON SILVA DE MENDONÇA', 'Acessoriavalverde@hotmail.com', '', 'SP', 'São Paulo', '42265701732', 'Aguardando confirmação com o TSE', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'JUARIA BARBOZA MACIEL', 'juaria.maciel@hotmail.com', '(11) 2521-8023', 'SP', 'São Paulo', '190245030141', 'Cancelado', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'PEDRO FERREIRA DA SILVA JUNIOR', 'pfsilvajr@hotmail.com', '(11) 2283-3026', 'SP', 'São Paulo', '408061600108', 'Concluído', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ],
    ['01/05/2019', 'ERES ALESSANDRO PORCINELI', 'eresalessandro@gmail.com', '(12) 3674-3707', 'SP', 'Tremembé', '234280510141', 'Em análise pelo diretório municipal', '<button type="button" class="btn btn-primary waves-effect"> <i class="fa fa-eye"></i></button>' ]
  ],
  extra: {
    template: function(data) {
      function format(value) {
        return value ? value : 'Sem Informações';
      }

      let zona             = data[0],
          secao            = data[1],
          cpf              = data[2],
          genero           = data[3],
          dataNascimento   = data[4],
          mae              = data[5],
          pai              = data[6],
          blog             = data[7],
          celular          = data[8],
          endereco         = data[9],
          cep              = data[10],
          facebook         = data[11],
          twitter          = data[12],
          dataReferencia   = data[13],
          dataMovimentacao = data[14],
          indicacao        = data[15],
          justificativa    = data[16];

      return '<ul class="list-additional-info">'+
               '<li><strong>Zona Eleitoral:</strong> <span>'+format(zona)+'</span>'+
               '<li><strong>Seção eleitoral:</strong> <span>'+format(secao)+'</span>'+
               '<li><strong>CPF:</strong> <span>'+format(cpf)+'</span>'+
               '<li><strong>Gênero:</strong> <span>'+format(genero)+'</span>'+
               '<li><strong>Data de Nascimento:</strong> <span>'+format(dataNascimento)+'</span>'+
               '<li><strong>Nome da mãe:</strong> <span>'+format(mae)+'</span>'+
               '<li><strong>Nome do pai:</strong> <span>'+format(pai)+'</span>'+
               '<li><strong>Celular:</strong> <span>'+format(celular)+'</span>'+
               '<li><strong>CEP:</strong> <span>'+format(cep)+'</span>'+
               '<li><strong>Blog:</strong> <span>'+format(blog)+'</span>'+
               '<li><strong>Facebook:</strong> <span>'+format(facebook)+'</span>'+
               '<li><strong>Twitter:</strong> <span>'+format(twitter)+'</span>'+
               '<li><strong>Data de referência:</strong> <span>'+format(dataReferencia)+'</span>'+
               '<li><strong>Data da última movimentação:</strong> <span>'+format(dataMovimentacao)+'</span>'+
               '<li><strong>Indicado por:</strong> <span>'+format(indicacao)+'</span>'+
               '<li><strong>Justificativa do cancelamento:</strong> <span>'+format(justificativa)+'</span>'+
               '<li><strong>Endereço:</strong> <span>'+format(endereco)+'</span>'+
               '<li></li>'+
             '</ul>';
    },
    data: [
      ['17','4','14458410458','M','20/06/2002','JOSENILDA BATISTA BARROS','ÁLVARO JOSÉ DA PAZ','','(82) 99108-4661','Casa, Sn, Casa, Ilha da crôa, Barra de Santo Antônio/AL','57925000','','','','05/07/2019','','','10/07/2019',''  ],
      ['5','166','4726105540','M','18/05/1990','JOSEFA VALDICE MAJOR DOS SANTOS','JOSE ANGELO BISPO DOS SANTOS','','(79) 98114-1568','Travessa Nossa Senhora das Candeias, 37, São Carlos, Olaria, Aracaju/SE','49092320','','','','06/07/2019','','','11/07/2019',''  ],
      ['155','181','83858881520','M','28/07/1996','JOAO PEDRO DE','SOUZA','','(75) 99202-0319','Caminho 24, 5, (Jomafa), Brasília, Feira de Santana/BA','44089150','','','','09/07/2019','EREMITA MOTA','','09/07/2019',''  ],
      ['13','244','1839443804','M','23/10/1959','ISAAC JEREMIAS JARDIM GOUVEA','MANOEL DA SILVA GOUVEA','','','Rua São Policarpo, Nordeste, Salvador/BA','41906040','','','','01/07/2019','MARRON MSNEIRO - NORDESTE','','09/07/2019',''  ],
      ['51','222','28002492854','F','24/04/1971','MARIA LAURITA CARVALHO','JOSE PEREIRA DE CARVALHO','','(11) 99456-2824','Rua: Ramiro Vieira, 06, Centro, Sítio do Quinto/BA','48565000','','','','08/07/2019','','','13/07/2019',''  ],
      ['10','92','3587741107','F','06/03/1991','MARIA DO CARMO SANTOS','HELTON SAMPAIO SANTANA','','(11) 93020-5981','QR 2 Conjunto F, 30, Candangolândia, Brasília/DF','71725200','','','','11/07/2019','','','11/07/2019',''  ],
      ['5','110','61407468332','M','13/05/2001','MARIA DOS REIS DA SILVA LAMEGO','FRANCISCO DAS CHAGAS LAMEGO','','(99) 98830-3649','Rua da Serraria, 01, Próximo a Serraria do bandeira, Vila Costa Pinto, Aldeias Altas/MA','65610000','','','','13/07/2019','','','13/07/2019',''  ],
      ['13','31','323687393','M','24/05/1984','MARIA DAS GRACAS RODRIGUES GOMES','WALBER LIMA GOMES','','(99) 98203-1061','rua getulio vargas, 785, centro, Bacabal/MA','65700000','','','','12/07/2019','','','12/07/2019',''  ],
      ['48','60','6437334347','M','03/11/1996','MARIA FRANCISCA DE SOUSA SANTOS','AILTON MOTA DOS SANTOS','','(99) 99101-0278','Avenida Goncalves Dias, 1239, Centro, Dom Pedro/MA','65765000','','','','06/07/2019','','','11/07/2019',''  ],
      ['220','49','45388131840','M','24/01/1994','ROSELENE CLAUDINA BARBOSA PEREIRA','JOSÉ DA SILVA PEREIRA','','(37) 99941-1715','Rua nossa senhora da Conceição, 447, 1, Centro, Craíbas/AL','57320970','','','','13/07/2019','','','13/07/2019',''  ],
      ['263','294','6923115647','M','20/12/1984','VALDENICE OLIVEIRA DOS SANTOS','WAGNER ALVES LACERDA','','(31) 99946-6633','Rua Teófilo Otoni, 536, LOJA 105, Centro, Sete Lagoas/MG','35700007','','','','10/07/2019','','','10/07/2019',''  ],
      ['34','29','4777337197','F','02/03/1994','RAMONA ROCHA RAMIRES','SILVIO DE SOUZA','','(67) 99951-9696','ALTINO PANIAGO DE CARVALHO, 03, MARIA JOAQUINA, Jaraguari/MS','79440000','','','','12/07/2019','','','12/07/2019',''  ],
      ['40','4','1209239124','F','31/12/1985','INES OLIVA BERNARDI GNOATTO','FABIO GNOATTO','','(67) 99902-6283','Rua Espirito Santo, 840, Casa, Centro, São Gabriel do Oeste/MS','79490000','','','','24/06/2019','JEFERSON LUIZ TOMAZONI','','13/07/2019',''  ],
      ['40','41','96806290159','M','04/09/1981','EVA SOUZA BRANDÃO','MARGIM OCAMPO','','(67) 99929-3784','Rua Antônio João, 171, Casa, Milani, São Gabriel do Oeste/MS','79490000','','','','08/07/2019','','','13/07/2019',''  ],
      ['40','3','36636843187','F','27/01/1955','ANTONIA DE ALMEIDA SANTANNA','HUMBERTO BRANDÃO SANTANNA','','(67) 99964-6568','RUA RIO GRANDE DO SUL, 1274, CASA, CENTRO, São Gabriel do Oeste/MS','79490000','','','','08/07/2019','JEFERSON LUIZ TOMAZONI','','13/07/2019',''  ],
      ['1','426','7726968451','M','17/03/1989','MÁRCIA DE SOUZA LEÃO','WILDÊNIO GOMES DE SOUZA','','(81) 99922-5777','Rua Major Armando de Souza Melo, 430, APT. 601, Boa Viagem, Recife/PE','51130040','','','','12/07/2019','','','12/07/2019',''  ],
      ['194','95','9609336701','M','09/05/1980','RITA TERESA JESUS DO NASCIMENTO','JOÃO PEDRO DO NASCIMENTO','','(21) 99401-2344','Rua Alan Kardec, 0, Lote 06 - Quadra 111, Jardim Olavo Bilac, Duque de Caxias/RJ','25036390','','','','12/07/2019','','','12/07/2019',''  ],
      ['214','54','3699843904','M','26/02/1982','MARLENE RODRIGUES DA SILVA ANVERSI','OSMAR ANVERSI','','(21) 97619-0795','Rua Galdino Pimentel, 365, BL 1 - APTO 308, Bingen, Petrópolis/RJ','25665081','','','','06/07/2019','','','11/07/2019',''  ],
      ['42','223','39404724840','M','23/05/1989','MARIA DO CARMO PRADO DE SOUZA','JOÃO PEDRO DE SOUZA','','(12) 99653-6241','João Bosco de Souza, 01, Casa, Centro, Areias/SP','12820000','','','','06/07/2019','','','11/07/2019',''  ],
      ['367','326','53037303875','M','29/12/1999','MARGARIDA ALVES DE AMORIM','PAULO CESAR FERREIRA GONÇALVES','','(71) 9232-5554','Rua Maciel de Cima, 48, casa, Pelourinho, Salvador/BA','40026250','','','','11/07/2019','','','11/07/2019',''  ],
      ['67','157','34012510827','M','19/11/1986','MARIA SONIA CIRILO DA SILVA','ALTAIR SANTOS IZIDORO','','(14) 99685-5031','Rua João Vaz de Lima, 790, Conjunto Habitacional Paulo Freire, Lins/SP','16402590','','','','11/07/2019','','','11/07/2019',''  ],
      ['427','72','52275640860','M','21/11/2000','FLAVIA CRISTIANE PIRES','AGNALDO DE CASTRO','','(17) 99643-7448','Avenida Antonio Gomes de Castro, 2463, Casa, Centro, Paranapuã/SP','15745000','','','','10/07/2019','','','10/07/2019',''  ],
      ['87','26','34757658885','M','27/06/1985','ROSANGELA DA CONCEIÇÃO SILVA DA CRUZ','ANTONIO JACINTO DA CRUZ','','(11) 98762-2168','Rua Sante Battistini, 588, Casa 2, Batistini, São Bernardo do Campo/SP','9844110','','','','10/07/2019','','','10/07/2019',''  ],
      ['108','211','7551736786','M','06/07/1977','VALDINETE  OLIVEIRA','MANOEL  VITORINO  DE OLIVEIRA','','(16) 99193-0642','Casa, 1604, Cada, Maria  gorette, Ribeirao  preto/SP','14030325','','','','10/07/2019','','','10/07/2019',''  ],
      ['258','485','38730951810','M','01/04/1989','MARTA LUKAS MORRONE','JOÃO CARLOS MORRONE','','(11) 99999-0498','Rua Engenheiro Jorge Oliva, 237, APTO.61 BLOCO A, Vila Mascote, São Paulo/SP','4362060','','','','12/07/2019','','','12/07/2019',''  ],
      ['1','274','4617500901','F','19/11/1984','SIMONE DO ROCIO VIEIRA COSTA','DARIO JOSÉ COSTA','','(11) 99182-9179','NOVE DE JULHO, 2005, apartamento 1406, Bela Vista, SAO PAULO/SP','1313001','','','','12/07/2019','ANTONIO HOMERO VIOLA','','12/07/2019',''  ],
      ['404','514','11663070423','M','24/11/1995','CICERA MARIA DA SILVA','JOSE CICERO BATISTA DE MENDONCA','','(11) 98175-7456','Rua Pedro Morganti, 21, Ap 32, Vila Mariana, São Paulo/SP','4020070','','','','12/07/2019','','','12/07/2019',''  ],
      ['417','307','11317333802','F','08/07/1971','MARIA DE LOURDES BARBOSA','TEMISTOCLES ALVES MACIEL','','(11) 99644-7755','Rua São Teodoro, 432, APTO 123 BLOCO C, Vila Carmosina, São Paulo/SP','8290005','','','','11/07/2019','TANIA MAMOTE','','11/07/2019',''  ],
      ['256','324','46403126873','M','26/10/1994','MARILUCE PEREIRA DA SILVA','PEDRO FERREIRA DA SILVA','','(11) 99167-6842','Avenida Água Fria, 119, apto 152, Água Fria, São Paulo/SP','2333000','','','','08/07/2019','','','13/07/2019',''  ],
      ['314','91','26537056802','M','13/06/1977','MARLI FÁTIMA PORCINELI','DANTE JORGE PORCINELI','','(12) 99189-4540','Rua Leonidas Nunes do Patrocínio, 45, casa, Flamboyant, Tremembé/SP','12120000','','','','10/07/2019','','','10/07/2019',''  ]
    ]
  }
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
                <h4 className="page-title">FILIAÇÃO</h4>
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

                  <div className="row">
                    <div className="col-12 col-md-12 text-right">
                      <Link
                        to="/comunicacao/campanhas/criar"
                        className="btn btn-primary m-b-20 waves-effect w-md waves-light"
                      >Enviar comunicação</Link>
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
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="field-1" className="control-label">
                          Periodo Inicial
                        </label>
                        <DatePicker />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="field-1" className="control-label">
                          Periodo Final
                        </label>
                        <DatePicker />
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

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="example-idade" className="control-label">
                          Idade
                        </label>
                        <input
                          type="number"
                          id="example-idade"
                          name="example-idade"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="example-sexo" className="control-label">
                          Sexo
                        </label>
                        <Select2 dados={[{
                          value: '1',
                          title: 'Masculino'
                        }, {
                          value: '2',
                          title: 'Feminino',
                        }]} />
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
