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