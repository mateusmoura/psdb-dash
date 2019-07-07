/**
 * Theme: Codefox - Bootstrap 4 Admin Template
 * Author: Coderthemes
 * Component: Datatable
 * 
 */
var handleDataTableButtons = function() {
        "use strict";
        0 !== window.jQuery("#datatable-buttons").length && window.jQuery("#datatable-buttons").DataTable({
            dom: "Bfrtip",
            buttons: [{
                extend: "copy",
                className: "btn-sm"
            }, {
                extend: "csv",
                className: "btn-sm"
            }, {
                extend: "excel",
                className: "btn-sm"
            }, {
                extend: "pdf",
                className: "btn-sm"
            }, {
                extend: "print",
                className: "btn-sm"
            }],
            responsive: !0
        })
    },
    TableManageButtons = function() {
        "use strict";
        return {
            init: function() {
                handleDataTableButtons()
            }
        }
    }();


window.jQuery(document).ready(function () {
    window.jQuery('#datatable').dataTable();
    window.jQuery('#datatable-keytable').DataTable({keys: true});
    window.jQuery('#datatable-responsive').DataTable();
    window.jQuery('#datatable-colvid').DataTable({
        "dom": 'C<"clear">lfrtip',
        "colVis": {
            "buttonText": "Change columns"
        }
    });
    window.jQuery('#datatable-scroller').DataTable({
        ajax: "../plugins/datatables/json/scroller-demo.json",
        deferRender: true,
        scrollY: 380,
        scrollCollapse: true,
        scroller: true
    });
    var table = window.jQuery('#datatable-fixed-header').DataTable({fixedHeader: true});
    var table = window.jQuery('#datatable-fixed-col').DataTable({
        scrollY: "300px",
        scrollX: true,
        scrollCollapse: true,
        paging: false,
        fixedColumns: {
            leftColumns: 1,
            rightColumns: 1
        }
    });
});

setTimeout( function() {
    TableManageButtons.init();
}, 1000);
