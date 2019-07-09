import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

import 'plugins/switchery/switchery.min.css';
import 'plugins/bootstrap-touchspin/css/jquery.bootstrap-touchspin.min.css';

import 'plugins/switchery/switchery.min.js';
import 'plugins/bootstrap-tagsinput/js/bootstrap-tagsinput.min.js';

import './index.scss';

class CheckboxSwitchery extends Component {
  componentDidMount() {
    const { id, size, color } = this.props;
    new window.Switchery(this[`inputRef-${id}`], {
      size,
      color,
    });
  }

  render() {
    const { id } = this.props;
    

    return (
      <div className="switchery-container">
        <input
          type="checkbox"
          ref={(node) => this[`inputRef-${id}`] = node}
          // checked={checked}
          data-plugin="switchery"
          data-color="#004997"
          data-size="small"
          id={id}
          // onClick={() => setChecked(!checked)}
        />
      </div>
    )
  }
}

CheckboxSwitchery.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

CheckboxSwitchery.defaultProps = {
  size: 'small',
  color: '#004997',
};

export default CheckboxSwitchery;
