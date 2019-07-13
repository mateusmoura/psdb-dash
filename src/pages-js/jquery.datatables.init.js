/**
 * Theme: Codefox - Bootstrap 4 Admin Template
 * Author: Coderthemes
 * Component: Datatable
 *
 */
var handleDataTableButtons = function() {
    0 !== window.jQuery("#datatable-buttons").length &&
      window.jQuery("#datatable-buttons").DataTable({
        dom: "Bfrtip",
        buttons: [
          {
            extend: "copy",
            className: "btn-sm"
          },
          {
            extend: "csv",
            className: "btn-sm"
          },
          {
            extend: "excel",
            className: "btn-sm"
          },
          {
            extend: "pdf",
            className: "btn-sm"
          },
          {
            extend: "print",
            className: "btn-sm"
          }
        ],
        responsive: !0,
        language: {
          url:
            "//cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json"
        }
      });
  },
  TableManageButtons = (function() {
    return {
      init: function() {
        handleDataTableButtons();
      }
    };
  })();

window.TableDataTable = handleDataTableButtons;

window.jQuery(document).ready(function() {
  window.jQuery("#datatable").dataTable({
    language: {
      url: "//cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json"
    }
  });
  window.jQuery("#datatable-keytable").DataTable({
    keys: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json"
    }
  });
  window.jQuery("#datatable-responsive").DataTable({
    language: {
      url: "//cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json"
    }
  });
  window.jQuery("#datatable-colvid").DataTable({
    dom: 'C<"clear">lfrtip',
    colVis: {
      buttonText: "Trocar Colunas"
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json"
    }
  });
  window.jQuery("#datatable-scroller").DataTable({
    ajax: "../plugins/datatables/json/scroller-demo.json",
    deferRender: true,
    scrollY: 380,
    scrollCollapse: true,
    scroller: true
  });
  var table = window.jQuery("#datatable-fixed-header").DataTable({
    fixedHeader: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json"
    }
  });
  var table = window.jQuery("#datatable-fixed-col").DataTable({
    scrollY: "300px",
    scrollX: true,
    scrollCollapse: true,
    paging: false,
    fixedColumns: {
      leftColumns: 1,
      rightColumns: 1
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json"
    }
  });
});

// setTimeout(function() {
//   TableManageButtons.init();
// }, 1000);
