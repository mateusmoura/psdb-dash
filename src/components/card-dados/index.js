import React from "react";
import PropTypes from "prop-types";

const CardDados = ({ titulo, descricao, cor, valor }) => (
  <div className={`card widget-box-two ${cor}`}>
    <div className="card-body">
      <i className="mdi mdi-chart-line widget-two-icon" />
      <div className="wigdet-two-content">
        <p
          className="m-0 text-uppercase text-white font-600 font-secondary text-overflow"
          title="{titulo}"
        >
          {titulo}
        </p>
        <h2 className="text-white">
          <span data-plugin="counterup">{valor}</span>
          <small>
            <i className="mdi mdi-arrow-up text-white" />
          </small>
        </h2>
        <p className="text-white m-0">
          {descricao}
        </p>
      </div>
    </div>
  </div>
);

CardDados.propTypes = {
  titulo: PropTypes.string,
  descricao: PropTypes.string,
  cor: PropTypes.string,
  valor: PropTypes.number
};

CardDados.defaultProps = {
  titulo: "Daniel",
  descricao: "",
  cor: "widget-two-purple",
  valor: 0
};

export default CardDados;
