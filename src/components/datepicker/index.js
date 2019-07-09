import React from "react";

import 'pages-js/jquery.form-pickers.init.js';
import 'plugins/bootstrap-datepicker/css/bootstrap-datepicker.min.css';

const DatePicker = () => (
  <div>
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="mm/dd/yyyy"
        id="datepicker-autoclose"
      />
      <div className="input-group-append">
        <span className="input-group-text bg-custom text-white b-0">
          <i className="mdi mdi-calendar" />
        </span>
      </div>
    </div>
  </div>
);

export default DatePicker;
