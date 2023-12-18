
/*
Template Name: Adminox - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Version: 2.0.0
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Work Orders init js
*/


$(document).ready(function () {

    $(".work-order").hide();
    
    // get id from querystring
    const orderId = $.urlParam('id');

    // set order id text in breadcrumb
    $('.workOrderId').text(orderId);
    
    // show the details div for the id passed
    $('#' + orderId).show();
});
