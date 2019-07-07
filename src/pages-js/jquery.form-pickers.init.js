/**
 * Theme: Codefox - Bootstrap 4 Admin Template
 * Author: Coderthemes
 * Form Pickers
 */
window.jQuery(document).ready(function () {

    // Time Picker
    window.jQuery('#timepicker').timepicker({
        defaultTIme: false
    });
    window.jQuery('#timepicker2').timepicker({
        showMeridian: false
    });
    window.jQuery('#timepicker3').timepicker({
        minuteStep: 15
    });

    //colorpicker start

    window.jQuery('.colorpicker-default').colorpicker({
        format: 'hex'
    });
    window.jQuery('.colorpicker-rgba').colorpicker();

    // Date Picker
    window.jQuery('#datepicker').datepicker();
    window.jQuery('#datepicker-autoclose').datepicker({
        autoclose: true,
        todayHighlight: true
    });
    window.jQuery('#datepicker-inline').datepicker();
    window.jQuery('#datepicker-multiple-date').datepicker({
        format: "mm/dd/yyyy",
        clearBtn: true,
        multidate: true,
        multidateSeparator: ","
    });
    window.jQuery('#date-range').datepicker({
        toggleActive: true
    });

    //Clock Picker
    window.jQuery('.clockpicker').clockpicker({
        donetext: 'Done'
    });

    window.jQuery('#single-input').clockpicker({
        placement: 'bottom',
        align: 'left',
        autoclose: true,
        'default': 'now'
    });
    window.jQuery('#check-minutes').click(function (e) {
        // Have to stop propagation here
        e.stopPropagation();
        window.jQuery("#single-input").clockpicker('show')
            .clockpicker('toggleView', 'minutes');
    });


    //Date range picker
    window.jQuery('.input-daterange-datepicker').daterangepicker({
        buttonClasses: ['btn', 'btn-sm'],
        applyClass: 'btn-success',
        cancelClass: 'btn-secondary'
    });
    window.jQuery('.input-daterange-timepicker').daterangepicker({
        timePicker: true,
        timePickerIncrement: 30,
        locale: {
            format: 'MM/DD/YYYY h:mm A'
        },
        buttonClasses: ['btn', 'btn-sm'],
        applyClass: 'btn-success',
        cancelClass: 'btn-secondary'
    });
    window.jQuery('.input-limit-datepicker').daterangepicker({
        format: 'MM/DD/YYYY',
        minDate: '06/01/2015',
        maxDate: '06/30/2015',
        buttonClasses: ['btn', 'btn-sm'],
        applyClass: 'btn-success',
        cancelClass: 'btn-secondary',
        dateLimit: {
            days: 6
        }
    });

    window.jQuery('#reportrange span').html(window.moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + window.moment().format('MMMM D, YYYY'));

    window.jQuery('#reportrange').daterangepicker({
        format: 'MM/DD/YYYY',
        startDate: window.moment().subtract(29, 'days'),
        endDate: window.moment(),
        minDate: '01/01/2012',
        maxDate: '12/31/2015',
        dateLimit: {
            days: 60
        },
        showDropdowns: true,
        showWeekNumbers: true,
        timePicker: false,
        timePickerIncrement: 1,
        timePicker12Hour: true,
        ranges: {
            'Today': [window.moment(), window.moment()],
            'Yesterday': [window.moment().subtract(1, 'days'), window.moment().subtract(1, 'days')],
            'Last 7 Days': [window.moment().subtract(6, 'days'), window.moment()],
            'Last 30 Days': [window.moment().subtract(29, 'days'), window.moment()],
            'This Month': [window.moment().startOf('month'), window.moment().endOf('month')],
            'Last Month': [window.moment().subtract(1, 'month').startOf('month'), window.moment().subtract(1, 'month').endOf('month')]
        },
        opens: 'left',
        drops: 'down',
        buttonClasses: ['btn', 'btn-sm'],
        applyClass: 'btn-success',
        cancelClass: 'btn-secondary',
        separator: ' to ',
        locale: {
            applyLabel: 'Submit',
            cancelLabel: 'Cancel',
            fromLabel: 'From',
            toLabel: 'To',
            customRangeLabel: 'Custom',
            daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            firstDay: 1
        }
    }, function (start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
        window.jQuery('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    });

});