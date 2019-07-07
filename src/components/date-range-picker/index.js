import React from 'react';
import PropTypes from 'prop-types';

import '../../pages-js/jquery.form-pickers.init.js';
import '../../plugins/bootstrap-daterangepicker/daterangepicker.css';

const DateRangePicker = ({ titulo }) => (
  <input class="form-control input-daterange-datepicker" type="text" name="daterange" value="01/01/2015 - 01/31/2015"/>
)

DateRangePicker.propTypes = {
  titulo: PropTypes.string,
};

DateRangePicker.defaultProps = {
  titulo: 'Daniel',
}

export default DateRangePicker;
