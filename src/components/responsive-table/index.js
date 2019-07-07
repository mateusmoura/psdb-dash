import React from 'react';
import PropTypes from 'prop-types';

import '../../pages-js/jquery.datatables.init.js';
import '../../plugins/datatables/dataTables.bootstrap4.min.css';

const ResponsiveTable = ({ titulo }) => (
   <div className="row">
       <div className="col-sm-12">
           <div className="card">
               <div className="card-body table-responsive">
                   <h4 className="m-t-0 header-title mb-4"><b>{ titulo }</b></h4>

                   <table id="datatable-buttons" className="table table-striped table-bordered">
                       <thead>
                         <tr>
                             <th>#</th>
                             <th>Data de cadastro</th>
                             <th>UF</th>
                             <th>Município</th>
                             <th>Nome</th>
                             <th>Título</th>
                             <th>Situação</th>
                             <th>Pedido de filiação</th>
                             <th>Ficha do filiado</th>
                         </tr>
                       </thead>
                       <tbody>
                          <tr>
                             <td>1</td>
                             <td>28/06/2019</td>
                             <td>MT</td>
                             <td>Colíder</td>
                             <td>WILSON DIEGO NUNES SANTANA</td>
                             <td>028151471805</td>
                             <td>Em análise pelo diretório estadual</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>2</td>
                             <td>29/06/2019</td>
                             <td>MG</td>
                             <td>Betim</td>
                             <td>VICTOR HUGO PEREIRA DA SILVA</td>
                             <td>217504190213</td>
                             <td>Em análise pelo diretório estadual</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>3</td>
                             <td>01/07/2019</td>
                             <td>MG</td>
                             <td>Pedrinópolis</td>
                             <td>MATHEUS DA SILVA MARTINS</td>
                             <td>180396370248</td>
                             <td>Em análise pelo diretório municipal</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>4</td>
                             <td>01/07/2019</td>
                             <td>PE</td>
                             <td>Goiana</td>
                             <td>MIQUEIAS FILIPE PONTES RODRIGUES</td>
                             <td>091210850825</td>
                             <td>Em análise pelo diretório estadual</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>5</td>
                             <td>01/07/2019</td>
                             <td>BA</td>
                             <td>Salvador</td>
                             <td>ISAAC JEREMIAS JARDIM GOUVEA</td>
                             <td>083222540558</td>
                             <td>Novo</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>6</td>
                             <td>01/07/2019</td>
                             <td>SP</td>
                             <td>Osasco</td>
                             <td>CICERO CLAUDIO MONTEIRO TERTO</td>
                             <td>263387790183</td>
                             <td>Em análise pelo diretório municipal</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>7</td>
                             <td>01/07/2019</td>
                             <td>SP</td>
                             <td>São Paulo</td>
                             <td>ALEXANDRE BEZERRA DA SILVA</td>
                             <td>379144900159</td>
                             <td>Em análise pelo diretório municipal</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>8</td>
                             <td>01/07/2019</td>
                             <td>SP</td>
                             <td>São Paulo</td>
                             <td>SONIA APARECIDA DESIDÉRIO</td>
                             <td>007547390116</td>
                             <td>Em análise pelo diretório municipal</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>9</td>
                             <td>02/07/2019</td>
                             <td>SP</td>
                             <td>Pindorama</td>
                             <td>EDUARDA SANTUCCI</td>
                             <td>414359980141</td>
                             <td>Em análise pelo diretório municipal</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>10</td>
                             <td>02/07/2019</td>
                             <td>SP</td>
                             <td>São Paulo</td>
                             <td>DEISE ACHILLES</td>
                             <td>088727580116</td>
                             <td>Em análise pelo diretório municipal</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>11</td>
                             <td>02/07/2019</td>
                             <td>SP</td>
                             <td>Barueri</td>
                             <td>NIVEA BOLZAN PENHA DE SOUZA</td>
                             <td>204837150141</td>
                             <td>Em análise pelo diretório municipal</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>12</td>
                             <td>02/07/2019</td>
                             <td>SC</td>
                             <td>Caçador</td>
                             <td>GIOVANI LEONARDO SCHIAVINI</td>
                             <td>335967340159</td>
                             <td>Em análise pelo diretório municipal</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>13</td>
                             <td>02/07/2019</td>
                             <td>ES</td>
                             <td>Vila Velha</td>
                             <td>VICTOR BEIRIZ DE OLIVEIRA</td>
                             <td>038140421406</td>
                             <td>Em análise pelo diretório estadual</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>14</td>
                             <td>03/07/2019</td>
                             <td>MG</td>
                             <td>Alto Caparaó</td>
                             <td>RONALDO PINHEIRO</td>
                             <td>068483390221</td>
                             <td>Novo</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>15</td>
                             <td>03/07/2019</td>
                             <td>MG</td>
                             <td>Alto Caparaó</td>
                             <td>JORGE JOSE DA SILVA</td>
                             <td>089889020299</td>
                             <td>Novo</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>16</td>
                             <td>03/07/2019</td>
                             <td>PB</td>
                             <td>Campina Grande</td>
                             <td>LEANDRO SÉRGIO DE HOLANDA</td>
                             <td>035189271244</td>
                             <td>Novo</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>17</td>
                             <td>03/07/2019</td>
                             <td>SP</td>
                             <td>São Paulo</td>
                             <td>THIAGO SOARES DOS SANTOS</td>
                             <td>338471510116</td>
                             <td>Novo</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>18</td>
                             <td>03/07/2019</td>
                             <td>SP</td>
                             <td>Caieiras</td>
                             <td>ALBERTO MACHADO DE SOUZA</td>
                             <td>084699150191</td>
                             <td>Novo</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>19</td>
                             <td>03/07/2019</td>
                             <td>MA</td>
                             <td>São Luís</td>
                             <td>JEFFERSON RODRIGO LEAO</td>
                             <td>142992910370</td>
                             <td>Novo</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>20</td>
                             <td>04/07/2019</td>
                             <td>RS</td>
                             <td>Passo Fundo</td>
                             <td>LUCAS JOSÉ BRESSIANI</td>
                             <td>117549140426</td>
                             <td>Novo</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>21</td>
                             <td>05/07/2019</td>
                             <td>BA</td>
                             <td>Canarana</td>
                             <td>EDCARLOS PEREIRA</td>
                             <td>072552090531</td>
                             <td>Novo</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>22</td>
                             <td>05/07/2019</td>
                             <td>MS</td>
                             <td>Ribas do Rio Pardo</td>
                             <td>ZILDA FRANCISCA PEREIRA LIMA</td>
                             <td>012690231961</td>
                             <td>Novo</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>23</td>
                             <td>05/07/2019</td>
                             <td>RS</td>
                             <td>Porto Alegre</td>
                             <td>DÉCIO HENRIQUE VENTURA ALVES</td>
                             <td>087716410400</td>
                             <td>Novo</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>24</td>
                             <td>05/07/2019</td>
                             <td>BA</td>
                             <td>Santo Amaro</td>
                             <td>ISMARIO PEREIRA ALVES</td>
                             <td>118547810507</td>
                             <td>Novo</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>25</td>
                             <td>06/07/2019</td>
                             <td>MA</td>
                             <td>Dom Pedro</td>
                             <td>LUIS EDUARDO MOTA DOS SANTOS</td>
                             <td>073065931155</td>
                             <td>Novo</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>26</td>
                             <td>06/07/2019</td>
                             <td>BA</td>
                             <td>Coronel João Sá</td>
                             <td>WALLACE MAJOR DOS SANTOS</td>
                             <td>023455472100</td>
                             <td>Novo</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>27</td>
                             <td>06/07/2019</td>
                             <td>SP</td>
                             <td>Areias</td>
                             <td>IVAN DO PRADO DE SOUZA</td>
                             <td>365065010132</td>
                             <td>Novo</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>

                          <tr>
                             <td>28</td>
                             <td>06/07/2019</td>
                             <td>RJ</td>
                             <td>Rio de Janeiro</td>
                             <td>LEONARDO DA SILVA ANVERSI</td>
                             <td>040464800965</td>
                             <td>Novo</td>
                             <td><i className="fa fa-folder-open"></i></td>
                             <td></td>
                          </tr>
                       </tbody>
                   </table>
               </div>
           </div>
       </div>
   </div>
)

ResponsiveTable.propTypes = {
  titulo: PropTypes.string,
};

ResponsiveTable.defaultProps = {
  titulo: 'Lista',
}

export default ResponsiveTable;
