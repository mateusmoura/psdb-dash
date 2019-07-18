import React, { Fragment } from "react";
import PropTypes from 'prop-types';

import 'plugins/select2/js/select2.js';
import 'plugins/select2/css/select2.min.css';

const Select2 = ({ dados }) => (
  <select className="form-control select2">
    <option>Selecionar</option>
    {
      dados.map((item) => {
        if (!item.options) {
          return (
            <option value={item.value}>{item.title || item.value}</option>
          )
        }

        const htmlOptions = item.options.map(option => (
          <option value={option.value}>{option.title || option.value}</option>
        ))

        if (item.label) {
          return (
            <optgroup label={item.label}>
              { htmlOptions }
            </optgroup>
          )
        }

        return (
          <Fragment>
            { htmlOptions }
          </Fragment>
        )
      })
    }
  </select>
);

Select2.propTypes = {
  dados: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      title: PropTypes.string,
    }))
  })),
};

Select2.defaultProps = {
  dados: [{
    label: 'Alaskan/Hawaiian Time Zone',
    options: [{
      value: 'AK',
      title: 'Alaska',
    }, {
      value: 'HI',
      title: 'Hawaii',
    }],
  }, {
    label: 'Pacific Time Zone',
    options: [{
      value: 'CA',
      title: 'California',
    },{
      value: 'NV',
      title: 'Nevada',
    },{
      value: 'OR',
      title: 'Oregon',
    },{
      value: 'WA',
      title: 'Washington',
    }]
  }, {
    label: 'Mountain Time Zone',
    options: [{
      value: 'AZ',
      title: 'Arizona',
    },{
      value: 'CO',
      title: 'Colorado',
    },{
      value: 'ID',
      title: 'Idaho',
    },{
      value: 'MT',
      title: 'Montana',
    },{
      value: 'NE',
      title: 'Nebraska',
    },{
      value: 'NM',
      title: 'New Mexico',
    },{
      value: 'ND',
      title: 'North Dakota',
    }]
  }]
};

export default Select2;
