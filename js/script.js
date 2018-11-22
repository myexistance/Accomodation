//Date datepicker
$(function(){
    $('#startDate').datepicker();
    $('#endDate').datepicker();
  });

//Find the number of days between dates
function dateDiff() {

   var start  = $('#startDate').datepicker('getDate');
   var end = $('#endDate').datepicker('getDate');
   var days  = (end - start)/1000/60/60/24;
   alert(days);
   document.getElementById("noDays").innerHTML = days + " Days   > " ;
}

function noGuests() {
  var g = document.getElementById('noGuest').value;
  document.getElementById("numGuest").innerHTML = g + " Guest(s)  " ;
}
// Jumping between tabs in the modal
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
