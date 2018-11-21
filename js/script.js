//Date datepicker
$(function(){
    $('#startDate').datepicker();
    $('#endDate').datepicker();
  });

//submit.addEventListener('click',dateDiff);
// function dateDiff() {
//
//     var start  = $('#startDate').datepicker('getDate');
//    var end = $('#endDate').datepicker('getDate');
//    var days  = (end - start)/1000/60/60/24;
//    alert(days);
//    document.getElementById("noDays").innerHTML = days ;
// }
// $('#myTab a[href="#profile"]').tab('show') // Select tab by name
// $('#myTab li:first-child a').tab('show') // Select first tab
// $('#myTab li:last-child a').tab('show')
$(function () {
    $('#date a').click(function (e) {
        e.preventDefault();
        $('a[href="' + $(this).attr('href') + '"]').tab('show');
    })

    $('#guest a').click(function (e) {
        e.preventDefault();
        $('a[href="' + $(this).attr('href') + '"]').tab('show');
    })

    $('#total a').click(function (e) {
        e.preventDefault();
        $('a[href="' + $(this).attr('href') + '"]').tab('show');
    })
});
