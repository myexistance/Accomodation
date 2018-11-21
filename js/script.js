//Date datepicker
$(function(){
    $('#startDate').datepicker();

    $('#endDate').datepicker();

});

//submit.addEventListener('click',dateDiff);
function dateDiff() {

    var start  = $('#startDate').datepicker('getDate');
   var end = $('#endDate').datepicker('getDate');
   var days  = (end - start)/1000/60/60/24;
   alert(days);
   document.getElementById("noDays").innerHTML = days ;
}
