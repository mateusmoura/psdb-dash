import React, { Component, Fragment } from 'react';

import { SidebarMenu } from 'helpers';

import './App.scss';

import Router from './routes';

class App extends Component {
  componentDidMount() {
    // Plugins Core
    // Inicializa os Tooltips
    window.jQuery.fn.tooltip && window.jQuery('[data-toggle="tooltip"]').tooltip();
    // Inicializa Popover
    window.jQuery.fn.popover && window.jQuery('[data-toggle="popover"]').popover()
    // Inicializa CustomModal
    window.jQuery('[data-plugin="custommodal"]').on('click', function(e) {
      e.preventDefault();
      var modal = new window.Custombox.modal({
        content: {
          target: window.jQuery(this).attr("href"),
          effect: window.jQuery(this).attr("data-animation")
        },
        overlay: {
          color: window.jQuery(this).attr("data-overlayColor")
        }
      });
      // Open
      modal.open();
    });
    // Initializing Slimscroll
    window.jQuery.fn.slimScroll && window.jQuery(".slimscroll-alt").slimScroll({ position: 'right',size: "5px", color: '#98a6ad',wheelStep: 10});
    // Inicializa Range slider
    window.jQuery.fn.slider && window.jQuery('[data-plugin="range-slider"]').slider({});
    // Inicializa Switch
    window.jQuery('[data-plugin="switchery"]').each(function (idx, obj) {
      new window.Switchery(window.jQuery(this)[0], window.jQuery(this).data());
    });

    // Waves Effect
    window.Waves.init();

    // Plugins APP
    // SlimScroll Menu
    window.jQuery('.slimscroll-menu').slimscroll({
      height: 'auto',
      position: 'right',
      size: "7px",
      color: '#9ea5ab',
      wheelStep: 5
    });
    // SlimScroll
    window.jQuery('.slimscroll').slimscroll({
      height: 'auto',
      position: 'right',
      size: "5px",
      color: '#9ea5ab'
    });

    SidebarMenu();
  }

  render() {
    return (
      <Fragment>
        <Router />
      </Fragment>
    );
  }
}

export default App;
