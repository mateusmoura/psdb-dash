import React from 'react';
import PropTypes from 'prop-types';

import '../../pages-js/jquery.form-pickers.init.js';
import '../../plugins/bootstrap-daterangepicker/daterangepicker.css';

const DateRangePicker = ({ titulo }) => (
  <input className="form-control input-daterange-datepicker" type="text" name="daterange" />
)

DateRangePicker.propTypes = {
  titulo: PropTypes.string,
};

DateRangePicker.defaultProps = {
  titulo: 'Daniel',
}

export default DateRangePicker;
