import React from 'react';
import PropTypes from 'prop-types';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  Route,
  Switch,
  withRouter,
  BrowserRouter as Router,
} from 'react-router-dom';

import Login from '../pages/login';
import Cadastrar from '../pages/cadastro';
import Relembrar from '../pages/relembrar';
import Dashboard from '../pages/dashboard';
import FiliadosTodos from '../pages/filiados/todos';
import FiliadosCadastro from '../pages/filiados/cadastro';
import Diretorios from 'pages/organizacao/diretorios';
import EleicoesConsutarDados from 'pages/eleicoes/consultar-dados';
import EleicoesCadastro from 'pages/eleicoes/cadastro';
import RedesSociais from 'pages/comunicacao/redes-sociais';
import Campanhas from 'pages/comunicacao/campanhas';

import css from './index.scss';

const Routes = ({ location }) => (
  <TransitionGroup className={css.transitionGroup}>
    <CSSTransition
      key={location.key}
      classNames={css.fade}
      timeout={{ enter: 300, exit: 300 }}
    >
      <section className={css.routerSection}>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/relembrar" exact component={Relembrar} />
            <Route path="/cadastrar" exact component={Cadastrar} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/filiados" exact component={FiliadosTodos} />
            <Route path="/filiados/todos" exact component={FiliadosTodos} />
            <Route path="/filiados/cadastro" exact component={FiliadosCadastro} />
            {/* TODO: Desenvolver essa tela */}
            <Route path="/filiados/relatorios" exact component={FiliadosTodos} />
            {/* TODO: Desenvolver essa tela */}
            <Route path="/filiados/pedidos" exact component={FiliadosTodos} />
            <Route path="/organizacao/diretorios" exact component={Diretorios} />
            {/* TODO: Desenvolver essa tela */}
            <Route path="/organizacao/mandatos" exact component={Diretorios} />
            {/* TODO: Desenvolver essa tela */}
            <Route path="/organizacao/cadastro" exact component={Diretorios} />
            {/* TODO: Desenvolver essa tela */}
            <Route path="/organizacao/documentacao" exact component={Diretorios} />
            <Route path="/eleicoes" exact component={EleicoesConsutarDados} />
            <Route path="/eleicoes/consultar-dados" exact component={EleicoesConsutarDados} />
            <Route path="/eleicoes/cadastro" exact component={EleicoesCadastro} />
            {/* TODO: Desenvolver essa tela */}
            <Route path="/eleicoes/relatorios" exact component={EleicoesConsutarDados} />

            <Route path="/comunicacao/redes-sociais" exact component={RedesSociais} />
            <Route path="/comunicacao/campanhas" exact component={Campanhas} />


            <Route path="/dashboard" exact component={Dashboard} />
          </Switch>
        </Router>
      </section>
    </CSSTransition>
  </TransitionGroup>
);

Routes.propTypes = {
  location: PropTypes.shape({}).isRequired,
};

export default withRouter(Routes);