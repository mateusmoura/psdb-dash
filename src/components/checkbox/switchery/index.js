import React, { useState } from 'react';
import PropTypes from 'prop-types';

import 'plugins/switchery/switchery.min.css';
import 'plugins/bootstrap-touchspin/css/jquery.bootstrap-touchspin.min.css';

import 'plugins/switchery/switchery.min.js';
import 'plugins/bootstrap-tagsinput/js/bootstrap-tagsinput.min.js';

const CheckboxSwitchery = ({ id }) => {
  const [checked, setChecked] = useState(false);

  return (
    <input
      type="checkbox"
      checked={checked}
      data-plugin="switchery"
      data-color="#64b0f2"
      data-size="small"
      id={id}
      onClick={() => setChecked(!checked)}
    />
  );
}

CheckboxSwitchery.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

CheckboxSwitchery.defaultProps = {
  size: 'small',
  color: '#64b0f2',
};

export default CheckboxSwitchery;
