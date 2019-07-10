import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
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
    // Plugin metisMenu
    window.jQuery("#side-menu").metisMenu();
    // Collapsar menu 
    window.jQuery('.button-menu-mobile').on('click', function (event) {
      event.preventDefault();
      window.jQuery("body").toggleClass("enlarged");
    });
    // Inicializar tela grande class enlarged
    if (window.jQuery(window).width() < 1025) {
      window.jQuery('body').addClass('enlarged');
    } else {
      window.jQuery('body').removeClass('enlarged');
    }
    // Ativa subitens do menu
    window.jQuery("#sidebar-menu a").each(function () {
      var pageUrl = window.location.href.split(/[?#]/)[0];
      if (this.href === pageUrl) {
        window.jQuery(this).addClass("mm-active");
        window.jQuery(this).parent().addClass("mm-active");
        window.jQuery(this).parent().parent().addClass("mm-show");
        window.jQuery(this).parent().parent().prev().addClass("mm-active");
        window.jQuery(this).parent().parent().parent().addClass("mm-active");
        window.jQuery(this).parent().parent().parent().parent().addClass("mm-show");
        window.jQuery(this).parent().parent().parent().parent().parent().addClass("mm-active");
      }
    });
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
