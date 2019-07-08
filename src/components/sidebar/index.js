import React from 'react';

import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="left side-menu">
    <div className="slimscroll-menu" id="remove-scroll">
      {/* <!--- Sidemenu --> */}
      <div id="sidebar-menu">
        {/* <!-- Left Menu Start --> */}
        <ul className="metismenu list-unstyled" id="side-menu">
          <li className="menu-title">Navegação</li>

          <li>
            {/* <Link
              to='/dashboard'
            >
              <i className="fi-air-play"></i
              ><span></span>
            </Link> */}

            <a href="#this">
              <i className="fa fa-users"></i
              ><span>Filiados</span>
              <span className="menu-arrow"></span></a>

            <ul className="nav-second-level nav" aria-expanded="false">
              <li><Link to="/filiados/todos">Todos filiados</Link></li>
              <li><Link to="/filiados/pedidos">Pedidos/Pendências</Link></li>
              <li><Link to="/filiados/cadastro">Cadastro</Link></li>
              <li><Link to="/filiados/relatorios">Relatórios</Link></li>
            </ul>
          </li>

          <li>
            <a href="#this">
              <i className="fa fa-folder-open"></i
              ><span>Organização Partidária</span>
              <span className="menu-arrow"></span></a>

            <ul className="nav-second-level nav" aria-expanded="false">
              <li><Link to="/organizacao/todos">Todos os diretórios</Link></li>
              <li><Link to="/organizacao/mandatos">Todos os mandatos</Link></li>
              <li><Link to="/organizacao/cadastro">Cadastro</Link></li>
              <li><Link to="/organizacao/documentacao">Documentação</Link></li>
            </ul>
          </li>

          <li>
            <a href="#this">
              <i className="fa fa-gavel"></i
              ><span>Eleições</span>
              <span className="menu-arrow"></span></a>

            <ul className="nav-second-level nav" aria-expanded="false">
              <li><Link to="/eleicoes/consultar-dados">Consulta dados</Link></li>
              <li><Link to="/eleicoes/relatorios">Relatórios</Link></li>
            </ul>
          </li>

          <li>
            <a href="#this">
              <i className="fa fa-envelope"></i
              ><span>Comunicação</span>
              <span className="menu-arrow"></span></a>

            <ul className="nav-second-level nav" aria-expanded="false">
              <li><Link to="/comunicacao/consulta">Todas Redes Sociais</Link></li>
              <li><Link to="/comunicacao/campanhas">Campanhas</Link></li>
              <li><Link to="/comunicacao/relatorios">Relatórios</Link></li>
            </ul>
          </li>

          <li className="menu-title">Administrativo</li>

          <li>
            <a href="#this">
              <i className="fa fa-user"></i
              ><span>Perfil</span>
              <span className="menu-arrow"></span></a>

            <ul className="nav-second-level nav" aria-expanded="false">
              <li><Link to="/perfil/consulta">Editar dados</Link></li>
              <li><Link to="/perfil/campanhas">Gerenciar usuários</Link></li>
              <li><Link to="/perfil/relatorios">Configurações</Link></li>
            </ul>
          </li>
        </ul>
      </div>
      {/* <!-- Sidebar --> */}
      <div className="clearfix"></div>
    </div>
    {/* <!-- Sidebar -left --> */}
  </div>
);

export default Sidebar;
