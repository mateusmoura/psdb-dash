import React from 'react';
import PropTypes from 'prop-types';

const CardDados = ({ titulo }) => (
  <div className="col-xl-3 col-md-6">
      <div className="card widget-box-two widget-two-purple">
          <div className="card-body">
              <i className="mdi mdi-chart-line widget-two-icon"></i>
              <div className="wigdet-two-content">
                  <p className="m-0 text-uppercase text-white font-600 font-secondary text-overflow" title="{titulo}">{titulo}</p>
                  <h2 className="text-white"><span data-plugin="counterup">65841</span> <small><i className="mdi mdi-arrow-up text-white"></i></small></h2>
                  <p className="text-white m-0"><b>10%</b> From previous period</p>
              </div>
          </div>
      </div>
  </div>
)

CardDados.propTypes = {
  titulo: PropTypes.string,
};

CardDados.defaultProps = {
  titulo: 'Daniel',
}

export default CardDados;
